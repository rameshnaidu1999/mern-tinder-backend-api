import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: String,
  imageurl: String,
});

export default mongoose.model("cards", cardSchema);
