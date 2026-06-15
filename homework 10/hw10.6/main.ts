const kg = document.getElementById('kg') as HTMLInputElement;
const result = document.querySelector('.result') as HTMLElement;
kg.onclick = function (): void {
    const value: number = +kg.value;
    const gram: number = value * 1000;
    const pounds: number = value * 2.20462;

    result.innerHTML = `
    ${gram} g ${pounds.toFixed(2)} lb
    `;
}