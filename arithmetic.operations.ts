/**
 * Enum of operations
 */
export enum ArithmeticOperator {
    Addition,
    Subtraction,
    Multiplication,
    Exponentiation,
    Division
}

/**
 * Operation name keys
 */
type ArithmeticOperatorKeys = keyof typeof ArithmeticOperator;

/**
 * Type of operation methods
 */
export type ArithmeticOperatorType = { [key in ArithmeticOperatorKeys]: (acc: number, next: number) => number }

/**
 * Arithmetic methods
 * @implements ArithmeticOperatorType
 */
export class ArithmeticOperation implements ArithmeticOperatorType {

    /**
     * Addition operator
     * @param {number} acc
     * @param {number} next
     */
    public Addition = (acc: number, next: number): number => {
        return acc + next;
    }

    /**
     * Subtraction operator
     * @param {number} acc
     * @param {number} next
     */
    public Subtraction = (acc: number, next: number): number => {
        return acc - next;
    }

    /**
     * Multiplication operator
     * @param {number} acc
     * @param {number} next
     */
    public Multiplication = (acc: number, next: number): number => {
        return acc * next;
    }

    /**
     * Division operator
     * @param {number} acc
     * @param {number} next
     */
    public Division = (acc: number, next: number): number => {
        return acc / next;
    }

    /**
     * Exponentiation operator
     * @param {number} acc
     * @param {number} next
     */
    public Exponentiation = (acc: number, next: number): number => {
        return acc ** next;
    }
}
