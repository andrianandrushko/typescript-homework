class Car{
    model: string;
    YearofManufacture: number;
    Maxspeed: number;
    engineCapacity: number;


    constructor(model: string,YearofManufacture: number,Maxspeed: number,engineCapacity:number){
        this.model = model;
        this.YearofManufacture = YearofManufacture;
        this.Maxspeed = Maxspeed;
        this.engineCapacity = engineCapacity;

        this.drive = function (): void {
            console.log(`Їдемо зі швидкістю ${this.Maxspeed} на годину`);
        }
        this.info = function (): void {
            for (const key in this){
                if (typeof this[key] !== 'function'){
                    console.log(key,this[key]);
                }
            }
        }
        this.increaseMaxspeed = function (newSpeed: any): void{
            this.Maxspeed = this.Maxspeed + newSpeed;
        }
        this.changeYear = function (newValue:any): void{
            if (newValue > 2022){
                this.YearofManufacture = newValue;
            }
        }
        this.addDriver = function (driver:any):void{
            if (driver){
                this.driver = driver;
            }
        };
    }
}
let car1 = new Car('BMW',2020,250,3.0);
console.log(car1);

car1.drive();
car1.info();
car1.increaseMaxspeed(50);
console.log(car1.Maxspeed);

car1.changeYear(2024);
console.log(car1.YearofManufacture);

car1.addDriver({name: 'Alex', age: 30});
console.log(car1);