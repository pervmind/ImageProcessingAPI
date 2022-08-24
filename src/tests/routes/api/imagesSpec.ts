//  importing modules
import app from '../../..';
import supertest from 'supertest';
import images from '../../../routes/api/images';
import fs from 'fs';
// testing endpoints for '/images'
const req = supertest(app);
describe('test endpoints for images', () => {
    it('tests /image endpoint', async () => {
        const res = await req.get('/api/images');
        expect(res.status).toBe(200);
    });
});
//  testing the sharp function for creating processed images
describe('testing images funstions', () => {
    it('testing resizer functoin', async () => {
        const name = 'fjord';
        const width = 200;
        const height = 300
        await images.sharper(name, width, height);
        const fileExistance = fs.existsSync(`images/thumb/${name}-${width}-${height}.jpg`)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(fileExistance).toBeTrue;
    });
});
