import express from 'express';
import logger from './middlewares/logger';
import validator from './middlewares/validator';
import cache from './middlewares/caching';
import sharp from 'sharp';
import { promises as fs } from 'fs';

const images = express.Router();

const sharper = async (name: string, width: number, height: number): Promise<void> => {
    await sharp(`images/full/${name}.jpg`).resize(width, height).toFile(`images/thumb/${name}-${width}-${height}.jpg`);
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const resizer = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const name = req.query.name as unknown as string;
        const width = parseInt((req.query.width as unknown) as string);
        const height = parseInt((req.query.height as unknown) as string);
        await sharper(name, width, height);
        const thumb = await fs.readFile(`images/thumb/${name}-${width}-${height}.jpg`);
        res.writeHead(200, { 'Content-type': 'image/jpg' });
        res.end(thumb);
    } catch (err) {
        console.error('processing failed');
    }
}

images.use(
  '/images',
  logger,
  validator,
  cache,
  resizer 
);

export default { images, sharper };
