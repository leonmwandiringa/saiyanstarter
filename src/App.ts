/**
 * @author Leon Mwandiringa
 * @uses bootsrap mvc app instance
 * @return server app object
 */

import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as router from "./Routes/GlobalRoutes"

class App{

    public express: express.Application;

    constructor(){

        this.express = express();
        this.globalMiddlewares();
        this.securityMiddelwares();
        this.routes();

    }

    private globalMiddlewares(): void{

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: true}));

    }

    private routes(){

        this.express.use("/", router);
  
    }

    private securityMiddelwares(){


    }


}

export default new App().express;