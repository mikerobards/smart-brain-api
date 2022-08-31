const express = require('express');

const app = express();

const database = {
    users: [
        {
            id: '123',
            name: 'Mike',
            email: 'mike@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }

    ]
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send('this is working!!!');
});

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json('Success!');
    } else {
        res.status(400).json('error loggin in!');
    }
})

app.listen(3000, () => {
    console.log('app is running on port 3000!');
});


/*

/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user

*/