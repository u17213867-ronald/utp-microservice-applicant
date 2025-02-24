import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class UserController {
  constructor() {}

  @Get('health')
  @HttpCode(200)
  health(): any {
    return {
      code: 200,
      message: 'health',
      data: [],
    }
  }


}
