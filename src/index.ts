import express from 'express';
import { promises as fs } from 'fs';
import sharp from 'sharp';
import routes from './routes/router';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response )=>{
    res.send('This is the main route!! visit /api to start');
});
app.use('/api', routes);

app.listen(port, ()=>{
    console.log(`server is now running on localhost:${port}`);
});
