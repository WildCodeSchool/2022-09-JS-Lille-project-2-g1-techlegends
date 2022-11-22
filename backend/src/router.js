const express = require("express");

const router = express.Router();

const userHandlers = require("./controllers/usersHandlers");

router.get("/api/users", userHandlers.getUsers);
router.get("/api/users/:id", userHandlers.getUserById);
router.put("/api/users/:id", userHandlers.putUserById);
router.post("/api/user", userHandlers.postUser);

module.exports = router;
