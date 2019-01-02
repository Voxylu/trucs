/**
 * A little library which export utility functions. Some little things (trucs in french).
 * @author Voxylu
 * @module trucs
 * @license MIT
 */

/**
 * isInt(...) test if a number is an integer.
 * @param {number} n The number to test.
 * ```js
 * isInt(0) // true
 * isInt(5.07) // false
 * isInt(Math.PI) // false
 * ```
 */
export function isInt(n: number): boolean {
  return n % 1 === 0
}

/**
 * random() returns a number between 1 and 10 (include).
 * @param {boolean} int If false (default is true) the number returned will be a float.
 * @returns {number}
 * @example
 * ```js
 * random() // Between 1 and 10 (include)
 * random(false) // Float
 * random(100) // Between 1 and 100
 * random(0, 1) // Between 0 and 1
 * random(['un', 'deux', 'trois']) // Return either 'un', 'deux' or 'trois'
 * ```
 */
export function random(int?: boolean): number
/**
 * random(max) returns a number between 1 and max (include).
 * @param {number} max The maximum
 * @param {boolean} int If false (default is true) the number returned will be a float.
 * @returns {number}
 */
export function random(max: number, int?: boolean): number
/**
 * random(min, max) returns a number between min and max (include).
 * @param {number} min The minimum
 * @param {number} max The maximum
 * @param {boolean} int If false (default is true) the number returned will be a float.
 * @returns {number}
 */
export function random(min: number, max: number, int?: boolean): number
/**
 * random(arr) returns a random element of the array.
 * @param {Array} arr The array which one element will be returned
 */
export function random<T>(arr: T[]): T
export function random<T>(
  a?: boolean | number | T,
  b?: boolean | number,
  c?: boolean
): T | number {
  if (typeof a === 'undefined' || a === true) {
    return Math.floor(Math.random() * 10) + 1
  } else if (a === false) {
    return Math.random() * 10 + 1
  } else if (
    typeof a === 'number' &&
    (typeof b === 'undefined' || b === true)
  ) {
    return Math.floor(Math.random() * a) + 1
  } else if (typeof a === 'number' && b === false) {
    return Math.random() * a + 1
  } else if (
    typeof a === 'number' &&
    typeof b === 'number' &&
    (typeof c === 'undefined' || c === true)
  ) {
    return Math.floor(Math.random() * a) + b
  } else if (typeof a === 'number' && typeof b === 'number' && c === false) {
    return Math.random() * b + a
  } else if (a instanceof Array) {
    return a[Math.floor(Math.random() * a.length)]
  }
  throw new Error(`Unknow arguments: ${a}, ${b}, ${c}`)
}

/**
 * range(s, e) retuns an array of numbers from s to e (include).
 * @param {number} s The start of the range
 * @param {number} e The end of the range
 * @returns {Array}
 * @example
 * ```js
 * range(5, 10) // [5, 6, 7, 8, 9, 10]
 * range(0.5, 0, 1, 0, 100) // 50
 * ```
 */
export function range(s: number, e: number): number[]
/**
 * Returns e in the range r2s / r2e from the range r1s / r1e.
 * @param {number} e The element to "range"
 * @param {number} r1s The start of the first range
 * @param {number} r1e The end of the first range
 * @param {number} r2s The start of the second range
 * @param {number} r2e The end of the second range
 */
export function range(
  e: number,
  r1s: number,
  r1e: number,
  r2s: number,
  r2e: number
): number
export function range(
  a: number,
  b: number,
  c?: number,
  d?: number,
  e?: number
): number | number[] {
  if (typeof c === 'number' && typeof d === 'number' && typeof e === 'number') {
    return ((a - b) / (c - b)) * (e - d) + d
  } else {
    let arr = []
    for (let i = a; i < b + 1; i++) {
      arr.push(i)
    }
    return arr
  }
}
