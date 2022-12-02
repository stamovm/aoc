console.clear()

const input = await Deno.readTextFile('./input.txt')

const inputArr = input.split('\n').map(Number)

let count = 0

for (let i = 1; i < inputArr.length; i++) {
  if (
    inputArr[i - 1] + inputArr[i] + inputArr[i + 1] <
    inputArr[i] + inputArr[i + 1] + inputArr[i + 2]
  ) {
    count++
  }
  console.log('i:' + i, inputArr[i], count)
}

console.log('result = ', count)

//227 too low
