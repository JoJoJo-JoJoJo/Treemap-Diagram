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

interface Pledge {
  readonly name: string;
  readonly category?: string;
  readonly value: number;
};

type Category = {
  readonly name: string;
  readonly children: Pledge[];
};

type DataChildren = readonly Category[];

type DataProps = {
  readonly name: "Kickstarter";
  readonly children: DataChildren;
};

type RendererProps = {
  data: DataProps;
  setHoveredCell: React.Dispatch<SetStateAction<InteractData | null>>;
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
};

interface InteractData extends Pledge {
  readonly xPos: loadingNum;
  readonly yPos: loadingNum;
}

type TooltipProps = {
  hoveredCell: InteractData | null;
  isHovered: boolean;
};

export type {
  marginProps,
  AnchorProps,
  Pledge,
  DataChildren,
  DataProps,
  RendererProps,
  InteractData,
  TooltipProps,
};
