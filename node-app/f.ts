interface perSon {
    name: string,
    age: number;
    greet(phrase: string): void
}

class emPloyee implements perSon {
    name: string;
    age: number;
    constructor(n: string, a:number){
        this.name = n
        this.age = a
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}