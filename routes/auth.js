const admin = require("firebase-admin");
const express = require("express");

const router = express.Router();

// const serviceAccount = require("../service.json");
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE)),
});

router.get("/:id", (req, res) => {
  res.json({
    message: "Api is running",
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await admin.auth().deleteUser(id);
    return res.status(200).json({
      message: "User Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error,
    });
  }
});

module.exports = router;
