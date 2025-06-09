import { useState } from "react";
import useGlobalStore from "./Global_states";
import networkData from "./Network_data";
import { DeviceType} from "./Enums/Enum";

function Sidebar() {
  let aSwitch = useGlobalStore((state) => state.switchWanted)
  let Fat = useGlobalStore((state) => state.fatWanted)
  let Balancer = useGlobalStore((state) => state.balancerWanted)
  let Firewall = useGlobalStore((state) => state.firewallWanted)


  const [activeSection, setActiveSection] = useState(null); // Track the active section
  const updateNodeDist = useGlobalStore((state) => state.updateNodeDist);
  const node_dist = useGlobalStore((state) => state.node_dist);
  const arrangement = useGlobalStore((state) => state.layout);
  const updateArrangement = useGlobalStore((state) => state.updateLayout);
  const node_to_edge = useGlobalStore((state) => state.node_to_edge);
  const updateNodetoEdge = useGlobalStore((state) => state.updateNodetoEdge);
  const layer_dist = useGlobalStore((state) => state.layer_dist);
  const updateLayerDist = useGlobalStore((state) => state.updateLayerDist);

  const edge_dist = useGlobalStore((state) => state.edgeDistance)
  const stopDur = useGlobalStore((state) => state.stopDuration)
  const minFirst = useGlobalStore((state) => state.minFirstSeg)
  const minLast = useGlobalStore((state) => state.minLastSeg)
  const update_edge_dist = useGlobalStore((state) => state.updateEdgeDist)
  const update_stopDur = useGlobalStore((state) => state.updateStopDur)
  const update_minFirst = useGlobalStore((state) => state.updateFirstSegment)
  const update_minLast = useGlobalStore((state) => state.updateLastSegment)

  const edgeType = useGlobalStore((state) => state.edgeLabelType);
  const nodeType = useGlobalStore((state) => state.nodeLabelType);

  const updateEdgeType = useGlobalStore((state) => state.updateEdgeLabel);
  const updateNodeType = useGlobalStore((state) => state.updateNodeLabel);

  let numSwitches = 0;
  let numFatSwitches = 0;
  let numInternetconnections = 0;
  let numBackhauls = 0;
  let numLoadBalancers = 0;
  let numFirewalls = 0;
   
  const updateSwitch = useGlobalStore((state) => state.updateSwitch)
  const updateFat = useGlobalStore((state) => state.updateFat)
  const updateBalancer = useGlobalStore((state) => state.updateBalancer)
  const updateFirewall = useGlobalStore((state) => state.updateFirewall)

  networkData.nodes.forEach((node) => {
    if(node.type === DeviceType.BACKHAUL)
        numBackhauls++;
    else if (node.type === DeviceType.SWITCH)
        numSwitches++;
    else if(node.type === DeviceType.FAT_SWITCH)
        numFatSwitches++;
    else if(node.type === DeviceType.INTERNET)
        numInternetconnections++;
    else if(node.type== DeviceType.LOAD_BALANCER)
        numLoadBalancers++;
    else
        numFirewalls++;
  })

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const selectedLayout = e.target.elements.layout.value; // Get the selected radio button value
    updateArrangement(selectedLayout); // Update the store with the selected layout
  };

  const handleSubmit1 = (e) => {
    e.preventDefault(); // Prevent default form submission
    const selectedType = e.target.elements.placement.value; // Get the selected radio button value
    updateEdgeType(selectedType); // Update the store with the selected layout
  };

  const handleSubmit2 = (e) => {
    e.preventDefault(); // Prevent default form submission
    const selectedType = e.target.elements.placement.value; // Get the selected radio button value
    updateNodeType(selectedType); // Update the store with the selected layout
  };

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null); // Close section if it's already open
    } else {
      setActiveSection(section); // Open the clicked section
    }
  };

  return (
    <div style={{border: "2px solid", width: "500px"}}>
    <div style={{marginLeft: "5%"}}>
      <h3 style={{ color: "black", marginLeft: "0%" }}>GENERAL SETTINGS</h3>
      <button
        onClick={() => toggleSection("general")}
        style={{ marginLeft: "15%", marginBottom: "10px", fontSize: "1rem" }}
      >
        {activeSection === "general" ? "Hide" : "Show"} Settings
      </button>

      {activeSection === "general" && (
        <>
                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current Node to Node distance: {node_dist}
                </h4>

                <label style={{ marginLeft: "10%" }}>Set distance:</label>
                <input
                type="range"
                style={{ marginLeft: "5%", color: "black" }}
                min="0"
                max="50"
                value={node_dist}
                onChange={(e) => updateNodeDist(Number(e.target.value))}
                />
                <br />
                <br />

                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current arrangement: {arrangement}
                </h4>

                <label style={{ color: "black", marginLeft: "14%" }}>Set arrangement</label>

                <form onSubmit={handleSubmit} style={{ color: "black", marginLeft: "28%" }}>
                <input
                    type="radio"
                    name="layout"
                    value="top-to-bottom"
                    defaultChecked={arrangement === "top-to-bottom"}
                />
                <label>Top - Bottom</label>
                <br />

                <input type="radio" name="layout" value="left-to-right" />
                <label>Left - Right</label>
                <br />

                <input type="radio" name="layout" value="bottom-to-top" />
                <label>Bottom - Top</label>
                <br />

                <input type="radio" name="layout" value="right-to-left" />
                <label>Right - Left</label>
                <br />
                <br />

                <input
                    type="submit"
                    value="Submit"
                    style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "8px",
                    width: "100px",
                    marginLeft: "3.4%",
                    }}
                />
                </form>

                <br />
                <br />

                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current Node to Edge distance: {node_to_edge}
                </h4>

                <label style={{ marginLeft: "15%" }}>Update:</label>
                <input
                type="range"
                min="0"
                max="50"
                onChange={(e) => updateNodetoEdge(Number(e.target.value))}
                style={{ marginLeft: "5%" }}
                />

                <br />
                <br />

                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current Layer to Layer distance: {layer_dist}
                </h4>

                <label style={{ marginLeft: "20%" }}>Update:</label>
                <input
                type="range"
                min="0"
                max="50"
                onChange={(e) => updateLayerDist(Number(e.target.value))}
                style={{ marginLeft: "5%" }}
                />
            </>
     )}

      <hr />
      <h3 style={{ color: "black", marginLeft: "0%" }}>EDGE SETTINGS</h3>
      <button
        onClick={() => toggleSection("edge")}
        style={{ marginLeft: "15%", marginBottom: "10px", fontSize: "1rem" }}
      >
        {activeSection === "edge" ? "Hide" : "Show"} Settings
      </button>

      {activeSection === "edge" && (
        <>
                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current Edge distance: {edge_dist}
                </h4>

                <label style={{ marginLeft: "10%" }}>Set distance:</label>
                <input
                type="range"
                style={{ marginLeft: "5%", color: "black" }}
                min="0"
                max="50"
                value={edge_dist}
                onChange={(e) => update_edge_dist(Number(e.target.value))}
                />
                <br />
                <br />

                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current Stop Duration: {stopDur}
                </h4>

                <label style={{ marginLeft: "15%" }}>Set stop duration:</label>
                <input
                type="range"
                style={{ marginLeft: "35%", color: "black" }}
                min="0"
                max="50"
                value={stopDur}
                onChange={(e) => update_stopDur(Number(e.target.value))}
                />
                <br />
                <br />
                
                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current Minimum First Segment Length : {minFirst}
                </h4>

                <label style={{ marginLeft: "15%" }}>Update:</label>
                <input
                type="range"
                min="0"
                max="50"
                value= {minFirst}
                onChange={(e) => update_minFirst(Number(e.target.value))}
                style={{ marginLeft: "5%" }}
                />

                <br />
                <br />

                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current Minimum Last Segment Length {minLast}
                </h4>

                <label style={{ marginLeft: "15%" }}>Update:</label>
                <input
                type="range"
                min="0"
                max="50"
                value={minLast}
                onChange={(e) => update_minLast(Number(e.target.value))}
                style={{ marginLeft: "5%" }}
                />
            </>
        )}
      <hr />
      <h3 style={{ color: "black", marginLeft: "0%" }}>LABEL SETTINGS</h3>
      <button
        onClick={() => toggleSection("label")}
        style={{ marginLeft: "15%", marginBottom: "10px", fontSize: "1rem" }}
      >
        {activeSection === "label" ? "Hide" : "Show"} Settings
      </button>

      {activeSection === "label" && (
        <>
                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current edge label placement: {edgeType}
                </h4>

                <label style={{ color: "black", marginLeft: "14%" }}>Set placement</label>

                <form onSubmit={handleSubmit1} style={{ color: "black", marginLeft: "28%" }}>
                <input
                    type="radio"
                    name="placement"
                    value="ignore"
                    defaultChecked={arrangement === "ignore"}
                />
                <label>Ignore</label>
                <br />

                <input type="radio" name="placement" value="consider" />
                <label>consider</label>
                <br />

                <input type="radio" name="placement" value="generic" />
                <label>generic</label>
                <br />

                <input
                    type="submit"
                    value="Submit"
                    style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "8px",
                    width: "100px",
                    marginLeft: "3.4%",
                    }}
                />
                </form>

                <br />
                <br />

                
                <h4
                style={{
                    color: "black",
                    marginLeft: "25%",
                    marginBottom: "10%",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                }}
                >
                Current node label placement: {nodeType}
                </h4>

                <label style={{ color: "black", marginLeft: "14%" }}>Set placement</label>

                <form onSubmit={handleSubmit2} style={{ color: "black", marginLeft: "28%" }}>
                <input
                    type="radio"
                    name="placement"
                    value="ignore"
                    defaultChecked={arrangement === "ignore"}
                />
                <label>Ignore</label>
                <br />

                <input type="radio" name="placement" value="consider" />
                <label>consider</label>
                <br />

                <input type="radio" name="placement" value="generic" />
                <label>generic</label>
                <br />

                <input
                    type="submit"
                    value="Submit"
                    style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "8px",
                    width: "100px",
                    marginLeft: "3.4%",
                    }}
                />
                </form>

                <br />
                <br />

                
            </>
    )}

    <h3 style={{ marginLeft: 0, color: "black" }}>Inventory</h3>
    <hr/>

    <div style={{ marginLeft: 0, color: "black", padding: "10px 0" }}>
      {/* Switches */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <h4 style={{ margin: 0, marginRight: "10px", minWidth: "200px" }}>
          Switches: {numSwitches}
        </h4>
        <input type="checkbox" onChange={updateSwitch} />
        <span style={{ marginLeft: "10px" }}>{aSwitch}</span>
      </div>

      {/* Fat Switches */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <h4 style={{ margin: 0, marginRight: "10px", minWidth: "200px" }}>
          Fat Switches: {numFatSwitches}
        </h4>
        <input type="checkbox" onChange={updateFat} />
      </div>

      {/* Backhauls */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <h4 style={{ margin: 0, marginRight: "10px", minWidth: "200px" }}>
          Backhauls: {numBackhauls}
        </h4>
      </div>

      {/* Internet Connections */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <h4 style={{ margin: 0, marginRight: "10px", minWidth: "200px" }}>
          Internet Connections: {numInternetconnections}
        </h4>
      </div>

      {/* Load Balancers */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <h4 style={{ margin: 0, marginRight: "10px", minWidth: "200px" }}>
          Load Balancers: {numLoadBalancers}
        </h4>
        <input type="checkbox" onChange={updateBalancer} />
      </div>

      {/* Firewalls */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <h4 style={{ margin: 0, marginRight: "10px", minWidth: "200px" }}>
          Firewalls: {numFirewalls}
        </h4>
        <input type="checkbox" onChange={updateFirewall} />
      </div>
    </div>


    </div>
    </div>
  );
}

export default Sidebar;
