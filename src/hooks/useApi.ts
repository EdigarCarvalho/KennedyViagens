
import axios from "axios";
import { ToolDataProps } from "../interfaces";
export const api = axios.create({
  baseURL: "https://lively-moss-nudxlqdclfnd.vapor-farm-c1.com/api",
});

const withAuthorizationHeader = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const useApi = () => ({
  login: async (email: string, password: string) => {
    const { data } = await api.post("auth/login", { email, password });
    return data;
  },
  logout: async (token: string) => {
    const { data } = await api.post("auth/logout", null, withAuthorizationHeader(token));
    return data;
  },

  tools: {
    get: async (token: string) => {
      const { data } = await api.get(`tools`, withAuthorizationHeader(token));
      return data;
    },
    create: async (token: string, toolData: ToolDataProps) => {
      const { data } = await api.post("tools", toolData, withAuthorizationHeader(token));
      return data;
    },
    deleteById: async (token: string, id: number) => {
      const { data } = await api.delete(`tools/${id}`, withAuthorizationHeader(token));
      return data;
    },
  },
});
