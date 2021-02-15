
// Generics
const adduid = <T>(obj: T) =>{
  let uid =Math.floor(Math.random() * 100)
  return {...obj, uid}
}

let mydoc = adduid({name:'mimoza', gender: 'femele', age:39})

console.log(mydoc.name)



// Interface
interface Resource<T>{
uid: number
resourceName: string
data:T
}

const docTwo: Resource<object> = {
uid: 1,
resourceName: 'person',
data: {name: 'jelson j', gender: 'male', age: 85}
}

const docTree: Resource<string[]> = {
uid: 5,
resourceName: 'shoppingList',
data: ['honey', 'sugar', 'coffee', 'tea', 'cake', 'bread']
}
console.log(docTree)