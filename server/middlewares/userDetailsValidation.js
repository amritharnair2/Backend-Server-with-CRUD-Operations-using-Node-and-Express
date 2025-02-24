const validationmiddleware = (req,res,next) => {
    try {
        
        const {name, email, age} = req.body;
        if(!name || !email || !age) {
            return res.status(400).json({message: "All fields are required"})
        }
        next()

    } catch (error) {
        
        console.log(error)
        res.status(500).json({error: error.message || "Internal server error"})
    }
}

module.exports = {
    validationmiddleware
}