"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe('Todos API', () => {
    it('GET /todos --> array of todos', () => {
        return (0, supertest_1.default)(server_1.default)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(resp => {
            expect(resp.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    todo_id: expect.any(Number),
                    description: expect.any(String)
                })
            ]));
        });
    });
    it('GET /todos/:id --> specific todo by ID', () => {
    });
    it('POST /todos --> todo created', () => {
    });
    it('DELETE /todos/:id --> todo deleted', () => {
    });
    it('PUT /todos/:id --> todo edited', () => {
    });
});
