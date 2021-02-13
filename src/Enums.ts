
// Enums
enum ResourceType {MOVIE, PERSON, AUTHOR, DVD, CD}
interface Resource<T>{
uid: number;
resourceType: ResourceType;
data: T;
}

const docFive: Resource<object> = {
uid: 6,
resourceType: ResourceType.DVD,
data: {title: 'best love'}
}
const docSix: Resource<object> = {
uid: 11,
resourceType: ResourceType.MOVIE,
data: {name: 'jemol'}
}