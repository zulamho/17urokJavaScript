
const people = [ 
    {name: 'Sandra', age: 18}, 
    {name: 'Erin', age: 28}, 
    {name: 'Carl', age: 42}, 
    {name: 'Lloyd', age: 12}, 
    {name: 'Samuel', age: 31}, 
    {name: 'William', age: 65}, 
    {name: 'Ric', age: 53}, 
    {name: 'Mick', age: 12}, 
    {name: 'Ludwig', age: 74},
    {name: 'Hilaire', age: 10}, 
    {name: 'Menachem', age: 4}, 
    {name: 'Saul', age: 52}, 
    {name: 'Robert', age: 65}, 
    {name: 'Blair', age: 12}, 
    {name: 'Robert', age: 81}, 
    {name: 'Peter', age: 69}
];

console.log(people.find((item) => item ))
console.log(people.find((item) => item === people[people.length-1]))
console.log(people.length)
console.log(people.forEach((item,index,arr) => 
console.log(item,index)
))
console.log(people.forEach((item,index,arr) => 
console.log(item.name)
))

let minorPeople = people.filter(words => words.age < 18)
console.log(minorPeople)

let oldPeople = people.filter( grandFather => grandFather.age > 50 )
console.log(oldPeople)


let futurePeople = people.filter(ageUp => ageUp.age += 30)
console.log(futurePeople)

let deadPeople = people.map(add =>{
if ( add.age < 100 ){
  people.isDead = true
} 
else{
  people.isDead = false
}
return
})
console.log(people.forEach((item,index,arr) => 
console.log(item,index)
))


const shterben = people.map(hanma => {
if(hanma.age > 100){
  hanma.dead = true
  console.log(hanma)
}
else{
  hanma.dead = false
  console.log(hanma)
}
})


