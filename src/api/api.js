import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function parseLinkHeaders(linkHeaders){
  if (!linkHeaders) throw `${linkHeaders} is an unvalid link header`;

  const links = linkHeaders.split(",").map( link => link.split(";"));
        
  return links.reduce( (acc, [ url, ref ]) => {
    url = url.replaceAll(/<|>/g,"");
    ref = ref.replaceAll(/ rel="|"/g,"");
    acc[ref] = url;
    return acc;
  },{});
}

export const api = createApi({
  reducerPath: "api",
  baseQuery:   fetchBaseQuery({baseUrl: "https://picsum.photos/"}),
  endpoints:   builder => ({
    getPhotos: builder.query({
      query:             ({page, limit}) => `/v2/list?page=${page}&limit=${limit}`,
      transformResponse: (response, meta) => {
        const pagination = parseLinkHeaders(meta?.response?.headers?.get("Link"));
        
        return {
          photos: response,
          pagination
        };
      }
    }),
    // getPhoto: builder.query(),
  })
});

export const { useGetPhotosQuery } = api;