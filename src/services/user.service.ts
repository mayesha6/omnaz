import { apiClient } from "@/lib/axios";
import { User, ApiResponse } from "@/types/user.types";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<ApiResponse<User[]>>('/user/all-users');
  return response.data.data;
};