class Cinderella{
    id : number;
    age: string;
    Footsize: number;

    constructor(id: number,age: string,Footsize: number) {
        this.id = id;
        this.age = age;
        this.Footsize = Footsize;
    }
}
class Pricne{
    id : number;
    age: string;
    slipper: number;
    girl?: Cinderella;

    constructor(id:number,age:string,slipper:number) {
        this.id = id;
        this.age = age;
        this.slipper = slipper;
    }
}
let Princes:Pricne[] = [
    new Pricne(1,'21',40)
];


let cinderellas: Cinderella[] = [
    new Cinderella(1,'22',38),
    new Cinderella(1,'23',37),
    new Cinderella(3,'24',36),
    new Cinderella(4,'21',35),
    new Cinderella(5,'26',40),
    new Cinderella(6,'28',41),
    new Cinderella(7,'25',42),
    new Cinderella(8,'20',34),
    new Cinderella(9,'22',35),
    new Cinderella(10,'22',38)
];
console.log(cinderellas);

let prince = Princes[0];

for (const cinderella of cinderellas) {
    if (cinderella.Footsize === prince.slipper) {
        prince.girl = cinderella;
        break;
    }
}

console.log(prince);

let chosenCinderella = cinderellas.find(
    cinderella => cinderella.Footsize === prince.slipper
);

console.log(chosenCinderella);