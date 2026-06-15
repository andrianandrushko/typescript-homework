class Client {
    id: number;
    name: string;
    surname: string;
    phone: number;
    order: number;


    constructor(id: number,name: string,surname: string,phone: number,order: number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.order = order;
        console.log(this);
    }
}

let client1 = new Client(1,'max','kovalenko',  +38012345689,34567);
let client2 = new Client(2,'oleg','stepanenko',  +38023457901,12345);
let client3 = new Client(3,'andrey','petrenko',  +38023456901,67890);
let client4 = new Client(4,'vitaliy','kova',  +3801234567087,57492);
let client5 = new Client(5,'robert','lapko',  +38032145679098,98765);
let client6 = new Client(6,'bogdan','ivanchenko',  +380977870787,45678);
let client7 = new Client(7,'anna','kvas',  +380973591108,23413);
let client8 = new Client(8,'nastia','tkach',  +38067712205,76589);
let client9 = new Client(9,'lilia','kursa',  +380665974018,65478);
let client10 = new Client(10,'ostap','chelak',  +380677537901,67854);

let clients = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
let sort = clients.sort((u1,u2) => {
    return u1.order - u2.order;
})
console.log(sort);