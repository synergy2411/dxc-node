const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
const TodoModel = require("../controller/model/todo.model");

chai.use(chaiHttp);
// Testing Suite
describe("Todos App", () => {
    
    beforeEach(async () => {
        await TodoModel.deleteMany()
    })

    // afterEach()
    // beforeAll()
    // afterAll()

  describe("/GET todos", () => {
    it("Should be getting all todos", (done) => {
      chai
        .request(app)
        .get("/todos")
        .end((err, res) => {
          chai.expect(res.status).to.be.eql(200);
          chai.expect(res.body.data).to.be.a("array");
          chai.expect(res.body.data.length).to.be.eql(0);
          done();
        });
    });
  });

  describe("/POST todos", () => {
      it("Should be able to create item", (done) => {
          let todo = new TodoModel({label : "sip sip", status : false});
          chai.request(app)
            .post("/todos")
            .send(todo)
            .end((err, res)=>{
                chai.expect(res.status).to.eql(200)
                chai.expect(res.body.label).to.eql(todo.label)
                chai.expect(res.body.status).to.be.false
                chai.expect(res.body._id).not.to.be.undefined
                done()
            })
      })
  })

  describe("/GET todo", () => {
      it("Should fetch one todo item", done => {
          let todo = new TodoModel({label : "honk honk", status : true})
          todo.save((err, res)=>{
              chai.request(app)
                .get("/todos/"+todo._id)
                .end((err, res) => {
                    chai.expect(res.status).to.eql(200)
                    chai.expect(res.body.label).to.eql("honk honk")
                    chai.expect(res.body.status).to.be.true
                    chai.expect(res.body._id).not.to.be.undefined
                    done();
                })
          })
      })
  })

// Delete & Patch API Tests

});
