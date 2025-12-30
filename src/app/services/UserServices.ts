import { User } from "@/core/entities/User";
import { AxiosGet, AxiosPost, AxiosPut } from "@/lib/axios";
import { use } from "react";

const urlBase = "/api/v1/users";

export const getUsersService = async () => {
  const response: any = await AxiosGet(urlBase);
  return response.data;
};

export const createUserService = async (user: User) => {
  const response: any = await AxiosPost(urlBase, user);
  return response.data;
};

export const getUserByIdService = async (id: number) => {
  const response: any = await AxiosGet(`${urlBase}/${id}`);
  return response.data;
};

export const updateUserService = async (user: User) => {
  const response: any = await AxiosPut(`${urlBase}/${user.id}`, user);
  return response.data;
};
