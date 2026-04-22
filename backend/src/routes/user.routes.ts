import { Router } from "express";
import * as middlewares from "../middlewares";
import * as controller from "../controllers";
const router = Router();

router.get("/profile", middlewares.authMiddleware);

router.patch(
  "/profile",
  middlewares.authMiddleware,
  middlewares.userUpdateMiddleware,
  controller.updateUserController,
);
router.patch(
  "/password",
  middlewares.authMiddleware,
  middlewares.changePasswordMiddleware,
  controller.changePasswordController,
);

router.get("/all", middlewares.checkUser, controller.getAllUsersController);

router.get("/:user_id",middlewares.checkUser,controller.getUserByIdController)
router.delete(
  "/:user_id",
  middlewares.checkUser,
  controller.deleteUserByIdController,
);


export default router;
