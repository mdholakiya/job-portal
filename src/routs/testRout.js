import express from "express"

import { userController1,userController2 } from "../controller/testController.js";
const router=express.Router()

router.get("/",userController1)
router.post("/login",userController2)

 export default router