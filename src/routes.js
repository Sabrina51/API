import express from "express";
import controller from "../src/controller/index.js";

const router = express.Router();

router.get("/foods", controller.foods);

export default router;
