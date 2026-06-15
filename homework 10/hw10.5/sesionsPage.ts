let sessionsList: string[] = JSON.parse(localStorage.getItem('sessionsList') || '[]');


let sessionsDiv = document.getElementById('sessions') as HTMLElement;
for (const session of sessionsList) {
    let div: HTMLDivElement = document.createElement('div')

    div.innerText = session;
    sessionsDiv.appendChild(div);
}