class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

nodeOne = new Node(7);

nodeTwo = new Node(10);

nodeOne.next = nodeTwo;


// console.log(nodeOne)

class SLL{
    constructor(value){
        this.head = new Node(value)
    }
    add_back(value){
        if(this.head == null){
            this.head = new Node(value);
        }
        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = new Node(value)
        return this
    }
    remove_back(){
        let runner = this.head;
        while(runner.next.next){
            runner = runner.next;
        }
        runner.next = null;
        return this
    }
    back(){
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        return runner.value;
    }
    secondToLast(){
        let runner = this.head;
        while(runner.next.next){
            runner = runner.next;
        }
        return runner.value;
    }
    removeSelf(value){
        let runner = this.head;
        while(runner){
            if(runner.next.value == value){
                runner.next = runner.next.next
                return this
            }
            runner = runner.next;
        }
    }
    copy(){
        let copySLL = new SLL(this.head.value) 
        let runner = this.head.next;
        while(runner){
            copySLL.add_back(runner.value)
            copySLL.next = runner.next
            runner = runner.next;
        }
        copySLL.display()
        return copySLL;
    }
    filter(low, high){
        let runner = this.head;
        while(runner){
            if(runner == null){
                return this
            }
            if(runner.value > high){
                console.log("HIGHER", runner.value)

            }
            if(runner.value < low){
                console.log("LOW", runner.value)
            }
            runner = runner.next;
        }
        return this
    }
    display(){
        var runner = this.head
        var count = 0;
        while(runner){
            count++;
            console.log(`This is current Node ${count} containing value ${runner.value}, next is ${runner.next}`)
            runner = runner.next;
        }
        return this
    }
    add_front(value){
        let restOfList = this.head
        this.head = new Node(value);
        this.head.next = restOfList;
        return this
    }
    search_node(value){
        var runner = this.head;
        while(runner){
            if(runner.value == value){
                return true
            }
            runner = runner.next;
        }
        return false
    }
    maxMinAvg(){
        var num_of_nodes = 0;
        var returnObj = {
            'max': this.head.value,
            'min': this.head.value,
            'avg': 0,
        }
        var runner = this.head;
        while(runner){
            num_of_nodes++;
            if(runner.value > returnObj['max']){
                returnObj['max'] = runner.value;
            }
            if(runner.value < returnObj['min']){
                returnObj['min'] = runner.value;
            }
            returnObj['avg'] += runner.value;
            runner = runner.next;
        }
        returnObj['avg'] = returnObj['avg'] / num_of_nodes;
        return returnObj
    }
}

first_SLL = new SLL(7)
first_SLL.add_back(10).add_back(12).add_back(14)
// console.log(first_SLL)

first_SLL.add_front(6).add_front(5).add_back(50).add_front(22)

// console.log(first_SLL.search_node(100))
// console.log(first_SLL.search_node(50))
// first_SLL.display()
// console.log(first_SLL.maxMinAvg())
first_SLL.remove_back().display()
console.log(first_SLL.secondToLast());
// first_SLL.removeSelf(10);
first_SLL.add_back(2)
first_SLL.display()
// console.log(first_SLL.copy());
first_SLL.filter(8, 20);
first_SLL.display()