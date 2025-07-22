import React, { useEffect } from 'react';
import { Form, Input, Button, Modal, Typography } from 'antd';
import { UserFormData, User } from './types';

interface UserFormProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: UserFormData) => void;
  initialValues?: User;
  title: string;
}

const UserForm: React.FC<UserFormProps> = ({
  visible,
  onCancel,
  onSubmit,
  initialValues,
  title
}) => {
  const [form] = Form.useForm();
  
  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue(initialValues);
    } else if (visible) {
      form.resetFields();
    }
  }, [visible, initialValues, form]);

  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        onSubmit(values);
        form.resetFields();
      })
      .catch(error => {
        console.error('Form validation failed:', error);
      });
  };

  return (
    <Modal
      open={visible}
      title={<Typography.Title level={4} style={{ margin: 0 }}>{title}</Typography.Title>}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      ]}
      width={600}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          photoUrl: 'https://i.pravatar.cc/300?img=' + Math.floor(Math.random() * 70),
          addedBy: 'Krishna'
        }}
      >
        <Form.Item
          name="name"
          label="User Name"
          rules={[{ required: true, message: 'Please enter user name' }]}
        >
          <Input placeholder="Enter user name" />
        </Form.Item>
        
        <Form.Item
          name="mobile"
          label="Mobile Number"
          rules={[{ required: true, message: 'Please enter mobile number' }]}
        >
          <Input placeholder="Enter mobile number" />
        </Form.Item>
        
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>
        
        <Form.Item
          name="photoUrl"
          label="Photo URL"
          rules={[{ required: true, message: 'Please enter photo URL' }]}
        >
          <Input placeholder="Enter photo URL" />
        </Form.Item>
        
        <Form.Item
          name="canteenName"
          label="Canteen Name"
        >
          <Input placeholder="Enter canteen name" />
        </Form.Item>
        
        <Form.Item
          name="canteenCode"
          label="Canteen Code"
        >
          <Input placeholder="Enter canteen code" />
        </Form.Item>
        
        <Form.Item
          name="aadhaarCard"
          label="Aadhaar Card"
        >
          <Input placeholder="Enter aadhaar card number" />
        </Form.Item>
        
        <Form.Item
          name="addedBy"
          label="Added By"
        >
          <Input placeholder="Enter creator name" disabled />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;