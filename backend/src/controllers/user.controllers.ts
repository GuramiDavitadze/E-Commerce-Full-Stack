import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { updateUserService } from "../services";
type UpdateUserType = {
  fullname?: string;
  image?: string;
  isActive?: boolean;
};
const updateUserController = async (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    const { id } = decoded;
    const { fullname, image, isActive } = req.body;
    const data: UpdateUserType = {};
    if (fullname !== undefined) data.fullname = fullname;
    if (image !== undefined) data.image = image;
    if (isActive !== undefined) data.isActive = isActive;
    const resp = updateUserService(id,data);
    res.status(200).json({ message: "User updated successfully", data: resp });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  res.send("Good");
};
export { updateUserController };
