import { useState } from "react";
import { height, margin, url, width } from "../../constants/constants";
import { useFetchData } from "../../hooks/useFetchData";
import { InteractData } from "../../constants/types";
import Renderer from "./Renderer/Renderer";
import Tooltip from "./Tooltip/Tooltip";

const Treemap = () => {
  const [hoveredCell, setHoveredCell] = useState<InteractData | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { data, status, error } = useFetchData(url);
  console.log(data);

  if (status === "pending") {
    return <pre className="loading">Loading...</pre>;
  }

  if (error) {
    return (
      <span>
        {error.name}: {error.message}
      </span>
    );
  }

  return (
    <main
      className="treemap"
      style={{
        width: width + margin.left + margin.right,
        height: height + margin.top + margin.bottom,
      }}
    >
      {typeof data === "undefined" ? (
        <pre className="loading">Data is undefined</pre>
      ) : (
        <>
          <Renderer
            data={data}
            setHoveredCell={setHoveredCell}
            setIsHovered={setIsHovered}
          />
          <Tooltip hoveredCell={hoveredCell} isHovered={isHovered} />
        </>
      )}
    </main>
  );
};

export default Treemap;
