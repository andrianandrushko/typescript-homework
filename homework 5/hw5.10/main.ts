const getMin = (arr:any): void => {
    let min:any = arr[0];
    for (let num of arr){
        if (num < min){
            min = num;
        }
    }
    return min;
}
console.log(getMin([200,100,50,300]));