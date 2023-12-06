import { ProdutoCreateDto } from './produto-create-dto';

describe('ProdutoCreateDto', () => {
  it('deve criar um ProdutoCreateDto com valores válidos', () => {
    const produtoCreateDto = new ProdutoCreateDto({
      nome: 'Produto 1',
      descricao: 'Descrição do produto 1',
      valor: 100,
      quantidade: 10,
    });

    expect(produtoCreateDto.nome).toBe('Produto 1');
    expect(produtoCreateDto.descricao).toBe('Descrição do produto 1');
    expect(produtoCreateDto.valor).toBe(100);
    expect(produtoCreateDto.quantidade).toBe(10);
    expect(produtoCreateDto.tipo).toBe(ProdutoCreateDto.Tipo.NOVO);
  });

  it('deve lançar um erro se o nome for vazio', () => {
    expect(() => {
      new ProdutoCreateDto({
        nome: '',
        descricao: 'Descrição do produto 1',
        valor: 100,
        quantidade: 10,
      });
    }).toThrow(new Error('O nome do produto é obrigatório.'));
  });
});
