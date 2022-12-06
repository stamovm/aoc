console.clear()
const input = await Deno.readTextFile('./input.txt')
  .then((input) => input.split('\n'))
  .then((input) => input.map((line) => line.split(/,|-/)))
// console.log(input)
let outOfRange = 0
for (let i = 0; i < input.length; i++) {
  const r1a = +input[i][0]
  const r1b = +input[i][1]
  const r2a = +input[i][2]
  const r2b = +input[i][3]

  if (r1b < r2a || r1a > r2b) {
    outOfRange++
  }
  // console.log(i + ')', input[i].length, input[i])
}

console.log('Result is: ', input.length - outOfRange)

//907
