import morgan, {StreamOptions} from "morgan";
import config from "config";
import Logger from "../../config/logger";

// Estou logando as mensagens http, com base no que foi definido no arquivo Logger
// e usando o winston para logar as mensagens
const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

// Para de exibir as mensagens http, quando o ambiente for diferente de development
// Isso é feito para não poluir o console com mensagens desnecessárias
// e para nao consumir tanto de processamento
const skip = () => {
  const env = config.get<string>("env") || "development";
  return env !== "development";
}

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;