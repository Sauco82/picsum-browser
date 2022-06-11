import { setupServer } from "msw/node";
import { rest } from "msw";

const handlers = [
  rest.get("https://picsum.photos/v2/list", (req, res, ctx)=>{
    // req.url.searchParams <== params
    return res(
      ctx.json({})
    );
  })
];

const server = setupServer(...handlers);
export default server;