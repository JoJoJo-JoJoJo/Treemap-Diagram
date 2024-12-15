import React, { useMemo } from "react";
import { height, width } from "../../../constants/constants";
import { RendererProps, Tree } from "../../../constants/types";
import { hierarchy, treemap, TreemapLayout } from "d3";
import "../Treemap.css";

const Renderer = ({
  data,
  setHoveredCell,
  setIsHovered,
  color,
}: RendererProps) => {
  const rootNode = useMemo(
    () => hierarchy(data).sum((dat) => dat.value),
    [data]
  );

  const layout = useMemo(() => {
    const genTree = treemap()
      .size([width, height])
      .padding(1) as TreemapLayout<Tree>;
    return genTree(rootNode);
  }, [rootNode]);

  const rects = layout.leaves().map((leaf, i) => {
    if (leaf.parent === null) {
      throw new TypeError("leaf.parent is null");
    }
    const parent: string = leaf.parent.data.name;

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
          data-name={leaf.data.name}
          data-category={parent}
          data-value={leaf.data.value}
          onMouseEnter={(e) => {
            setIsHovered(true);
            setHoveredCell({
              xPos: e.pageX,
              yPos: e.pageY,
              name: leaf.data.name,
              category: parent,
              value: leaf.data.value,
            });
          }}
          onMouseLeave={() => setIsHovered(false)}
        />
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 3}
          fontSize={12}
          textAnchor="start"
          textDecoration="none"
          alignmentBaseline="hanging"
          fill="white"
          style={{ fontWeight: "bold", cursor: "default" }}
        >
          {leaf.data.name}
        </text>
      </g>
    );
  });

  return (
    <svg className="rendered-svg" width={width} height={height}>
      {rects}
    </svg>
  );
};

export default React.memo(Renderer);
