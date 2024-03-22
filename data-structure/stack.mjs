// First in Last Out(FILO)
// 먼저 들어간 데이터가 나중에 나오는 규칙이 있습니다.

// 스택에 어울리는 실 상황

// 1. 포토샵에서 작성시 컨트롤 z를 누를시 이전 작업으로 돌아갈수있습니다.
// 그러면 순서대로 작업한 기록이 있는데 가장 나중에 들어온 작업이 되돌아가기로 사라지게 되죠 .
// 순서를 본다면 마지막에 들어온게 가장 먼저 나가게 된 상황.

// 스택 - 추상자료형

//  push - 데이터 삽입
//  pop - 데이터 제거
//  peek - 데이터 참조
// isEmpty - 비었는지 체크

// Stack - 구현

import { LinkedList } from "./linkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }

  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (error) {
      return null;
    }
  }

  peek() {
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count == 0;
  }
}

export { Stack };
