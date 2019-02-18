let vehicleModel = require("../models/VehiclesModel");

//GET request
exports.list =  function list(request, response) {
    // response.json(vehicles);
    vehicleModel.find().exec().then(vehicles => {
        return response.json(products);
    })
}

//GET by ID
exports.show = function show(request, response) {
    response.json(vehicles[request.params.id-1]);
}

//POST
exports.create =  function create(request, response) {
   let newVehicle = new vehicleModel ({
       year: request.body.year,
       make: request.body.make,
       model: request.body.model
   })
   newVehicle.save().then(savedNewVehicle => {
       console.log(savedNewVehicle);
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
   