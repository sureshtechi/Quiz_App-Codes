const request = require("supertest");

const x = require("../server");

describe("GET / ", () => {
    test("It should respond with Login Page", async () => {
      const response = await request(x.app).get("/login");
      expect(response.statusCode).toBe(200);
    });
  });




