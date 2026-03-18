export interface Employee {
  id: string;
  name: string;
  department: string;
  designation: string;
  salary: number;
  email: string;
  phone: string;
}

export interface Department {
  id: string;
  name: string;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: string;
  startDate: string;
  endDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
}

export const mockDepartments: Department[] = [
  { id: '1', name: 'IT' },
  { id: '2', name: 'HR' },
  { id: '3', name: 'Finance' },
  { id: '4', name: 'Marketing' },
  { id: '5', name: 'Operations' },
];

export const mockEmployees: Employee[] = [
  {
    id: '1123',
    name: 'John Doe',
    department: 'IT',
    designation: 'Contract',
    salary: 65000,
    email: 'john.doe@company.com',
    phone: '+1-234-567-8901'
  },
  {
    id: '1125',
    name: 'Sarah Miles',
    department: 'Finance',
    designation: 'None',
    salary: 55000,
    email: 'sarah.miles@company.com',
    phone: '+1-234-567-8902'
  },
  {
    id: '1126',
    name: 'Albert Grant',
    department: 'IT',
    designation: 'Contractor',
    salary: 75000,
    email: 'albert.grant@company.com',
    phone: '+1-234-567-8903'
  },
  {
    id: '1123',
    name: 'Anna Clark',
    department: 'Finance',
    designation: 'Compensation',
    salary: 60000,
    email: 'anna.clark@company.com',
    phone: '+1-234-567-8904'
  },
  {
    id: '1132',
    name: 'Anna Quinn',
    department: 'Senior',
    designation: 'Compensation',
    salary: 80000,
    email: 'anna.quinn@company.com',
    phone: '+1-234-567-8905'
  },
  {
    id: '1134',
    name: 'Nuria Nelson',
    department: 'Staff',
    designation: 'Compensation',
    salary: 45000,
    email: 'nuria.nelson@company.com',
    phone: '+1-234-567-8906'
  },
  {
    id: '1135',
    name: 'Nuria Nelson',
    department: 'Staff',
    designation: 'Janitor',
    salary: 35000,
    email: 'nuria.janitor@company.com',
    phone: '+1-234-567-8907'
  },
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '101',
    employeeId: '1123',
    employeeName: 'John Doe',
    type: 'Sick Leave',
    startDate: '2026-03-15',
    endDate: '2026-03-17',
    status: 'Pending',
    reason: 'Medical appointment'
  },
  {
    id: '102',
    employeeId: '1125',
    employeeName: 'Sarah Miles',
    type: 'Annual Leave',
    startDate: '2026-04-01',
    endDate: '2026-04-05',
    status: 'Approved',
    reason: 'Family vacation'
  },
  {
    id: '103',
    employeeId: '1126',
    employeeName: 'Albert Grant',
    type: 'Personal Leave',
    startDate: '2026-03-20',
    endDate: '2026-03-21',
    status: 'Pending',
    reason: 'Personal matter'
  },
];
