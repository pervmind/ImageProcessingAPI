//  importing modules
import express from 'express';
import fs from 'fs';

//  This function checks that the query string is all digits ref = https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-digits#:~:text=Use%20the%20test()%20method,only%20digits%20and%20false%20otherwise.
const digitsOnly = (string: string): boolean => {
  return /^[0-9]+$/.test(string);
};
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
    res.status(500).send('file does not exist');
    return;
  }
  if (
    parseInt(req.query.width as unknown as string) <= 0 ||
    typeof width !== 'string' ||
    width === '' ||
    !digitsOnly(width)
  ) {
    res.status(500).send('invalid width dimensions');
    return;
  }
  if (
    parseInt(req.query.height as unknown as string) <= 0 ||
    typeof height !== 'string' ||
    height === '' ||
    !digitsOnly(height)
  ) {
    res.status(500).send('invalid height dimensions');
    return;
  }
  next();
};
//  exporting for images file
export default validator;
