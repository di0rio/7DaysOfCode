import { app } from "./app";

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//DIA1

// import express from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
