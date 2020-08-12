
class Stack {
    constructor(props) {
        this.data = []
    }

    empty(){
        if (this.data.length === 0){
            return true
        } else {
            return false
        }
    }

    size(){
        return this.data.length;
    }

    top(){
        return this.data[this.data.length - 1];
    }

    pop(){
        let tmp = [];
        for (let i = 0; i < this.data.length-1; i++){
            tmp.push(this.data[i]);
        }
        this.data = tmp;
    }

    push(x){
        this.data.push(x);
    }


}

let test = new Stack();

test.push(3);
test.push(31);
test.push(32);
console.log(test.empty());
console.log(test.top());
test.push(52);
test.push(82);
console.log(test.data);
console.log(test.top());
test.pop();
console.log(test.top());
console.log(test.data);
