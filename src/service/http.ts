import axios from "axios";

export const DEV_BASE_RESTAPI = "https://jsonplaceholder.typicode.com";

export function sleep(ms = 2000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const http = axios.create({
  baseURL: DEV_BASE_RESTAPI,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.request.use(async (config) => {

  await sleep(1000);
  return config;
});


export const ExceptionWrapper = async <T>(callback: Function): Promise<T> => {
  try {
    return await callback();
  } catch (error) {
    if (axios.isAxiosError(error)) throw error.response?.data;

    throw new Error("different error than axios" + error);
  }
};