export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  location?: string;
  department?: string;
  accountType: string;
  isDeleted: boolean;
  isActive: string;
  isVerified: boolean;
  occupation?: string;
  businessName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  meta: Meta;
  data: T;
}