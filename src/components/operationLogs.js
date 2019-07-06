import React, { useContext } from 'react';
import { Button, Table } from 'antd';
import AppContext from '../contexts/AppContext'

const Events = () => {

  const { state, dispatch } = useContext(AppContext)
  // const [state, dispatch] = useReducer(reducer, [])

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Operated At',
      dataIndex: 'operatedAt',
      key: 'operatedAt',
    }
  ];

  return (
    <div>
      <>
        <Table dataSource={state.operationLogs} columns={columns} />;
      </>
    </div>
  );
}

export default Events;
