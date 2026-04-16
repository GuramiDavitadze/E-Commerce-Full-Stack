import { Request, Response, NextFunction } from "express";

const checkOrderMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "You need to provide products you want to order" });
  }

  const { products } = req.body;
  if (!products) {
    return res
      .status(400)
      .json({ message: "You need to provide products you want to order" });
  }
  if (products?.length < 1) {
    return res.status(400).json({ message: "Order data is empty" });
  }
    
  next();
};
export { checkOrderMiddleware };
