import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("home route");
});

app.listen(4000, () => {
  console.log("server running");
});
