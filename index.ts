import { isConstructorDeclaration } from 'typescript';

const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

// @ts-ignore
app.get('/', (req, res) => {
  res.status(200).send('Confirmed');
});

app.listen(port, () => {
  console.log(`Server is running on https:/localhost:${port}`);
});

// ERROR HANDLING

// 404 error handler
// @ts-ignore

app.use((req, res, next) => {
  const error = new Error(
    '404 - NOT FOUND - Caution, Caution, you have gone the wrong way'
  );
  res.status = 404;
  next(error);
});

// General Error Handling
// @ts-ignore
app.use((error, rec, res, next) => {
  res.status = error.status || 500;
  res.json({
    error: {
      message: error.message,
    },
  });
});
