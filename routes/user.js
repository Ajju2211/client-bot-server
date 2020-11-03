const router = require("express").Router();
const authMiddleware = require("../middlewares/auth");
const userController = require("../controllers/userController");
const botController = require("../controllers/botController");
// user login
router.post('/login',authMiddleware.login);

// user logout
router.get('/logout', authMiddleware.logout);

// protect every route on /user/*
// router.use(authMiddleware.protect);

// testing route
router.get('/',userController.protectedResource);

// chatbot endpoints
router.post('/bot/webhook', botController.BotReply);

module.exports = router;