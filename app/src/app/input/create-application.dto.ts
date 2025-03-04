import { IsInt, IsNotEmpty, IsOptional, IsString, IsEnum, IsDate, Min, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { Transform } from 'class-transformer';  // Para establecer valores predeterminados
export enum ApplicationSourceEnum {
  APTITUS = 'bumeran',
  API = 'api',
  MOBILE = 'mobile',
  FAIR = 'fair',
  TCN = 'tcn',
}
export class CreateApplicationDto {
  
  @IsInt()
  @IsOptional()
  applicantId?: number;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  announcementId: number;

  @IsInt()
  @IsOptional()
  applicationCategoryId?: number;

  @IsDate()
  @IsOptional()
  @Type(() => Date)  // Para convertirlo a Date si lo envían como string
  datetime?: Date;

  @IsBoolean()
  @IsOptional()
  @Transform(() => true)  // Valor predeterminado
  active: boolean = true;

  @IsBoolean()
  @IsOptional()
  @Transform(() => false)  // Valor predeterminado
  discarded: boolean = false;

  @IsBoolean()
  @IsOptional()
  @Transform(() => false)  // Valor predeterminado
  invitation: boolean = false;

  @IsInt()
  @IsOptional()
  @Transform(() => 0)  // Valor predeterminado
  messagesRead: number = 0;

  @IsInt()
  @IsOptional()
  @Transform(() => 0)  // Valor predeterminado
  messagesUnread: number = 0;

  @IsString()
  @IsOptional()
  @Transform(() => '')  // Valor predeterminado
  cvSummary: string = '';

  @IsInt()
  @IsOptional()
  @Transform(() => 0)  // Valor predeterminado
  messagesToRespond: number = 0;

  @IsInt()
  @IsOptional()
  @Transform(() => 0)  // Valor predeterminado
  messagesResponded: number = 0;

  @IsBoolean()
  @IsOptional()
  @Transform(() => true)  // Valor predeterminado
  isNew: boolean = true;

  @IsString()
  @IsOptional()
  @Transform(() => '')  // Valor predeterminado
  educationLevel: string = '';

  @IsString()
  @IsOptional()
  @Transform(() => '')  // Valor predeterminado
  career: string = '';

  @IsBoolean()
  @IsOptional()
  @Transform(() => '')  // Valor predeterminado
  referred: boolean = false;

  @IsEnum(ApplicationSourceEnum)
  @IsOptional()
  @Transform(() => 'api')  // Valor predeterminado
  applicationSource: string = 'api';

  @IsDate()
  @IsOptional()
  @Transform(() => new Date())  // Valor predeterminado (hora actual)
  invitationDatetime: Date = new Date();
}
