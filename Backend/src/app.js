import express from "express";
import { connectDB } from "./config/database.js";
import { InfoModel } from "./models/esResponse.js";
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
  const { tempCode, businessData } = req.body;
  console.log(tempCode, businessData);
  res.status(200).json({ message: "Business data saved successfully" });
});

// app.post("/esResponse", async (req, res) => {
//   const url = "https://graph.facebook.com/v22.0/oauth/access_token";
//   const response = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//       client_id: "1456392682027447",
//       client_secret: "********************************",
//       grant_type: "authorization_code",
//       redirect_uri:
//         "https://developers.facebook.com/es/oauth/callback/?business_id=163827667799847&nonce=jhfjuZ5UFrKoojLFc8IP1lUOU8W0wPhr",
//     }),
//     headers: { "Content-Type": "application/json" },
//   });
//   const data = await response.json();
//   console.log(data);
// });
