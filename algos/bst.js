class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let root = new Node(8);

// console.log(root);

class BST{
    constructor(value){
        this.root = new Node(value);
    }
    add(value){
        var monkey = this.root;
        while(monkey){
            if(value > monkey.value){
                if(monkey.right){
                    monkey = monkey.right;
                }
                else{
                    monkey.right = new Node(value);
                    return this
                }
                
            }
            else {
                if(monkey.left){
                    monkey = monkey.left;
                }
                else{
                    monkey.left = new Node(value);
                    return this
                }
            }
        }
        return this
    }
    search(value){
        var monkey = this.root;
        while(monkey){
            if(monkey.value == value){
                return true
            }
            else if(value > monkey.value){
                monkey = monkey.right
            }
            else{
                monkey = monkey.left;
            }
        }
        return false
    }
}
firstBST = new BST(8);
console.log(firstBST);

firstBST.add(10).add(6).add(11).add(4).add(11).add(14).add(26).add(101).add(7);
console.log(firstBST);
console.log(firstBST.search(7));
console.log(firstBST.search(101));
console.log(firstBST.search(12));