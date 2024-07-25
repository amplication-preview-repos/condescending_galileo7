import * as graphql from "@nestjs/graphql";
import { AccessKeyManagerService } from "./accesskeymanager.service";

export class AccessKeyManagerResolver {
  constructor(protected readonly service: AccessKeyManagerService) {}
}
