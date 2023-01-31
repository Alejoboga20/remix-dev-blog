import { prisma } from "~/db.server";

export const getPosts = async () => {
  return prisma.post.findMany();
};
