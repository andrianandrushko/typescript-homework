type User = {
    id: number;
    name: string;
    age: number;
};

function users(): User {
    return {
        id: 1,
        name: 'alex',
        age: 30
    };
}

const user = users();

for (let i = 0; i < 3; i++) {
    document.write(`
        <ul>
            <li>${user.id}</li>
            <li>${user.name}</li>
            <li>${user.age}</li>
        </ul>
    `);
}