const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/private-sale', (req, res) => res.render('private-sale'));
router.get('/dashboard', (req, res) => {
    // const flash = showFlash(req);
    // const notJoinedTelegram = !req.user.telegram;
    // const notFollowedTwitter = !req.user.twitter;
    res.render('dashboard', {
      layout: 'dashboard',
      user: req.user,
    //   flash,
    //   notJoinedTelegram,
    //   notFollowedTwitter,
    //   telegramTaskReward: JOIN_TELEGRAM_REWARD,
    //   followTwitterReward: FOLLOW_TWITTER_REWARD,
    });
  });
  router.get('/profile', (req, res) =>
    res.render('profile', { layout: 'dashboard', user: req.user })
  );
  router.get('/referrals', async (req, res) => {
    try {
      const userId = req.user._id;
      const referrals = await User.find({ uplineUserId: userId }).lean();
      referrals.forEach((referral) => {
        referral.lastMiningTime = formatDate(referral.lastMiningTime);
      });
      res.render('referrals', { layout: 'dashboard', referrals, user: req.user });
    } catch (error) {
      console.error(error);
      res.json(responseService.sendError({ error: error.message }));
    }
  });

module.exports = router