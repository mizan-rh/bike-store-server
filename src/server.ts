import mongoose from "mongoose";
import app from "./app";
import ServerConfig from "./models/config";

async function main() {
  try {
    await mongoose.connect(ServerConfig.database_url as string);

    app.listen(ServerConfig.port, () => {
      console.log(`Example app listening on port ${ServerConfig.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
