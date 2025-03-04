import { CreateApplicationDto } from './../input/create-application.dto';
import { Controller, Post, Body, ParseIntPipe, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { ApplicationService } from './../../context/applicant/application/services/application.service';

@ApiTags('applications')
@Controller()
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post(':applicantId/application')
  @ApiOperation({
    summary: 'Postularse a una oferta de trabajo',
    description: 'Crea una nueva postulación para un solicitante a una oferta de trabajo.',
  })
  @ApiBody({
    description: 'Datos de la postulación',
    type: CreateApplicationDto,  // Este es el DTO que definimos previamente
  })
  @ApiResponse({
    status: 201,
    description: 'Postulación creada exitosamente.',
    type: CreateApplicationDto,  // Tipo de la respuesta esperada (Modelo de la Aplicación)
  })
  @ApiResponse({
    status: 400,
    description: 'Solicitud inválida, algunos campos son incorrectos.',
  })
  async create(@Param('applicantId') applicantId: number, @Body() createApplicationDto: CreateApplicationDto) {

    createApplicationDto.applicantId = applicantId
    return this.applicationService.excecute(createApplicationDto);
  }
}
