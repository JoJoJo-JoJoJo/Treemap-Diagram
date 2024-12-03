import { useQuery } from "@tanstack/react-query"
import { DataProps } from "../constants/types";

export const useFetchData = (url: string) => {
  return useQuery({
    queryKey: [url],
    queryFn: async (): Promise<DataProps> => {
      const res = await fetch(url);
      const json = res.json();
      return json;
    }
  });
}
