import express, { Request, Response, NextFunction } from "express";
import authentication from './authentication';

const router = express.Router();

const setupRoutes = (router: express.Router) => {
    router.use((req: Request, res: Response, next: NextFunction) => {
        authentication(req, res, next);
    });
};

setupRoutes(router);

export default router;
