
function solution(number){
    let sum = 0;
    for(let i=3; i<number;i++) {
      sum = i%3===0 || i%5 ===0 ? sum + i : sum;
      console.log(i,sum)
    }
    return sum
}

console.log(solution(10))