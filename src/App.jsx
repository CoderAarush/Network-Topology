import Network_Topology from './Network_Topology';
import Sidebar from './Sidebar';
import './App.css'; // Make sure this includes your flex styling

function App() {
  return (
    <div className="app-container">
      <Network_Topology />
      <Sidebar />
    </div>
  );
}

export default App;
