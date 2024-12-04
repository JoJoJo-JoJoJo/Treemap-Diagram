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
        <div className="col">
          <b className="bold">Name: </b>
          <b className="bold">Category: </b>
          <b className="bold">Value: </b>
        </div>
        <div className="col">
          <p>{name}</p>
          <p>{category}</p>
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Tooltip);
