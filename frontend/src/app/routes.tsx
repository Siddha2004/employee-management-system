import { createBrowserRouter } from 'react-router';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import EmployeeForm from './pages/EmployeeForm';
import LeaveRequests from './pages/LeaveRequests';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'employees',
        element: <EmployeeList />,
      },
      {
        path: 'employees/add',
        element: <EmployeeForm />,
      },
      {
        path: 'employees/edit/:id',
        element: <EmployeeForm />,
      },
      {
        path: 'leave-requests',
        element: <LeaveRequests />,
      },
    ],
  },
]);
