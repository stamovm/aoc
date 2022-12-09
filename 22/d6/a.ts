console.clear()
const input = await Deno.readTextFile('./input.txt').then((input) =>
  input.split('\r\n')
)
// .then((input) => input.map((line) => line.split(/,|-/)))

// const input2 = await Deno.readTextFile('./input2.txt')
//   .then((input) => input.split('\r\n'))
//   .then((input) => input.map((line) => line.split(' ')))

console.log(input)
// console.log(input2)

let result = 0
let marker = []
let firstTime = true

for (let i = 0; i < input[0].length; i++) {
  let ch = input[0][i]
  marker.push(ch)
  if (marker.length === 14) {
    if (new Set(marker).size !== marker.length) {
      marker.shift()
    } else {
      if (firstTime) {
        firstTime = false
        result = i + 1
        console.log('here->')
      }
    }
  }

  // console.log(i + ')', ch, marker)
}

console.log('Final result: ', result)

//23 wrong
