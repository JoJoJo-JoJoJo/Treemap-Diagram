import { useMemo } from "react";
import { height, width } from "../../../constants/constants";
import { RendererProps, TreeGen } from "../../../constants/types";
import { hierarchy, HierarchyNode, treemap } from "d3";

const Renderer = ({ data }: RendererProps) => {
  const rootNode = useMemo(() => hierarchy(data), [data]);

  const genTree: TreeGen = treemap().size([width, height]).padding(4);
  const layout = genTree(rootNode);

  const initGroups = rootNode?.children?.map((node) => node.data.name)

  return <div></div>;
};

export default Renderer;
