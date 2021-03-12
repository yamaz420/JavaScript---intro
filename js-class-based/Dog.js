import Animal from './Animal.js'

export default class Dog extends Animal{
//metoder ligger alltid i en klass,
//en funktion är som metod men skrivs utanför en klass
    sayHi(){
        return 'Woff! I am a dog called ' + this.name + '!'
    }
}