const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = {...req.body, id: tasks.length + 1};

    tasks.push(newTask);

    res.status(200).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const task = tasks.find(task => task.id === +(id));

    if(!task) {
        res.status(404).json({message: 'Завдання не знайдено!'});
    } else {
        task.title = title || task.title;
        task.description = description || task.description;

        res.status(200).json(task);
    }
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;

    const taskIndex = tasks.findIndex(task => task.id === +(id));

    if(taskIndex === -1) {
        res.status(404).json({message: 'Завдання не знайдено!'});
    } else {
        tasks.splice(taskIndex, 1);

        res.status(200).json({message: 'Завдання видалено!'});
    }
});


app.listen(PORT, () => {
    console.log('Server started!');
});