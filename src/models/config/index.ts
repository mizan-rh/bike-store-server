import "dotenv/config";

const ServerConfig = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
export default ServerConfig;
