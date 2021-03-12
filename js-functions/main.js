//code outside classes:
function sayHi(personName) {
    return 'Hi, ' + personName
}
console.log(sayHi('Anna'))
console.log(sayHi('Jonte'))

function addTwoNumbers(a,b){
    let sum = a + b
    return sum
}
console.log(addTwoNumbers(2,3))

function sayHiTimes(times){
    for (let i = 0; i<times; i++){
        console.log('Hi!', i)
    }
}
sayHiTimes(5)
//math operators is the same as in java

let aNumber = 1 
aNumber = aNumber +1
console.log(aNumber)