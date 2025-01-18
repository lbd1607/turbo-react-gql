import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export type UserModel = User;

const usersAPI = {
  getUsers: () => prisma.user.findMany(),
};

export default usersAPI;
