//1
// function Calculator(){
//     this.read = function (){
//       this.a = +prompt("Write a value")
//       this.b = +prompt("Write a value")
//     },
//
//     this.sum = function (){
//         return this.a + this.b
//     },
//
//      this.mul = function (){
//         return this.a * this.b
//     }
//
// }
//
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


//2
function Accumulator(init){
    this.value = init
    this.read = function (){
        this.value += +prompt("Value")
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values