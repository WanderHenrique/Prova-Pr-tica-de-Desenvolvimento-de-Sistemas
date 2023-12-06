import {
  Injectable,
} from '@nestjs/common';

import { DTO } from '@nestjs/common/decorators/dto';

@DTO()
export class FreteCreateDto {

  @Field()
  empresaId: number;

  @Field()
  tipoVeiculoId: number;

  @Field()
  produtoId: number;

  @Field()
  origem: string;

  @Field()
  destino: string;

  @Field()
  distancia: number;
}
