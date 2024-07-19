"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("Hi there" + user.firstName);
}
isLegal({
    firstName: "Avinash",
    lastName: "Chowdhury",
    age: 18
});
