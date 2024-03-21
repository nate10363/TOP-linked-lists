/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
/* eslint-disable no-useless-return */
/* eslint-disable no-lonely-if */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-new */
/* eslint-disable no-console */
const listsContainer = document.getElementById('lists-container');
const generateListBtn = document.getElementById('generate-list-btn');
const nodeInput = document.getElementById('node-input');
const appendNodeBtn = document.getElementById('append-node-btn');
const prependNodeBtn = document.getElementById('prepend-node-btn');
const nodeInsertInput = document.getElementById('node-insert-input');
const insertNodeBtn = document.getElementById('insert-node-btn');
const deleteNodeBtn = document.getElementById('delete-node-btn');

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;

    this.append = function (val) {
      const newNode = !Number(val) ? new ListNode(val) : new ListNode(Number(val));
      // let node = this.head;

      if (this.head === null) {
        this.head = newNode;
        return;
      }
      return this.getTail().next = newNode;
      // return node = newNode;
    };

    this.prepend = function (val) {
      const newNode = !Number(val) ? new ListNode(val) : new ListNode(Number(val));

      if (this.head == null) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
        return head;
      }
    };

    this.getSize = function () {
      let count = 0;
      let node = this.head;
      while (node) {
        count++;
        node = node.next;
      }
      return count;
    };

    this.getHead = function () {
      return this.head;
    };

    this.getTail = function () {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      return node;
    };

    this.atIndex = function (index) {
      let node = this.head;
      let count = 0;
      while (node) {
        if (count === index) {
          return node;
        }
        count++;
        node = node.next;
      }
    };

    this.pop = function () {
      let node = this.head;
      while (node.next.next) {
        node = node.next;
      }
      return node.next = null;
    };

    this.contains = function (val) {
      let node = this.head;
      while (node) {
        if (node.data === val) {
          return true;
        }
        node = node.next;
      }
      return false;
    };

    this.find = function (val) {
      let node = this.head;
      let count = 0;

      while (node) {
        if (node.data === val) {
          return count;
        }
        count++;
        node = node.next;
      }
      return null;
    };

    this.toString = function () {
      let str = '';
      let node = this.head;
      while (node) {
        str += `( ${node.data} ) -> `;
        node = node.next;
      }
      str += ' null';
      return listsContainer.textContent = str;
    };

    this.insertAt = function (value, index) {
      const newNode = !Number(value) ? new ListNode(value) : new ListNode(Number(value));
      // const newNode = new ListNode(value);

      if (this.head == null) {
        return this.head = newNode;
      }

      if (index > this.getSize()) {
        return this.append(value);
      }

      if (index < 0) {
        return console.log('enter valid number');
      }

      let count = 0;
      let node = this.head;
      let prevNode;

      for (let i = 0; i <= index; i++) {
        if (count == Number(index)) {
          newNode.next = node;
          return prevNode.next = newNode;
        }
        count++;
        prevNode = node;
        node = node.next;
      }
    };

    this.removeAt = function (index) {
      let count = 0;
      let node = this.head;
      let prevNode;

      if (index > this.getSize()) {
        return console.log(`Please enter a value from 0 to ${this.getSize() - 1}`);
      }

      if (count == index) {
        this.head = this.head.next;
        return this.toString();
      }

      if (index == this.getSize() - 1) {
        this.pop();
        return this.toString();
      }

      for (let i = 0; i <= index; i++) {
        if (count == index) {
          prevNode.next = node.next;
          return this.toString();
        }
        count++;
        prevNode = node;
        node = node.next;
      }
    };
  }
}

let list = new LinkedList();

listsContainer.textContent = list.toString();

generateListBtn.addEventListener('click', () => {
  console.log(list);
});

nodeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    list.append(nodeInput.value);
    list.toString();
    nodeInput.value = '';
  }
});

appendNodeBtn.addEventListener('click', () => {
  list.append(nodeInput.value);
  list.toString();
  nodeInput.value = '';
});

prependNodeBtn.addEventListener('click', () => {
  list.prepend(nodeInput.value);
  list.toString();
  nodeInput.value = '';
});

insertNodeBtn.addEventListener('click', () => {
  list.insertAt(nodeInput.value, nodeInsertInput.value);
  list.toString();
});

deleteNodeBtn.addEventListener('click', () => {
  list.removeAt(nodeInsertInput.value);
});
