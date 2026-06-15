type User = {
    id: number,
    name: string,
    age: number,
}

const users = (): User =>{
    return {id: 1,name: 'max',age: 30};
}
const user = users();
for (let i: number = 0; i < 3; i++){
    document.write(`<ul>
    <li>${user.id}</li>
    <li>${user.name}</li>
    <li>${user.age}</li>
   </ul> `)
}