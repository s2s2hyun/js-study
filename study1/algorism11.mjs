// A를 #으로

// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.
// ▣ 입력예제 1 BANANA
// ▣ 출력예제 1 B#N#N#
function solution(word) {
  let answer = "";

  const splitWord = word.split("");

  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord[i] == "A") {
      answer += "#";
    } else {
      answer += splitWord[i];
    }
  }

  return answer;
}

// function solution(word) {
//   let answer = word;

//   answer = answer.replace(/A/g, "#");

//   return answer;
// }

let str = "BANANA";
// let arrayLineTwo=[22,7,21,19,10,15,25,8,13]
console.log(solution(str));
