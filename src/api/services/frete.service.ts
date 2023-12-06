// src/api/services/frete.service.ts

import {
    Injectable,
    Logger,
    Repository,
  } from '@nestjs/common';
  import { Frete } from './frete.model';
  import { FreteCreateDto } from './dtos/frete.create.dto';
  import { FreteUpdateDto } from './dtos/frete.update.dto';
  
  @Injectable()
  export class FreteService {
  
    constructor(
      private readonly freteRepository: Repository<Frete>,
      private readonly logger: Logger
    ) {}
  
    async getAll(): Promise<Frete[]> {
      return await this.freteRepository.find();
    }
  
    async getById(id: number): Promise<Frete> {
      return await this.freteRepository.findOne(id);
    }
  
    async create(frete: FreteCreateDto): Promise<Frete> {
      const freteModel = new Frete();
      freteModel.empresaId = frete.empresaId;
      freteModel.tipoVeiculoId = frete.tipoVeiculoId;
      freteModel.produtoId = frete.produtoId;
  