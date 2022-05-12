import useSWR from "swr";
import { api } from "../services/api";

export const useFetch = (url, axiosConfig, config) => {
  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      const { data } = await api.get(url, axiosConfig);

      return data;
    },
    config
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  };
};
