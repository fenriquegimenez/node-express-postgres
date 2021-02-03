const express = require("express");
const app = express();
const config = require("./config/config");
const port = config.port;
const db = require("./db/queries");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`[Server] Server running at port ${port}.`);
});
