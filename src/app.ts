import express from "express";
import config from "config";

import router from "./router";

const app = express();

app.use(express.json())

app.use("/api/", router);

//app port
const port = config.get<number>("port")

app.listen(3000, async () => {
  console.log(`Rodando na porta ${port}`);
  
})
