import { range, isInt, random } from '../src'

console.log(isInt(15))
// => true

console.log(isInt(Math.PI))
// => false

console.log(random())
// Integer between 1 and 10 (include)

console.log(random(false))
// Float between 1 and 10

random()

console.log(random(100))
// Between 1 and 100

console.log(random(0, 1))
// Between 0 and 1

console.log(random(['un', 'deux', 'trois']))
// Return either 'un', 'deux' or 'trois'

console.log(range(5, 10))
// => [5, 6, 7, 8, 9, 10]

console.log(range(10, 0, 400, -200, 200))
// => -190
