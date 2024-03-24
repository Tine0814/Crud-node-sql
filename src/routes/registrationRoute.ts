import express from "express";
import registrationController from "../controllers/registrationController";
const router = express.Router();

router.post("/registration", registrationController.insertRegistration);
router.get("/registration-list", registrationController.selectAllRegistration);
// router.get("/insert/:id", registrationController.);
// router.delete("/insert/:id", registrationController.);
// router.patch("/insert/:id", registrationController.);

export default router;
