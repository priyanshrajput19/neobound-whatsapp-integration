import { InfoModel } from "../models/esResponse.js";
import { fetchAccessToken, fetchBusinessName, fetchMessageTemplates, createTemplate, fetchTemplatesLibrary, fetchPhoneNumber } from "../services/facebookService.js";

export const saveBusinessData = async (req, res) => {
  try {
    const { tempCode, businessData } = req.body;
    console.log("Recieved data :", tempCode, businessData);

    const accessToken = await fetchAccessToken(tempCode, businessData);
    const businessName = await fetchBusinessName(accessToken, businessData);
    const phoneNumber = await fetchPhoneNumber(businessData.waba_id, accessToken);
    console.log("Business detail :", businessName);
    console.log("Phone number :", phoneNumber);

    // save access token to database
    const newInfo = new InfoModel({
      waba_id: businessData.waba_id,
      phone_number_id: businessData.phone_number_id,
      business_id: businessData.business_id,
      access_token: accessToken, //exchanged token
      business_name: businessName.name,
      phone_number: phoneNumber.data[0].display_phone_number,
    });
    await newInfo.save();

    res.status(200).json({
      message: "Business data saved successfully",
      business_name: businessName.name,
      business_id: businessData.business_id,
      waba_id: businessData.waba_id,
      phone_number_id: businessData.phone_number_id,
      phone_number: phoneNumber.data[0].display_phone_number,
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

export const makeTemplate = async (req, res) => {
  const { waba_id, name, language, category, library_template_name, library_template_button_inputs } = req.body;

  const document = await InfoModel.findOne({ waba_id: waba_id });
  if (!document) {
    res.status(404).json({ message: "Business data not found" });
    return;
  }

  const data = await createTemplate(waba_id, name, language, category, library_template_name, library_template_button_inputs, document.access_token);
  res.status(200).json(data);
};

export const getTemplatesLibrary = async (req, res) => {
  const { waba_id } = req.query;

  const document = await InfoModel.findOne({ waba_id: waba_id });
  if (!document) {
    res.status(404).json({ message: "Business data not found" });
    return;
  }
  const response = await fetchTemplatesLibrary(document.access_token);
  res.status(200).json(response);
};

export const getBusinessPhoneNumber = async (req, res) => {
  const { waba_id } = req.query;
  const document = await InfoModel.findOne({ waba_id: waba_id });
  if (!document) {
    res.status(404).json({ message: "Business data not found" });
    return;
  }
  const response = await fetchPhoneNumber(document.waba_id, document.access_token);
  console.log("Phone number :", response);
  res.status(200).json(response);
};

export const createCustomTemplate = async (req, res) => {
  try {
    const templateData = req.body;

    const document = await InfoModel.findOne({ waba_id: templateData.waba_id });
    if (!document) {
      res.status(404).json({ message: "Business not found" });
      return;
    }
    const response = await createCustomTemplate(document.access_token, templateData);

    console.log("Received template data from frontend:", JSON.stringify(templateData, null, 2));
    res.status(200).json({ message: "Template data received successfully", data: templateData });
  } catch (error) {
    console.log("Error in createCustomTemplate:", error);
    res.status(500).json({ message: "Error processing template data" });
  }
};
