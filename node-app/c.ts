

function isLegal(age: number) : string {
    if(age < 18){
        return "true";
    } else {
        return "false";
    }
}

console.log(isLegal(25));