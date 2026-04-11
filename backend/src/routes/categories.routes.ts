import express from "express";
import { categoryCreationMiddleware, checkUser } from "../middlewares";
import { categoryCreationController } from "../controllers";

const router = express.Router();

router.post(
  "/",
  checkUser,
  categoryCreationMiddleware,
  categoryCreationController,
);

export default router;
