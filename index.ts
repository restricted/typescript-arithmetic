import {ArithmeticOperator} from "./arithmetic.operations";
import {Arithmetic, ArithmeticArgument} from "./arithmetic";

const {log} = console;

const arithmetic = new Arithmetic();

log('Plus: 1 + 2 + 3 = 6');
log(`Result: ${arithmetic.operation(ArithmeticOperator.Addition, '1', '2', 2, 'text', 'adas', '-3', '3')}\n`);

log('Minus: 1 - 2 - 3 = -4');
log(`Result: ${arithmetic.operation(ArithmeticOperator.Subtraction, '1', '2', 2, 'text', 'adas', '-3', '3')}\n`);

log('Multiply: 1 * 2 * 3 = 6');
log(`Result: ${arithmetic.operation(ArithmeticOperator.Multiplication, '1', '2', 2, 'text', 'adas', '-3', '3')}\n`);

log('Divide: 1 / 2 / 3 = 0.16~');
log(`Result: ${arithmetic.operation(ArithmeticOperator.Division, '1', '2', 2, 'text', 'adas', '-3', '3')}\n`);

log('Exponentiation: 2 ** 2 ** 3 = 64');
log(`Result: ${arithmetic.operation(ArithmeticOperator.Exponentiation, '2', '2', 2, 'text', 'adas', '-3', '3')}\n`);


log('Example of custom convert function to include numbers');

arithmetic.setConvertMethod((arg: ArithmeticArgument) =>
    typeof arg === 'string'
    && !isNaN(parseInt(arg, 10))
        ? parseInt(arg, 10)
        : (typeof arg === 'number' ? arg : null))

log('Plus: 1 + 2 + 2 + 3 = 8');
log(`Result: ${arithmetic.operation(ArithmeticOperator.Addition, '1', '2', 2, 'text', 'adas', '-3', '3')}\n`);

log('Example of custom filter function to include negative numbers');

arithmetic.setFilter((arg: number | null) => arg != null)

log('Plus: 1 + 2 + 2 + 3 - 3 = 5');
log(`Result: ${arithmetic.operation(ArithmeticOperator.Addition, '1', '2', 2, 'text', 'adas', '-3', '3')}\n`);
