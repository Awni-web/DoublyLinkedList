import DoublyLinkedList from "./DoublyLinkedList.js";

const list = new DoublyLinkedList();

list.push(5);
list.push(10);
list.unshift(1);

// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));

// list.set(1, 15);
// console.log(list.get(1));

list.insert(1, 12);
// console.log(list.get(1));
console.log(list.get(2).data);

// list.remove(1);
// console.log(list.get(1));

// list.pop();
// console.log(list.tail);

// list.shift();
// console.log(list.get(0));
