import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {

    await mongoose.connect(dbUri)
    Logger.info("Conectado ao banco de dados");
  } catch(err) {
    Logger.error("Nao foi possivel conectar ao banco de dados: ", err);
    process.exit(1); // Encerra a aplicação, caso aconteca algum erro
  }
}

export default connect;