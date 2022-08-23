import express from 'express';
import logger from './middlewares/logger';
import validator from './middlewares/validator';
import cache from './middlewares/caching';
import sharp from 'sharp';
import { promises as fs } from 'fs';

const images = express.Router();

images.get(
  '/images',
  logger,
  validator,
  cache,
  async (req: express.Request, res: express.Response) => {
    const name = req.query.name as unknown as string;
    const width = parseInt((req.query.width as unknown) as string);
    const height = parseInt((req.query.height as unknown) as string);
    await sharp(`images/full/${name}.jpg`).resize(width, height).toFile(`images/thumb/${name}-${width}-${height}.jpg`);
    const thumb = await fs.readFile(`images/thumb/${name}-${width}-${height}.jpg`);
    res.writeHead(200, { 'Content-type': 'image/jpg' });
    res.end(thumb);
  }
);

export default images;
