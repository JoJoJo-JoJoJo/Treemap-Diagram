import React, { useMemo } from "react";
import { colors, height, width } from "../../../constants/constants";
import { RendererProps } from "../../../constants/types";
import { hierarchy, HierarchyNode, scaleOrdinal, treemap } from "d3";
import "../Treemap.css";

const Renderer = ({ data, setHoveredCell, setIsHovered }: RendererProps) => {
  const rootNode = useMemo(() => hierarchy(data), [data]);

  const layout = useMemo(() => {
    const genTree = treemap().size([width, height]).padding(4);
    return genTree(rootNode as HierarchyNode<unknown>);
  }, [rootNode]);

  const initGroups = rootNode?.children?.map((node) => node.data.name);
  if (typeof initGroups === "undefined") {
    return <pre className="loading">initGroups are undefined</pre>;
  }

  const color = scaleOrdinal(colors).domain(initGroups);

  const rects = layout.leaves().map((leaf, i) => {
    const parent: string = leaf.parent?.data.name;
    return (
      <g key={`${leaf.id}__${i}`}>
        <rect
          className="tile"
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          stroke="transparent"
          fill={color(parent)}
          data-name={leaf.name}
          data-category={parent}
          data-value={leaf.value}
          onMouseEnter={() => {
            setIsHovered(true);
            setHoveredCell({
              xPos: (leaf.x0 + leaf.x1) / 2,
              yPos: (leaf.y0 + leaf.y1) / 2,
              name: leaf.name,
              category: parent,
              value: typeof leaf.value === "undefined" ? 0 : leaf.value,
            });
          }}
        />
        <text>{leaf.name}</text>
      </g>
    );
  });

  return <svg className="rendered-svg">{rects}</svg>;
};

export default React.memo(Renderer);
