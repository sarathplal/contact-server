// import json file
const jsonServer = require('json-server')

                // require** is equivalent to import** 

const cors=require('cors')

// create json-server application

const server = jsonServer.create()

server.use(cors())
// set up the route for db.json()

const router = jsonServer.router("db.json")

// create a middleware using json server
const middleware = jsonServer.defaults()


// set up port number for server app
const port = process.env.PORT || 3000

// we have to use router and middleware

server.use(middleware)
server.use(router)


// to listen the server app in port
server.listen(port, () => {
    console.log(`contact server app started at ${port}`);
})