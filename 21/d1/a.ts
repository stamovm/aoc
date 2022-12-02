console.clear()
const decoder = new TextDecoder('utf-8')
const text = decoder.decode(Deno.readFileSync('input.txt'))

const input = text.split(/\s+/g).filter((w) => /[a-z0-9]/.test(w))

let count = 0

for (let i = 1; i < input.length; i++) {
  if (input[i] > input[i - 1]) {
    count++
  }

  console.log('N' + i, parseInt(input[i]), count)
}
count++
console.log('result = ', count)
//   prompt()
