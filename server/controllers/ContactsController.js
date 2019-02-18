let contactModel = require("../models/ContactsModel");

//GET request
exports.list =  function list(request, response) {
    // return response.json(contacts);
    contactModel.find().exec().then(contacts => {
        return response.json(contacts);
    })
}

//GET by ID
exports.show = function show(request, response) {
    response.json(contacts[request.params.id-1]);
}

//POST
exports.create =  function create(request, response) {
    let newContact = new contactModel({
        name: request.body.name,
        occupation: request.body.occupation,
        avatar: request.body.avatar
    })
    newContact.save().then(savedNewContact => {
        console.log(savedNewContact);
    })
}

//PUT
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}

//DELETE
exports.remove =  function remove(request, response) {
    return response.json({});
}
   