function newFunction(name, age, country){
    var name = name || 'oscar'
    var age = age || 32
    var country = country || 'MX'
    console.log(name, age, country)
}

// es6

function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country)    
}

newFunction2()
newFunction2('Gabriel', 20, 'VE')

let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' +
'Donec a pretium sapien. Praesent pulvinar leo pulvinar,'

// es6

let lorem2 = `tincidunt enim eu, porttitor mauris. Suspendisse id gravida ipsum, nec molestie neque. 
Proin vitae lobortis ipsum. Integer neque justo, tristique ut erat sit amet, elementum pulvinar tellus. 
`

console.log(lorem)
console.log(lorem2)

let person = {
    'name': 'Gabriel',
    'age': 20,
    'country': 'VE'
}

console.log(person.name, person.age)

let { name, age, country } = person

console.log(name, age, country)

let team1 = ['Gabbo', 'Manuel', 'Ricardo']
let team2 = ['Valeria', 'jessica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)


{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let'
    console.log(globalLet)
}

console.log(globalVar)

const a = 'b'

a = 'a'

console.log(a)

let name = 'Gabriel'
let age = 20
// es5
obj = { name: name, age: age}
// es6
obj2 = { name, age}

console.log(obj)
console.log(obj2)

const names = [
    {name: 'Gabriel', age: 20},
    {name: 'Yessica', age: 27}
]

let listOfNames = names.map(function (item){
    console.log(item.name)
})

let listOfNames2 = names.maps(item => console.log(item.name))

const listOfNames3 = (name, age) => {
    
}

const listOfNames4 = name => {

}

const square = num => num * num

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!')
        } else{
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

class calculator {
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2,2))

import { hello } from './module'

hello()

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World'
    }
}

const generatorHello = helloWorld()

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)