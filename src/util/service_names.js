export const service_wallet = 'flora_wallet';
export const service_full_node = 'flora_full_node';
export const service_farmer = 'flora_farmer';
export const service_harvester = 'flora_harvester';
export const service_simulator = 'flora_full_node_simulator';
export const service_daemon = 'daemon';
export const service_plotter = 'flora plots create';

// Corresponds with outbound_message.py NodeTypes
export const service_connection_types = {
  1: 'Full Node',
  2: 'Harvester',
  3: 'Farmer',
  4: 'Timelord',
  5: 'Introducer',
  6: 'Wallet',
  7: 'Plotter',
};
