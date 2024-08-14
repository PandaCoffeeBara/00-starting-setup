import request from "supertest";
import app from "../../app"

describe('Admin Routes', () => {
    it.only('should return status 200 and render the add-product page on GET /admin/add-product', async () => {
        const response = await request(app).get('/admin/add-product');
        console.log(response.text);
        expect(response.status).toBe(200);
        expect(response.text).toContain('Add Product');
    });

    it('should return status 200 and render the products page on GET /admin/products', async () => {
        const response = await request(app).get('/admin/products');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Products');
    });

    it('should return status 302 and redirect to /admin/products on successful POST /admin/add-product', async () => {
        const response = await request(app)
            .post('/admin/add-product')
            .send({ title: 'Test Product', price: 9.99 });
        expect(response.status).toBe(302);
        expect(response.header.location).toBe('/admin/products');
    });
});