import { InfoModel } from "../models/esResponse.js";
import { getAccessToken, fetchBusinessName, fetchMessageTemplates } from "../services/facebookService.js";

export const saveBusinessData = async (req, res) => {
  try {
    const { tempCode, businessData } = req.body;
    console.log("Recieved data :", tempCode, businessData);

    const accessToken = await getAccessToken(tempCode, businessData);
    const businessName = await fetchBusinessName(accessToken, businessData);
    console.log("Business detail :", businessName);

    // save access token to database
    const newInfo = new InfoModel({
      waba_id: businessData.waba_id,
      phone_number_id: businessData.phone_number_id,
      business_id: businessData.business_id,
      access_token: accessToken, //exchanged token
      business_name: businessName.name,
    });
    await newInfo.save();

    res.status(200).json({
      message: "Business data saved successfully",
      business_name: businessName.name,
      business_id: businessData.business_id,
      waba_id: businessData.waba_id,
      phone_number_id: businessData.phone_number_id,
    });
  } catch (error) {
    console.log("Error saving business data", error);
    res.status(500).json({ message: "Error saving business data" });
  }
};

export const getBusinessData = async (req, res) => {
  try {
    const businessData = await InfoModel.find({}).select("-access_token");
    console.log("businessData", businessData);
    res.status(200).json(businessData);
  } catch (error) {
    console.log("Error fetching business data", error);
    res.status(500).json({ message: "Error fetching business data" });
  }
};

export const getMessageTemplates = async (req, res) => {
  try {
    const { waba_id } = req.query;

    const document = await InfoModel.findOne({ waba_id: waba_id });
    if (!document) {
      res.status(404).json({ message: "Business data not found" });
      return;
    }

    const data = await fetchMessageTemplates(waba_id, document.access_token);
    res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching message templates", error);
    res.status(500).json({ message: "Error fetching message templates" });
  }
};
