import { Form, Input, Button } from "antd";
import "./styel.css"

const Edit = ({ record, onFinish }) => {
  return (
    <div className="readData">
      <Form
        initialValues={{
          Country: record?.Country,
          State: record?.State,
          City: record?.City,
        }}
        onFinish={onFinish}
        layout="inline"
      >
        <Form.Item name="Country" label="Country">
          <Input />
        </Form.Item>
        <Form.Item name="State" label="State">
          <Input />
        </Form.Item>
        <Form.Item name="City" label="City">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;
