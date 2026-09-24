let nextNodeID = 0;

export function createNodeID(): string {
  // These IDs only identify in-memory layout nodes; LAN HTTP may lack randomUUID.
  return globalThis.crypto?.randomUUID?.() ?? `layout-node-${++nextNodeID}`;
}
