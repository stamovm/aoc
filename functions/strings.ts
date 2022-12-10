//example:
//import { showStringCodes } from '../../functions/strings.ts'

export function showStringCodes(str: string, showNumbers = true) {
  const arr = []
  for (let i = 0; i < str.length; i++) {
    if (showNumbers) arr.push([i, str.charAt(i), str.charCodeAt(i)])
    else arr.push([str.charAt(i), str.charCodeAt(i)])
  }
  console.log('------------------------------------------')
  console.log(arr)
  console.log(str)
  console.log('------------------------------------------')
}

export function print(str = '----------', color = 'white', repeat = 1) {
  let newLine = repeat < 0
  if (!arguments.length) newLine = true
  repeat = Math.abs(repeat)
  for (let i = 0; i < repeat; i++) {
    switch (color) {
      case 'red':
        Deno.stdout.writeSync(new TextEncoder().encode('\x1b[31m' + str))
        break
      case 'green':
        Deno.stdout.writeSync(new TextEncoder().encode('\x1b[32m' + str))
        break
      case 'blue':
        Deno.stdout.writeSync(new TextEncoder().encode('\x1b[34m' + str))
        break
      case 'magenta':
        Deno.stdout.writeSync(new TextEncoder().encode('\x1b[35m' + str))
        break
      case 'cyan':
        Deno.stdout.writeSync(new TextEncoder().encode('\x1b[36m' + str))
        break
      default:
        Deno.stdout.writeSync(new TextEncoder().encode('\x1b[37m' + str))
    }
  }
  if (newLine) Deno.stdout.writeSync(new TextEncoder().encode('\n'))
}

export function createGrid(
  height: number,
  width: number,
  val: number | string
) {
  const arr: any[] = []
  for (let i = 0; i < height; i++) {
    arr[i] = []
    for (let j = 0; j < width; j++) {
      arr[i][j] = val
    }
  }
  return arr
}

export function printGrid(grid: [][]) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x]) print(grid[y][x] + ' ', 'cyan')
      else print(grid[y][x] + ' ')
    }
    print('\n')
  }
}
