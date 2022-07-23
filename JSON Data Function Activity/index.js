const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const course = [
    {id: 1, name: 'course1' },
    {id: 2, name: 'course2' },
    {id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('REST API with Express JS');
});

app.get('/api/course', (req, res) => {
    res.send(course);
});

app.post('/api/course'. (req, res) => {
    if (req.body.name || req.body.name.lenght < 3) {
        // 400 Bad Request
        res.status(400).send('Name is required and should be minimum 3 character.');
        return; 
    }
    const course = {
        id: course.lenth + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(coure);
})

app.get('/api/courses/:id', (req, res) => {
    const course.find(c => c.id === parseInt(req.params.id));
    if (!course)  res.status(404).send('Thw course witj the given ID was not found.');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log('Listen on port ${port}....'));

https://www.youtube.com/watch?v=pKd0Rpw7O48