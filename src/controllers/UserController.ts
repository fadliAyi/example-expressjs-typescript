import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import IController from './ControllerInterface';

class UserController implements IController {
    index(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        return res.send("ini dari controller");
    }
    create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error('Method not implemented.');
    }
    show(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error('Method not implemented.');
    }
    update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error('Method not implemented.');
    }
    delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Response<any, Record<string, any>> {
        throw new Error('Method not implemented.');
    }
}

export default new UserController();