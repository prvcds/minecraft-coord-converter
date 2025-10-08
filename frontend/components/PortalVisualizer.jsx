function PortalVisualizer({ coords, result }) {
  if (!result) return null;

  return (
    <div className="visualizer">
      <h3>Portal Visualization</h3>
      <p>Overworld: ({coords.x}, {coords.y}, {coords.z})</p>
      <p>Nether: ({result.x}, {result.y}, {result.z})</p>
      {/* Future: canvas/SVG visualization */}
    </div>
  );
}

export default PortalVisualizer;
