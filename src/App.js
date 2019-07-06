import React, { useState, useReducer } from 'react';
import { Typography, Input, Form, Button } from 'antd';
import reducer from './reducers/events'
import Events from './components/events'
import AppContext from './contexts/AppContext'
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

  return (
    <AppContext.Provider value={{ state, dispatch }}>
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
        <Events/>;
        {/* <Table dataSource={state} columns={columns} />; */}
      </>
    </AppContext.Provider>
  );
}

export default App;
