import { User } from "@/core/entities/User";
import { AxiosGet, AxiosPost, AxiosPut } from "@/lib/axios";

const urlBase = "/api/v1/users";

interface IResponse {
  data: any;
  status: number;
}

export const getUsersService = async () => {
  const { data }: IResponse = await AxiosGet(urlBase);
  return data;
};

export const createUserService = async (user: User) => {
  const { data }: IResponse = await AxiosPost(urlBase, user);
  return data;
};

export const getUserByIdService = async (id: number) => {
  const { data }: IResponse = await AxiosGet(`${urlBase}/${id}`);
  return data;
};

export const updateUserService = async (user: User) => {
  const { data }: IResponse = await AxiosPut(`${urlBase}/${user.id}`, user);
  return data;
};

export const createPostService = async (
  userId: number,
  title: string,
  content: string
) => {
  const { data }: IResponse = await AxiosPost(`${urlBase}/${userId}/posts`, {
    authorId: userId,
    title,
    content,
  });
  return data;
};
