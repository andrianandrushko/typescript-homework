type User = {
    name: string;
    age: number;
}

const users: User[] = [
    {name: 'user1', age: 18},
    {name: 'user2', age: 19},
    {name: 'user3', age: 20},
    {name: 'user4', age: 21},
    {name: 'user5', age: 22},
    {name: 'user6', age: 23},
    {name: 'user7', age: 24},
    {name: 'user8', age: 25},
    {name: 'user9', age: 26},
    {name: 'user10', age: 27},
    {name: 'user11', age: 28},
    {name: 'user12', age: 29},
    {name: 'user13', age: 30},
    {name: 'user14', age: 31},
    {name: 'user15', age: 32},
    {name: 'user16', age: 33},
    {name: 'user17', age: 34},
    {name: 'user18', age: 35},
    {name: 'user19', age: 36},
    {name: 'user20', age: 37},
    {name: 'user21', age: 18},
    {name: 'user22', age: 19},
    {name: 'user23', age: 20},
    {name: 'user24', age: 21},
    {name: 'user25', age: 22},
    {name: 'user26', age: 23},
    {name: 'user27', age: 24},
    {name: 'user28', age: 25},
    {name: 'user29', age: 26},
    {name: 'user30', age: 27},
    {name: 'user31', age: 28},
    {name: 'user32', age: 29},
    {name: 'user33', age: 30},
    {name: 'user34', age: 31},
    {name: 'user35', age: 32},
    {name: 'user36', age: 33},
    {name: 'user37', age: 34},
    {name: 'user38', age: 35},
    {name: 'user39', age: 36},
    {name: 'user40', age: 37},
    {name: 'user41', age: 18},
    {name: 'user42', age: 19},
    {name: 'user43', age: 20},
    {name: 'user44', age: 21},
    {name: 'user45', age: 22},
    {name: 'user46', age: 23},
    {name: 'user47', age: 24},
    {name: 'user48', age: 25},
    {name: 'user49', age: 26},
    {name: 'user50', age: 27},
    {name: 'user51', age: 28},
    {name: 'user52', age: 29},
    {name: 'user53', age: 30},
    {name: 'user54', age: 31},
    {name: 'user55', age: 32},
    {name: 'user56', age: 33},
    {name: 'user57', age: 34},
    {name: 'user58', age: 35},
    {name: 'user59', age: 36},
    {name: 'user60', age: 37},
    {name: 'user61', age: 18},
    {name: 'user62', age: 19},
    {name: 'user63', age: 20},
    {name: 'user64', age: 21},
    {name: 'user65', age: 22},
    {name: 'user66', age: 23},
    {name: 'user67', age: 24},
    {name: 'user68', age: 25},
    {name: 'user69', age: 26},
    {name: 'user70', age: 27},
    {name: 'user71', age: 28},
    {name: 'user72', age: 29},
    {name: 'user73', age: 30},
    {name: 'user74', age: 31},
    {name: 'user75', age: 32},
    {name: 'user76', age: 33},
    {name: 'user77', age: 34},
    {name: 'user78', age: 35},
    {name: 'user79', age: 36},
    {name: 'user80', age: 37},
    {name: 'user81', age: 18},
    {name: 'user82', age: 19},
    {name: 'user83', age: 20},
    {name: 'user84', age: 21},
    {name: 'user85', age: 22},
    {name: 'user86', age: 23},
    {name: 'user87', age: 24},
    {name: 'user88', age: 25},
    {name: 'user89', age: 26},
    {name: 'user90', age: 27},
    {name: 'user91', age: 28},
    {name: 'user92', age: 29},
    {name: 'user93', age: 30},
    {name: 'user94', age: 31},
    {name: 'user95', age: 32},
    {name: 'user96', age: 33},
    {name: 'user97', age: 34},
    {name: 'user98', age: 35},
    {name: 'user99', age: 36},
    {name: 'user100', age: 37}
];

let Userdiv = document.getElementById('users') as HTMLDivElement;
let next = document.getElementById('next') as HTMLButtonElement;
let prev = document.getElementById('prev') as HTMLButtonElement;

let index = 0;
function data():void {
    Userdiv.innerHTML = '';
    for(const user of users.slice(index, index + 10)) {
        Userdiv.innerHTML += `<div>${user.name} - ${user.age}</div>`;
    }
}
next.onclick =  function(): void {
    if(index + 10 < users.length) {
        index += 10;
        data();
    }
}

prev.onclick =  function(): void {
    if(index >= 10) {
        index -= 10;
        data();
    }
}
window.onload = data;