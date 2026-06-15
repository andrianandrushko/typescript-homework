function swap(arr:any,index1:any,index2:any):void{
    let temp:any = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
console.log(swap([22,11,33,44],0,1));