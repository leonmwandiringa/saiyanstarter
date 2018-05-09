/**
 * @author Leon Mwandiringa
 * @uses bootsrap mvc app instance
 * @return server app object
 */

import * as express from "express";
import {Request, Response, NextFunction} from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import router from "../Routes/GlobalRoutes";
import LoggerStream from "../App/Controllers/LogsLogger";

class App{

    public express: express.Application;

    constructor(){

        this.express = express();
        this.moduleMiddlewares();
        this.LocalMiddlewares();
        this.routes();

    }

    /* run global modules middlewares */
    private moduleMiddlewares(): void{

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: true}));

    }

    /* define and run global local middlewares */
    private LocalMiddlewares(): void{

        this.express.use(LoggerStream.writeStream());

    }

    /* call and run global router middlewares */
    private routes(): void{

        let route = express.Router();
        this.express.use(router);
  
    }

}

export default new App().express;