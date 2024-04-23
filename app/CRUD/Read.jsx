// components/ReadTable.js
import { Table, Space, Button } from 'antd';

const Read = ({ data, handleEdit, handleDelete }) => {
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
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return <div className='readData'> 
   <Table columns={columns} dataSource={data} /></div>
};

export default Read;
