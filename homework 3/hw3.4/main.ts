let listOfItems: any = ["html","css","javascript","mysql","mongo","react","angular","node.js"];
for (let item of listOfItems){
    console.log(item);
    document.write('<ul>' +
        '<li>' + item + '</li>' +
        '</ul>'
    );
}