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

type Pledge = {
  readonly name: string;
  readonly category: string;
  readonly value: number;
};

type ProductDesign = {
  readonly name: "ProductDesign";
  readonly children: Pledge[];
};

type DataChildren = readonly ProductDesign[];

type DataProps = {
  readonly name: "Kickstarter";
  readonly children: DataChildren;
};

type RendererProps = {
  data: DataProps;
};

interface InteractData {
  readonly xPos: loadingNum;
  readonly yPos: loadingNum;
  readonly pledge: Pledge;
}

export type {
  marginProps,
  AnchorProps,
  DataChildren,
  DataProps,
  RendererProps,
  InteractData,
};
