console.clear()

const input = await Deno.readTextFile('./input.txt')

const inputArr = input.split('\n').map(Number)

let count = 0

for (let i = 1; i < inputArr.length - 1; i++) {
  if (inputArr[i] > inputArr[i - 1]) {
    count++
  }
}

console.log('result = ', count)
