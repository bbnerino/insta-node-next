import { apiClient, URL } from "../helper/axios";

export class Article {
  title?: string;
  content?: string;
  // image?:string
  userGuid?: string;
  _id?: string;

  create = async () => {
    const response = await apiClient.post<any>(`${URL}/article`, {
      data: this,
    });
    return response.data;
  };

  static getAll = async () => {
    const response = await apiClient.get<any>(`${URL}/article/all`);
    return response.data;
  };

  getById = async (id: string) => {
    const response = await apiClient.get<any>(`${URL}/article/${id}`);
    return response.data;
  };

  update = async (id: string) => {
    const response = await apiClient.put<any>(`${URL}/article/${id}`);
    return response.data;
  };
  delete = async (id: string) => {
    const response = await apiClient.delete<any>(`${URL}/article/${id}`);
    return response.data;
  };
}
