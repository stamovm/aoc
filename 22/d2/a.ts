console.clear()
const input = await Deno.readTextFile('./input.txt')
const inArr = input.split('\n')

let score = 0
const myCards: { [key: string]: number } = { X: 1, Y: 2, Z: 3 }
const playScore: { [key: string]: number } = {
  AX: 3,
  AY: 6,
  AZ: 0,
  BX: 0,
  BY: 3,
  BZ: 6,
  CX: 6,
  CY: 0,
  CZ: 3,
}

for (let i = 0; i < inArr.length - 1; i++) {
  let roundScore = 0
  const elfPlay = inArr[i][0]
  const myPlay = inArr[i][2]
  const roundPlay = elfPlay + myPlay
  roundScore += myCards[myPlay]
  roundScore += playScore[roundPlay]
  score += roundScore
}

console.log('The score is:', score)
