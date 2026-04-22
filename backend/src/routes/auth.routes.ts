import express from "express";
import * as controler from "../controllers";
import * as middleware from "../middlewares";

const router = express.Router();

router.post(
  "/register",
  middleware.authLimiter,
  middleware.registerMiddleware,
  controler.registerController,
);

router.post(
  "/login",
  middleware.authLimiter,
  middleware.loginMiddleware,
  controler.loginController,
);

router.get("/me", middleware.authMiddleware, controler.getMeController);
router.post("/logout", controler.logoutController);
export default router;
