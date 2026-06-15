type User = {
    name: string
    age: number
    testNull: null
    testUndefined: undefined
}

let user: User = {
    name: 'vasya',
    age: 30,
    testNull: null,
    testUndefined: undefined,
}

function usercopy(obj: any): any {
    if (
        obj === null ||
        obj === undefined ||
        Number.isNaN(obj) ||
        typeof obj !== "object"
    ) {
        return obj;
    }

    let copy: any = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = usercopy(obj[key]);
    }

    return copy;
}
let clonedUser = usercopy(user);
console.log(clonedUser);