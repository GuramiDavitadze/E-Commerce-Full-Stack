import { Router } from "express";
import * as middleware from "../middlewares";
import * as conntroller from '../controllers'
const router = Router();

router.post("/", middleware.productCreationMiddleware, conntroller.productCreationController);
export default router;
