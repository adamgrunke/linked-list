"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("./ListNode"));
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    add(data) {
        // Create new node with a payload of data <U>
        let node = new ListNode_1.default(data);
        // start at head
        // if null => set head to new node
        if (this.head === null) {
            this.head = node;
        }
        else {
            // else call next until current node.next = null
            // set current.next to new node
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }
    deleteAt(index) {
        // Start at head
        if (this.head == null) {
            return null;
        }
        else {
            let current = this.head;
            let previous = current;
            let count = 0;
            while (count < index && current.next) {
                previous = current;
                current = current.next;
                count++;
            }
            if (index > count) {
                return null;
            }
            else if (index == 0) {
                let data = this.head.data;
                let oldHead = this.head;
                this.head = this.head.next;
                oldHead.next = null;
                oldHead.data = null;
                return data;
            }
            else {
                let data = current.data;
                previous.next = current.next;
                current.next = null;
                // check if the data is an object before setting to null ... 
                current.data = null;
                return data;
            }
        }
        // count until index == index
        // keep track of previous node, current node, next node( if the next node exists)
        // link previous.next to next
        // return current.data
        return null;
    }
    insertAt(index, data) {
        // Create new node with a payload of data <U>
        let node = new ListNode_1.default(data);
        // Start at head
        let current = this.head;
        let previous = current;
        let count = 0;
        while (count < index && current.next) {
            previous = current;
            current = current.next;
            count++;
        }
        if (index > count) {
            return null;
        }
        else if (index == 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            node.next = current;
            previous.next = node;
            // console.log({node})
            console.log('test 3 ');
            console.log({ previous, current, node });
        }
        //  previous --> previous.next  current --> current.next
        // count until index == index
        // keep track of previous node, current node, next node (if the next node exists)
        // link previous.next to new node current
        // link current.next to 
    }
    print() {
        //print to console!
        if (this.head != null) {
            let arr = [];
            let current = this.head;
            while (current.next != null) {
                arr.push(current.data);
                current = current.next;
            }
            arr.push(current.data);
            console.log(arr);
        }
        else {
            console.log('empty list');
        }
    }
}
// test
let linky = new LinkedList();
linky.add('Hello, ');
linky.add('World!');
linky.add('Carlo');
linky.add('Larlo');
linky.add('Arlo');
linky.add('Marlo');
linky.insertAt(0, 'pizza');
linky.print();
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map