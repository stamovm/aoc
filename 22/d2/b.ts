console.clear()
const input = await Deno.readTextFile('./input.txt')

const inArr = input.split('\n')

let totalScore = 0
const cardValue: { [key: string]: number } = { A: 1, B: 2, C: 3 }
const winValue: { [key: string]: number } = {
  X: 0,
  Y: 3,
  Z: 6,
}

for (let i = 0; i < inArr.length - 1; i++) {
  let roundScore = 0
  const elfPlay = inArr[i][0]
  const roundResult = inArr[i][2]
  let myPlay = 'A'
  roundScore += winValue[roundResult]

  if (roundResult === 'Y') {
    myPlay = elfPlay
  } else if (roundResult === 'Z') {
    //Win
    if (elfPlay === 'A') myPlay = 'B'
    if (elfPlay === 'B') myPlay = 'C'
    if (elfPlay === 'C') myPlay = 'A'
  } else {
    //Lose
    if (elfPlay === 'A') myPlay = 'C'
    if (elfPlay === 'B') myPlay = 'A'
    if (elfPlay === 'C') myPlay = 'B'
  }

  roundScore += cardValue[myPlay]
  totalScore += roundScore

  console.log('i:' + i, inArr[i], roundScore, totalScore)
}

console.log('The score is:', totalScore)
