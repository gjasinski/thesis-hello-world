exports.handler = async (event) => {
    // TODO implement
    var datetime = new Date();
    var result = 'Hello from Lambda! Now is ' + datetime;
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};
