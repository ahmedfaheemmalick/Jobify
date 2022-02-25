const getJobs = (req, res) => {
    try {
        res.status(200).json("all jobs")
    } catch (error) {
        res.status(400).json(new Error(error))
    }
}

const getJob = (req, res) => {
    try {
        res.status(200).json("one job")
    } catch (error) {
        res.status(400).json(new Error(error))
    }
}

const createJob = (req, res) => {
    try {
        res.status(200).json("create job")
    } catch (error) {
        res.status(400).json(new Error(error))
    }
}

const updateJob = (req, res) => {
    try {
        res.status(200).json("update job")
    } catch (error) {
        res.status(400).json(new Error(error))
    }
}

const deleteJob = (req, res) => {
    try {
        res.status(200).json("delete job")
    } catch (error) {
        res.status(400).json(new Error(error))
    }
}

export {
    getJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
}