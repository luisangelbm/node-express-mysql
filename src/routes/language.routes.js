const { Router } = require("express");
const router = Router();
const {
  getLenguages,
  getLenguage,
  createLenguage,
  updateLenguage,
  deleteLenguage,
} = require("./../controllers/language.controller");

router.get("/", getLenguages);
router.get("/:id", getLenguage);
router.post("/", createLenguage);
router.put("/:id", updateLenguage);
router.delete("/:id", deleteLenguage);

module.exports = router;
