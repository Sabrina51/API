import express from 'express'
import controller from "../src/controller/index.js"

const router = express.Router()

router.get('/information', controller.information);

export default router