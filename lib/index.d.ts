export declare function add(a: number, b: number): number;
export declare function multiply(a: number, b: number): number;
export declare function createArray<T>(length: number, value: T): Array<T>;
export declare function swap<T, U>(turple: [T, U]): [U, T];
interface Lengthwise {
    length: number;
}
export declare function loggingIdentity<T extends Lengthwise>(args: T): T;
export declare const tupleType: [string, boolean];
export {};
