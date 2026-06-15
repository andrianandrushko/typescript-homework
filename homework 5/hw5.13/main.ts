const exchange: any = (sumUAN: number, currencyValue: { currency: string; value: number }[], exchangeCurrency: string):number => {
    let chooseCurrency: {currency: string, value: number} | undefined;
    for (let currency of currencyValue){
        if (currency.currency === exchangeCurrency){
            return sumUAN / currency.value;
        }
    }
    return 0;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));