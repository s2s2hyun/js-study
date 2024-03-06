// 문자열 내림차순으로 배치하기
// 제출 내역
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
//    s	       return
// "Zbcdefg"	"gfedcbZ"

function solution(s) {
  let answer = "";

  let newArr = s.split("");

  // 문자열 배열을 내림차순으로 정렬하는 로직은 사전 순으로 문자들을 정렬하되, 대문자와 소문자의 ASCII 코드 값 차이에 기반하여 대소문자 구분 없이 순수하게 문자의 사전 순서로 정렬합니다.
  // ASCII 코드에서 대문자는 소문자보다 작은 값을 가지므로, 이 방식대로 정렬하면 소문자가 대문자보다 앞서게 됩니다.

  newArr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  answer = newArr.join("");

  return answer;
}

let str = "Zbcdefg";

console.log(solution(str));
