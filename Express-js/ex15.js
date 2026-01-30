import express from 'express';

const app = express();
app.use(express.json()); // to read JSON body

// Sample data
let users = [
    { id: 1, name: "Rohan", age: 20 },
    { id: 2, name: "Shruti", age: 21 }
];

// Home route
app.get("/", (req, res) => {
    res.send("User API is running");
});


// GET all users
app.get("/users", (req, res) => {
    res.json(users);
});


// GET user by id
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});


// POST add new user
app.post("/users", (req, res) => {
    const { name, age } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        age
    };

    users.push(newUser);
    res.status(201).json(newUser);
});


// PUT update user
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name ?? user.name;
    user.age = req.body.age ?? user.age;

    res.json(user);
});


// DELETE user
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    users = users.filter(u => u.id !== id);

    res.json({ message: "User deleted" });
});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
