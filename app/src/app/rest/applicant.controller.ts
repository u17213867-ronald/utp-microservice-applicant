import {
    Controller,
    Post,
    Get,
    Put,
    Param,
    Body,
    ParseIntPipe,
  } from '@nestjs/common';

  import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiParam,
    ApiBody,
  } from '@nestjs/swagger';

import { CreateApplicantDto, UpdateApplicantDto } from '../input/create-applicant.dto';
import { ApplicantService, GetApplicantService, UpdateApplicantService } from '../../context/applicant/application/services/applicant.service';
import { ResponseDto } from './../../context/common/application/dto/response';
  
  @ApiTags('applicants')
  @Controller()
  export class ApplicantController {
    constructor(
        private readonly applicantService: ApplicantService,
        private readonly getApplicantService: GetApplicantService,
        private readonly updateApplicantService: UpdateApplicantService
    ) {}
  
    @Post()
    @ApiOperation({ summary: 'Crear un nuevo solicitante' })
    @ApiResponse({
      status: 201,
      description: 'El solicitante ha sido creado exitosamente.',
      type: ResponseDto,
    })
    @ApiResponse({
      status: 400,
      description: 'Datos de entrada no válidos.',
    })
    @ApiBody({ type: CreateApplicantDto })
    async create(
      @Body() createApplicantDto: CreateApplicantDto,
    ): Promise<any> {
      return await this.applicantService.execute(createApplicantDto);
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un solicitante por ID' })
    @ApiParam({
      name: 'id',
      description: 'ID del solicitante a obtener',
      example: 1,
    })
    @ApiResponse({
      status: 200,
      description: 'Detalles del solicitante.',
      type: ResponseDto,
    })
    @ApiResponse({
      status: 404,
      description: 'Solicitante no encontrado.',
    })
    async findById(@Param('id', ParseIntPipe) id: number): Promise<any> {
      return await this.getApplicantService.execute(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un solicitante existente' })
    @ApiParam({
      name: 'id',
      description: 'ID del solicitante a actualizar',
      example: 1,
    })
    @ApiResponse({
      status: 200,
      description: 'El solicitante ha sido actualizado exitosamente.',
      type: ResponseDto,
    })
    @ApiResponse({
      status: 400,
      description: 'Datos de entrada no válidos.',
    })
    @ApiResponse({
      status: 404,
      description: 'Solicitante no encontrado.',
    })
    @ApiBody({ type: UpdateApplicantDto })
    async update(
      @Param('id') id: number,
      @Body() updateApplicantDto: CreateApplicantDto
    ): Promise<any> {
      return await this.updateApplicantService.execute(id, updateApplicantDto);
    }
  }
  