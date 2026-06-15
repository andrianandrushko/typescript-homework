const btn = document.getElementById('btn') as HTMLElement;
const text = document.getElementById('text') as HTMLParagraphElement;

btn.onclick = function (): void {
    text.style.display = 'none';
};
