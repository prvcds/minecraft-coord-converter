function HistoryList({ history }) {
  return (
    <div className="history">
      <h2>Recent Conversions</h2>
      {history.length === 0 ? (
        <p>No conversions yet.</p>
      ) : (
        <ul>
          {history.map((h) => (
            <li key={h._id}>
              {h.type.toUpperCase()}: ({h.input.x},{h.input.y},{h.input.z}) → ({h.output.x},{h.output.y},{h.output.z})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoryList;
