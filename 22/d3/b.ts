console.clear()
const input = await Deno.readTextFile('./input.txt').then((input) =>
  input.split('\n')
)
let sum = 0

for (let i = 0; i < input.length; i += 3) {
  const s1 = input[i]
  const s2 = input[i + 1]
  const s3 = input[i + 2]
  let ch = 'a'
  let priority = 0
  for (let j = 0; j < s1.length; j++) {
    const inS2 = s2.indexOf(s1[j])
    const inS3 = s3.indexOf(s1[j])
    if (inS2 !== -1 && inS3 !== -1 && s1[j].charCodeAt(0) !== 13) {
      ch = s1[j]
    }
  }
  if (ch.charCodeAt(0) < 91) {
    //upper case
    priority = ch.charCodeAt(0) - 38
  } else {
    priority = ch.charCodeAt(0) - 96
  }
  sum += priority

  console.log(i + ' to ' + (i + 3) + ')', ch, priority)
}

console.log('Result is:', sum)
