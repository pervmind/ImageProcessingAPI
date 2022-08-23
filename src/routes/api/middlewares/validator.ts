import express from 'express';
import fs from 'fs';

const validator = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const name = req.query.name as unknown as string;
  const width = parseInt((req.query.width as unknown) as string);
  const height = parseInt((req.query.height as unknown) as string);
  console.log(typeof name, typeof width, typeof height);
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
    width <= 0 ||
    typeof width !== 'number'
  ) {
    res.send('enter valid dimentions');
    console.log('invalid dimentions1');
    return;
  }
  if (
    height <= 0 ||
    typeof height !== 'number'
  ) {
    res.send('enter valid dimentions');
    console.log('invalid dimentions2');
    return;
  }
  next();
};

export default validator;
