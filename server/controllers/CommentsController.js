let commentModel = require("../models/CommentsModel");

//GET request
exports.list =  function list(request, response) {
    // response.json(comments);
    commentModel.find().exec().then(comments => {
        return response.json(comments);
    })
}

//GET with an ID
exports.show = function show(request, response) {
    response.json(comments[request.params.id-1]);
}


//POST request
exports.create =  function create(request, response) {
    const newComment = new commentModel({
        body : request.body.body
    })
    newComment.save().then(savedUser => {
        console.log(savedUser);
    })   
}

//PUT request
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}

//DELETE request
exports.remove =  function remove(request, response) {
    return response.json({});
}
   