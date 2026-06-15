let book1:{author: string,genre: string, name: string, pageCount: number} = {
    name: 'Garry Potter',
    pageCount: 320,
    genre: 'fantasy',
    author: 'Joanne Rowling'
}
console.log(book1)
let book2:{author: string,genre: string, name: string, pageCount: number} = {
    name: 'The Lord if the Rings',
    pageCount: 704,
    genre: 'fantasy',
    author: 'John Ronald Tolkien'
}
console.log(book2);
let book3:{author: string,genre: string, name: string, pageCount: number} = {
    name: 'A Tale of Two Cities',
    pageCount: 576,
    genre: 'roman',
    author: 'Charles Dickens'
}
console.log(book3);
let books: any = [{id:book1, author: 'Joanne Rowling', age: 60},{id:book2, author:'John Ronald Tolkien', age: 81},{id: book3, author: 'Charles Dickens', age: 58}];
console.log(books);