type Course = {
    title: string;
    monthDuration: number;
}
let coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}
]

let sort:any = coursesAndDurationArray.sort((u1: Course,u2:Course):any =>{
    return u2.monthDuration - u1.monthDuration;
});
console.log(sort);

let filteredcoursesAndDurationArray = coursesAndDurationArray.filter(function (value:Course):any {
    return value.monthDuration > 5;
})
console.log(filteredcoursesAndDurationArray);

let mapedcoursesAndDurationArray = coursesAndDurationArray.map(function (value:Course, index:number):any{
    let newcoursesAndDurationArray = {
        title: value.title,
        monthDuration: value.monthDuration,
        id: index + 1
    }
    return newcoursesAndDurationArray;
});
console.log(mapedcoursesAndDurationArray);