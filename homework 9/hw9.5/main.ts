type Course = {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}

let coursesArray: Course[] = [
    {
        title: 'Javascript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js','mysql','mongodb','react','angular','aws','docker','git','node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js','mysql','mongodb','angular','aws','docker','git','python core','python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js','mysql','mongodb','git','QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js','mysql','mongodb','react','angular','aws','docker','git','node.js','python','java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js','mysql','mongodb','react','angular','aws','docker','git','sass']
    }
];

for (const course of coursesArray){
    let div:HTMLDivElement = document.createElement('div')
    let DurationBlock:HTMLDivElement = document.createElement('div')

    let h2:HTMLElement = document.createElement('h2')
    h2.innerText = course.title;

    let h1:HTMLElement = document.createElement('h1');
    h1.innerText = course.monthDuration.toString();

    let p:HTMLParagraphElement = document.createElement('p');
    p.innerText = course.hourDuration.toString();

    let ul: HTMLUListElement = document.createElement('ul')
    for (const module of course.modules){
        let li:HTMLLIElement = document.createElement('li')
        li.innerText = module;
        ul.append(li);
    }
    DurationBlock.appendChild(h2)
    DurationBlock.appendChild(h1)
    DurationBlock.appendChild(p)
    DurationBlock.appendChild(ul)

    div.appendChild(DurationBlock);
    document.body.appendChild(div);
}