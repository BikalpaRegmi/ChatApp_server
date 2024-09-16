import { User } from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../Config/genereateTokens.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, pic } = req.body;

        const userAlreadyExist = await User.findOne({ email: email });

        if (userAlreadyExist) res.json("User Already Exists");
            
        else {
            
            
            const user = await User.create({ name, email, password, pic });
            
             res.json({
               _id: user._id,
               name: user.name,
               email: user.email,
               pic: user.pic,
               token: generateToken(user._id),
             });
        }
        } catch (error) {
        console.log(error);
    }
    
}

export const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (!userExists) {
            return res.json('Email not found plz register');
        } else {
            const isPassMatched = await bcrypt.compare(password, userExists.password);
            if (isPassMatched) {
                return res.json({
                  _id: userExists._id,
                  name: userExists.name,
                  email: userExists.email,
                  pic: userExists.pic,
                  token: generateToken(userExists._id),
                });
            } else {
               return res.json('Password Did not Matched')
            }
        }

    } catch (error) {
        console.log(error)
    }
}

export const allUser = async (req,res) => {
    try {
        const allUser = await User.find({_id:{$ne:req.user._id}});
       return res.json(allUser);
    } catch (error) {
        console.log(error)
    }
}





