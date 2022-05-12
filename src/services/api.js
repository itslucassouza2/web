import axios from "axios";
import { API_URL } from "../constants";

export const api = axios.create({
  baseURL: API_URL,
});

export const setToken = (token) => {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
