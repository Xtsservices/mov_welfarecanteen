import React, { useState } from "react";
import { Row, Col, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import UserCard from "./userCard";
import AddUserCard from "./addUserCard";
import UserForm from "./userForm";
import UserView from "./userView";
import { User, UserFormData, dummyUsers } from "./types";
import BackHeader from "../../components/common/backHeader";
import { useParams } from "react-router-dom";

const { confirm } = Modal;

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>(dummyUsers);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isViewVisible, setIsViewVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [formTitle, setFormTitle] = useState("Add New User");
  const route = useParams();

  const handleAddUser = () => {
    setCurrentUser(null);
    setFormTitle("Add New User");
    setIsFormVisible(true);
  };

  const handleEditUser = (id: string) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setCurrentUser(user);
      setFormTitle("Edit User");
      setIsFormVisible(true);
    }
  };

  const handleViewUser = (id: string) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setCurrentUser(user);
      setIsViewVisible(true);
    }
  };

  const handleDeleteUser = (id: string) => {
    confirm({
      title: "Are you sure you want to delete this user?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        setUsers(users.filter((user) => user.id !== id));
        message.success("User deleted successfully");
      },
    });
  };

  const handleFormSubmit = (values: UserFormData) => {
    if (currentUser) {
      setUsers(
        users.map((user) =>
          user.id === currentUser.id ? { ...user, ...values } : user
        )
      );
      message.success("User updated successfully");
    } else {
      const newUser = {
        id: crypto.randomUUID(),
        ...values,
      };
      setUsers([...users, newUser]);
      message.success("User added successfully");
    }
    setIsFormVisible(false);
  };

  return (
    <div style={{ padding: "24px", paddingTop:"2px" }}>
      <BackHeader path={`/canteens-list/canteen-dashboard/${route?.canteenId}`} title="Users List"/>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={8} lg={4} xl={4}>
          <AddUserCard onClick={handleAddUser} />
        </Col>
        {users.map((user) => (
          <Col xs={24} sm={12} md={8} lg={4} xl={4} key={user.id}>
            <UserCard
              user={user}
              onEdit={handleEditUser}
              onView={handleViewUser}
              onDelete={handleDeleteUser}
            />
          </Col>
        ))}
      </Row>

      <UserForm
        visible={isFormVisible}
        onCancel={() => setIsFormVisible(false)}
        onSubmit={handleFormSubmit}
        initialValues={currentUser || undefined}
        title={formTitle}
      />

      <UserView
        visible={isViewVisible}
        user={currentUser}
        onClose={() => setIsViewVisible(false)}
      />
    </div>
  );
};

export default UsersList;
