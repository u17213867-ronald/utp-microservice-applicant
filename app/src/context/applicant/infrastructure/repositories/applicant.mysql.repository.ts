import { Injectable } from '@nestjs/common'
import { ApplicantRepository } from '../../domain/repositories/applicant.repository'
import { Applicant } from '../orm/model/applicant.model'
import { Repository, Sequelize } from 'sequelize-typescript'
import { UserModel } from '../orm/model/user.model'

@Injectable()
export class ApplicantMysqlRepository implements ApplicantRepository {
  private readonly applicantModel: Repository<Applicant>
  constructor(
    sequelize: Sequelize
  ) {
    sequelize.addModels([Applicant, UserModel])
    this.applicantModel = sequelize.getRepository(Applicant)
  } 

  async findById(id: number): Promise<Applicant | null> {
     return this.applicantModel.findByPk(id)
  }

  async findByUserId(userId: number): Promise<Applicant | null> {
    return await this.applicantModel.findOne({ where: { userId } });
 }

  async create(applicant: Partial<Applicant>): Promise<Applicant> {
    return this.applicantModel.create(applicant)
  }

  async update(
    id: number,
    updates: Partial<Applicant>,
  ): Promise<Applicant> {
    await this.applicantModel.update(updates, {
      where: { id },
      returning: true,
    })
    return this.findById(id)
  }

  async delete(id: number): Promise<number> {
    return this.applicantModel.destroy({
      where: { id },
    })
  }
}
