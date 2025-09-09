import { useAuthStore } from "@/stores/useAuthStore";
import axios from "axios";

export const api = axios.create({
	baseURL: "https://elcho-chat.up.railway.app/api/v1",
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().getAccessToken(); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});