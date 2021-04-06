const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

let port = process.env.PORT || 5000;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", function (req, res) {
  res.send(messages);
});

app.post("/new", function (req, res) {
  let newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newMessage);
  res.send("Insert Successful!");
});

app.listen(port, function (req, res) {
  console.log(`Start at port ${port}`);
});
