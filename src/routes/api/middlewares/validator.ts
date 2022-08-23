import express from 'express';
import fs from 'fs';

const validator = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const name = req.query.name as unknown as string;
  const width = (req.query.width as unknown) as string;
  const height = (req.query.height as unknown) as string;
  console.log(name, width, height);
  if (name === '' || typeof name !== 'string') {
    res.send('enter valid file name');
    return;
  }
  if (
    !fs.existsSync(
      `images/full/${name}.jpg`
    )
  ) {
    res.send('enter valid file name');
    console.log('file doesnt exist');
    return;
  }
  if (
    parseInt((req.query.width as unknown) as string) <= 0 ||
    typeof width !== 'string' ||
    width === ''
   ) {
    res.send('enter valid dimentions');
    console.log('invalid dimentions1');
    return;
  }
  if (
    parseInt((req.query.height as unknown) as string) <= 0 ||
    typeof height !== 'string' ||
    height === ''
   ) {
    res.send('enter valid dimentions');
    console.log('invalid dimentions2');
    return;
  }
  next();
};

export default validator;
