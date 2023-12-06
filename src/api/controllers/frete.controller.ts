import {
    Controller,
    Get,
    Post,
    Body,
    Param,
  } from '@nestjs/common';
  import { FreteService } from './frete.service';
  
  @Controller('frete')
  export class FreteController {
  
    constructor(private readonly freteService: FreteService) {}
  
    @Get()
    async getAll(): Promise<Frete[]> {
      return await this.freteService.getAll();
    }
  
    @Get(':id')
    async getById(
      @Param('id') id: number
    ): Promise<Frete> {
      return await this.freteService.getById(id);
    }
  
    @Post()
    async create(
      @Body() frete: FreteCreateDto
    ): Promise<Frete> {
      return await this.freteService.create(frete);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body() frete: FreteUpdateDto
    ): Promise<Frete> {
      return await this.freteService.update(id, frete);
    }
  
    @Delete(':id')
    async delete(
      @Param('id') id: number
    ): Promise<void> {
      return await this.freteService.delete(id);
    }
  }
  