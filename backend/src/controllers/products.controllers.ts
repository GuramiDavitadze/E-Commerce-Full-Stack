import { Request, Response } from "express";
const productCreationController = async (req: Request, res: Response) => {
  res.send("Hello");
};
export { productCreationController };
