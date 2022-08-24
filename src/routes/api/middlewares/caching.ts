//  importing modules
import express from 'express';
import fs, { promises as fsPromises } from 'fs';

//  cache function is similar to validator but instead of checking for input validity
//  it checks whether the requested file has already been processed or not
//  if it was already processed it gets restored from storage and sent as respose like the resizer function in images file
//  if there is no cache file it proceeds to the next function where a new image is to be processed
const cache = async (
    req: express.Request,
    res: express.Response,
    next: Function
): Promise<void> => {
    const name = req.query.name as unknown as string;
    const width = parseInt((req.query.width as unknown) as string);
    const height = parseInt((req.query.height as unknown) as string);
    
    if (
        fs.existsSync(
          `images/thumb/${name}-${width}-${height}.jpg`
        )
        ) {
        const cached = await fsPromises.readFile(`images/thumb/${name}-${width}-${height}.jpg`);
        res.writeHead(200, { 'Content-type': 'image/jpg' });
        res.end(cached);
        console.log('cache file found');
        return;
        }
    console.log('no cache');
    next()
}
//  exporting cache as middleware to images file
export default cache;
