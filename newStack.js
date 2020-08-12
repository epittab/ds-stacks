
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add

    push(value){

        // create node
        let newNode = new Node(value);
        
        if (this.size === 0 ) {
            //special edge case
            this.last = newNode;
        } else {
            //general case
            newNode.next = this.first
        }
        //shared logic
        this.first = newNode;
        this.size++;
        return this.size;
    }

    //remove
    pop(){

        let poppedItem = this.first; 

        // or poppedItem = this.first.value; in order to eliminate reference back into stack

        if (this.size === 0) return null;
        if (this.size === 1) {
            this.first = null;
            this.last = null; 
        } else {
            this.first = this.first.next
            poppedItem.next = null;
        }
        this.size--;
        return poppedItem.value;
    }



}

