import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity()
  export class Frete {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    empresaId: number;
  
    @Column()
    tipoVeiculoId: number;
  
    @Column()
    produtoId: number;
  
    @Column()
    origem: string;
  
    @Column()
    destino: string;
  
    @Column()
    distancia: number;
  
    @Column()
    valorFrete: number;
  
    @Column()
    taxa: number;
  
    @Column()
    valorRecebido: number;
  
    @Column()
    status: string;
  
    @OneToOne(() => TipoVeiculo, {
      joinColumn: {
        name: 'tipoVeiculoId',
      },
    })
    tipoVeiculo: TipoVeiculo;
  
    @ManyToOne(() => Produto, {
      joinColumn: {
        name: 'produtoId',
      },
    })
    produto: Produto;
  
    constructor(
      id: number,
      empresaId: number,
      tipoVeiculoId: number,
      produtoId: number,
      origem: string,
      destino: string,
      distancia: number,
      valorFrete: number,
      taxa: number,
      valorRecebido: number,
      status: string
    ) {
      this.id = id;
      this.empresaId = empresaId;
      this.tipoVeiculoId = tipoVeiculoId;
      this.produtoId = produtoId;
      this.origem = origem;
      this.destino = destino;
      this.distancia = distancia;
   
  