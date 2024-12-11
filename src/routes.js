import express from "express";
import controller from "../src/controller/index.js";

const router = express.Router();

router.post("/foods", controller.foods);
router.post("/exercises", controller.exercises);

export default router;
