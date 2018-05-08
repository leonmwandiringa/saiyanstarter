/**
 * @author Leon Mwandiringa
 * @uses define global base routes
 * @return server app object
 */

import {Router, Request, Response, NextFunction} from "express";
import * as path from "path";
import Home from path.join(__dirname, "./App/Controllers/HomeController");

class Web{

    public router: Router;

    constructor(){
        this.router = Router();
        this.initiateRoutes();
    }


    private initiateRoutes(){
        this.router.get("/", );
    }

}