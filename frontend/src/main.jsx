import { useState, useEffect } from "react";
import ConvertForm from "./components/ConvertForm.jsx";
import HistoryList from "./components/HistoryList.jsx";
import PortalVisualizer from "./components/PortalVisualizer.jsx";
import { getHistory } from "./services/api.js";
import "./styles/app.css";

function App() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [lastInput, setLastInput] = useState(null);

  const fetchHistory = async () => {
    const { data } = await getHistory();
    setHistory(data);
  };

  const handleConvert = (output) => {
    setResult(output);
    fetchHistory();
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="app">
      <h1>Minecraft Coord Converter</h1>
      <ConvertForm onConvert={(res) => { setResult(res); fetchHistory(); }} />
      {result && <p>Converted: X={result.x}, Y={result.y}, Z={result.z}</p>}
      <PortalVisualizer coords={lastInput} result={result} />
      <HistoryList history={history} />
    </div>
  );
}

export default App;
