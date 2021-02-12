
// Generics
const adduid = (obj: object) =>{
  let uid =Math.floor(Math.random() * 100)
  return {...obj, uid}
}