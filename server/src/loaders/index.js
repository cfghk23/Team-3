import expressLoader from "./express.js";
import mongooseLoader from "./db.js";

export default async (expressApp) => {
  //try to create connection
  await mongooseLoader.getConnection();
  console.log("MongoDB Intialized");
  expressLoader(expressApp);
  console.log("Express initialized");
};
