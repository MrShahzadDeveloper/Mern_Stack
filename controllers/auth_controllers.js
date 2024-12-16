const home = async (req, res) => {
    try {
        res.status(200).send("Hello This Server is created Succefully By Shadow")
    } catch (error) {
        console.log(error)
    }
}

const register = async (req, res) => {
    try {
        res.status(200).send("This is registration page")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { home , register }