type Ar = {
    cardSuit: string;
    value: string;
};

let arr: Ar[] = [
    { cardSuit: 'spade', value: '6' },
    { cardSuit: 'diamond', value: '7' },
    { cardSuit: 'heart', value: '8' },
    { cardSuit: 'clubs', value: '9' },
    { cardSuit: 'spade', value: '10' }
];

let result = arr.reduce((acc, card) => {
    if (!acc[card.cardSuit]) {
        acc[card.cardSuit] = [];
    }

    (acc[card.cardSuit] as Ar[]).push(card);

    return acc;
}, {} as Record<string, Ar[]>);

console.log(result);