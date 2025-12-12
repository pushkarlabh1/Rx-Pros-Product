import mongoose from 'mongoose';
import User from './models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

const createDefaultUser = async () => {
  try {
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email: 'admin@taskify.com' });
    if (existingUser) {
      console.log('Default user already exists:', existingUser.email);
      console.log('Email: admin@taskify.com');
      console.log('Password: admin123');
      process.exit(0);
    }

    // Create a new user
    const user = new User({
      name: 'Admin User',
      title: 'Administrator',
      role: 'Admin',
      email: 'admin@taskify.com',
      password: 'admin123', // This will be hashed by the pre-save hook
      isAdmin: true
    });

    const savedUser = await user.save();
    console.log('Default user created successfully:');
    console.log('Email: admin@taskify.com');
    console.log('Password: admin123');
    console.log('User ID:', savedUser._id);

    process.exit(0);
  } catch (error) {
    console.error('Error creating user:', error);
    process.exit(1);
  }
};

createDefaultUser();