import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Test template strings', () => {
  test('test in getSaludo return name ', () => {
    const name='Kakaroto';
    const saludo=getSaludo(name);
    expect(saludo).toBe('Hello '+name);
  })
  test('test in getSaludo return Saitama ifnot name ', () => {
    const saludo=getSaludo();
    expect(saludo).toBe('Hello Saitama');
  })
  
})
