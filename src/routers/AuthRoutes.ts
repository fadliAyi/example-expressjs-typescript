import { Router, Request, Response } from 'express';
import IRouter from './RouteInterface';
import AuthController from '../controllers/AuthController';

class AuthRoutes implements IRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    public routes(): void {
        // this.router.get("/regi")
    }
}

export default new AuthRoutes().router;