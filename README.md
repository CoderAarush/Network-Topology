                                                     Network Topology Project 
                                                        Aarush Agrawal
                                                                    
Preview of interface:

<img width="946" alt="image" src="https://github.com/user-attachments/assets/3b637962-7809-4052-a879-c532e30296f6" />

<img width="942" alt="image" src="https://github.com/user-attachments/assets/8e9eca67-2067-4945-a45b-72a9942389d2" />


1. Introduction
This project develops the topological arrangement of a hierarchial network using the yFiles platform. It is based on a sample network defined in a jsx file with devices and connections.

2. Methodology
It first traces the entire sample network using node by node processing and filters through a given asset dictionary in order to assosciate appropriate icons to the images. Furthermore the types are stored in a typescript enum file which are accessed throughout the project. The platform also uses Zustand to store global states which are appropriately utilised to specify graph parameters.These can be modified with the help of the general, edge and label settings provided in the sidebar with appropriate inputs.

3. Structure
The left side of the interface will feature the network structure and the right will contain the sidebar. The sidebar will have collapsible fields to allow a seamless user experience. Furthermore, the lower section of the sidebar also features the inventory. It contains a record of the all the various types of devices present: switches, fat switches, backhauls and load balancers with assosciated firewalls. The non-essential and removalbe devices can be modified and excluded from the network at the user's discretion. The interface will update accordingly.

4. Conclusion
This interface can be a powerful tool that can be used to visualize large enterprise networks and early problem detection. It uses innovative visualization and modification techniques based on newer platform variations. Note: The yFiles license for the yfile is a developers free trial license and is set to expire within fifty days. Users are recommended to purchase the software independently and replace the src/License.json file/
