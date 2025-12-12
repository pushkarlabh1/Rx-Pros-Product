import mongoose from 'mongoose';
import User from './models/userModel.js';
import Task from './models/taskModel.js';
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

const createUsersAndTasks = async () => {
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

    // Check if employee user already exists
    let employeeUser = await User.findOne({ email: 'employee@taskify.com' });
    if (employeeUser) {
      console.log('Employee user already exists:', employeeUser.email);
    } else {
      console.log('Creating Employee user...');
      // Create Employee user
      employeeUser = new User({
        name: 'Employee User',
        title: 'Team Member',
        role: 'Employee',
        email: 'employee@taskify.com',
        password: 'employee123',
        isAdmin: false,
        isActive: true
      });

      employeeUser = await employeeUser.save();
      console.log('Employee user created:', employeeUser.email);
    }

    // Create a sample task if it doesn't already exist
    const existingTask = await Task.findOne({ title: 'Complete project setup', team: employeeUser._id });
    if (existingTask) {
      console.log('Sample task already exists:', existingTask.title);
    } else {
      console.log('Creating a sample task assigned to the employee...');
      // Create a sample task assigned to the employee
      const sampleTask = new Task({
        title: 'Complete project setup',
        priority: 'high',
        stage: 'todo', // Initially in todo stage
        activities: [
          {
            type: 'assigned',
            activity: 'Task assigned to employee',
            by: adminUser._id,
          }
        ],
        team: [employeeUser._id] // Assign to the employee
      });

      const savedTask = await sampleTask.save();
      console.log('Sample task created:', savedTask.title);

      // Update the employee's tasks array
      employeeUser.tasks.push(savedTask._id);
      await employeeUser.save();
    }

    console.log('\nUsers and tasks setup complete!');
    console.log('Admin credentials: admin@taskify.com / admin123');
    console.log('Employee credentials: employee@taskify.com / employee123');
    console.log('Sample task assigned to employee.');

    process.exit(0);
  } catch (error) {
    console.error('Error creating users and tasks:', error);
    process.exit(1);
  }
};

createUsersAndTasks();