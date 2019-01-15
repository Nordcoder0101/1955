const Person = require('../models/People')

module.exports = {
  index: function(req, res){
    Person.find({})
    .then(people =>{
      res.json({message: "success", data: people})
    })
    .catch((err)=>{
      console.log(err)
    })
    
  },

  createPerson: function(req, res){
    console.log(req.params.name)
    let newPerson = new Person({name: req.params.name})
    newPerson.save()
    .then(()=>{
      res.redirect("/")
    })
    .catch((err) =>{
      console.log(err)
    })
    
  },

  deletePerson: function(req, res){
    Person.deleteOne({name: req.params.name})
    .then(()=>{
      res.redirect('/')
    })
    .catch(()=>{
      console.log(err)
    })
  },

  getPerson: function(req, res){
    Person.findOne({name: req.params.name})
    .then((person)=>{
      res.json({message: 'success', data: person})
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
