let names = ['Anna', 'Beata', 'Bajsfia']

console.log(names)

console.log(names[0], names[2])

console.log(names.length)

for(let name of names){
    console.log(name)
}

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

names.push('Bögvard')

names.unshift('MaryJay')

let removedName = names.pop()
console.log(removedName)

let removedFromFirstPosition = names.shift()
console.log(removedFromFirstPosition)
console.log(names)