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

const createTestUsers = async () => {
  try {
    await connectDB();

    // Check if admin user already exists
    let adminUser = await User.findOne({ email: 'admin@taskify.com' });
    if (adminUser) {
      console.log('Admin user already exists:', adminUser.email);
    } else {
      console.log('Creating Admin user...');
      // Create Admin user
      adminUser = new User({
        name: 'Admin User',
        title: 'System Administrator',
        role: 'Admin',
        email: 'admin@taskify.com',
        password: 'admin123',
        isAdmin: true,
        isActive: true
      });

      adminUser = await adminUser.save();
      console.log('Admin user created:', adminUser.email);
    }

    // Check if first employee user already exists
    let employeeUser1 = await User.findOne({ email: 'employee1@taskify.com' });
    if (employeeUser1) {
      console.log('First Employee user already exists:', employeeUser1.email);
    } else {
      console.log('Creating First Employee user...');
      // Create First Employee user
      employeeUser1 = new User({
        name: 'John Employee',
        title: 'Team Member',
        role: 'Employee',
        email: 'employee1@taskify.com',
        password: 'employee123',
        isAdmin: false,
        isActive: true
      });

      employeeUser1 = await employeeUser1.save();
      console.log('First Employee user created:', employeeUser1.email);
    }

    // Check if second employee user already exists
    let employeeUser2 = await User.findOne({ email: 'employee2@taskify.com' });
    if (employeeUser2) {
      console.log('Second Employee user already exists:', employeeUser2.email);
    } else {
      console.log('Creating Second Employee user...');
      // Create Second Employee user
      employeeUser2 = new User({
        name: 'Jane Employee',
        title: 'Team Member',
        role: 'Employee',
        email: 'employee2@taskify.com',
        password: 'employee123',
        isAdmin: false,
        isActive: true
      });

      employeeUser2 = await employeeUser2.save();
      console.log('Second Employee user created:', employeeUser2.email);
    }

    console.log('\nTest users setup complete!');
    console.log('Admin credentials: admin@taskify.com / admin123');
    console.log('Employee 1 credentials: employee1@taskify.com / employee123');
    console.log('Employee 2 credentials: employee2@taskify.com / employee123');

    process.exit(0);
  } catch (error) {
    console.error('Error creating test users:', error);
    process.exit(1);
  }
};

createTestUsers();