const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'Ram' },
    { id: 2, name: 'Sita' }
];

app.post('/students', (req, res) => {
    students.push(req.body);
    res.send('Data Added');
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.delete('/students/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.send('Data Deleted');
});

app.listen(3000, () => {
    console.log('Server running');
});