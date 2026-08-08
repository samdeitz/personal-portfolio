export const calculateLayout = (tree, currNode, layouts, prevLayout) => {
  const node = tree[currNode];
  if (!node) {
    console.error(`NO NODE WITH ID: ${currNode}`);
    return {};
  }
  // ADD BASE CASE FOR LEAF NODE -> IF LEAF, NO CHANGES NEEDED
  if (node.nodeType == "window") {
    layouts[currNode] = prevLayout;
    return layouts;
  }

  let leftChild = node.children[0];
  let rightChild = node.children[1];

  const verticalSplit =
    prevLayout.colEnd - prevLayout.colStart >
    prevLayout.rowEnd - prevLayout.rowStart;
  const rowChange = Math.floor((prevLayout.rowStart + prevLayout.rowEnd) / 2);
  const colChange = Math.floor((prevLayout.colStart + prevLayout.colEnd) / 2);

  // CREATE NEW LAYOUT OBJECTS FOR EACH CHILD, SHOULD SPLIT BASED ON PREV LAYOUT
  const leftLayout = {
    colStart: prevLayout.colStart,
    rowStart: prevLayout.rowStart,
    colEnd: verticalSplit ? colChange : prevLayout.colEnd,
    rowEnd: verticalSplit ? prevLayout.rowEnd : rowChange,
  };
  //
  const rightLayout = {
    colStart: verticalSplit ? colChange : prevLayout.colStart,
    rowStart: verticalSplit ? prevLayout.rowStart : rowChange,
    rowEnd: prevLayout.rowEnd,
    colEnd: prevLayout.colEnd,
  };

  // CALL RECURSIVELY ON EACH CHILD, THEN RETURN WINDOWS
  layouts = calculateLayout(tree, leftChild, layouts, leftLayout);
  layouts = calculateLayout(tree, rightChild, layouts, rightLayout);
  return layouts;
};
