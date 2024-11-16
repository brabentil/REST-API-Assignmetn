const express = require('express');
const app = express();
const fs = require('fs');


const PORT = 5000;

const users = JSON.parse(fs.readFileSync('users.json'));
const usersArray = Object.values(users);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = usersArray.find(user => id == user.id);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }

});

app.get('/users/profession/:profession', (req, res) => {
    const profession = req.params.profession.toLowerCase();
    const user = usersArray.find(user => profession == user.profession.toLowerCase());

    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }

});

app.get('/users/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const user = usersArray.find(user => name == user.name.toLowerCase());

    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
});