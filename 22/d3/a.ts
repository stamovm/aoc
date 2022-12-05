console.clear()
const input = await Deno.readTextFile('./input.txt').then((input) =>
  input.split('\r\n')
)

let sum = 0

for (let i = 0; i < input.length; i++) {
  const middle = Math.floor(input[i].length / 2)
  const s1 = input[i].slice(0, middle)
  const s2 = input[i].slice(middle)
  let ch = ''
  let priority = 0
  for (let j = 0; j < s1.length; j++) {
    const findCh = s2.indexOf(s1[j])
    if (findCh !== -1) {
      ch = s2[findCh]
    }
  }
  if (ch.charCodeAt(0) < 91) {
    //upper case
    priority = ch.charCodeAt(0) - 38
  } else {
    priority = ch.charCodeAt(0) - 96
  }
  sum += priority
  // console.log(i + ')', input[i].length, priority, sum, s1, s2)
}
console.log('Result is:', sum)
