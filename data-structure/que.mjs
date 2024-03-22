// Que

// 큐도 스택과 같이 아주 단순한 규칙을 가지고 있는 리스트입니다.
// First In First Out 먼저 들어간것이 먼저 나오게 됩니다. 스택과 반대인 구조
// 큐는 운영체제에서도 쓰입니다.
// 운영체제가 프로세스의 작업 요청을 들어온 순서대로 큐에 넣고 CPU가 순서대로 꺼내서 처리합니다.이를 운영체제에서는 FIFO 스케쥴이라고 합니다.
// 놀이공원에 줄을 기다리는 상황도 큐와 같은 상황이다.

// enqueue - 데이터삽입

// dequeue - 데이터제거

// front - 데이터참조

// isEmpty - 비었는지확인

import { DoublyLinkedList } from "./DoublylinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  enqueue(data) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (error) {
      return null;
    }
  }

  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.list.count == 0;
  }
}

export { Queue };
