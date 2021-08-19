import calculate from '../components/logic/calculate';

const obj = {
  total: 2,
  next: 10,
  operation: '+',
};

test('calculate snapshot test', () => {
  const calc = calculate(obj, '=');
  expect(calc).toMatchSnapshot();
});

test('= button returns total', () => {
  expect(calculate(obj, '=')).toStrictEqual({ next: null, operation: null, total: '12' });
});

test('AC button returns null', () => {
  expect(calculate(obj, 'AC')).toStrictEqual({ next: null, operation: null, total: null });
});

test('x button returns operation: "x"', () => {
  expect(calculate(obj, 'x')).toStrictEqual({ next: null, operation: 'x', total: '12' });
});
