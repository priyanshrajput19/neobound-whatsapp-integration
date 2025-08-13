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
  business_name: {
    type: String,
  },

  access_token: {
    type: String,
    required: true,
  },
});

export const InfoModel = mongoose.model("BusinessInfo", esResponseSchema);
