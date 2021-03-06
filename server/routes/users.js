const User = require('../models/User');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('Your account has been deleted!');
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json('You can delete only your account!');
    }
});

router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                return res.status(500).json(error);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json('Your account has been updated!');
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/:id/follow', async (req, rea) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followings: req.params.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json('User has been followed');
            } else {
                res.status(403).json('You already followed this user');
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You can not follow yourself!')
    }
});

router.put('/:id', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followings: req.params.userId } });
                await user.updateOne({ $pull: { followings: req.params.userId } });
                res.status(200).json('You have been unfollow the user');
            } else {
                res.status(400).json('You do not follow thid user');
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You can not unfollow yourself!');
    }
});



module.exports = router