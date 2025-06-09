/*import { useEffect, useRef } from 'react'
import './App.css'
import Switch from './assets/Asset 11@2x (1).png'
import server from './assets/Internet Cloud (2).png'
import balancer from './assets/Asset 11@2x (5).png'
import networkData from './Network_data'
import { DeviceType } from './Enums/Enum'
import fat from './assets/Asset 11@2x (2).png'
import cloud from './assets/Internet Cloud (1).png'
import backhaul from './assets/Asset 11@2x (3).png'
import firewall from './assets/Red-4 1.png'
import useGlobalStore from './Global_states'
import {
  GraphComponent,
  GraphItemTypes,
  PolylineEdgeStyle,
  ImageNodeStyle,
  License,
  HierarchicalLayout,
  ViewportLimiter,
  GraphViewerInputMode,
  Rect,
  LayoutExecutor,
  ViewportLimitingPolicy,
} from '@yfiles/yfiles'
import license from './license.json'

License.value = license

function Network_Topology() {

  let aSwitch = useGlobalStore((state) => state.switchWanted)
  let Fat = useGlobalStore((state) => state.fatWanted)
  let Balancer = useGlobalStore((state) => state.balancerWanted)
  let Firewall = useGlobalStore((state) => state.firewallWanted)



  const node_dist = useGlobalStore((state) => state.node_dist)
  const layoutOrientation = useGlobalStore((state) => state.layout)
  const node_to_edge = useGlobalStore((state) => state.node_to_edge)
  const layer_to_layer = useGlobalStore((state) => state.layer_dist)
  
  const edge_dist = useGlobalStore((state) => state.edgeDistance)
  const stopDur = useGlobalStore((state) => state.stopDuration)
  const minFirst = useGlobalStore((state) => state.minFirstSeg)
  const minLast = useGlobalStore((state) => state.minLastSeg)

  
  const edgeType = useGlobalStore((state) => state.edgeLabelType)
  const nodeType = useGlobalStore((state) => state.nodeLabelType)

  const graphRef = useRef(null)
  const graphComponentRef = useRef(null)

  function evtHandler(graphInputMode){
      
      graphInputMode.addEventListener('query-item-tool-tip',(evt) => {
        
        const item = evt.item;
        if (item) {
          console.log(item)
          evt.toolTip = `
            <div style="padding: 8px; background: white; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0,0,0,0.2);">
              <strong>${item.$f.ip}</strong><br/>
              ID: ${item.$f.id}<br/>
              Type: ${item.$f.type}
            </div>
          `;
          evt.handled = true;
        }
     })
    }


  useEffect(() => {
    /*if (!graphRef.current || graphComponentRef.current) return

    const graphComponent = new GraphComponent(graphRef.current)
    graphComponentRef.current = graphComponent

    const inputMode = new GraphViewerInputMode({
      toolTipItems: GraphItemTypes.NODE,
      clickableItems: GraphItemTypes.NODE | GraphItemTypes.EDGE
    })
    graphComponent.inputMode = inputMode

    const graph = graphComponent.graph

    graph.clear();

    graphComponent.maximumZoom = 1.5
    graphComponent.minimumZoom = 0.7
      if (!graphRef.current) return;

      let graphComponent = graphComponentRef.current

      if (!graphComponent) {
        graphComponent = new GraphComponent(graphRef.current)
        graphComponentRef.current = graphComponent
      }

      const graph = graphComponent.graph
      graph.clear() // 🔁 Clear existing graph

      // Input mode and zoom settings
      const inputMode = new GraphViewerInputMode({
        toolTipItems: GraphItemTypes.NODE,
        clickableItems: GraphItemTypes.NODE | GraphItemTypes.EDGE,
      })
      graphComponent.inputMode = inputMode

      graphComponent.maximumZoom = 1.5
      graphComponent.minimumZoom = 0.7



    graph.edgeDefaults.style = new PolylineEdgeStyle({
      stroke: '2px grey',
      sourceArrow: 'none',
      targetArrow: 'none',
      smoothingLength: 10 // Smooth edges for better visuals
      
    })

    const iconMap = {
      [DeviceType.SWITCH]: Switch,
      [DeviceType.SERVER]: server,
      [DeviceType.LOAD_BALANCER]: balancer,
      [DeviceType.INTERNET]: cloud,
      [DeviceType.FIREWALL]: firewall,
      [DeviceType.BACKHAUL]: backhaul,
      [DeviceType.FAT_SWITCH]: fat
    }

    let val;

    // Add nodes with modern yFiles features
    /*networkData.nodes.forEach((element, index) => {
        const style = new ImageNodeStyle(iconMap[element.type])

        networkData.nodes.forEach((element, index) => {
            const style = new ImageNodeStyle(iconMap[element.type])
            let shouldRender = true

            switch (element.type) {
              case DeviceType.SWITCH:
                shouldRender = aSwitch
                val = 24
                break
              case DeviceType.FAT_SWITCH:
                shouldRender = Fat
                val = 29
                break
              case DeviceType.LOAD_BALANCER:
                shouldRender = Balancer
                val = 32
                break
              case DeviceType.FIREWALL:
                shouldRender = Firewall
                val = 39
                break
              default:
                val = 40
            }

            if (shouldRender) {
              graph.createNode({
                layout: [index * 10, 20, val, val],
                style,
                tag: element,
              })
            }
          })



        if(element.type == DeviceType.SWITCH && aSwitch){
            val = 24;
            const node = graph.createNode({
              layout: [index*10, 20, val, val], 
              style,
              tag: element,
            })
        }

        else if (element.type == DeviceType.FAT_SWITCH && Fat)
        {
          val = 29;
          const node = graph.createNode({
            layout: [index*10, 20, val, val], 
            style,
            tag: element,
          })
        }

        else if(element.type == DeviceType.LOAD_BALANCER && Balancer)
        {   val = 32;
            const node = graph.createNode({
              layout: [index*10, 20, val, val], 
              style,
              tag: element,
            })
        }
        else if(element.type == DeviceType.FIREWALL && Firewall)
        {   val = 39;
            const node = graph.createNode({
              layout: [index*10, 20, val, val], 
              style,
              tag: element,
            })
        }
        else
          { val = 40;
            const node = graph.createNode({
              layout: [index*10, 20, val, val], 
              style,
              tag: element,
            })
        }
      })
 
    // Add edges
    networkData.connections.forEach(connection => {
      const sourceNode = graph.nodes.find(node => node.tag.id === connection.source)
      const targetNode = graph.nodes.find(node => node.tag.id === connection.target)
      if (sourceNode && targetNode) {
        graph.createEdge({
          source: sourceNode,
          target: targetNode,
          style: new PolylineEdgeStyle({
            stroke: '2px grey',
            sourceArrow: 'none',
            targetArrow: 'none',
            smoothingLength: 10
          })
        })
      }
    })

    

    evtHandler(inputMode)

    // Viewport limiter to prevent upward scrolling
    const viewportLimiter = new ViewportLimiter()
    viewportLimiter.limitingPolicy = ViewportLimitingPolicy.STRICT
    viewportLimiter.limitingRect = new Rect(-Infinity, 0, Infinity, Infinity)
    graphComponent.viewportLimiter = viewportLimiter


    // Modern layout with animation
    const layout = new HierarchicalLayout({
      nodeDistance: node_dist,
      layoutOrientation: layoutOrientation,
      nodeToEdgeDistance: node_to_edge,
      minimumLayerDistance: layer_to_layer,
      edgeDistance: edge_dist,
      stopDuration: stopDur,
      defaultEdgeDescriptor: {
        minimumFirstSegmentLength: minFirst,
        minimumLastSegmentLength: minLast,
      },
      edgeLabelPlacement: edgeType,
      nodeLabelPlacement: nodeType,
      
    })

    // Use LayoutExecutor for smooth animated layout
    const layoutExecutor = new LayoutExecutor({
      graphComponent,
      layout,
    })

    // Adjust initial position and apply layout
    const restrictUpwardScroll = () => {
      const viewport = graphComponent.viewport
      const newY = Math.max(viewport.y, 0)
      if (newY !== viewport.y) {
        graphComponent.zoomToAnimated(new Rect(viewport.x, newY, viewport.width, viewport.height))
      }
    }


    // Apply layout with animation
    layoutExecutor.start().then(() => {
      restrictUpwardScroll()
      graphComponent.fitGraphBounds() // Fit with padding
    })

    // Clean up on unmount
    return () => {
      graphComponent.cleanUp()
      graphComponentRef.current = null
    }
  }, [node_dist, layoutOrientation, node_to_edge, layer_to_layer, edge_dist, stopDur, minFirst, minLast, aSwitch, Balancer, Firewall, Fat])

  return (
    <div
      className="graph-container"
      ref={graphRef}
      style={{ width: '700px', height: '900px', border: '5px solid #rgb(0, 0, 0)' }}
    />
  )
}

export default Network_Topology;*/

