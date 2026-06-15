let words: string[] = ['Main','products', 'About us','Contacts'];

for (const word of words){
    let wordUL: HTMLUListElement = document.createElement('ul');

    let li: HTMLLIElement = document.createElement('li');
    li.innerText  = word;


    wordUL.append(li);
    document.body.appendChild(wordUL);
}