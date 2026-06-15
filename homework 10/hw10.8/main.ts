let rows = document.getElementById('rows') as HTMLInputElement;
let cells = document.getElementById('cells') as HTMLInputElement;
let content = document.getElementById('content') as HTMLInputElement;


let btn = document.getElementById('btn') as HTMLButtonElement;
let result = document.querySelector('.result') as HTMLElement;

btn.onclick = function () : void{
    result.innerText = `
    Рядки: ${rows.value}
    Ячейки: ${cells.value}
    Зміст: ${content.value}`
}