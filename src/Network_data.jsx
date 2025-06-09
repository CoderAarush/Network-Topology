import { DeviceType, Status } from "./Enums/Enum";

//Sample network for topogrpahical mapping

const networkData = {
    nodes: [
        { id: 'backhaul', label: 'BACKHAUL', type: DeviceType.BACKHAUL, ip: '192.2.3.256', status: Status.EMPTY },
        { id: 'fat-switch-2', label: 'fat-switch-2', type: DeviceType.FAT_SWITCH, ip: '192.2.3.21', status: Status.WARNING },
        { id: 'fat-switch-1', label: 'fat-switch-1', type: DeviceType.FAT_SWITCH, ip: '192.2.3.23', status: Status.ACTIVE },
        { id: 'unknown', label: 'Unkown1', type: DeviceType.BACKHAUL, ip: '192.2.3.56', status: Status.EMPTY },
        { id: 'switch-1', label: 'switch-1', type: DeviceType.SWITCH, ip: '192.2.3.29', status: Status.WARNING },
        { id: 'switch-2', label: 'switch-2', type: DeviceType.SWITCH, ip: '192.2.3.266', status: Status.ACTIVE },
        { id: 'switch-4', label: 'switch-4', type: DeviceType.SWITCH, ip: '192.2.3.266', status: Status.WARNING },
        { id: 'switch-3', label: 'switch-3', type: DeviceType.SWITCH, ip: '192.2.3.266', status: Status.ACTIVE },
        { id: 'unknown2', label: 'Unkown2', type: DeviceType.FIREWALL, ip: '192.2.3.56', status: Status.EMPTY },
        { id: 'firewall-1', label: 'Firewall-1', type: DeviceType.FIREWALL, ip: '192.2.31.56', status: Status.WARNING },
        { id: 'firewall-2', label: 'Firewall-2', type: DeviceType.FIREWALL, ip: '192.89.3.56', status: Status.INACTIVE },
        
        { id: 'loadBalancer-1', label: 'LoadBalancer-1', type: DeviceType.LOAD_BALANCER, ip: '192.89.3.56', status: Status.INACTIVE },
        { id: 'loadBalancer-2', label: 'LoadBalancer-2', type: DeviceType.LOAD_BALANCER, ip: '192.89.3.56', status: Status.WARNING },
        { id: 'loadBalancer-3', label: 'LoadBalancer-3', type: DeviceType.LOAD_BALANCER, ip: '192.89.3.56', status: Status.ACTIVE },
        { id: 'loadBalancer-4', label: 'LoadBalancer-4', type: DeviceType.LOAD_BALANCER, ip: '192.89.3.56', status: Status.ACTIVE },
        
        // right side
        { id: 'fat-switch-3', label: 'fat-switch-3', type: DeviceType.FAT_SWITCH, ip: '192.2.3.21', status: Status.WARNING },
        { id: 'fat-switch-4', label: 'fat-switch-4', type: DeviceType.FAT_SWITCH, ip: '192.2.3.23', status: Status.ACTIVE },
        { id: 'switch-5', label: 'switch-5', type: DeviceType.SWITCH, ip: '192.2.3.266', status: Status.ACTIVE },
        { id: 'switch-6', label: 'switch-6', type: DeviceType.SWITCH, ip: '192.2.3.266', status: Status.ACTIVE },
        { id: 'switch-7', label: 'switch-7', type: DeviceType.SWITCH, ip: '192.2.3.26', status: Status.WARNING },
        { id: 'switch-8', label: 'switch-8', type: DeviceType.SWITCH, ip: '192.2.3.43', status: Status.WARNING },
        { id: 'switch-9', label: 'switch-9', type: DeviceType.SWITCH, ip: '192.2.3.32', status: Status.WARNING },
        { id: 'switch-10', label: 'switch-10', type: DeviceType.SWITCH, ip: '192.2.3.31', status: Status.WARNING },
        { id: 'unknown3', label: 'Unkown3', type: DeviceType.INTERNET, ip: '192.2.3.56', status: Status.EMPTY },
        { id: 'switch-11', label: 'switch-11', type: DeviceType.SWITCH, ip: '192.2.3.292', status: Status.WARNING },
        { id: 'switch-12', label: 'switch-12', type: DeviceType.SWITCH, ip: '192.2.3.293', status: Status.WARNING },
        { id: 'Internet', label: 'Internet', type: DeviceType.INTERNET, ip: '192.3.4.88', status: Status.EMPTY },
        { id: 'WAN', label: 'WAN', type: DeviceType.FAT_SWITCH, ip: '192.3.5.98', status: Status.EMPTY },
        { id: 'unknow4', label: 'Unkown4', type: DeviceType.INTERNET, ip: '192.2.3.86', status: Status.EMPTY },

    ],
    connections: [
        { source: 'backhaul', target: 'fat-switch-2', color: '#f5a623', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'backhaul', target: 'fat-switch-1', color: '#f5a623', dashed: false, label: '', status: Status.ACTIVE },
        { source: 'fat-switch-2', target: 'switch-3', color: '#000000', dashed: false, label: '100 Gb/s', status: Status.INACTIVE },
        { source: 'fat-switch-1', target: 'switch-2', color: '#000000', dashed: false, label: '', status: Status.ACTIVE },
        { source: 'fat-switch-2', target: 'switch-1', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'fat-switch-1', target: 'switch-4', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'fat-switch-1', target: 'unknown', color: '#D30000', dashed: false, label: '', status: Status.ACTIVE },
        { source: 'switch-1', target: 'unknown2', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'fat-switch-3', target: 'switch-5', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'fat-switch-4', target: 'switch-6', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'switch-5', target: 'unknown3', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'switch-5', target: 'switch-7', color: '#000000', dashed: false, label: '100 Gb/s', status: Status.INACTIVE },
        { source: 'switch-5', target: 'switch-8', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'switch-6', target: 'switch-9', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'switch-6', target: 'switch-10', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'Internet', target: 'fat-switch-3', color: '#724C9D', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'Internet', target: 'fat-switch-4', color: '#724C9D', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'WAN', target: 'fat-switch-3', color: '#A80097', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'WAN', target: 'fat-switch-4', color: '#A80097', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'fat-switch-2', target: 'switch-11', color: '#000000', dashed: false, label: '100 Gb/s', status: Status.INACTIVE },
        { source: 'fat-switch-2', target: 'switch-12', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'switch-12', target: 'unknow4', color: '#000000', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'fat-switch-2', target: 'G2', color: '#000000', dashed: false, label: '100 Gb/s', status: Status.INACTIVE },
        { source: 'unknown3', target: 'fat-switch-12', color: '#5FB4D6', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'firewall-2', target: 'fat-switch-4', color: '#5FB4D6', dashed: false, label: '', status: Status.INACTIVE },

        // MCLAG 
        { source: 'fat-switch-3', target: 'fat-switch-4', color: '#000000', dashed: true, label: 'MCLAG', status: Status.INACTIVE },
        { source: 'switch-7', target: 'switch-10', color: '#000000', dashed: true, label: 'MCLAG', status: Status.INACTIVE },
        { source: 'switch-8', target: 'switch-9', color: '#000000', dashed: true, label: 'MCLAG', status: Status.INACTIVE },
        { source: 'switch-1', target: 'switch-2', color: '#000000', dashed: true, label: 'MCLAG', status: Status.INACTIVE },
        { source: 'switch-3', target: 'switch-4', color: '#000000', dashed: true, label: 'MCLAG', status: Status.INACTIVE },
        { source: 'fat-switch-2', target: 'fat-switch-1', color: '#000000', dashed: true, label: 'MCLAG', status: Status.INACTIVE },
        { source: 'switch-5', target: 'switch-6', color: '#000000', dashed: true, label: 'MCLAG', status: Status.INACTIVE },

        // node to group
        { source: 'switch-5', target: 'G5', color: '#FF7ACA', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'switch-6', target: 'G5', color: '#FF7ACA', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'switch-6', target: 'G6', color: '#5FB4D6', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'switch-5', target: 'G6', color: '#5FB4D6', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'unknow4', target: 'G3', color: '#5FB4D6', dashed: false, label: '', status: Status.INACTIVE },
        { source: 'switch-12', target: 'G6', color: '#5FB4D6', dashed: false, label: '', status: Status.INACTIVE },
    ], 
    groups: [
        {
          id: 'G1',
          nodeIds: [
            'switch-1',
            'switch-2',
          ],
          label: 'Switches Group 1',
        },
        {
            id: 'G2',
            nodeIds: [
              'switch-3',
              'switch-4',
            ],
            label: 'Switches Group 2',
        },
        {
          id: 'G3',
          nodeIds: [
            'switch-7',
            'switch-10',
          ],
          label: 'Switches Group 3',
        },
        {
            id: 'G4',
            nodeIds: [
              'switch-9',
              'switch-8',
            ],
            label: 'Switches Group 4',
        },
        {
          id: 'G5',
          nodeIds: [
            'firewall-1',
            'firewall-2',
          ],
          label: 'Switches Group 5',
        },
        {
          id: 'G6',
          nodeIds: [
            'loadBalancer-1',
            'loadBalancer-2',
            'loadBalancer-3',
            'loadBalancer-4'
          ],
          label: 'Switches Group 6',
        },
      ],    
};

export default networkData;