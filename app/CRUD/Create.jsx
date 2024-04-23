// components/CreateForm.js
import { Input, Button, Form } from "antd";
// import "../styles/style.css"
import "./styel.css"


const Create = ({ onFinish, form }) => {
  return (
    <>
      <div className="createCountry">
        <Form form={form} onFinish={onFinish} layout="inline">
          <Form.Item
            name="Country"
            label="Country"
            rules={[{ required: true, message: "Please input your Country!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="State"
            label="State"
            rules={[{ required: true, message: "Please input your State!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="City"
            label="City"
            rules={[{ required: true, message: "Please input your City!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Create;
