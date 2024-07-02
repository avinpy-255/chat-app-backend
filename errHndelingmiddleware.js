//global catches : its helps to rive better error messages

const express = require('express');
const app = express();

app.post('/b', function(req, res) {
    const a = req.body.a
    const b = a.length

    res.send("Hello"+ b);
})

app.use((err, res, req, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.use(express.json());

app.listen(3000, () => console.log('Server is running on port 3000...'));
