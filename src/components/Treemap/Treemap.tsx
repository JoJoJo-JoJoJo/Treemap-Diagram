import { useState } from "react";
import { url } from "../../constants/constants";
import { useFetchData } from "../../hooks/useFetchData";
import { InteractData } from "../../constants/types";

const Treemap = () => {
  const [hoveredCell, setHoveredCell] = useState<InteractData | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { data, status, error } = useFetchData(url);

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
    <main className="treemap">
      {typeof data === "undefined" ? (
        <pre className="loading">Data is undefined</pre>
      ) : (
        <>
          {/* <Renderer
            dataset={data}
            setHoveredCell={setHoveredCell}
            setIsHovered={setIsHovered}
          />
          <Tooltip hoveredCell={hoveredCell} isHovered={isHovered} /> */}
        </>
      )}
    </main>
  );
};

export default Treemap;
