import React from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";
import { AllUsersTable } from "../../../components/Admin/users/AllUsersTable";

const Users = () => {
  return (
    <AdminLayout>
      <div className="box mt-4">
        <div className="box-body">
          <div className="box-header justify-between">
            <div className="box-title">All Users</div>
          </div>
          <div className="overflow-x-auto">
            <AllUsersTable />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Users;
