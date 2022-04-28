const express = require('express');
const router = express.Router();

const services = require('../services/userServices');

router.post('/login', async (req, res) => {
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

module.exports = router;