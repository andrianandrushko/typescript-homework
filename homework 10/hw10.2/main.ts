const btn = document.getElementById('btn') as HTMLButtonElement;
const age = document.getElementById('age') as HTMLInputElement;

btn.onclick = function (): void{
    if (+age.value < 18){
        console.log(age.value);
    }
}