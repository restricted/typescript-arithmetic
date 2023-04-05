import {ArithmeticOperation, ArithmeticOperator, ArithmeticOperatorType} from "./arithmetic.operations";

/**
 * Operation argument possible types
 */
export type ArithmeticArgument = string | number;

/**
 * Arithmetic class
 * @description Provides basic arithmetic methods
 */
export class Arithmetic {
    /**
     * Arithmetic operation instance
     * @protected
     */
    protected readonly ArithmeticOperation: ArithmeticOperation = new ArithmeticOperation();

    /**
     * Convert string to number else return null
     * @param arg
     */
    private convertValue = (arg: ArithmeticArgument): number | null => {
        return typeof arg === 'string' ? parseInt(arg, 10) : null;
    }

    /**
     * Set convert method from any argument to number or null
     * @param callback
     */
    public setConvertMethod(callback: (arg: ArithmeticArgument) => number | null): Arithmetic {
        this.convertValue = callback;

        return this;
    }

    /**
     * Filter only not null values
     * @param arg
     */
    private filter = (arg: number | null): boolean => {
        return arg != null && arg > 0;
    }

    /**
     * Set filter method to include or exclude values
     * @param {(ArithmeticArgument) => number} callback
     */
    public setFilter(callback: (arg: number | null) => boolean): Arithmetic {
        this.filter = callback;

        return this;
    }

    /**
     * Filter values and execute arithmetic method
     * @param {ArithmeticOperator} method
     * @param {ArithmeticArgument[]} args
     */
    public operation = (method: ArithmeticOperator, ...args: ArithmeticArgument[]): number => {
        return (args
            .map(this.convertValue)
            .filter(this.filter) as number[])
            .reduce(this.ArithmeticOperation[ArithmeticOperator[method] as keyof ArithmeticOperatorType])
    }
}
