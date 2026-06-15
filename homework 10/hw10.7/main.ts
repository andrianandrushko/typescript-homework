type Course = {
    name: string;
    age: number;
    status: boolean;
}

let users:Course[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'max', age: 31, status: true}
];

localStorage.setItem('users',JSON.stringify(users));

function addToLocalStorage(arrayName:any, objToAdd:any): void{
    let array = JSON.parse(localStorage.getItem(arrayName) || '[]')
    array.push(objToAdd);
    localStorage.setItem(arrayName,JSON.stringify(array));
}

addToLocalStorage('users',{name: 'newUser',age:22,status: true})
addToLocalStorage('users',{name: 'newUser',age:24,status: false})