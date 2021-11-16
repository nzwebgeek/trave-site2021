exports.handler = function(event, context, callback){
    callback(null, {
        statuscode: 200,
        body: 'Welcome to the secret area'
    })
}