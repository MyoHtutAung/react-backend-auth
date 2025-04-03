const express = require('express')
const router = express.Router();
const User = require('../models/user')

router.post('/login', async(req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user || user.password != password){
            return res.status(401).json({error: 'Invalid email or password'})
        }

        res.json({ message: "Login successful", token: "dummyToken123" });
    } catch (err) {
        console.log('Login error:', err)
        res.status(500).json({error: 'Server Error'})
    }
})

module.exports = router;