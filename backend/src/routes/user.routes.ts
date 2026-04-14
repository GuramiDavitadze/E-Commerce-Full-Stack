import { Router } from "express";
import * as middlewares from "../middlewares";
import * as controller from "../controllers";
const router = Router();

router.patch(
  "/profile",
  middlewares.userUpdateMiddleware,
  controller.updateUserController,
);

export default router;
