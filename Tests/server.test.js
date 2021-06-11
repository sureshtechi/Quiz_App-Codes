const request = require("supertest");

const x = require("../server");

describe("GET / ", () => {
    test("GET Method - responds with Home Page", async () => {
      const response = await request(x.app).get("/");
      expect(response.statusCode).toBe(200);
    });
  });


describe("GET / ", () => {
    test("GET Method - responds with Login Page", async () => {
      const response = await request(x.app).get("/login");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET / ", () => {
    test("GET Method - responds with Sign up Page", async () => {
      const response = await request(x.app).get("/sign_up");
      expect(response.statusCode).toBe(200);
    });
  });



  describe("GET / ", () => {
    test("GET Method - responds with Forgot Password Page", async () => {
      const response = await request(x.app).get("/forgot_passowrd");
      expect(response.statusCode).toBe(200);
    });
  });



  describe("GET / ", () => {
    test("GET Method - responds with Admin Page", async () => {
      const response = await request(x.app).get("/admin");
      expect(response.statusCode).toBe(200);
    });
  });



  describe("GET / ", () => {
    test("GET Method - responds with Admin DashBoard", async () => {
      const response = await request(x.app).get("/dashboard");
      expect(response.statusCode).toBe(200);
    });
  });



  describe("GET / ", () => {
    test("GET Method - responds with List of Active Quiz(s) page ", async () => {
      const response = await request(x.app).get("/active");
      expect(response.statusCode).toBe(200);
    });
  });



  describe("GET / ", () => {
    test("GET Method - responds with Admin Features Page", async () => {
      const response = await request(x.app).get("/features");
      expect(response.statusCode).toBe(200);
    });
  });


  describe("GET / ", () => {
    test("GET Method - responds with Admin display Page", async () => {
      const response = await request(x.app).get("/display");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET / ", () => {
    test("GET Method - responds with User Details Page", async () => {
      const response = await request(x.app).get("/details");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET / ", () => {
    test("GET Method - responds with Remove User Page", async () => {
      const response = await request(x.app).get("/remove");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET / ", () => {
    test("GET Method - responds with Reset details Page", async () => {
      const response = await request(x.app).get("/resetdetails");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET / ", () => {
    test("GET Method - responds with Admin Home Page", async () => {
      const response = await request(x.app).get("/newone");
      expect(response.statusCode).toBe(200);
    });
  });


  describe("GET / ", () => {
    test("GET Method - responds with Create Account for Admin page", async () => {
      const response = await request(x.app).get("/addaccount");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET / ", () => {
    test("GET Method - responds with Reset Details Page", async () => {
      const response = await request(x.app).get("/reset");
      expect(response.statusCode).toBe(200);
    });
  });


  describe('POST /add_user_marks', () => {
    jest.setTimeout(30000);
    test('POST Method - Checks and Adds User Marks', async () => {
      const response = await request(x.app)
        .post('/add_user_marks')
      expect(response.statusCode).toBe(200);
    });
  });


  describe('POST /user_check_quizid', () => {
    jest.setTimeout(30000);
    test('POST Method - Checks the Validity of the Quiz ID Enterted by the User', async () => {
      const response = await request(x.app)
        .post('/user_check_quizid')
      expect(response.statusCode).toBe(200);
    });
  });

  describe('POST /reset_forgot_password', () => {
    jest.setTimeout(30000);
    test('POST Method - Resets the forgot Password if the Seurity Answer Entered is correct', async () => {
      const response = await request(x.app)
        .post('/reset_forgot_password')
      expect(response.statusCode).toBe(200);
    });
  });

  describe('POST /create_account', () => {
    jest.setTimeout(30000);
    test('POST Method - Checks the details enterted for signing up and Creates Account', async () => {
      const response = await request(x.app)
        .post('/create_account')
      expect(response.statusCode).toBe(200);
    });
  });

  describe('POST /admin_login', () => {
    jest.setTimeout(30000);
    test('POST Method - Checks the credentials entered for Admin and redirects Accordingly', async () => {
      const response = await request(x.app)
        .post('/admin_login')
      expect(response.statusCode).toBe(200);
    });
  });



  










  




