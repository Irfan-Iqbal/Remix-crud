
import { Button, Popconfirm } from 'antd';

const Delete = ({ handleDelete, recordKey }) => {
  return (
    <Popconfirm
      title="Are you sure to delete this record?"
      onConfirm={() => handleDelete(recordKey)}
      okText="Yes"
      cancelText="No"
    >
      <Button type="danger">Delete</Button>
    </Popconfirm>
  );
};

export default Delete;
