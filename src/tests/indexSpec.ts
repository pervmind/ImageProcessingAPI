//  importing modules
import supertest from 'supertest';
import app from '..';
//  testing '/' and '/api' endpoints
const req = supertest(app);

describe('Testing endpoints for index', () => {
    it('tests the main endpoint', async () => {
        const res = await req.get('/');
        expect(res.status).toBe(200);
    });
    it('tests the /api endpoint', async () => {
        const res = await req.get('/api');
        expect(res.status).toBe(200);
    })
});
