import React, { useContext } from 'react';
import { Button, Table } from 'antd';
import AppContext from '../contexts/AppContext'

const Events = () => {

  const { state, dispatch } = useContext(AppContext)
  // const [state, dispatch] = useReducer(reducer, [])

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
        <Table dataSource={state.events} columns={columns} />;
      </>
    </div>
  );
}

export default Events;
