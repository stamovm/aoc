console.clear()
const input = await Deno.readTextFile('./input.txt')
  .then((input) => input.split('\n'))
  .then((input) => input.map((line) => line.split(' ')))

console.log('input:', input)

let horizontal = 0
let depth = 0

for (let i = 0; i < input.length; i++) {
  switch (input[i][0]) {
    case 'forward':
      horizontal += +input[i][1]
      break
    case 'down':
      depth += +input[i][1]
      break
    case 'up':
      depth -= +input[i][1]
      break
    // default:
    //default statement or expression;
  }
  console.log(i + ')', input[i][0], input[i][1], horizontal, depth)
}
console.log('result:', horizontal * depth)
