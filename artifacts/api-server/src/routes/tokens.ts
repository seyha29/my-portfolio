import { Router, type IRouter } from "express";
import { RegisterTokenBody } from "@workspace/api-zod";

const router: IRouter = Router();

const registeredTokens = new Set<string>();

router.post("/tokens", (req, res) => {
  const result = RegisterTokenBody.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { token } = result.data;
  registeredTokens.add(token);

  res.status(201).json({
    success: true,
    message: "Push notification token registered successfully",
  });
});

export default router;
