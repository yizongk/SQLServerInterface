"user strict";

const server = require("./server");

const startServer = async () => {
    try {
        // todo: move configuration to separate config
        const config = {
            host: "localhost",
            port: 8080,
        }
    } catch ( err ) {
        console.log( "startup error:", err );
    }
};

startServer();