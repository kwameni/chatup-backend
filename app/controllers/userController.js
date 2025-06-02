const User = require('../database/models/User')
module.exports = {

    async create(req, res) {

        const { firstName, lastName, email, password } = req.body

        try {
            const newUser = await User.create({ firstName, lastName, email, password })
            return res.status(201).json({ user: newUser })
        } catch(err) {
            return res.status(500).json({ err })
        }
    }

}