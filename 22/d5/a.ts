console.clear()
const input = await Deno.readTextFile('./input.txt').then((input) =>
  input.split('\r\n')
)
// .then((input) => input.map((line) => line.split(/,|-/)))

const input2 = await Deno.readTextFile('./input2.txt')
  .then((input) => input.split('\r\n'))
  .then((input) => input.map((line) => line.split(' ')))

console.log(input)
// console.log(input2)

const stacks: any = [[], [], [], [], [], [], [], [], [], []]

for (let i = input.length - 1; i >= 0; i--) {
  // console.log('-->' + input[i])
  let stackNumber = 1
  for (let j = 1; j < input[i].length; j += 4) {
    const crate = input[i][j].trim()
    if (crate) stacks[stackNumber].push(crate)
    // console.log(input[i][j])
    stackNumber++
  }
}
console.log(stacks)

for (let i = 0; i < input2.length; i++) {
  const amount = input2[i][1]
  const from = input2[i][3]
  const to = input2[i][5]
  console.log(i + ')', amount, from, to)
  for (let j = 1; j <= +amount; j++) {
    const crate = stacks[from].pop()
    stacks[to].push(crate)
  }
}

for (let i = 1; i < stacks.length; i++) {
  console.log(i, stacks[i].join('-'))
}

let result = ''
for (let i = 1; i < stacks.length; i++) {
  result += stacks[i][stacks[i].length - 1]
}
console.log('Final result: ', result)

// console.log('Result is: ', input.length)
