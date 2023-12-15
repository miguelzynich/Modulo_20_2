const app = require('../app');

describe('Testes para a Calculadora', () => {
  it('Deve realizar uma soma correta', () => {
    const result = app.calculate({ operation: '+', num1: 2, num2: 3 });
    expect(result).toBe(5);
  });

  it('Deve realizar uma subtração correta', () => {
    const result = app.calculate({ operation: '-', num1: 5, num2: 3 });
    expect(result).toBe(2);
  });

  it('Deve realizar uma multiplicação correta', () => {
    const result = app.calculate({ operation: '*', num1: 2, num2: 3 });
    expect(result).toBe(6);
  });

  it('Deve realizar uma divisão correta', () => {
    const result = app.calculate({ operation: '/', num1: 6, num2: 2 });
    expect(result).toBe(3);
  });

  it('Deve lidar com uma operação inválida', () => {
    const result = app.calculate({ operation: 'invalid', num1: 2, num2: 3 });
    expect(result).toBe('Invalid operation');
  });

  it('Deve lidar com a divisão por zero', () => {
    const result = app.calculate({ operation: '/', num1: 5, num2: 0 });
    expect(result).toBe('Cannot divide by zero');
  });

  it('Deve lidar com o caminho feliz', () => {
    const result = app.calculate({ operation: '+', num1: 2, num2: 3 });
    expect(result).toBe(5);
  });

  it('Deve lidar com erro ao tentar somar uma string', () => {
    const result = app.calculate({ operation: '+', num1: 'abc', num2: 3 });
    expect(result).toBe('Invalid input');
  });
});
