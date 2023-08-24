import axios from "axios";

export const api = axios.create({
  baseURL: "https://lively-moss-nudxlqdclfnd.vapor-farm-c1.com/api",
});

const withAuthorizationHeader = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

interface ToolDataProps {
  title: string;
  link: string;
  description: string;
  tags: string[];
}


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
    getTools: async (token: string) => {
      const { data } = await api.get("tools", withAuthorizationHeader(token));
      return data;
    },
    getToolById: async (token: string, id: number) => {
      const { data } = await api.get(`tools/${id}`, withAuthorizationHeader(token));
      return data;
    },
    createTool: async (token: string, toolData: ToolDataProps) => {
      const { data } = await api.post("tools", toolData, withAuthorizationHeader(token));
      return data;
    },
    deleteToolById: async (token: string, id: number) => {
      const { data } = await api.delete(`tools/${id}`, withAuthorizationHeader(token));
      return data;
    },
  },
});