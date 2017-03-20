const Node = require('./node');



class LinkedList {
    
    constructor() {
        this.length=0;
        // pointer to first item
        this._head = null;
       // pointer to the last item
        this._tail = null;
    }

    append(data) {
       //creating the object for the Node Class
      var node=new Node(data);

    //if truthy i.e., except for false , 0 , "" , null , undefined , and NaN 
      if(this.length)
      {
        this._tail.next=node  ;
        node.prev=this._tail;
        this._tail=node;         
      }  
      else{
           this._head=node;
           this._tail=node;       
         
      }       
      this.length++;
      return this;      
    }

    head() {
        return this._head;
        
    }

    tail() {
        return this._tail;
    }

    at(index) {
    if( index>=0 && index <this.length){
            var current=this._head;
            for (var i=0;i!=index; i++){
                current=current.next;
            }
            return current.data;

        } else{
            return false;
        }
    }

    insertAt(index, data) {
        var position = this._at(index),
        newNode = new Node(data, position.prev, position);

    position.prev = newNode;
    newNode.prev.next = newNode;
    this.length++;

    return this;
    }

    isEmpty() {
        if ( ! this.length) {
        this._head.prev = this._tail;
        this._tail.next = this._head;
      }
      else
      {
      return true;
      }
    
    }

    clear() {}

    deleteAt(index) {
         if( index>=0 && index <this.length){
            var current=this._head;
            if (this.index===0) {
                this._head=this.head.next;
                if (!this._head) {
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }

            }
            if (index===this.length-1) {
                this._tail=this._tail.prev;
                this._tail.next=null;
            } else{
            for (var i=0;i!=index; i++){
                current=current.next;
            }
            current.prev.next=current.next;
            current.next.prev=current.prev;
        }
            this.length--;
            return this;

        } else{
            return null;

        }
    }

    reverse() {
         var current = this._head, tmp;
        while (current!==null){
        tmp=current.next;
        current.next = current.prev;
        current.prev=tmp;
        current=current.prev;
        }
        tmp=this._head;
        this._head=this._tail;
        this._tail=tmp;
        return this;
    }

    indexOf(data) {
        var current = this._head, i;
        while (current!==null){
            if(current.data===data){
                return i;
            }
            current=current.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
