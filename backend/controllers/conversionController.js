import Conversion from "../models/Conversion.js";

// POST /api/convert
export const convertCoords = async (req, res) => {
  try {
    const { x, y, z, type } = req.body;
    let newX = x, newZ = z;

    if (type === "overworld") {
      newX = x / 8; newZ = z / 8;
    } else if (type === "nether") {
      newX = x * 8; newZ = z * 8;
    }

    const result = { x: newX, y, z: newZ };
    const conversion = await Conversion.create({
      input: { x, y, z },
      output: result,
      type
    });

    res.json(conversion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/history
export const getHistory = async (req, res) => {
  try {
    const history = await Conversion.find().sort({ createdAt: -1 }).limit(10);
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
