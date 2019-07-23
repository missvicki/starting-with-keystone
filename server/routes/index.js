import { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const router = Router();

const route = (req, res) => {
  return res.send("Api is working");
};

router.get("/", route);

const App = app => {
  app.use(cors());
  app.use("/", router);
  app.use(bodyParser({ limit: "150MB" }));
};

export default App;
