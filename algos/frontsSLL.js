// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

class SLL{
    constructor(value){
        this.head = new Node(value);
    }
    addFront(value){
        let restOfList = this.head;
        this.head = new Node(value);
        this.head.next = restOfList;
        return this;
    }
    removeFront(){
        if(!this.head || this.length === 0){
            return null;
        }
        let newFront = this.head.next;
        this.head = newFront;
        return this;
    }
    getFront(){
        if(!this.head || this.length === 0){
            return null;
        }
        console.log("Front:", this.head.value)
        return this;
    }
    display(){
        if(!this.head || this.length === 0){
            return null;
        }
        let runner = this.head;
        while(runner){
            console.log(runner.value);
            runner = runner.next;
        }
        return this;
    }
}


sll1 = new SLL(25).addFront(20).addFront(15).addFront(10).removeFront().addFront(150).getFront()
sll1.display()

//test if no head
sll2 = new SLL(25).removeFront()
sll2.getFront()
sll2.display()