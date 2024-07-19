interface User {
    firstName: string,
    lastName: string,
    age: number
} 

function isLegal(user: User){
    if(user.age > 18){
        return true
    } else {
        return false
    }
}

function greet(user: User) {
    console.log("Hi there" + user.firstName);
}

isLegal({
    firstName: "Avinash",
    lastName: "Chowdhury",
    age: 18
})