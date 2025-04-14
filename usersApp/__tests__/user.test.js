const mongoose = require("mongoose");
const request = require("supertest");

const authService = require('../services/auth.service');
const userService = require('../services/user.services');

const app = require('../app');
// require('dotenv').config();

// Connecting to MongoDB before each test
beforeEach(async ()=> {
  await mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => {console.log("Connection to MongoDB established for Jest")},
    err => { console.log("Failed to connect to MongoDB for Jest", err) }
  );
});

// Close connection to MongoDB
afterEach(async ()=>{
  await mongoose.connection.close();
})

describe("Requests for /api/users", ()=>{

  let token;

  beforeAll(()=>{
    user = {
      username: "admin",
      email: "admin@aueb.gr",
      roles: ["EDITOR", "READER","ADMIN"]
    };
    token = authService.generateAccessToken(user);
  });

  it('GET Returns all users', async ()=>{
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBeTruthy();
    expect(res.body.data.length).toBeGreaterThan(0);
  }, 50000);
});


describe("Requests for /api/users/:username", () => {
  let token 

  beforeAll(()=>{
    user = {
      username: "lakis",
      email: "lalakis@aueb.gr",
      roles: ["EDITOR", "READER","ADMIN"]
    };
    token = authService.generateAccessToken(user);
  });

  it("Get returns specific user", async()=>{
    
    const result = await userService.findLastInsertedUser();
    console.log("RESULT>>", result);
    
    const res = await request(app)
      .get('/api/users/'+result.username)
      .set('Authorization', `Bearer ${token}`); 
    
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBeTruthy();
    expect(res.body.data.username).toBe(result.username);
    expect(res.body.data.email).toBe(result.email);
  })
})
