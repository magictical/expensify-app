// 파일명에 .test가 포함되면 jest에서 찾아서 테스팅할 수 있다.

const add = (a, b) => a + b ;
const generateGreeting = (name = 'anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
})


test('should generate greeting with name', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe(`Hello Mike`);
})

test('should generate greeting for anonymous', () => {
  const result = generateGreeting();
  expect(result).toBe(`Hello anonymous`);
})