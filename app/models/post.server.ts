import { prisma } from "~/db.server";

export const getPosts = async () => {
  return prisma.post.findMany();
};

export const getPost = async (slug: string) => {
  return prisma.post.findUnique({ where: { slug } });
};

export const createPost = async (post) => {
  return prisma.post.create({ data: post });
};
