let users: { name: string; username: string; password: number }[] = [
    {name:'vasya', username:'vasya123', password:12345},
    {name:'petya', username:'petya124', password:56789},
    {name:'anna', username:'anna345', password:23548},
    {name:'nastya', username:'nastya578', password:13254},
    {name:'vitaliy', username:'vitaliy3915', password:78906},
    {name:'ostap', username:'ostap678', password:67890},
    {name:'stanislav', username:'stanislavasd', password:11111},
    {name:'andriy', username:'andriy555', password:55555},
    {name:'olya', username:'olyamnb', password:66666},
    {name:'sergiy', username:'sergiy678', password:67812},
];
users.forEach(user => {
    console.log(user.password);
});