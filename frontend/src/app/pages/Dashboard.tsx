import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Users, UserCheck, Building2, TrendingUp, Calendar, Clock } from 'lucide-react';
import { mockDepartments } from '../data/mockData';
import { api } from '../data/api';

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await api.getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalEmployees = employees.length;
  const activeDepartments = mockDepartments.length;
  const activeEmployees = employees.filter((e: any) => e.salary > 0).length;

  const recentActivities = [
    {
      id: 1,
      icon: UserCheck,
      title: 'New employee',
      description: 'John Doe was added to the IT department',
      time: '2 hours ago'
    },
    {
      id: 2,
      icon: Calendar,
      title: 'Email sent',
      description: 'Monthly salary slips were sent to all employees',
      time: '5 hours ago'
    },
    {
      id: 3,
      icon: Users,
      title: 'Department update',
      description: 'Finance department updated with new budget',
      time: '1 day ago'
    },
    {
      id: 4,
      icon: Clock,
      title: 'Leave approved',
      description: 'Sarah Miles leave request was approved',
      time: '2 days ago'
    },
  ];

  const attendanceStats = [
    { label: 'Total Employees', value: '324', percentage: '100%' },
    { label: 'Total Departments', value: '8', percentage: '96%' },
    { label: 'Total Leaves', value: '25%', percentage: '25%' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Building2 className="w-4 h-4" />
          <span>Dashboard</span>
          <span>/</span>
          <span>Employees</span>
          <span>/</span>
          <span>Reports</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-500 text-white border-0">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Employees</p>
                <p className="text-4xl mt-2">{loading ? '...' : totalEmployees}</p>
                <p className="text-xs mt-1 opacity-75">Last 30 days</p>
              </div>
              <Users className="w-12 h-12 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-4xl mt-2">{loading ? '...' : activeEmployees}</p>
                <p className="text-xs mt-1 text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +5% from last month
                </p>
              </div>
              <UserCheck className="w-12 h-12 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Departments</p>
                <p className="text-4xl mt-2">{activeDepartments}</p>
              </div>
              <Building2 className="w-12 h-12 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-3 border-b last:border-0">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <activity.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.description}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Attendance Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceStats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{stat.label}</span>
                    <span className="text-sm">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: stat.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
