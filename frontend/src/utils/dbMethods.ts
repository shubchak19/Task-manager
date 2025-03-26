import { itemType, ListType } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/lists` ,
});

async function handleApiRequest<T>(callback: () => Promise<{ data: T }>) {
  try {
    const response = await callback();
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Database Error:", error.response.data || error.message);
    return null;
  }
}

export const DB = {
  getLists: async (): Promise<ListType[] | null> =>
    await handleApiRequest(() => api.get("/")),

  createNewList: async (list: ListType) =>
    await handleApiRequest(() => api.post("/", list)),

  deleteList: async (listId: string) =>
    await handleApiRequest(() => api.delete(`/${listId}`)),

  addNewTask: async (listId: string, task: itemType) =>
    await handleApiRequest(() => api.post(`/${listId}/tasks`, task)),

  updateTask: async (listId: string, task: itemType) =>
    await handleApiRequest(() => api.put(`/${listId}/tasks/${task.id}`, task)),

  deleteTask: async (listId: string, taskId: string) =>
    await handleApiRequest(() => api.delete(`/${listId}/tasks/${taskId}`)),
};
