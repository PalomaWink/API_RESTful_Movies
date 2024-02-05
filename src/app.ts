//ENV variables
require("dotenv").config();

//Configuracoes da aplicacao
import express from "express";
import config from "config";

//Rotas
import router from "./router";

// Conexão com o banco de dados
import db from "../config/db";

//Logger
import Logger from "../config/logger";

const app = express();

app.use(express.json())

app.use("/api/", router);

//app port
const port = config.get<number>("port")

app.listen(3000, async () => {
  await db();
  Logger.info(`Rodando na porta ${port}`);
  
})
