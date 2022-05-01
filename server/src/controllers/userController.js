const express = require('express');
const router = express.Router();

const services = require('../services/userServices');
const { isAuth, isGuest } = require('../middleware/authMidd');


router.post('/login',isGuest, async (req, res) => {
    let {username, password} = req.body;

    let { user, accessToken, refreshToken } = await services.login({username, password});

    res.json({
        _id: user._id,
        username: user.username,
        accessToken,
        refreshToken,
    });
});

router.post('/refresh', async (req, res) => {
   
    let refreshToken = req.body.refreshToken;
  
    let { accessToken, refreshToken: newRefreshToken } = await services.refresh(refreshToken);
  
    res.json({
        accessToken,
        refreshToken: newRefreshToken,
    });
  });

  router.get('/logout', (req, res) => {
    res.json({ ok: true });
  });
  
  router.post('/refresh', async (req, res) => {
    console.log(req.body);
    let refreshToken = req.body.refreshToken;
  
    let { accessToken, refreshToken: newRefreshToken } = await services.refresh(refreshToken);
  
    res.json({
        accessToken,
        refreshToken: newRefreshToken,
    });
  });
module.exports = router;