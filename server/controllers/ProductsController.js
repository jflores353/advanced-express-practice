let productModel = require("../models/ProductsModel");

//GET request
exports.list =  function list(request, response) {
    // return response.json(products);
    productModel.find().exec().then(products => {
        return response.json(products);
    })
}

//GET by ID
exports.show = function show(request, response) {
    response.json(products[request.params.id-1]);
}

//POST 
exports.create =  function create(request, response) {
    let newProduct = new productModel({
        name: request.body.name,
        description : request.body.description
    })
    newProduct.save.then(newSavedProduct => {
        console.log(newSavedProduct);
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
   