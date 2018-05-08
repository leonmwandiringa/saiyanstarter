/**
 * @author Leon Mwandiringa
 * @uses define global base routes
 * @return server app object
 */

import {Router, Request, Response, NextFunction} from "express";
import HomeController from "../App/Controllers/HomeController";

class GlobalRoutes{

    public router: Router;

    constructor(){
        this.router = Router();
        this.initiateRoutes();
    }


    private initiateRoutes(){
        this.router.get("/", HomeController.home);
    }

}

export default new GlobalRoutes().router;