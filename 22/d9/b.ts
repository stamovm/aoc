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
  const up = column.slice(0, y).reverse()
  const down = column.slice(y + 1)
  const left = input[y].slice(0, x).reverse()
  const right = input[y].slice(x + 1)

  // const upVisible = Math.max(...up) < height
  // const downVisible = Math.max(...down) < height
  // const leftVisible = Math.max(...left) < height
  // const rightVisible = Math.max(...right) < height

  const calcDistance = (arr: number[], num = height) => {
    let distance = arr.length
    for (let i = 0; i < num; i++) {
      if (arr[i] >= num) {
        distance = i + 1
        break
      }
    }
    return distance
  }

  const upScore = calcDistance(up)
  const downScore = calcDistance(down)
  const leftScore = calcDistance(left)
  const rightScore = calcDistance(right)

  // console.log('-->', height, y, x)
  // console.log('up)', upScore, up)
  // console.log('down)', downScore, down)
  // console.log('left)', leftScore, left)
  // console.log('right)', rightScore, right)
  // prompt()

  const scenicScore = upScore * downScore * leftScore * rightScore
  return scenicScore
}
let maxScore = 0
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    const scScore = testVisibility(i, j, input[i][j])

    if (scScore > maxScore) maxScore = scScore
    // console.log('-->', i, j, input[i][j], scScore)
  }
}

// console.log('-------------------', testVisibility(1, 1, input[1][1]))
console.log(`len ${l}, hight ${h}`)
console.log('Final result: ', maxScore)

//wrong 4651200
//wrong 342160
// correct 335580
