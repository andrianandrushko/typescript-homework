let forms:HTMLCollectionOf<Element> = document.getElementsByClassName('form')
for (const form of forms){
    let name = document.getElementById('name') as HTMLInputElement;
    let surname =document.getElementById('surname') as HTMLInputElement;
    let age = document.getElementById('age') as HTMLInputElement;

    let btn: HTMLElement = document.getElementById('btn') as HTMLButtonElement;
    let result = document.querySelector('.result') as HTMLElement | null;
    if (btn && result) {
        btn.onclick = function (): void {
            result.innerText = `name:${name.value} surname:${surname.value} age:${age.value}`;
        };
    }
}