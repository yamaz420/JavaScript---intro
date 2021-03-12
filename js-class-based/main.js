import Cat from './Cat.js'
import Dog from './Dog.js'
import Person from './Person.js'

let anna = new Person('Anna')
let maja = new Cat('Maja Gräddnos')
let lassie = new Dog('Lassie')

console.log(maja.sayHi())

anna.addPet(maja)
anna.addPet(lassie)



