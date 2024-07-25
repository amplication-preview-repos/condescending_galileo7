import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccessKeyModuleBase } from "./base/accessKey.module.base";
import { AccessKeyService } from "./accessKey.service";
import { AccessKeyController } from "./accessKey.controller";
import { AccessKeyResolver } from "./accessKey.resolver";

@Module({
  imports: [AccessKeyModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccessKeyController],
  providers: [AccessKeyService, AccessKeyResolver],
  exports: [AccessKeyService],
})
export class AccessKeyModule {}
