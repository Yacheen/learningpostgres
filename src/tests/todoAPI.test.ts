import request from 'supertest';
import server from "../server";
describe('Todos API', () => {
    it('GET /todos --> array of todos', () => {
        return request(server)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(resp => {
                expect(resp.body).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        todo_id: expect.any(Number),
                        description: expect.any(String)
                    })
                ]))
            })
    })

    it('GET /todos/:id --> specific todo by ID', () => {

    })

    it('POST /todos --> todo created', () => {

    })

    it('DELETE /todos/:id --> todo deleted', () => {

    })

    it('PUT /todos/:id --> todo edited', () => {

    })

});
