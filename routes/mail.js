const router = require('express').Router();

// Controllers
const mail = require('../controllers/mail');

// Routes
router.get('/', mail.landing);
router.post('/sendMail', mail.sendMail);

module.exports = router;
