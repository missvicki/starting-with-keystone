import { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import authEndpoint from "./endpoints/auth";

const router = Router();

const route = (req, res) => {
  return res.send("Api is working");
};

export const baseUrl = 'api/v1';

router.get("/", route);

const App = app => {
  app.use(cors());
  app.use("/", router);
  app.use(bodyParser({ limit: "150MB" }));
  app.use(`/${baseUrl}/auth`, authEndpoint);
};

export default App;
