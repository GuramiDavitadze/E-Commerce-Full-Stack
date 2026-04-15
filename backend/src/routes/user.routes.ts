import { Router } from "express";
import * as middlewares from "../middlewares";
import * as controller from "../controllers";
const router = Router();

router.patch(
  "/profile",
  middlewares.userUpdateMiddleware,
  controller.updateUserController,
);
router.patch(
  "/password",
  middlewares.changePasswordMiddleware,
  controller.changePasswordController,
);

router.get("/all", middlewares.checkUser, controller.getAllUsersController);

router.delete(
  "/:user_id",
  middlewares.checkUser,
  controller.deleteUserByIdController,
);

export default router;