import { useEffect, useRef } from 'react'
import './App.css'
import Switch from './assets/Asset 11@2x (1).png'
import server from './assets/Internet Cloud (2).png'
import balancer from './assets/Asset 11@2x (5).png'
import networkData from './Network_data'
import { DeviceType } from './Enums/Enum'
import fat from './assets/Asset 11@2x (2).png'
import cloud from './assets/Internet Cloud (1).png'
import backhaul from './assets/Asset 11@2x (3).png'
import firewall from './assets/Red-4 1.png'
import useGlobalStore from './Global_states'
import {
  GraphComponent,
  GraphItemTypes,
  PolylineEdgeStyle,
  ImageNodeStyle,
  License,
  HierarchicalLayout,
  ViewportLimiter,
  GraphViewerInputMode,
  Rect,
  LayoutExecutor,
  ViewportLimitingPolicy
} from '@yfiles/yfiles'
import license from './license.json'

License.value = license

function Network_Topology() {
  const aSwitch = useGlobalStore(state => state.switchWanted)
  const Fat = useGlobalStore(state => state.fatWanted)
  const Balancer = useGlobalStore(state => state.balancerWanted)
  const Firewall = useGlobalStore(state => state.firewallWanted)

  const node_dist = useGlobalStore(state => state.node_dist)
  const layoutOrientation = useGlobalStore(state => state.layout)
  const node_to_edge = useGlobalStore(state => state.node_to_edge)
  const layer_to_layer = useGlobalStore(state => state.layer_dist)

  const edge_dist = useGlobalStore(state => state.edgeDistance)
  const stopDur = useGlobalStore(state => state.stopDuration)
  const minFirst = useGlobalStore(state => state.minFirstSeg)
  const minLast = useGlobalStore(state => state.minLastSeg)

  const edgeType = useGlobalStore(state => state.edgeLabelType)
  const nodeType = useGlobalStore(state => state.nodeLabelType)

  const graphRef = useRef(null)
  const graphComponentRef = useRef(null)

  function evtHandler(graphInputMode) {
    graphInputMode.addEventListener('query-item-tool-tip', evt => {
      const item = evt.item
      if (item?.tag) {
        evt.toolTip = `
          <div style="padding: 8px; background: white; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0,0,0,0.2);">
            <strong>${item.tag.ip}</strong><br/>
            ID: ${item.tag.id}<br/>
            Type: ${item.tag.type}
          </div>
        `
        evt.handled = true
      }
    })
  }

  useEffect(() => {
    if (!graphRef.current) return

    let graphComponent = graphComponentRef.current

    if (!graphComponent) {
      graphComponent = new GraphComponent(graphRef.current)
      graphComponentRef.current = graphComponent
    }

    const graph = graphComponent.graph
    graph.clear()

    // Setup viewer mode
    const inputMode = new GraphViewerInputMode({
      toolTipItems: GraphItemTypes.NODE,
      clickableItems: GraphItemTypes.NODE | GraphItemTypes.EDGE
    })
    graphComponent.inputMode = inputMode

    graphComponent.maximumZoom = 1.5
    graphComponent.minimumZoom = 0.7

    // Default edge style
    graph.edgeDefaults.style = new PolylineEdgeStyle({
      stroke: '2px grey',
      sourceArrow: 'none',
      targetArrow: 'none',
      smoothingLength: 10
    })

    const iconMap = {
      [DeviceType.SWITCH]: Switch,
      [DeviceType.SERVER]: server,
      [DeviceType.LOAD_BALANCER]: balancer,
      [DeviceType.INTERNET]: cloud,
      [DeviceType.FIREWALL]: firewall,
      [DeviceType.BACKHAUL]: backhaul,
      [DeviceType.FAT_SWITCH]: fat
    }

    // Create nodes conditionally
    networkData.nodes.forEach((element, index) => {
      const style = new ImageNodeStyle(iconMap[element.type])
      let shouldRender = true
      let size = 40

      switch (element.type) {
        case DeviceType.SWITCH:
          shouldRender = aSwitch
          size = 24
          break
        case DeviceType.FAT_SWITCH:
          shouldRender = Fat
          size = 29
          break
        case DeviceType.LOAD_BALANCER:
          shouldRender = Balancer
          size = 32
          break
        case DeviceType.FIREWALL:
          shouldRender = Firewall
          size = 39
          break
        default:
          size = 40
      }

      if (shouldRender) {
        graph.createNode({
          layout: [index * 10, 20, size, size],
          style,
          tag: element
        })
      }
    })

    // Create edges
    networkData.connections.forEach(connection => {
      const sourceNode = graph.nodes.find(n => n.tag.id === connection.source)
      const targetNode = graph.nodes.find(n => n.tag.id === connection.target)

      if (sourceNode && targetNode) {
        graph.createEdge(sourceNode, targetNode)
      }
    })

    // Tooltip handler
    evtHandler(inputMode)

    // Prevent scrolling above 0
    const viewportLimiter = new ViewportLimiter()
    viewportLimiter.limitingPolicy = ViewportLimitingPolicy.STRICT
    viewportLimiter.limitingRect = new Rect(-Infinity, 0, Infinity, Infinity)
    graphComponent.viewportLimiter = viewportLimiter

    // Layout config
    const layout = new HierarchicalLayout({
      nodeDistance: node_dist,
      layoutOrientation,
      nodeToEdgeDistance: node_to_edge,
      minimumLayerDistance: layer_to_layer,
      edgeDistance: edge_dist,
      stopDuration: stopDur,
      defaultEdgeDescriptor: {
        minimumFirstSegmentLength: minFirst,
        minimumLastSegmentLength: minLast
      },
      edgeLabelPlacement: edgeType,
      nodeLabelPlacement: nodeType
    })

    // Animate layout
    const layoutExecutor = new LayoutExecutor({
      graphComponent,
      layout
    })

    layoutExecutor.start().then(() => {
      const vp = graphComponent.viewport
      graphComponent.zoomToAnimated(new Rect(vp.x, Math.max(vp.y, 0), vp.width, vp.height))
      graphComponent.fitGraphBounds()
    })

    return () => {
      graphComponent.cleanUp()
      graphComponentRef.current = null
    }
  }, [
    aSwitch,
    Fat,
    Balancer,
    Firewall,
    node_dist,
    layoutOrientation,
    node_to_edge,
    layer_to_layer,
    edge_dist,
    stopDur,
    minFirst,
    minLast,
    edgeType,
    nodeType
  ])

  return (
    <div
      className="graph-container"
      ref={graphRef}
      style={{ width: '700px', height: '900px', border: '5px solid black' }}
    />
  )
}

export default Network_Topology
