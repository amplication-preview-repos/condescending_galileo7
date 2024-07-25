import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AccessKeyManagerService } from "./accesskeymanager.service";

@swagger.ApiTags("accessKeyManagers")
@common.Controller("accessKeyManagers")
export class AccessKeyManagerController {
  constructor(protected readonly service: AccessKeyManagerService) {}
}
