import mongoose, { mongo } from "mongoose";

const esResponseSchema = new mongoose.Schema({
  waba_id: {
    type: String,
  },
  phone_number_id: {
    type: String,
  },
  business_id: {
    type: String,
  },
  access_token: {
    type: String,
    required: true,
  },
  business_name: {
    type: String,
  },
  phone_number: {
    type: String,
  },
});

export const InfoModel = mongoose.model("BusinessInfo", esResponseSchema);
