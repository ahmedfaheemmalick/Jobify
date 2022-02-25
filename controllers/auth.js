const register = (_req, res) => {
    try {
        res.status(200).json("register")
    } catch (error) {
        res.status(400).json(new Error(error))
    }
}

const login = (_req, res) => {
    try {
        res.status(200).json("register")
    } catch (error) {
        res.status(400).json(new Error(error))
    }
}

export {
    register,
    login
}