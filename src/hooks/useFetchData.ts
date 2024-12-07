import { useSuspenseQuery } from "@tanstack/react-query";
import { Tree } from "../constants/types";

export const useFetchData = (url: string) => {
  return useSuspenseQuery({
    queryKey: [url],
    queryFn: async (): Promise<Tree> => {
      const res = await fetch(url);
      const json = res.json();
      return json;
    },
  });
};
