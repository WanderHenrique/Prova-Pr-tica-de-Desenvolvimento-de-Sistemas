import { FreteCreateDto } from './frete-create-dto';


describe('FreteCreateDto', () => {
  it('deve criar um FreteCreateDto com valores válidos', () => {
    const freteCreateDto = new FreteCreateDto({
      empresaId: 1,
      tipoVeiculoId: 2,
      produtoId: 3,
      origem: 'São Paulo',
      destino: 'Rio de Janeiro',
      distancia: 1000,
    });

    expect(freteCreateDto.empresaId).toBe(1);
    expect(freteCreateDto.tipoVeiculoId).toBe(2);
    expect(freteCreateDto.produtoId).toBe(3);
    expect(freteCreateDto.origem).toBe('São Paulo');
    expect(freteCreateDto.destino).toBe('Rio de Janeiro');
    expect(freteCreateDto.distancia).toBe(1000);
  });

  it('deve lançar um erro se a empresaId for inválida', () => {
    expect(() => {
      new FreteCreateDto({
        empresaId: -1,
        tipoVeiculoId: 2,
        produtoId: 3,
        origem: 'São Paulo',
        destino: 'Rio de Janeiro',
        distancia: 1000,
      });
    }).toThrow();
  });
});
