/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AccessKey } from "./AccessKey";
import { AccessKeyCountArgs } from "./AccessKeyCountArgs";
import { AccessKeyFindManyArgs } from "./AccessKeyFindManyArgs";
import { AccessKeyFindUniqueArgs } from "./AccessKeyFindUniqueArgs";
import { CreateAccessKeyArgs } from "./CreateAccessKeyArgs";
import { UpdateAccessKeyArgs } from "./UpdateAccessKeyArgs";
import { DeleteAccessKeyArgs } from "./DeleteAccessKeyArgs";
import { User } from "../../user/base/User";
import { AccessKeyService } from "../accessKey.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccessKey)
export class AccessKeyResolverBase {
  constructor(
    protected readonly service: AccessKeyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AccessKey",
    action: "read",
    possession: "any",
  })
  async _accessKeysMeta(
    @graphql.Args() args: AccessKeyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AccessKey])
  @nestAccessControl.UseRoles({
    resource: "AccessKey",
    action: "read",
    possession: "any",
  })
  async accessKeys(
    @graphql.Args() args: AccessKeyFindManyArgs
  ): Promise<AccessKey[]> {
    return this.service.accessKeys(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AccessKey, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AccessKey",
    action: "read",
    possession: "own",
  })
  async accessKey(
    @graphql.Args() args: AccessKeyFindUniqueArgs
  ): Promise<AccessKey | null> {
    const result = await this.service.accessKey(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccessKey)
  @nestAccessControl.UseRoles({
    resource: "AccessKey",
    action: "create",
    possession: "any",
  })
  async createAccessKey(
    @graphql.Args() args: CreateAccessKeyArgs
  ): Promise<AccessKey> {
    return await this.service.createAccessKey({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccessKey)
  @nestAccessControl.UseRoles({
    resource: "AccessKey",
    action: "update",
    possession: "any",
  })
  async updateAccessKey(
    @graphql.Args() args: UpdateAccessKeyArgs
  ): Promise<AccessKey | null> {
    try {
      return await this.service.updateAccessKey({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AccessKey)
  @nestAccessControl.UseRoles({
    resource: "AccessKey",
    action: "delete",
    possession: "any",
  })
  async deleteAccessKey(
    @graphql.Args() args: DeleteAccessKeyArgs
  ): Promise<AccessKey | null> {
    try {
      return await this.service.deleteAccessKey(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: AccessKey): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}