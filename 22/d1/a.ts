console.clear()
const decoder = new TextDecoder('utf-8')
const text = decoder.decode(Deno.readFileSync('input.txt'))

const input = text.split(/\r?\n|\r|\n/g)

const sums: number[] = []
let sum = 0

for (let i = 0; i < input.length; i++) {
  let n = parseInt(input[i])
  console.log('--', i, n, sum, sums)
  if (input[i] === '') {
    sums.push(sum)
    sum = 0
  } else {
    sum += n
  }
}

console.log('--max--', Math.max(...sums))
