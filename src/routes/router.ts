import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    'this is api route!! add /images?name=(your file name)&width=(image width)&height=(image height) to start'
  );
});
routes.use(images.images);

export default routes;
