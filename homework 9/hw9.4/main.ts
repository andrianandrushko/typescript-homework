type Course = {
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray: Course[] = [
    {title: 'Javascript Complex',monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'Fullstack', monthDuration: 7},
    {title: 'Frontend',monthDuration: 4}
];

for (const course of coursesAndDurationArray){
    let div:HTMLDivElement = document.createElement('div');

    let h1:HTMLElement = document.createElement('h1');
    h1.innerText = course.title;

    let p:HTMLParagraphElement = document.createElement('p');
    p.innerText = course.monthDuration.toString();

    div.append(h1,p);

    document.body.appendChild(div);
}