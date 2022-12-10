console.clear()
const input = await Deno.readTextFile('./input.txt').then((input) =>
  input.split('\r\n')
)
// .then((input) => input.map((line) => line.split(/,|-/)))

console.log(input)
const MAX_SIZE = 100000

let sumTotal = 0

const dir = { parentDir: '/', subdirs: [], fileSizes: 0, subdirSizes: 0 }
const allDirs = []
let curentDir = '/'
let parentDir = '/'

let lsOutput = false

for (let i = 0; i < input.length; i++) {
  if (lsOutput) {
    const line = input[i].split(' ')
    if (line[0] === 'dir') {
      dir.subdirs.push(line[1])
    }
    console.log(line)
  }

  if (input[i] === '$ ls') {
    console.log('-->')
    lsOutput = true
  } else if (input[i][0] === '$') {
    lsOutput = false
    console.log('reset')
  }
  console.log(i + ')', input[i])
}

console.log('Final result: ', sumTotal)

//23 wrong
