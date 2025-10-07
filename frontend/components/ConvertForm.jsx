import { useState } from "react";
import { convertCoords } from "../services/api.js";

function ConvertForm({ onConvert }) {
  const [coords, setCoords] = useState({ x: 0, y: 64, z: 0 });
  const [type, setType] = useState("overworld");

  const handleChange = (e) => {
    setCoords({ ...coords, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await convertCoords({ ...coords, type });
    onConvert(data.output);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="inputs">
        <input name="x" type="number" value={coords.x} onChange={handleChange} placeholder="X" />
        <input name="y" type="number" value={coords.y} onChange={handleChange} placeholder="Y" />
        <input name="z" type="number" value={coords.z} onChange={handleChange} placeholder="Z" />
      </div>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="overworld">Overworld → Nether</option>
        <option value="nether">Nether → Overworld</option>
      </select>

      <button type="submit">Convert</button>
    </form>
  );
}

export default ConvertForm;
