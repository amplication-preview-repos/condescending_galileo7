import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccessKeyService } from "./accessKey.service";
import { AccessKeyControllerBase } from "./base/accessKey.controller.base";

@swagger.ApiTags("accessKeys")
@common.Controller("accessKeys")
export class AccessKeyController extends AccessKeyControllerBase {
  constructor(
    protected readonly service: AccessKeyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
