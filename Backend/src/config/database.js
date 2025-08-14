import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Priyansh:neoubound.ai@neoboundai.tdlnwab.mongodb.net/neobound"
  );
};
