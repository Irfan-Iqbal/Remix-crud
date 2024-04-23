import { useState } from "react"
import Create from "./Create"
import Edit from "./Edit"
import Read from "./Read"
import { Form } from "antd"

const App = () => {
  const [data, setData] = useState([])
  const [editingKey, setEditingKey] = useState("")
  const [form] = Form.useForm()

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key))
  }

  const handleEdit = (record) => {
    setEditingKey(record.key)
  }

  const handleEditFinish = (values) => {
    const newData = [...data]
    const index = newData.findIndex((item) => editingKey === item.key)
    if (index > -1) {
      const item = newData[index]
      newData.splice(index, 1, { ...item, ...values })
      setData(newData)
      setEditingKey("")
      form.resetFields()
    }
  }

  const handleCreateFinish = (values) => {
    setData([...data, { key: Date.now(), ...values }])
    form.resetFields()
  }

  return (
    <div>
      <Create form={form} onFinish={handleCreateFinish} />
      <Read data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
      {editingKey !== "" && (
        <Edit
          record={data.find((item) => item.key === editingKey)}
          onFinish={handleEditFinish}
        />
      )}
    </div>
  )
}

export default App
