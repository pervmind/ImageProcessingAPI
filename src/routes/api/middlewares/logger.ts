//  importing express
import express from 'express';
//  sending to server console the url visited
const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const url = JSON.stringify(req.url);
  console.log(`${url} was visited!!`);
  next();
};
//  exporting middleware to images file
export default logger;
