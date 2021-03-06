const restify = require("restify");

const respond = (req, res, next) => {
    res.send('hello' + req.params.name);
    next();
}

const server = restify.createServer();
server.get("/hello/:name", respond);
console.log(process.env.PORT);
server.listen(process.env.PORT);