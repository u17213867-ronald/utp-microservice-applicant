// src/application/application.service.ts
import { Injectable } from '@nestjs/common';
import { ApplicationRepository } from '../../domain/repositories/application.repository';
import { CreateApplicationDto } from '../../../../app/input/create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    private readonly applicationRepository:  ApplicationRepository
  ) {}
c
  async excecute(createApplicationDto: CreateApplicationDto) {
    console.log(createApplicationDto)
    const newApplication = await this.applicationRepository.create(createApplicationDto);
    return newApplication;
  }
}
