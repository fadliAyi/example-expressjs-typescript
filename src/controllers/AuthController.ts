import { request, Request, Response } from "express";
const db = require('../db/models');

class AuthController {
    async register(req: Request, res: Response): Promise<Response> {
        let {email, password} = req.body;
        // console.log(db);
        
        const createUser = await db.User.create({
            email,
            password,
        });
        return res.send(createUser);
    }
}

export default new AuthController();