import React, { useState, useReducer } from 'react';
import { Typography, Input, Form, Button, Table } from 'antd';
import reducer from './reducers/events'
import './App.css';

const { Title } = Typography;

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 8,
        offset: 2,
      },
    },
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Button type="warning" htmlType="submit" onClick={() => dispatch({type: 'DELETE_EVENT', id: record.id})}>Delete</Button>
      ),
    }
  ];

  return (
    <div>
      <>
        <Title>Create Event</Title>
        <Form {...formItemLayout}>
          <Form.Item label="Title">
            <Input  value={title} onChange={e => setTitle(e.target.value)} />
          </Form.Item>
          <Form.Item label="Body">
            <Input  value={body} onChange={e => setBody(e.target.value)}/>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={addEvent}>Register</Button>
            <Button type="danger" htmlType="submit">Delete All</Button>
          </Form.Item>
        </Form>
        <Title>Events</Title>
        <Table dataSource={state} columns={columns} />;
      </>
    </div>
  );
}

export default App;
