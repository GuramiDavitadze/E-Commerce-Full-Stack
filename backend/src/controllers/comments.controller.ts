import { Request, Response } from "express";

const createCommentController = (req: Request, res: Response) => {
  res.send("Hello");
};

export { createCommentController };
