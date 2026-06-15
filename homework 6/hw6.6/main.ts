let users: number[] = [10,8,-7,55,987,-1011,0,1050,0];

let result: {value:any}[] = users.map(value => {
    return {value:value}
});
console.log(result);