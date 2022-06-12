import { setupServer } from "msw/node";
import { rest } from "msw";

const next = "https://picsum.photos/v2/list?page=2&limit=30",
      prev = "https://picsum.photos/v2/list?page=2&limit=30";

export const photos1 = [
  {
    id:           "0",
    author:       "Alejandro Escamilla",    
    width:        5616,
    height:       3744,    
    url:          "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5616/3744"
  },
  {
    id:           "1",
    author:       "Alejandro Escamilla",    
    width:        5616,
    height:       3744,    
    url:          "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5616/3744"
  },
  {
    id:           "10",
    author:       "Paul Jarvis",    
    width:        2500,
    height:       1667,    
    url:          "https://unsplash.com/photos/6J--NXulQCs",
    download_url: "https://picsum.photos/id/10/2500/1667"
  },
];

export const photos2 = [
  {
    id:           "100",
    author:       "Tina Rataj",
    width:        2500,
    height:       1656,
    url:          "https://unsplash.com/photos/pwaaqfoMibI",
    download_url: "https://picsum.photos/id/100/2500/1656"
  },
  {
    id:           "1000",
    author:       "Lukas Budimaier",
    width:        5626,
    height:       3635,
    url:          "https://unsplash.com/photos/6cY-FvMlmkQ",
    download_url: "https://picsum.photos/id/1000/5626/3635"
  },
  {
    id:           "1001",
    author:       "Danielle MacInnes",
    width:        5616,
    height:       3744,
    url:          "https://unsplash.com/photos/1DkWWN1dr-s",
    download_url: "https://picsum.photos/id/1001/5616/3744"
  },
];

const handlers = [
  rest.get("https://picsum.photos/v2/list", (req, res, ctx)=>{
    const page = req.url.searchParams.get("page");    
        
    const page1 = res(        
      ctx.set("link", "<https://picsum.photos/v2/list?page=2&limit=30>; rel=\"next\""),
      ctx.json(photos1)
    );
    
    const page2 = res(        
      ctx.set("link", "<https://picsum.photos/v2/list?page=2&limit=30>; rel=\"prev\""),
      ctx.json(photos2)
    );
    
    return page == "1" ? page1 : page2;
  }),
  rest.get("https://picsum.photos/id/:id/info", (req, res, ctx)=>{    
    return res(
      ctx.json({
        width:  1000,
        height: 1000,
      })
    );
  })
];

const server = setupServer(...handlers);
export default server;