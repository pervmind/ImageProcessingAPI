//  importing express to create the router
//  importing images file exports at it hold the functionallity of the app
import express from 'express';
import images from './api/images';
//  creating the router
const routes = express.Router();
//  'api endpoint
routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    'this is api route!! add /images?name=(your file name)&width=(image width)&height=(image height) to start'
  );
});
//  using images imported earlier to link the router to '/images' endpoint
routes.use(images.images);
// exporting routes for index to use it
export default routes;
