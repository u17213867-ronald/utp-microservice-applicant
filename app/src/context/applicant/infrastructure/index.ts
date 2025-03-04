import { Sequelize } from "sequelize-typescript"
import { ApplicantRepository } from "../domain/repositories/applicant.repository"
import { ApplicantMysqlRepository } from "./repositories/applicant.mysql.repository"
import { UserMysqlRepository } from "./repositories/user.repository.mysql"
import { UserRepository } from "../domain/repositories/user.repository"
import { ApplicationMysqlRepository } from "./repositories/application.mysql.repository"
import { ApplicationRepository } from "../domain/repositories/application.repository"

export const APPLICANT_REPOSITORY_PROVIDER = {
    inject: ['SEQUELIZE'],
    provide: ApplicantRepository,
    useFactory: async (sequelize: Sequelize) => {
      return new ApplicantMysqlRepository(sequelize)
    },
  }

export const USER_REPOSITORY_PROVIDER = {
  inject: ['SEQUELIZE'],
  provide: UserRepository,
  useFactory: async (sequelize: Sequelize) => {
    return new UserMysqlRepository(sequelize)
  },
}
//
export const APPLICAN_REPOSITORY_PROVIDER = {
  inject: ['SEQUELIZE'],
  provide: ApplicationRepository,
  useFactory: async (sequelize: Sequelize) => {
    return new ApplicationMysqlRepository(sequelize)
  },
}

export const INFRASTRUCTURE = [
    APPLICANT_REPOSITORY_PROVIDER,
    USER_REPOSITORY_PROVIDER,
    APPLICAN_REPOSITORY_PROVIDER
]

