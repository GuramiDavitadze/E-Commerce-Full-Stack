import { Request, Response, NextFunction } from "express";

const userUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.body) {
    return res.status(400).json({ message: "No Data Provided" });
  }
  const { fullname, image, isActive } = req.body;
  const isIsActiveBoolean = isActive && typeof isActive !== "boolean";
  if (isIsActiveBoolean) {
    return res.status(400).json({ message: "isActive must be boolean" });
  }
  const isBodyProvidedEmpty = !fullname && !image && isActive === undefined;
  if (isBodyProvidedEmpty) {
    return res.status(400).json({ message: "No Data Provided" });
  }
  const isFieldsEmpty =
    !fullname?.trim() && !image?.trim() && isActive === undefined;
  if (isFieldsEmpty) {
    return res.status(400).json({ message: "Fields should not be empty" });
  }

  next();
};
export { userUpdateMiddleware };
