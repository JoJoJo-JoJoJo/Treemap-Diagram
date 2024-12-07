import { margin, width } from "../../../constants/constants";
import { CLegendProps } from "../../../constants/types";

const ColorLegend = ({ data, color }: CLegendProps) => {
  return (
    <svg className="color-legend" id="legend" width={width}>
      <g transform={`translate(10, 25)`}>
        {data.children.map((node, i) => {
          const fill = color(node.name);
          return (
            <g
              className="legend-g"
              key={`_${node.name}_${i}`}
              transform={`translate(${(i % 6) * (width / 6)}, ${
                (Math.floor(i / 6) * margin.bottom) / 4
              })`}
            >
              <rect
                className="legend-item"
                fill={fill}
                width={10}
                height={10}
                y={-10}
              />
              <text
                textAnchor="start"
                x={15}
                style={{
                  fontSize: "12px",
                }}
              >
                {node.name}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default ColorLegend;
