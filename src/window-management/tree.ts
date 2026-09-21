import type {
  LayoutTree,
  NodeID,
  AppWindow,
  WindowNode,
  ContainerNode,
} from "../context/types";

interface InsertNodeArgs {
  tree: LayoutTree;
  rootID: NodeID | null;
  parentID: NodeID;
  window: AppWindow;
}

interface TreeResult {
  tree: LayoutTree;
  rootID: NodeID | null;
}
export const insertNode = ({
  tree,
  rootID,
  parentID,
  window,
}: InsertNodeArgs): TreeResult => {
  // The tree is empty
  if (rootID === null) {
    rootID = window.id;
    return {
      tree: {
        [window.id]: getNewWindowNode(window, null),
      },
      rootID,
    };
  }

  let parent = tree[parentID];

  // this focused node does not exsit
  if (parent == null) {
    console.error(`Window ${parentID} does not exist.`);
    return;
  }

  let grandParent = tree[parent.parent];

  // create new container
  const newContainerID = crypto.randomUUID();
  const newContainer: ContainerNode = {
    id: newContainerID,
    nodeType: "container",
    parent: grandParent != null ? grandParent.id : null,
    children: [parent.id, window.id],
  };

  // New container is the new root
  if (!grandParent) rootID = newContainerID;
  // make
  else {
    const gp = grandParent as ContainerNode;
    const newChildren = gp.children.map((child) => {
      if (child == parent.id) return newContainer.id;
      return child;
    }) as [NodeID, NodeID];
    tree = {
      ...tree,
      [gp.id]: {
        ...gp,
        children: newChildren,
      },
    };
  }

  // Update tree
  tree = {
    ...tree,
    [newContainer.id]: newContainer,
    [parentID]: {
      ...tree[parentID],
      parent: newContainer.id,
    },
    [window.id]: getNewWindowNode(window, newContainer.id),
  };

  return {
    tree,
    rootID,
  };
};

const getNewWindowNode = (
  window: AppWindow,
  parent: NodeID | null,
): WindowNode => {
  return {
    id: window.id,
    nodeType: "window",
    parent: parent,
    windowType: window.type,
  };
};

export const getNewFocusID = (
  tree: LayoutTree,
  windowToRemoveID: NodeID,
): NodeID | null => {
  if (Object.keys(tree).length <= 1) return null;

  const parent = tree[tree[windowToRemoveID].parent] as ContainerNode;
  const sibling = parent.children.find((id) => id != windowToRemoveID);

  return sibling;
};

interface RemoveWindowArgs {
  tree: LayoutTree;
  rootID: NodeID | null;
  windowID: NodeID;
}

export const removeWindow = ({
  tree,
  rootID,
  windowID,
}: RemoveWindowArgs): TreeResult => {
  const node = tree[windowID];

  // The window to remove does not exist
  if (!node) {
    console.error(`Error at removeWindow: ${windowID} does not exist`);
    return {
      tree,
      rootID,
    };
  }

  // This is already the root window
  if (rootID === windowID) {
    const newTree = { ...tree };

    delete newTree[windowID];
    rootID = null;

    return {
      tree: newTree,
      rootID,
    };
  }

  const parent = tree[node.parent as NodeID] as ContainerNode;

  const siblingID = parent.children.find((id) => id !== windowID);
  const sibling = tree[siblingID];
  const grandParent = tree[parent.parent] as ContainerNode;

  const newTree = { ...tree };

  // Remove deleted nodes
  delete newTree[windowID];
  delete newTree[parent.id];

  // If sibling becomes new root
  if (!grandParent) {
    rootID = siblingID;
    return {
      tree: newTree,
      rootID,
    };
  }

  // Otherwise promote sibling normally
  newTree[siblingID] = {
    ...sibling,
    parent: grandParent.id,
  };

  newTree[grandParent.id] = {
    ...grandParent,
    children: grandParent.children.map((id) =>
      id === parent.id ? siblingID : id,
    ) as [NodeID, NodeID],
  };

  return {
    tree: newTree,
    rootID,
  };
};
