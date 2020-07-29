const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async store (req, res) {
        try {
            const {FirstName, LastName, Email, Password, MobileNumber} = req.body;
            
            const ExistingUser = await User.findOne({Email})

            if(!ExistingUser){
                const hashedPassword = await bcrypt.hash(Password, 10);  
                const user = await User.create ({
                    FirstName,
                    LastName,
                    Email,
                    Password: hashedPassword,
                    MobileNumber: MobileNumber
                });
                
                return res.json(user)
            
            }
                return res.status(400).json({
                    message: "Email already exists"
                }); 

        } catch (error) {
            throw(`Error while registering is ${error}`)
        }
    }
}