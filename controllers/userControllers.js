import { User } from "../Models/userModel.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, pic } = req.body;

        const userAlreadyExist = await User.findOne({ email: email });

        if (userAlreadyExist) res.json("User Already Exists");
            
        else {
            
            
            const user = await User.create({ name, email, password, pic });
            
             res.json(user);
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
               return res.json(userExists);
            } else {
               return res.json('Password Did not Matched')
            }
        }

    } catch (error) {
        console.log(error)
    }
}





