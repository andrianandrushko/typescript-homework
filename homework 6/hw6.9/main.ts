type Course = {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
};

let coursesArray: Course[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html','css', 'js','mysql','mongodb','react','angular','aws','docker','git','node-js']
    },
    {
        title:'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
    },
    {
        title:'Python Complex',
        monthDuration: 9,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
    },
    {
        title:'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','git','QA/QC']
    },
    {
        title:'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','sass']
    },
    {
        title:'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','sass']
    },
];

let filtercoursesArray = coursesArray.filter(value => value.modules.includes('sass'));
console.log(filtercoursesArray);

let filterscoursesArray = coursesArray.filter(value => value.modules.includes('docker'));
console.log(filterscoursesArray);