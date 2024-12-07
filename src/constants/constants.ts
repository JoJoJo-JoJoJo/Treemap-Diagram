import { marginProps } from "./types";

const margin: marginProps = { top: 20, right: 20, bottom: 120, left: 20 };

const width: number = 800 - margin.left - margin.right;
const height: number = 700 - margin.top - margin.bottom;

const url =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json";

const flaticonLink = "https://www.flaticon.com";

const colors: string[] = [
  "#800000",
  "#e6194B",
  "#fabed4",
  "#9A6324",
  "#f58231",
  "#808000",
  "#ffe119",
  "#dcbf85",
  "#3cb44b",
  "#aaffc3",
  "#469990",
  "#42d4f4",
  "#000075",
  "#4363d8",
  "#911eb4",
  "#dcbeff",
  "#f032e6",
  "#000000",
  "#a9a9a9",
];

export { width, height, margin, url, flaticonLink, colors };
