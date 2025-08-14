import express from "express";
import { connectDB } from "./config/database.js";
import { InfoModel } from "./models/esResponse.js";
import dotenv from "dotenv";
dotenv.config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const app = express();
const port = 3000;

// CORS middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("Database cannot be connected", err));

app.post("/businessData", async (req, res) => {
  try {
    const { tempCode, businessData } = req.body;
    console.log("Recieved data :", tempCode, businessData);
    const accessToken = await getAccessToken(tempCode, businessData);
    // save access token to database
    const newInfo = new InfoModel({
      waba_id: businessData.waba_id,
      phone_number_id: businessData.phone_number_id,
      business_id: businessData.business_id,
      access_token: accessToken,
    });
    await newInfo.save();

    res.status(200).json({ message: "Business data saved successfully" });
  } catch (error) {
    console.log("Error saving business data", error);
    res.status(500).json({ message: "Error saving business data" });
  }
});

const getAccessToken = async (tempCode, businessData) => {
  const url = "https://graph.facebook.com/v22.0/oauth/access_token";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      client_id: client_id,
      client_secret: client_secret,
      code: tempCode,
      grant_type: "authorization_code",
    }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  console.log(data);
  return data.access_token;
};
