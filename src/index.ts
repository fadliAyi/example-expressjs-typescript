import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import {config as dotenv} from 'dotenv';

//routers
import UserRoutes from './routers/UserRoutes';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
    }

    protected routes(): void {
        this.app.use("/api/v1/users", UserRoutes);
    }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log('Server running on port: ' + port);
    console.log("Connected to DB: " + process.env.DB_HOST);
});