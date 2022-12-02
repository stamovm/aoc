console.clear()
const decoder = new TextDecoder('utf-8')
const text = decoder.decode(Deno.readFileSync('input.txt'))

const input = text.split(/\r?\n|\r|\n/g)

const sums: number[] = []
let sum = 0

for (let i = 0; i < input.length; i++) {
  const n = parseInt(input[i])
  if (input[i] === '') {
    sums.push(sum)
    sum = 0
  } else {
    sum += n
  }
}

const max1 = Math.max(...sums)
sums.splice(sums.indexOf(max1), 1)

const max2 = Math.max(...sums)
sums.splice(sums.indexOf(max2), 1)

const max3 = Math.max(...sums)
sums.splice(sums.indexOf(max3), 1)

console.log('--max--', max1 + max2 + max3)
