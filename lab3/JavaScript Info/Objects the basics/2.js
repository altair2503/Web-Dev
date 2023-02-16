//2
// let calculator = {
//     a : null,
//     b : null,
//     read(a, b){
//         this.a = a
//         this.b = b
//     },
//     sum(){
//         return this.c = this.a + this.b
//     },
//     mul(){
//       return this.sum() * 2
//     }
//
// };
//
// calculator.read(1, 2);
// alert( calculator.sum() );
// alert( calculator.mul() );

//3
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        return this.step--;
        return this
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this
    }
};


ladder.up().up().down().showStep().down().showStep();
