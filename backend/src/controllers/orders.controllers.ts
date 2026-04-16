import { Request, Response } from "express";
import { createOrderService } from "../services";
const createOrderController = async (req: Request, res: Response) => {
  try {
    const { products } = req.body;
    const { id } = req.user!;
    const resp = await createOrderService(id, products);

    res.status(201).json({ message: "Order Created Successfully", data: resp });
  } catch (error: any) {
    if (error.code === "P2003") {
      return res.status(404).json({ message: "Product Not Found" });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createOrderController };
