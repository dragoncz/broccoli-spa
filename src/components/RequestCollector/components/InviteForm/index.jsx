import React, { useEffect } from "react";
import { Form, Input, Modal } from 'antd';

const InviteForm = ({ visible, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  // Reset form whenever this form shows or hide
  useEffect(()=> {
    form.resetFields();
  }, [form, visible])

  // onOk handler
  const onOk = () => {
    form
      .validateFields()
      .then(values => onSubmit(values))
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  }

  return (
    <Modal
      forceRender // fix "Warning: Instance created by useForm is not connect to any Form element. "
      visible={visible}
      centered
      title="Request an invite"
      okText="Send"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form
        form={form}
        layout="vertical"
        name="inviteForm"
      >
        {/* Full Name */}
        <Form.Item
          label="Full Name"
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your full name.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Please input a valid Email address.',
            },
            {
              required: true,
              message: 'Please input your Email.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Confirm Email */}
        <Form.Item
          label="Confirm Email"
          name="confirm"
          rules={[
            {
              required: true,
              message: 'Please input your Email address again.',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('email') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('Please make sure two Email addresses are match.');
              },
            })
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InviteForm;