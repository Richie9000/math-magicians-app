import operate from '../components/logic/operator';

test('test sum of 2 + 2', () => {
  expect(operate(2, 2, '+')).toBe('4');
});

test('test subtraction of 9 - 5', () => {
  expect(operate(9, 5, '-')).toBe('4');
});

test('test multiplication of 11 x 2', () => {
  expect(operate(11, 2, 'x')).toBe('22');
});

test('test division of 25 / 5', () => {
  expect(operate(25, 5, '÷')).toBe('5');
});

test('operate snapshot test', () => {
  const calc = operate(1, 1, '+');
  expect(calc).toMatchSnapshot();
});
