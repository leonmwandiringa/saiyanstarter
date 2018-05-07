/**
 * @author Leon Mwandiringa
 * @uses run node server instance
 * @return mixed exec 
 */
import * as http from "http";
import * as debug from "debug";
import * as path from "path";
import App from "./App";
import * as dotenv from "dotenv";

//set debug for express server
debug(ts-express:server);

//initiate dotenv
dotenv.config({
    path: path.join(__dirname, "../\.env")
});

App.set("port", process.env.PORT);