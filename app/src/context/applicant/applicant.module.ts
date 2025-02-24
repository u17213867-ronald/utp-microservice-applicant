import { Global, Module } from "@nestjs/common";
import { INFRASTRUCTURE } from "./infrastructure";
import { APPLICATION_SERVICES } from "./application";
import { CommonModule } from "../common/common.module";

// applicant module entry point
@Global()
@Module({
  imports: [
    CommonModule
  ],
  providers: [...APPLICATION_SERVICES,...INFRASTRUCTURE],
  exports: [...APPLICATION_SERVICES,...INFRASTRUCTURE],
})
export class ApplicantModule {}