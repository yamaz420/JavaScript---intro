export default class Person {
    pets = [] //creates new array
    constructor(name){
        this.name = name
    }
    addPet(pet) {
        this.pets.push(pet)
    }
    sayHi(){
        let greeting = "Hi my name is:" + this.name +
         "\n" + "I own the following pets:"

         for (let pet of this.pets){
             greeting += 'the' + pet.constructor.name.toLowerCase() + ' ' + pet.name + '\n'
         }
         return greeting
    }
}