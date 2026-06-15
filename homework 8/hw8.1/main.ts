type Course = {
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray: Course[] = [
    {title: 'Java Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'Fullstack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let result = coursesAndDurationArray.map((value,index) =>{
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    };
});
console.log(result);