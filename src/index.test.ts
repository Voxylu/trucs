import { random, isInt, range } from '.'

describe('isInt()', () => {
  test('isInt() -> Works correctly.', () => {
    expect(isInt(0)).toBeTruthy()
    expect(isInt(1.5)).toBeFalsy()
    expect(isInt(8.761)).toBeFalsy()
    expect(isInt(795300)).toBeTruthy()
  })
})

describe('random()', () => {
  test('random() -> Returns a random integer between 1 and 10 (include).', () => {
    // Better test to come
    let num = random()
    let numType = isInt(num)
    expect(num).toBeGreaterThan(0)
    expect(num).toBeLessThan(11)
    expect(numType).toBe(true)
  })
  test('random(false) -> Returns a random float between 1 and 10 (include).', () => {
    // Better test to come
    let num = random(false)
    let numType = isInt(num)
    expect(num).toBeGreaterThan(0)
    expect(num).toBeLessThan(11)
    expect(numType).toBe(false)
  })
  test('random(max) -> Returns a random interger between 1 and max (include).', () => {
    // Better test to come
    let num1 = random(100)
    let num1Type = isInt(num1)
    expect(num1).toBeGreaterThan(0)
    expect(num1).toBeLessThan(101)
    expect(num1Type).toBe(true)
    let num2 = random(2)
    let num2Type = isInt(num2)
    expect(num2).toBeGreaterThan(0)
    expect(num2).toBeLessThan(3)
    expect(num2Type).toBe(true)
    let num3 = random(5)
    let num3Type = isInt(num3)
    expect(num3).toBeGreaterThan(0)
    expect(num3).toBeLessThan(6)
    expect(num3Type).toBe(true)
  })
  test('random(max, false) -> Returns a random float between 1 and max (include).', () => {
    // Better test to come
    let num1 = random(100, false)
    let num1Type = isInt(num1)
    expect(num1).toBeGreaterThan(0)
    expect(num1).toBeLessThan(101)
    expect(num1Type).toBe(false)
    let num2 = random(2, false)
    let num2Type = isInt(num2)
    expect(num2).toBeGreaterThan(0)
    expect(num2).toBeLessThan(3)
    expect(num2Type).toBe(false)
    let num3 = random(5, false)
    let num3Type = isInt(num3)
    expect(num3).toBeGreaterThan(0)
    expect(num3).toBeLessThan(6)
    expect(num3Type).toBe(false)
  })
  test('random(min, max) -> Returns a random integer between min and max (include).', () => {
    // Better test to come
    let num1 = random(0, 1)
    let num1Type = isInt(num1)
    expect(num1).toBeGreaterThan(-1)
    expect(num1).toBeLessThan(2)
    expect(num1Type).toBe(true)
    let num2 = random(-200, 200)
    let num2Type = isInt(num2)
    expect(num2).toBeGreaterThan(-201)
    expect(num2).toBeLessThan(201)
    expect(num2Type).toBe(true)
  })
  test('random(min, max, false) -> Returns a random float between min and max (include).', () => {
    // Better test to come
    let num1 = random(0, 1, false)
    let num1Type = isInt(num1)
    expect(num1).toBeGreaterThan(-1)
    expect(num1).toBeLessThan(2)
    expect(num1Type).toBe(false)
    let num2 = random(-200, 200, false)
    let num2Type = isInt(num2)
    expect(num2).toBeGreaterThan(-201)
    expect(num2).toBeLessThan(201)
    expect(num2Type).toBe(false)
    let num3 = random(0.1, 0.9, false)
    let num3Type = isInt(num3)
    expect(num1).toBeGreaterThan(0)
    expect(num1).toBeLessThan(1)
    expect(num3Type).toBe(false)
  })
  test('random(arr) -> Returns a element of the array randomly.', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let num1 = random(arr)
    expect(num1).toBeGreaterThan(0)
    expect(num1).toBeLessThan(10)
    let num2 = random(arr)
    expect(num2).toBeGreaterThan(0)
    expect(num2).toBeLessThan(10)
  })
  test('Throw an error when the arguments are wrong', () => {
    // @ts-ignore
    expect(() => random('un', [])).toThrow()
  })
})

describe('range()', () => {
  test('range(s,e) -> Returns an array from s to e.', () => {
    const r = range(5, 10)
    expect(r).toEqual([5, 6, 7, 8, 9, 10])
  })
  test('range(e, r1s, r1e, r2s, r2e) -> Returns e in the range r2s / r2e from the range r1s / r1e.', () => {
    expect(range(0.5, 0, 1, 0, 100)).toBe(50)
    expect(range(0, 0, 100, 5, 8)).toBe(5)
    expect(range(5, 0, 10, 0, 1)).toBe(0.5)
  })
})
