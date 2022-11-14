const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const userHandlers = require("./controllers/usersHandlers");

router.get("/api/users", userHandlers.getUsers);
router.get("/api/users/:id", userHandlers.getUserById);
router.put("/api/users/:id", userHandlers.putUserById);
router.post("/api/user", userHandlers.postUser);

module.exports = router;
