import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const AxiosGet = async (url: string, config?: AxiosRequestConfig) => {
  const response: AxiosResponse = await axios.get(url, config);
  return { data: response.data, status: response.status };
};

export const AxiosPost = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  const response: AxiosResponse = await axios.post(url, data, config);
  return { data: response.data, status: response.status };
};


export const AxiosPut = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  const response: AxiosResponse = await axios.put(url, data, config);
  return { data: response.data, status: response.status };
};
