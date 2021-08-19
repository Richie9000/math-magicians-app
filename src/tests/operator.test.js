import operate from '../components/logic/operator';

 test('test sum', () => {
     expect(operate(2, 2, '+')).toBe('4');
 })

 test('test rest', () => {
     expect(operate(9, 5, '-')).toBe('4');
 })

 test('test multiply', () => {
     expect(operate(11, 2, 'x')).toBe('22');
 })

 test('test division', () => {
    expect(operate(25, 5, '÷')).toBe('5');
 })
 

