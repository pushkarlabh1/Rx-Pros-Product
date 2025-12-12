import React from 'react';
import { Link } from 'react-router-dom';

// Icons as SVG components
const EnterpriseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const EmployeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ScalabilityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const RetryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const ScheduleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-deep leading-tight">
              Distributed Job<br />
              <span className="text-blue-600">Queue System</span><br />
              — Manage Tasks at Scale.
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Reliable, scalable, and enterprise-ready job processing for modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/register" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors text-center">
                Enterprise
              </Link>
              <Link to="/register" className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-4 px-8 rounded-full hover:bg-green-500 hover:text-white transition-colors text-center">
                Employee
              </Link>
            </div>
            <p className="text-center sm:text-left mt-4 text-gray-600">
              Already have an account? <Link to="/signin" className="text-blue-600 hover:underline">Login here</Link>
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-card border border-blue-500/8 p-6 w-full max-w-md">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                Card-style illustration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Role Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep mb-16">Choose Your Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card flex flex-col items-center text-center p-8">
              <EnterpriseIcon />
              <h3 className="text-2xl font-bold text-deep mt-6 mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Manage and assign tasks to your team members. Monitor progress and scale your operations.
              </p>
              <Link to="/register" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors">
                Register as an Enterprise
              </Link>
            </div>
            <div className="card flex flex-col items-center text-center p-8">
              <EmployeeIcon />
              <h3 className="text-2xl font-bold text-deep mt-6 mb-4">Employee</h3>
              <p className="text-gray-600 mb-6">
                Work on assigned tasks, update progress, and collaborate with your team.
              </p>
              <Link to="/register" className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-6 rounded-full hover:bg-green-500 hover:text-white transition-colors">
                Register as an Employee
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep">Powerful Features</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything you need for efficient job queue management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card flex flex-col items-center text-center p-6">
              <ScalabilityIcon />
              <h3 className="text-xl font-bold text-deep mt-4 mb-2">Scalable Performance</h3>
              <p className="text-gray-600">
                Handle thousands of jobs simultaneously without breaking a sweat.
              </p>
            </div>
            <div className="card flex flex-col items-center text-center p-6">
              <RetryIcon />
              <h3 className="text-xl font-bold text-deep mt-4 mb-2">Automatic Retries</h3>
              <p className="text-gray-600">
                Failed jobs are automatically retried with exponential backoff.
              </p>
            </div>
            <div className="card flex flex-col items-center text-center p-6">
              <ScheduleIcon />
              <h3 className="text-xl font-bold text-deep mt-4 mb-2">Scheduled Jobs</h3>
              <p className="text-gray-600">
                Schedule jobs to run at specific times or intervals.
              </p>
            </div>
            <div className="card flex flex-col items-center text-center p-6">
              <DashboardIcon />
              <h3 className="text-xl font-bold text-deep mt-4 mb-2">Real-time Dashboard</h3>
              <p className="text-gray-600">
                Monitor job progress and system performance in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-deep mb-4">JobQueueX</h3>
            <p className="text-gray-600">
              Reliable distributed job processing for modern applications.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© 2023 JobQueueX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;