/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AccessKey as PrismaAccessKey,
  User as PrismaUser,
} from "@prisma/client";

export class AccessKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AccessKeyCountArgs, "select">
  ): Promise<number> {
    return this.prisma.accessKey.count(args);
  }

  async accessKeys(
    args: Prisma.AccessKeyFindManyArgs
  ): Promise<PrismaAccessKey[]> {
    return this.prisma.accessKey.findMany(args);
  }
  async accessKey(
    args: Prisma.AccessKeyFindUniqueArgs
  ): Promise<PrismaAccessKey | null> {
    return this.prisma.accessKey.findUnique(args);
  }
  async createAccessKey(
    args: Prisma.AccessKeyCreateArgs
  ): Promise<PrismaAccessKey> {
    return this.prisma.accessKey.create(args);
  }
  async updateAccessKey(
    args: Prisma.AccessKeyUpdateArgs
  ): Promise<PrismaAccessKey> {
    return this.prisma.accessKey.update(args);
  }
  async deleteAccessKey(
    args: Prisma.AccessKeyDeleteArgs
  ): Promise<PrismaAccessKey> {
    return this.prisma.accessKey.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.accessKey
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}