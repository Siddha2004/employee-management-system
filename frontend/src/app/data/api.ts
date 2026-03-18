import { Employee } from './mockData';

const API_BASE_URL = 'http://localhost:8080/api';

export const api = {
  // Employees
  getEmployees: async (): Promise<Employee[]> => {
    const response = await fetch(`${API_BASE_URL}/employees`);
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    const employees = await response.json();
    // Convert backend format to frontend format
    return employees.map((emp: any) => ({
      id: emp.id.toString(),
      name: emp.name,
      department: emp.department,
      designation: emp.designation,
      salary: emp.salary,
      email: emp.email,
      phone: emp.phone
    }));
  },

  getEmployee: async (id: string): Promise<Employee> => {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch employee');
    }
    const emp = await response.json();
    return {
      id: emp.id.toString(),
      name: emp.name,
      department: emp.department,
      designation: emp.designation,
      salary: emp.salary,
      email: emp.email,
      phone: emp.phone
    };
  },

  createEmployee: async (employee: Omit<Employee, 'id'>): Promise<Employee> => {
    const response = await fetch(`${API_BASE_URL}/employees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: employee.name,
        department: employee.department,
        designation: employee.designation,
        salary: employee.salary,
        email: employee.email,
        phone: employee.phone
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to create employee');
    }
    const emp = await response.json();
    return {
      id: emp.id.toString(),
      name: emp.name,
      department: emp.department,
      designation: emp.designation,
      salary: emp.salary,
      email: emp.email,
      phone: emp.phone
    };
  },

  updateEmployee: async (id: string, employee: Omit<Employee, 'id'>): Promise<Employee> => {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: employee.name,
        department: employee.department,
        designation: employee.designation,
        salary: employee.salary,
        email: employee.email,
        phone: employee.phone
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to update employee');
    }
    const emp = await response.json();
    return {
      id: emp.id.toString(),
      name: emp.name,
      department: emp.department,
      designation: emp.designation,
      salary: emp.salary,
      email: emp.email,
      phone: emp.phone
    };
  },

  deleteEmployee: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete employee');
    }
  },
};