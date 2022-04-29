import bcrypt from "bcrypt"
import User from "../models/User.js"

const register = async (req, res) => {
    try {
        if (!req.body.email ||
            !req.body.password ||
            !req.body.name
        ) {
            return res.status(403).json(new Error({ msg: "Please Enter all the required fields." }));
        }

        const user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ message: "This email address is associated with another account." })
        } else {
            const newUser = await User.create({
                ...req.body,
                password: await bcrypt.hash(req.body.password, 10)
            })

            res.status(201).json({ name: newUser.name, email: newUser.email })
        }
    } catch (error) {
        res.status(400).json(new Error(error))
    }
}

const login = (req, res) => {
    try {
        if (!req.body.email ||
            !req.body.password
        ) {
            res.status(403).json(new Error({ msg: "Please Enter all the required fields." }));
            return;
        }
    } catch (error) {
        res.status(400).json(new Error(error))
    }
}

export {
    register,
    login
}