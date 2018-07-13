class LinkedList {

  constructor(value) {
      this.head = null;
  }

  //Add method
  add(val){
    if (!this.head){
      this.head = new Node(val);
    }

    var runner = this.head;
    while (runner.next){
      runner = runner.next;
    }
    runner.next = new Node(val);
    return this;
  }
  //End add node

  //Display method
  display(){
    if (!this.head){
      return "Nothing to display!";
    }
    var runner = this.head;
    while(runner){
      console.log("Value: " + runner.value);
      console.log("Next: " + runner.next);
      runner = runner.next;
    }
    return this;
  }
  //End display

  //Find method
  find(value){
    if (!this.head){
      console.log("List is empty.");
    }
    var runner = this.head;
    while (runner){
      if (runner.value == value){
        console.log("Found value: " + value + " in the list.");
        return this;
      }
      runner = runner.next;
    }
    console.log("Could not find item in list.");
    return this;
  }
  //End find method

  //Insert method
  insert(value, newNodeValue){
    if (!this.head){
      console.log("List is empty.");
    }
    var temp;
    var runner = this.head;
    while (runner){
      if (runner.value == value){
        temp = runner.next;
        runner.next = new Node(newNodeValue);
        runner.next.next = temp;
        return this;
      }
      runner = runner.next;
    }
    console.log("Could not find node.");
    return this;
  }
  //End insert method

  //Find previous method
  findPrevious(value){
    if (!this.head){
      return null;
    }
    var runner = this.head;
    while(runner.next){
      if (runner.next.value == value){
        return runner;
      }
      runner = runner.next;
    }
    return null;
  }
  //End find previous method

  //Remove method
  remove(value){
    if (!this.head){
      console.log("List is empty.");
    }

    if (this.findPrevious(value)){
      var nodeBefore = this.findPrevious(value);
      nodeBefore.next = nodeBefore.next.next;
    }
    return this;
  }
  //End remove method.
}

class Node {
  constructor(value) {
    this.value=value;
    this.next=null;
  }
}