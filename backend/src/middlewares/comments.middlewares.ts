import { Request, Response, NextFunction } from "express";

const createCommentMiddleware = (req: Request, res: Response, next: NextFunction) => {
    next()
}
export {createCommentMiddleware}