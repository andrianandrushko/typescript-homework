const data = (text:any,count:any): void => {
    for (let i: number = 0; i < count; i++){
        document.write(`<ul><li>${text}</li></ul>`);
    }
}
data('hello world',50);