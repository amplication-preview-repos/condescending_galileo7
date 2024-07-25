import { Module } from "@nestjs/common";
import { AccessKeyManagerService } from "./accesskeymanager.service";
import { AccessKeyManagerController } from "./accesskeymanager.controller";
import { AccessKeyManagerResolver } from "./accesskeymanager.resolver";

@Module({
  controllers: [AccessKeyManagerController],
  providers: [AccessKeyManagerService, AccessKeyManagerResolver],
  exports: [AccessKeyManagerService],
})
export class AccessKeyManagerModule {}
