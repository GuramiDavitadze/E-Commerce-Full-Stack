import { Request, Response } from "express";
import { productCreationService } from "../services";
const productCreationController = async (req: Request, res: Response) => {
  try {
    const { name, description, price, quantity, category_id, status } =
      req.body;
    const { user } = req;

    const data = {
      name,
      description,
      price,
      quantity,
      status,
    };

      const admin_id = user?.id;
    const resp = await productCreationService(data,admin_id,category_id);

    res
      .status(201)
      .json({ message: "Product created successfully", data: resp });
  } catch (error:any) {
      console.log(error);
      if (error.code === 'P2025') {
          return res.status(404).json({message:"Category with this id does not exist!"})
      }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export { productCreationController };
