type Users = {
    id: number;
    name: string;
    age: number;
}
let users:Users[]= [
    {id: 1,name: 'Andriy',age:18},
    {id: 2,name: 'Oleg',age: 25},
    {id: 3,name: 'Max', age:30},
    {id: 4,name: 'Ivan',age: 22},
    {id: 5,name: 'Anna',age: 19}
];

Array.prototype.myForEach = function (callback: any): any{
    for (let i: number = 0; i < this.length; i++){
        callback(this[i],i,this);
    }
}

Array.prototype.myFilter = function (callback:any): any{
    let result = [];

    for (let i: number = 0; i < this.length;i++){
        if (callback(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result;
}

users.myForEach(function (user: any):void{
    console.log(user.name)
});

let adults = users.myFilter(function (user:any):any{
    return user.age >=10;
})
console.log(adults);