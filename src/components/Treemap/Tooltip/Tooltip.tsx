import React from "react";
import { TooltipProps } from "../../../constants/types";
import "./Tooltip.css";

const Tooltip = ({ hoveredCell, isHovered }: TooltipProps) => {
  if (!hoveredCell) return;
  const { xPos, yPos, name, category, value } = hoveredCell;

  return (
    <div
      className="tooltip"
      id="tooltip"
      style={{
        pointerEvents: "none",
        position: "absolute",
        left: xPos,
        top: yPos,
        opacity: isHovered ? 0.7 : 0,
      }}
      data-value={value}
    >
      <div style={{ position: "absolute" }}>
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Category: </b>
          {category}
        </p>
        <p>
          <b>Value: </b>
          {value}
        </p>
      </div>
    </div>
  );
};

export default React.memo(Tooltip);
