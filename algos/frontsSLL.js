class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

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
    contains(value){
        let runner = this.head;
        while(runner){
            if(value == runner.value){
                console.log(`Found ${runner.value}`)
                return this;
            }
            runner = runner.next;
        }
    }
    listLength(){
        let runner = this.head;
        let len = 0;
        while(runner){
            len++;
            runner = runner.next;
        }
        console.log(len)
        return this;
    }
    maxMinAvg(){
        let runner = this.head;
        let count = 0;
        let maxMinAvgObj = {
            'min': this.head.value,
            'max': this.head.value,
            'avg': 0,
        };
        while(runner){
            count++;
            if(runner.value < maxMinAvgObj['min']){
                maxMinAvgObj['min'] = runner.value;
            }
            if(runner.value > maxMinAvgObj['max']){
                maxMinAvgObj['max'] = runner.value;
            }
            maxMinAvgObj['avg'] += runner.value;
            runner = runner.next;
        }
        maxMinAvgObj['avg'] = maxMinAvgObj['avg'] / count;
        console.log(maxMinAvgObj);
        return this;
    }
    display(){
        if(!this.head || this.length === 0){
            return null;
        }
        let count = 0
        let runner = this.head;
        while(runner){
            count++;
            console.log(`Current Node ${count} contains ${runner.value} and the next Node is ${runner.next}`);
            runner = runner.next;
        }
        return this;
    }
}


sll1 = new SLL(25).addFront(20).addFront(15).addFront(10).removeFront().addFront(150).getFront()
sll1.display();

sll1.contains(20);
sll1.contains(10);

sll1.listLength();
sll1.maxMinAvg();