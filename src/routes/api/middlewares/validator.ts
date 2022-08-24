//  importing modules
import express from 'express';
import fs from 'fs';
//  validator function takes the query strings from the endpoint and checks for input validity for the next middleware
const validator = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const name = req.query.name as unknown as string;
  const width = req.query.width as unknown as string;
  const height = req.query.height as unknown as string;
  console.log(name, width, height);
  if (
    typeof name === 'undefined' &&
    typeof width === 'undefined' &&
    typeof height === 'undefined'
  ) {
    res.send('start adding inputs');
    return;
  }
  if (name === '' || typeof name !== 'string') {
    res.status(500).send('invalid file name');
    return;
  }
  if (!fs.existsSync(`images/full/${name}.jpg`)) {
    res.status(500).send('invalid file name');
    console.log('file doesnt exist');
    return;
  }
  if (
    parseInt(req.query.width as unknown as string) <= 0 ||
    typeof width !== 'string' ||
    width === ''
  ) {
    res.status(500).send('invalid width dimentions');
    console.log('invalid dimentions (width)');
    return;
  }
  if (
    parseInt(req.query.height as unknown as string) <= 0 ||
    typeof height !== 'string' ||
    height === ''
  ) {
    res.status(500).send('invalid height dimentions');
    console.log('invalid dimentions (height)');
    return;
  }
  next();
};
//  exporting for images file
export default validator;
