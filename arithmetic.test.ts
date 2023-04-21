import {describe, expect, test} from '@jest/globals';
import {Arithmetic, ArithmeticArgument} from "./arithmetic";
import {ArithmeticOperator} from "./arithmetic.operations";

const arithmetic = new Arithmetic();

const testCase = ['2', '2', 2, 'text', 'adas', '-3', '3'];
describe('Arithmetic module', () => {
    test('add', () => {
        expect(arithmetic.operation(ArithmeticOperator.Addition, ...testCase)).toBe(7);
    });

    test('subtract', () => {
        expect(arithmetic.operation(ArithmeticOperator.Subtraction, ...testCase)).toBe(-3);
    });

    test('multiply', () => {
        expect(arithmetic.operation(ArithmeticOperator.Multiplication, ...testCase)).toBe(12);
    });

    test('divide', () => {
        expect(arithmetic.operation(ArithmeticOperator.Division, ...testCase)).toBeLessThan(1);
    });

    test('exponent', () => {
        expect(arithmetic.operation(ArithmeticOperator.Exponentiation, ...testCase)).toBe(64);
    });

    test('custom method', () => {
        const arithmeticLocal = new Arithmetic();

        arithmeticLocal.setConvertMethod((arg: ArithmeticArgument) =>
            typeof arg === 'string'
            && !isNaN(parseInt(arg, 10))
                ? parseInt(arg, 10)
                : (typeof arg === 'number' ? arg : null))

        expect(arithmeticLocal.operation(ArithmeticOperator.Addition, ...testCase)).toBe(9);
    });

    test('custom filter', () => {
        const arithmeticLocal = new Arithmetic();

        arithmeticLocal.setConvertMethod((arg: ArithmeticArgument) =>
            typeof arg === 'string'
            && !isNaN(parseInt(arg, 10))
                ? parseInt(arg, 10)
                : (typeof arg === 'number' ? arg : null))

        arithmeticLocal.setFilter((arg: number | null) => arg != null)

        expect(arithmeticLocal.operation(ArithmeticOperator.Addition, ...testCase)).toBe(6);
    });
});
