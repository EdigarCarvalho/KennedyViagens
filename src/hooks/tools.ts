import { api } from "./useFetch";

export function getTools() {
  return api.get('/tools');
}

export function addTool(toolData: any) {
  return api.post('/tools', toolData);
}

export function getToolById(id: string) {
  return api.get(`/tools/${id}`);
}

export function deleteTool(id: string) {
  return api.delete(`/tools/${id}`);
}
