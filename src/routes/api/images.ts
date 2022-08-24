//  importing express to set images as router
//  importing all middlewares: logger, validator, cache
//  importing sharp and fs modules to use for image processing
import express from 'express';
import logger from './middlewares/logger';
import validator from './middlewares/validator';
import cache from './middlewares/caching';
import sharp from 'sharp';
import { promises as fs } from 'fs';
//  setting images as router
const images = express.Router();
//  creating  sharper functions for creating the thumbnail image
const sharper = async (
  name: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(`images/full/${name}.jpg`)
    .resize(width, height)
    .toFile(`images/thumb/${name}-${width}-${height}.jpg`);
};
//  creating resizer that uses sharper to create the image, save it , read it then send it as response after changing content type to image so that the image would load
const resizer = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const name = req.query.name as unknown as string;
    const width = parseInt(req.query.width as unknown as string);
    const height = parseInt(req.query.height as unknown as string);
    await sharper(name, width, height);
    const thumb = await fs.readFile(
      `images/thumb/${name}-${width}-${height}.jpg`
    );
    res.writeHead(200, { 'Content-type': 'image/jpg' });
    res.end(thumb);
  } catch (err) {
    console.error('processing failed');
  }
};
//  listing middlewares
//  logger logs the url visited ,
//  validator checks if info typed by user is valid for processing
//  cache checks if the requested image with specified dimentions already exists to send it as response
//  if the image does not exist in the thumb folder it proceeds to resizer where a new image will be created
images.use('/images', logger, validator, cache, resizer);
//  exporting images for the router and sharper for being tested
export default { images, sharper };
