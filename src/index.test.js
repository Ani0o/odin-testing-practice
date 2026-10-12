import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from ".";

describe('Capitalize string', () => {

  test('First character is capitalized', () => {
  expect(capitalize('odin test')).toBe('Odin test');
  });

  test('First character of 1 length string is capitalized', () => {
    expect(capitalize('o')).toBe('O');
  });

  test('Empty string returns empty string', () => {
    expect(capitalize('')).toBe('');
  });

});

describe('Reverse string', () => {

  test('String is reversed', () => {
    expect(reverseString('odin test')).toBe('tset nido');
  });

  test('String with length 1 is reversed', () => {
    expect(reverseString('o')).toBe('o');
  });

  test('Empty string returns empty string', () => {
    expect(reverseString('')).toBe('');
  });

});

describe('Calculator', () => {

  test('Add method returns addition', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('Subtract method returns subtraction', () => {
    expect(calculator.sub(2, 3)).toBe(-1);
  });

  test('Multiply method returns multiplication', () => {
    expect(calculator.mul(2, 3)).toBe(6);
  });

  test('Divide method returns division', () => {
    expect(calculator.div(3, 2)).toBe(1.5);
  });

});

describe('Caesar cipher', () => {

  test('Cipher works for a string', () => {
    expect(caesarCipher('odin test', 2)).toBe('qfkp vguv');
  });

  test('Text wrapping works correctly', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('Works for different case of letters', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('Cipher works for a single length string', () => {
    expect(caesarCipher('o', 2)).toBe('q');
  });

  test('Cipher works for an empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
  });

  test('Works for punctuations, spaces and other non alphabetical characters', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

});

describe('Analyze array', () => {
  
  test('Returns object with correct properties after analysis', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
  });

  test('Returns object with correct properties after analysis for negative and zero values', () => {
    expect(analyzeArray([-3, 0, 15, 4, 9])).toEqual({ average: 5, min: -3, max: 15, length: 5 });
  });

});
