import express from "express";
import { sendFormMail } from "../utils/mailer.js";

const router = express.Router();

router.post("/send-quote", async (req, res) => {
  const { formType, ...fields } = req.body;

  if (!formType) {
    return res.status(400).json({
      success: false,
      error: "formType is required",
    });
  }
  try {
    await sendFormMail(formType, fields);
    return res.status(200).json({
      success: true,
      message: "Submitted Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      err: "Failed to send mail",
    });
  }
});

export default router;
