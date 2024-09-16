import {Chat} from '../Models/chatModels.js'

export const accessChat = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) res.json('didnt found userId');
        
        var isChat = await Chat.find({
            isGroupChat: false,
            $and: [
                { users: { $elemMatch: { $eq: req.user._id } } },
                { users: { elemMatch: { $eq: userId } } },
            ]
        }).populate('users', '-password').populate('latestMessage');
    } catch (error) {
        console.log(error)
    }
}