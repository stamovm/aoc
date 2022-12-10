import { print, createGrid, printGrid } from '../../functions/strings.ts'
console.clear()
const input = await Deno.readTextFile('./input.txt')
  .then((input) => input.split('\r\n'))
  .then((input) => input.map((line) => line.split(' ')))

console.log(input)

const gridSize = 30
let mid = Math.floor(gridSize / 2)
const grid = createGrid(gridSize, gridSize, 0)

let head = { x: mid, y: mid }
let tail = { x: mid, y: mid }

grid[head.y][head.x] = 'H'
grid[tail.y][tail.x] = 'T'

// console.log(grid)

const step = (dir: string) => {
  if (dir === 'U') head.y--
  if (dir === 'D') head.y++
  if (dir === 'L') head.x--
  if (dir === 'R') head.x++
  grid[head.y][head.x] = 'H'
  printGrid(grid)
  print(dir)
  prompt()
  console.clear()
}

for (let i = 0; i < input.length; i++) {
  // count++
  let n = +input[i][1]
  // console.log(n)
  for (let j = 0; j < n; j++) {
    step(input[i][0])
  }
}
printGrid(grid)
// print(i + ' ', 'red', -1)
