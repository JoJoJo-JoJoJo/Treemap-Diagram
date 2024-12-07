import { lazy, Suspense, useEffect, useState } from "react";
import { colors, height, margin, url, width } from "../../constants/constants";
import { useFetchData } from "../../hooks/useFetchData";
import { InteractData } from "../../constants/types";
import Loading from "../dumb components/Loading";
import { scaleOrdinal } from "d3";
import ColorLegend from "./ColorLegend/ColorLegend";
const Renderer = lazy(() => import("./Renderer/Renderer"));
const Tooltip = lazy(() => import("./Tooltip/Tooltip"));

const Treemap = () => {
  const [hoveredCell, setHoveredCell] = useState<InteractData | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { data, error, isFetching } = useFetchData(url);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error && !isFetching) {
    throw error;
  }

  const color = scaleOrdinal(colors);

  return (
    <Suspense fallback={<Loading />}>
      <main
        className="treemap"
        style={{
          width: width,
          height: height + margin.bottom,
        }}
      >
        <Renderer
          data={data}
          setHoveredCell={setHoveredCell}
          setIsHovered={setIsHovered}
          color={color}
        />
        <Tooltip hoveredCell={hoveredCell} isHovered={isHovered} />
        <ColorLegend data={data} color={color} />
      </main>
    </Suspense>
  );
};

export default Treemap;
