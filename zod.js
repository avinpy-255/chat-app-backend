const zod =  require('zod');

function numberValidator(arr){
    const schema = zod.array(zod.number())

    const response = schema.safeParse(arr);
    console.log(response);
}

numberValidator(["1", 2, 3, 4, 5, 6])

// Throws an error since an element is not a number

//numberValidator([1, 2, 3, 4, 5, 6]) this is a number array not with "1"

function schemaValidator(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
       
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

schemaValidator({
    email: 'example@example.com',
    password: 'password123',
})

// Throws an error if the password  is not a more then 8 characters
//  password: zod.string().min(8)

