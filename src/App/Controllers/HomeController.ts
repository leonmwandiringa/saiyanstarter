/**
 * @author Leon Mwandiringa
 * @uses define Home route handler
 * @return home controller object
 */

 import { Request, Response, NextFunction } from "express";

 class HomeController{

    public static home(req: Request, res: Response){
        res.send("working");
    }

 }

 export default HomeController;