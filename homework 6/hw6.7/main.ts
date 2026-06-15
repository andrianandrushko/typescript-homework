function sortNums(array:any, direction:any): void{
    if (direction === 'ascending'){
        return array.sort((a:number,b:number):number => a - b)
    }
    if (direction === 'descending') {
        return array.sort((a: number, b: number): number => b - a)
    }
    return array;
}

console.log(sortNums([11,22,3],'ascending'));
console.log(sortNums([11,22,3],'descending'));