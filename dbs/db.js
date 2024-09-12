import mongoose from 'mongoose';

export const connectDb = async() => {
    try {
          await mongoose.connect(process.env.URI);
        console.log('mongoose conneected sucessfully')
    } catch (error) {
        console.log(error)
    }
}