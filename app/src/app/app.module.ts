import { Module } from '@nestjs/common'
import { CommonModule } from './../context/common/common.module'
import { ConfigurationModel } from "./../context/common/infrastructure/models/configuration.model";
import { ConfigModule } from '@nestjs/config';
import { UserController } from './rest/heald.controller';
import { ApplicantController } from './rest/applicant.controller';
import { ApplicantModule } from './../context/applicant/applicant.module';


export default () => ({
    DB_MODELS: [ConfigurationModel],
  });
@Module({
  imports: [CommonModule, ApplicantModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [UserController,ApplicantController],
  providers: [],
})
export class AppModule {}
