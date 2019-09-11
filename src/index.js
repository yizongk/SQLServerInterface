"user strict";

//import server from "./server";
const server = require( "./server" );

const startServer = async () => {
    try {
        // todo: move configuration to separate config
        const config = {
            host: "localhost",
            port: 8080,
        }

        // create an instance of the server application
        const app = await server( config ); 

        // start the web server
        await app.start();

    } catch ( err ) {
        console.log( "startup error:", err );
    }
};

startServer();