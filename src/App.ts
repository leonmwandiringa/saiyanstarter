/**
 * @author Leon Mwandiringa
 * @uses bootsrap mvc app instance
 * @return server app object
 */

import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import router from "./Routes/GlobalRoutes"

class App{

    public express: express.Application;

    constructor(){

        this.express = express();
        this.globalMiddlewares();
        this.routes();

    }

    private globalMiddlewares(): void{

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: true}));

    }

    private routes(){

        let route = express.Router();

        this.express.use(router);
  
    }

}

export default new App().express;