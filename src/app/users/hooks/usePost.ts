import { createPostService } from "@/app/services/UserServices";
import { useState } from "react";

export const usePost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const createPost = async (userId: number, title: string, content: string) => {
    const response = await createPostService(userId, title, content);
    return response;
  };

  return { createPost, form, setForm };
};
