import { UserModel } from './../../infrastructure/orm/model/user.model';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ApplicantRepository } from '../../domain/repositories/applicant.repository';
import { ResponseDto } from './../../../common/application/dto/response';
import { ApplicantDto, FilterApplicantDto } from '../dto/applicant.dto';
import { UserRepository } from '../../domain/repositories/user.repository';
import { AllApplicantDto } from 'src/app/input/create-applicant.dto';

@Injectable()
export class ApplicantService {
  constructor(
    private readonly applicantRepository: ApplicantRepository,
    private readonly userRepository: UserRepository
  ) {}

  async execute(data: Partial<ApplicantDto>): Promise<any> {
    const user = await this.applicantRepository.findByUserId(data.userId)
    if (user) {
      throw new UnauthorizedException('el userId Ya existe');
    }

    const response = await this.applicantRepository.create(data);
    return new ResponseDto(response)
  }
}

@Injectable()
export class GetApplicantService {
  constructor(private readonly applicantRepository: ApplicantRepository) {}

  async execute(id: number): Promise<any> {
    const response = await this.applicantRepository.findById(id)
    return new ResponseDto(response)
  }
}

@Injectable()
export class UserApplicantService {
  constructor(private readonly applicantRepository: ApplicantRepository) {}
  async execute(userid: number): Promise<any> {
    const response = await this.applicantRepository.findByUserId(userid)
    return new ResponseDto(response)
  }
}

@Injectable()
export class UpdateApplicantService {
  constructor(
    private readonly applicantRepository: ApplicantRepository,
    private readonly userRepository: UserRepository
  ) {}

  async execute(id: number, updateApplicantDto: ApplicantDto): Promise<any> {

    const applicant = await this.applicantRepository.findById(id)
    if (!applicant) {
      throw new UnauthorizedException('el postulante no existe');
    }
    
    if (applicant.userId !== Number(updateApplicantDto.userId)) {
      throw new UnauthorizedException('no puedos cambiar de usuario a un postulante');
    }
    const response = await this.applicantRepository.update(id, updateApplicantDto)
    return new ResponseDto(response)
  }
}