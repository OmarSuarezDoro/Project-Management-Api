import express from 'express';
import chalk from 'chalk';
import { connect } from 'mongoose';

import { usersRouter } from './routers/users.js';

/**
 * Function to start the database connection
 * @returns void
 */
function startDB() : void {
  connect(process.env.MONGODB_URL!).then(() => {
    console.log(chalk.greenBright('[Server_startdb] Connected to the database'));
  }).catch(() => {
    console.log(chalk.red('[Server_startdb] Something went wrong when conecting to the database'));
    process.exit(-1);
  });
}

// Initialize the express server
export const app = express();
app.use(express.json());
app.use(usersRouter);
console.log(chalk.green('[Server_start] Server started!'));
app.listen(3000);
startDB();