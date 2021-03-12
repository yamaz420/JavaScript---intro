import Animal from './Animal.js'

export default class Cat extends Animal{
//metoder ligger alltid i en klass,
//en funktion är som metod men skrivs utanför en klass
    sayHi(){
        return 'Meow! I am a cat called ' + this.name + '!'
    }

}