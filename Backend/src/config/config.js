import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  mongo_uri: process.env.MONGO_URI,
};
