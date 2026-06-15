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
    let courseUl:HTMLUListElement = document.createElement('ul');

    let li:HTMLLIElement = document.createElement('li');
    li.innerText = course.title;

    let p: HTMLParagraphElement = document.createElement('p');
    p.innerText = course.monthDuration.toString();

    courseUl.append(li,p);

    document.body.appendChild(courseUl);
}