import { createElysia } from "@utils/createElysia";

import { TikApiController } from "./tikapi/tikapi.controller";

export const apiRoutes = createElysia();

apiRoutes.use(TikApiController);
