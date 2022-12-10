console.clear()
const input = await Deno.readTextFile('./input.txt').then((input) =>
  input.split('\r\n')
)
console.log(input)

type Dir = {
  parent?: Dir
  files: { [name: string]: number }
  dirs: { [name: string]: Dir }
}

const fs: Dir = { files: {}, dirs: {} }

let current = fs

for (const command of input) {
  const [cmd, ...rest] = command.split(' ')

  if (cmd === '$') {
    if (rest[0] === 'cd') {
      const dir = rest[1]
      if (dir === '..') {
        current = current.parent
      }
    }
  }
}

console.log('Final result: ', result)

//23 wrong
