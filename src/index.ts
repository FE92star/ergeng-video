export function add(a: number, b: number): number {
  return a + b
}

export function multiply(a: number, b: number): number {
  return a * b
}

export function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

export function swap<T, U>(turple: [T, U]): [U, T] {
  return [turple[1], turple[0]]
}

interface Lengthwise {
  length: number
}

export function loggingIdentity<T extends Lengthwise>(args: T): T {
  console.log(args.length)
  return args
}

export const tupleType: [string, boolean] = ["semlinker", true]
