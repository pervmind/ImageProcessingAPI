//  importing express and the main app router to the server file

import express from 'express';
import routes from './routes/router';
//  creating enstance of the server and setting it to port 3000
const app = express();
const port = 3000;
//  creating the home endpoint '/' for the app
app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('This is the main route!! visit /api to start');
});
//  using the routes function imported earlier to control the routes of the app on endpoint /api
app.use('/api', routes);
//  starting the server and listening to port 3000
app.listen(port, () => {
  console.log(`server is now running on localhost:${port}`);
});
//  exporting app for testing in jasmine file indexSpec
export default app;
