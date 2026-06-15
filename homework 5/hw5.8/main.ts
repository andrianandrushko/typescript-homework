const arr= (): void =>{
    let data:(number | boolean | string)[] = [200,true,'hello',400,'apple',500,false,'school',123,'user-name'];
    for (let i: number = 0; i < 3; i++){
        document.write(`<ul><li>${data}</li></ul>`);
    }
}
arr()