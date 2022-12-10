console.clear()
const input = await Deno.readTextFile('./input2.txt')
  .then((input) => input.split('\r\n'))
  .then((input) => input.map((line) => line.split('').map(Number)))

// console.log(input)

const l = input[0].length
const h = input.length
const edgeTrees = 2 * l + 2 * h - 4

function testVisibility(y: number, x: number, height: number) {
  const column: number[] = []
  input.forEach((_e, i) => column.push(input[i][x]))
  const up = column.slice(0, y)
  const down = column.slice(y + 1)
  const left = input[y].slice(0, x)
  const right = input[y].slice(x + 1)

  // console.log('up)', up)
  // console.log('down)', down)
  // console.log('left)', left)
  // console.log('right)', right)

  let upVisible = Math.max(...up) < height
  let downVisible = Math.max(...down) < height
  let leftVisible = Math.max(...left) < height
  let rightVisible = Math.max(...right) < height

  // console.log('left-->:', Math.max(left,)<h)
  // console.log('h:', height)
  // console.log('left', leftVisible)
  // console.log('right', rightVisible)
  // console.log(`up ${upVisible} \ndown ${downVisible}`)

  return leftVisible || rightVisible || upVisible || downVisible
}
let count = 0
for (let i = 1; i < input.length - 1; i++) {
  for (let j = 1; j < input[0].length - 1; j++) {
    if (testVisibility(i, j, input[i][j])) count++
  }
}

// console.log('-------------------', testVisibility(1, 1, input[1][1]))
console.log(`len ${l}, hight ${h}`)
console.log('Final result: ', edgeTrees + count)
