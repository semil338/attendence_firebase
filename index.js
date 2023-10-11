const router = require("./routes/auth");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/", router);

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.listen(port, () => {
  console.log("Server is Running on port : ", port);
});
