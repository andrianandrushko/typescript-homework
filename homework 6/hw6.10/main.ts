type Card = {
    cardSuit: string;
    nameValue: string;
    color: string;
};

const suits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let arr: Card[] = [];

for (let suit of suits) {
    for (let value of values) {
        let color: string = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';

        arr.push({cardSuit: suit, nameValue: value, color: color});
    }
}

console.log(arr);

console.log(arr.filter(card => card.nameValue === 'ace'));

console.log(arr.filter(card => card.nameValue === '6'));

console.log(arr.filter(card => card.color === 'red'));

console.log(arr.filter(card => card.cardSuit === 'diamond'));

console.log(arr.filter(card => card.nameValue === '9'));