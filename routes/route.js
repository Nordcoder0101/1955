const controller = require("../controllers/controller")
module.exports = (app) => {
  app.get('/', controller.index)
  app.get('/new/:name', controller.createPerson)
  app.get('/remove/:name', controller.deletePerson)
  app.get('/:name', controller.getPerson)
}
