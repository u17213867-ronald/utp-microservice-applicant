import { Injectable } from '@nestjs/common';
import { ApplicationRepository } from './../../domain/repositories/application.repository';
import { Application } from '../orm/model/application.model';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Applicant } from '../orm/model/applicant.model';
import { UserModel } from '../orm/model/user.model';
import { ApplicationInterface } from '../../domain/repositories/application.interface';
import { CustomException } from './../../../common/infrastructure/exceptions/custom.exception';

@Injectable()
export class ApplicationMysqlRepository implements ApplicationRepository {
  private readonly applicationModel: Repository<Application>;

  constructor(sequelize: Sequelize) {
    sequelize.addModels([Application, Applicant, UserModel]);
    this.applicationModel = sequelize.getRepository(Application);
  }

  async findById(id: number): Promise<ApplicationInterface | null> {
    try {
      return await this.applicationModel.findByPk(id);
    } catch (error) {
      throw new CustomException(`Error finding application by id: ${error.message}`, 400);
    }
  }

  async findByApplicantId(applicantId: number): Promise<ApplicationInterface | null> {
    try {
      return await this.applicationModel.findOne({ where: { applicantId } });
    } catch (error) {
      throw new CustomException(`Error finding application by applicantId: ${error.message}`, 400);
    }
  }

  async create(application: Partial<ApplicationInterface>): Promise<ApplicationInterface> {
    try {
      return await this.applicationModel.create(application);
    } catch (error) {
      throw new CustomException(`Error creating application: ${error.message}`, 400);
    }
  }

  async update(
    id: number,
    updates: Partial<ApplicationInterface>,
  ): Promise<ApplicationInterface | null> {
    try {
      const [affectedCount, [updatedApplication]] = await this.applicationModel.update(updates, {
        where: { id },
        returning: true,
      });

      if (affectedCount === 0) {
        return null;
      }

      return updatedApplication;
    } catch (error) {
      throw new CustomException(`Error updating application: ${error.message}`, 400);
    }
  }

  async delete(id: number): Promise<number> {
    try {
      return await this.applicationModel.destroy({
        where: { id },
      });
    } catch (error) {
      throw new CustomException(`Error deleting application: ${error.message}`, 400);
    }
  }

  async findActiveApplicationsByApplicantId(applicantId: number): Promise<ApplicationInterface[]> {
    try {
      return await this.applicationModel.findAll({
        where: { applicantId, active: true },
      });
    } catch (error) {
      throw new CustomException(`Error finding active applications: ${error.message}`, 400);
    }
  }

  async findByAnnouncementId(announcementId: number): Promise<ApplicationInterface[]> {
    try {
      return await this.applicationModel.findAll({
        where: { announcementId },
      });
    } catch (error) {
      throw new CustomException(`Error finding applications by announcementId: ${error.message}`, 400);
    }
  }
}
