const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
      let count = 0;
      if (this.head === null) return 0;
      current = this.head;
      while(current) {
        count++
        current = current.next;
      }
      return count;
  }

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
    // Tu código aca:
    if(this.head === null) return null;
    let current1 = this.head;
    while (current1) {
      let current2 = current1.next
      while (current2){
        if(current1.value < current2.value) { // si current1 es menor que current2 swap them
          let aux= current2.value;
          current2.value = current1.value;
          current1.value = aux;
        }
        current2 = current2.next;
      }
      current1 = current1.next;
    }
    return this;
  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 0
   
  // 1-->2-->3-->2.5-->4   2.5 pos=1  newnodo= 2.5-->4   curr=3   
LinkedList.prototype.insert = function(data,pos) {
	if (pos >= this.size()) return 'pos excede tamaño de la lista';
  else if (pos === 0) {
    newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
    
    else {
      let count = 1;
      current = this.head;
      while (current) {
        if(count === pos) {
          newNode = new Node(data);
          newNode.next = current.next;
          current.next = newNode;
        }
        count++;
        current = current.next;
      }
    }

}
  




module.exports={
  LinkedList
}



