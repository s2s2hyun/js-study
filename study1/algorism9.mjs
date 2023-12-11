// forEach , map , filter , reducer 메소드 작동

function solution(arr) {
  // forEach , map , filter , reducer

  a = [10, 11, 12, 13, 14, 15];

  let answer = a.forEach(
    function (v, i) {
      console.log(v, i, this);
    },
    [1, 2]
  );

  return answer;
}
