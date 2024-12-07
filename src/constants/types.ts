import { SetStateAction } from "react";

type marginProps = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type loadingNum = number | "Loading...";

type AnchorProps = {
  href: string;
  text: string;
};

// * ---------------------------------------------------------------------------------------->
type Node = {
  value: number;
  name: string;
  children: Tree[];
};

type Leaf = {
  name: string;
  value: number;
};

type Tree = Node;

// interface Pledge {
//   readonly name: string;
//   readonly category?: string;
//   readonly value: number;
// }

// type Category = {
//   readonly name: string;
//   readonly children: Pledge[];
// };

// type DataChildren = readonly Category[];

// type DataProps = {
//   readonly type: "node";
//   readonly name: "Kickstarter";
//   readonly children: DataChildren;
// };
// * ---------------------------------------------------------------------------------------->

type RendererProps = {
  data: Tree;
  setHoveredCell: React.Dispatch<SetStateAction<InteractData | null>>;
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
  color: colorFn;
};

type InteractData = {
  readonly name: string;
  readonly category: string;
  readonly value: number;
  readonly xPos: loadingNum;
  readonly yPos: loadingNum;
};

type TooltipProps = {
  hoveredCell: InteractData | null;
  isHovered: boolean;
};

type colorFn = (str: string) => string;

type CLegendProps = {
  data: Tree;
  color: colorFn;
};

export type {
  marginProps,
  AnchorProps,
  // Pledge,
  // DataChildren,
  // DataProps,
  Leaf,
  Node,
  Tree,
  RendererProps,
  InteractData,
  TooltipProps,
  CLegendProps,
  colorFn,
};
