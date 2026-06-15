class User{
    id: number;
    name: string;
    surname: string;
    phone: number;


    constructor(id: number,name: string, surname: string,phone: number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        console.log(this);
    }
}
let user1 = new User(1,'max','kovalenko',  +38012345689);
let user2 = new User(2,'oleg','stepanenko',  +38023457901);
let user3 = new User(3,'andrey','petrenko',  +38023456901);
let user4 = new User(4,'vitaliy','kova',  +3801234567087);
let user5 = new User(5,'robert','lapko',  +38032145679098);
let user6 = new User(6,'bogdan','ivanchenko',  +380977870787);
let user7 = new User(7,'anna','kvas',  +380973591108);
let user8 = new User(8,'nastia','tkach',  +38067712205);
let user9 = new User(9,'lilia','kursa',  +380665974018);
let user10 = new User(10,'ostap','chelak',  +380677537901);

let users = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];

let filterUser = users.filter(user =>user.id % 2 !== 0);
console.log(filterUser);