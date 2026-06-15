function data(text:any): void{
    for (let i: number = 0; i < 3; i++){
        document.write(`<ul><li>${text}</li></ul>`)
    }
}
data('hello world');