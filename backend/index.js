// require("dotenv").config();
// const express = require("express");
import express from "express";
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is A joke",
    },
    {
      id: 2,
      title: "B joke",
      content: "This is B joke",
    },
    {
      id: 3,
      title: "C joke",
      content: "This is C joke",
    },
  ];
  res.send(jokes);
});

app.get("/twiter", (req, res) => {
  res.send("wahaj hafeez");
});
app.get("/login", (req, res) => {
  res.send("<h1>login at chai aur code</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port : ${port}`);
});
