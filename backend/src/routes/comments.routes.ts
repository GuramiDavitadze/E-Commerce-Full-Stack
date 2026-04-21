import { Router } from "express";
import * as controllers from "../controllers";
import * as middlewares from "../middlewares";
const router = Router();

router.post(
  "/product/:product_id",
  middlewares.checkAuth,
  middlewares.createCommentMiddleware,
  controllers.createCommentController,
);
router.get(
  "/product/:product_id",
  controllers.getAllCommentsByProductIdController,
);
export default router;
