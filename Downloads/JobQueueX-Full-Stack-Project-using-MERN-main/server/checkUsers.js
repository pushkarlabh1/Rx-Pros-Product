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

const checkUsers = async () => {
  try {
    await connectDB();

    const users = await User.find({}).select("name email role isAdmin isActive _id");

    console.log('\nCurrent users in the database:');
    console.log('================================');
    users.forEach((user, index) => {
      console.log(`${index + 1}. Name: ${user.name}`);
      console.log(`   Email: ${user.email}`);
      console.log(`   Role: ${user.role}`);
      console.log(`   Is Admin: ${user.isAdmin}`);
      console.log(`   Is Active: ${user.isActive}`);
      console.log(`   ID: ${user._id}`);
      console.log('   ---');
    });

    if (users.length === 0) {
      console.log('No users found in the database.');
    }

    process.exit(0);
  } catch (error) {
    console.error('Error checking users:', error);
    process.exit(1);
  }
};

checkUsers();