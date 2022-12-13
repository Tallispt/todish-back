import supertest from 'supertest';
import app from '@/app';

const api = supertest(app)

describe("GET /todo", () => {

  it("Teste", async () => {
    const result = api.get("/todo")
    console.log(result)
  })
})