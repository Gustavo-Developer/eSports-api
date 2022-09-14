import express from "express";

const app = express();

app.get("/ads", () => {
  console.log("Ganhou");
});

app.listen(3333);
