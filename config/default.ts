const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.vv39m7g.mongodb.net/?retryWrites=true&w=majority`,
  env: process.env.LOGGER_ENV,
};