const sum = (arr: any): void => {
    let total: any  = arr[0]


    for (let sum of arr){
        if (sum + total){
            total += sum;
        }
    }
    return total;
}
console.log(sum([1,2,9]))