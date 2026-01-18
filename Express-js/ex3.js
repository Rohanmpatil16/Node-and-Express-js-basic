import express from 'express';
import { home } from './pages/home.js';
import { login } from './pages/login.js';
import { submit } from './pages/submit.js';

const app = express();

// REQUIRED for POST
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
    res.send(home());
});

app.get("/login", (req, res) => {
    res.send(login());
});

app.post("/submit", (req, res) => {
    res.send(submit());
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
