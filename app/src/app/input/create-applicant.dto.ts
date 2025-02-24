// create-applicant.dto.ts
import {
    IsString,
    IsInt,
    IsDate,
    IsBoolean,
    IsNotEmpty,
    Min,
    MaxLength,
    IsOptional,
  } from 'class-validator';
  import { Type } from 'class-transformer';
import { ApplicantDto } from './../../context/applicant/application/dto/applicant.dto';
import { PartialType } from '@nestjs/swagger';
  
  export class CreateApplicantDto implements ApplicantDto {
    @IsInt({ message: 'El ID de usuario debe ser un número entero' })
    @IsNotEmpty({ message: 'El ID de usuario es obligatorio' })
    userId: number;
  
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @MaxLength(100, {
      message: 'El nombre no puede tener más de 100 caracteres',
    })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    firstName: string;
  
    @IsString({ message: 'El apellido paterno debe ser una cadena de texto' })
    @MaxLength(100, {
      message: 'El apellido paterno no puede tener más de 100 caracteres',
    })
    @IsNotEmpty({ message: 'El apellido paterno es obligatorio' })
    lastNameFather: string;
  
    @IsString({ message: 'El apellido materno debe ser una cadena de texto' })
    @MaxLength(100, {
      message: 'El apellido materno no puede tener más de 100 caracteres',
    })
    @IsNotEmpty({ message: 'El apellido materno es obligatorio' })
    lastNameMother: string;
  
    @IsInt({ message: 'La edad debe ser un número entero' })
    @Min(0, { message: 'La edad no puede ser negativa' })
    @IsNotEmpty({ message: 'La edad es obligatoria' })
    age: number;
  
    @IsDate({ message: 'La fecha de nacimiento debe ser una fecha válida' })
    @Type(() => Date)
    @IsNotEmpty({ message: 'La fecha de nacimiento es obligatoria' })
    dateOfBirth: Date;
  
    @IsBoolean({ message: 'El estado debe ser un valor booleano' })
    @IsOptional()
    status?: boolean = true;
  }
  
  export class UpdateApplicantDto extends PartialType(CreateApplicantDto) {}
