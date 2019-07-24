import { Router } from "express";
import { list, createUser } from "../api/auth";

const router = Router();

/* ---------- User ----------- */

router.get("/", list);
router.post("/signup", createUser);

export default router;
