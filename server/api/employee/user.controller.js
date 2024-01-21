const UserModel = require('./user.model');


exports.registerusers = async (req, res, next) => {
    try {
        const existingsUser = await UserModel.findOne({ email: req.body.email });
        if (existingsUser) {
            return res.status(400).json({
                message: 'User already registered'
            });
        } else {
            const newUser = new UserModel({ email: req.body.email, password: req.body.password });
            const result = await newUser.save();
            res.status(201).json({ message: 'User successfully registered' });
        }
    } catch (error) {
        res.status(500).json({
            error: error
        });
    } 
}

exports.login =async(req,res,next)=>{
    try {
        const existingsUser = await UserModel.findOne({ email: req.body.email,password:req.body.password });
        if (existingsUser) {
            return res.status(200).json({
                message: 'Login Successful'
                
            });
        } else {
           
            res.status(400).json({ message: 'invalid' });
        }
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}