let users= [
    {id:1, name:'Amritha', email:'amrithar@gmail.com', age:22 },
    {id:2, name:'Anagha', email:'anaghar@gmail.com', age:23}
]

//get all users

const getUsers = (req,res) => {
    try {
        res.status(200).json({message: "users fetched", users})

    } catch (error) {
        res.status(500).json({error: error.message || "Internal server error"})
    }
}

//get a single user based on id

const searchUser = (req,res) => {
    try {
        const {id} = req.query
        const searchResult = users.filter((user) => user.id == id)
        if (searchResult.length===0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({message: "user details fetched", searchResult})

    } catch (error) {
        res.status(500).json({error: error.message || "Internal server error"})
    }
}

//add user

const addUser = (req,res) => {
    try {    
        
        users.push(req.body)
        res.status(201).json({message: "user added successfully",users})
    }

    catch(error) {
            res.status(500).json({error: error.message || "Internal server error"})
    }
}

//update user based on id

const updateUser = (req,res) => {
    try {
      
        const {id} = req.params
        const {name, email, age} = req.body
        const updatedUsers = users.map((user) => {
            if(user.id == id) {
                user.name = name
                user.email = email
                user.age = age
            }
            return user
        })
        res.status(200).json({mesasage: "user details updated successfully", updatedUsers})

    } catch (error) {
        res.status(500).json({error: error.message || "Internal server error"})
    }
}

//delete a user based on id

const deleteUser =  (req,res) => {
    try {
        console.log(req.params.id)
        users = users.filter((user) => user.id != req.params.id)
        res.status(204).json({message: "user deleted successfully",users})
    } catch (error) {
        res.status(500).json({error: error.message || "Internal server error"})
    }
}


module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    searchUser
}