import { isAuthenticated } from "@auth/guards/authenticated.guard";
import { APIResponse } from "@typesDef/api";
import { IFeed } from "@typesDef/feed";
import { createElysia } from "@utils/createElysia";

import { TikApiServices } from "./tikapi.services";

const tikApiServices = new TikApiServices();
export const TikApiController = createElysia({ prefix: "/tikapi" }).guard(
  {
    async beforeHandle({ set, jwtAccess, cookie }) {
      const isAuth = await isAuthenticated(jwtAccess, cookie);

      if (!isAuth.success) {
        set.status = 401;
        return {
          success: false,
          message: isAuth.message,
          errors: isAuth.errors,
        };
      }
    },
  },
  (app) =>
    app.get("/feeds", async (): Promise<APIResponse<IFeed | undefined>> => {
      console.log("@GET /tikapi/feed");
      const feed = await tikApiServices.getFeeds();

      return {
        success: true,
        data: feed,
      };
    }),
);
