import React, { useState } from 'react';
import AdminNavBar from '../../components/AdminNavBar';
import AdminHeader from '../../components/AdminHeader';
import '../../styles/AdminManageUsers.css';

function AdminManageUsers() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [filter, setFilter] = useState('all');

  const handleNavCollapse = (collapsed) => setIsNavCollapsed(collapsed);
  const handleFilterChange = (e) => setFilter(e.target.value);

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', studentNo: '2022-00123', employeeNo: '-' },
    { id: 2, name: 'Jane Smith', email: 'jane@ucc.edu.ph', role: 'Faculty', studentNo: '-', employeeNo: 'EMP-0098' },
    { id: 3, name: 'Admin User', email: 'admin@ucc.edu.ph', role: 'Admin', studentNo: '-', employeeNo: 'ADM-0001' },
  ];

  const filteredUsers = filter === 'all' ? users : users.filter((u) => u.role.toLowerCase() === filter);

  return (
    <div className="admin-manage-users-page">
      <AdminNavBar onCollapse={handleNavCollapse} activePage="users" />
      <AdminHeader isNavCollapsed={isNavCollapsed} />

      <div className={`admin-manage-users-container ${isNavCollapsed ? 'navbar-collapsed' : ''}`}>
        <div className="manage-users-header">
          <h2 className="page-title">Manage Users</h2>
          <select className="filter-dropdown" value={filter} onChange={handleFilterChange}>
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
        </div>

        <div className="users-table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Student No.</th>
                <th>Employee No.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.studentNo}</td>
                  <td>{user.employeeNo}</td>
                  <td>
                    <button className="greenBtn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminManageUsers;
