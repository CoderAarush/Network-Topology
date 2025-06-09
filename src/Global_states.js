import { create } from 'zustand';

// Create the store
const useGlobalStore = create((set) => ({

  // Default values
  node_dist: 40,
  layout: 'top-to-bottom',
  node_to_edge: 14,
  layer_dist: 10,
  edgeDistance: 30,
  stopDuration: 5,
  minFirstSeg: 10,
  minLastSeg: 15,
  edgeLabelType: 'ignore',
  nodeLabelType: 'ignore',
  switchWanted: true,
  fatWanted: true,
  balancerWanted: true,
  backhaulWanted: true,
  firewallWanted: true,
  internetWanted: true,



  // Update values
  updateNodeDist: (newdist) => set((state) => ({ node_dist: newdist })),
  updateLayout: (newLayout) => set((state) => ({ layout: newLayout })),
  updateNodetoEdge: (newdist) => set((state) => ({ node_to_edge: newdist })),
  updateLayerDist: (newdist) => set((state) => ({ layer_dist: newdist })),

  updateEdgeDist: (newdist) => set((state) => ({ edgeDistance: newdist })),
  updateStopDur: (newdist) => set((state) => ({ stopDuration: newdist })),
  updateFirstSegment: (newdist) => set((state) => ({ minFirstSeg: newdist })),
  updateLastSegment: (newdist) => set((state) => ({ minLastSeg: newdist })),

  updateEdgeLabel: (newState) => ({edgeLabelType: newState}),
  updateNodeLabel: (newState) => ({nodeLabelType: newState}),

  updateSwitch: () => set((state) => ({switchWanted: !state.switchWanted})),
  updateFat: () => set((state) => ({fatWanted: !state.fatWanted})),
  updateBackhaul: () => set((state) => ({backhaulWanted: !state.backhaulWanted})),
  updateBalancer: () => set((state) => ({balancerWanted: !state.balancerWanted})),
  updateNet: () => set((state) => ({internetWanted: !state.internetWanted})),
  updateFirewall: () => set((state) => ({firewallWanted: !state.firewallWanted})),

}));

export default useGlobalStore;
