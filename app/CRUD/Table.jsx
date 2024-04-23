// components/CRUDComponent.js
import  { useState } from 'react';
import { Form, Input, Button, Table, Space } from 'antd';

const CRUDComponent = () => {
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const columns = [
    {
      title: 'Country',
      dataIndex: 'Country',
      key: 'Country',
    },
    {
      title: 'State',
      dataIndex: 'State',
      key: 'State',
    },
    {
      title: 'City',
      dataIndex: 'City',
      key: 'City',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <spa onClick={() => handleEdit(record)}>Edit</spa>
          <spa onClick={() => handleDelete(record.key)}>Delete</spa>
        </Space>
      ),
    },
  ];

  const handleDelete = key => {
    setData(data.filter(item => item.key !== key));
  };

  const handleEdit = record => {
    setEditingKey(record.key);
    form.setFieldsValue({
      Country: record.Country,
      State: record.State,
      City: record.City,
    });
  };

  const onFinish = values => {
    const newData = {
      key: editingKey || Date.now(),
      ...values,
    };
    if (editingKey) {
      const index = data.findIndex(item => item.key === editingKey);
      data[index] = newData;
      setData([...data]);
      setEditingKey('');
    } else {
      setData([...data, newData]);
    }
    form.resetFields();
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish} layout="inline">
        <Form.Item
          name="Country"
          label="Country"
          rules={[{ required: true, message: 'Please input your Country!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="State"
          label="State"
          rules={[{ required: true, message: 'Please input your State!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="City"
          label="City"
          rules={[{ required: true, message: 'Please input your phone City!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {editingKey ? 'Update' : 'Add'}
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CRUDComponent;
