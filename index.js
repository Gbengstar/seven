import express from "express";
import userRouter from "./route/users.js";

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  console.log("app is running");
  res.send("happy to display this");
});

const PORT = 5001;
app.listen(PORT);
