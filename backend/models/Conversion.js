import mongoose from "mongoose";

const conversionSchema = new mongoose.Schema({
  input: { x: Number, y: Number, z: Number },
  output: { x: Number, y: Number, z: Number },
  type: { type: String, enum: ["overworld", "nether"], required: true },
  createdAt: { type: Date, default: Date.now }
});

const Conversion = mongoose.model("Conversion", conversionSchema);
export default Conversion;
