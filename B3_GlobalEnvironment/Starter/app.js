function solution(number){
  let sumOfNum = 0
  for (let i = number - 1; 0 < i; i--  ) {  
    if (i % 3 === 0 || i % 5 === 0) {
      sumOfNum += i
    }
  }
  return sumOfNum
}

console.log(solution(-1))

