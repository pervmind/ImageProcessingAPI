import express from 'express';
import fs, { promises as fsPromises } from 'fs';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const cache = async (
    req: express.Request,
    res: express.Response,
    next: Function
) => {
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

export default cache;
