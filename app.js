const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.query);
  next();
});

const companyRouter = require('./routers/companyRouter');
const jobopeningRouter = require('./routers/jobopeningRouter');
const userRouter = require('./routers/userRouter');
const applicationRouter = require('./routers/applicationRouter');

app.use('/companies', companyRouter);
app.use('/job_openings', jobopeningRouter);
app.use('/users', userRouter);
app.use('/applications', applicationRouter);

app.listen(port, () => {
  console.log(port, 'Server is listening...');
});