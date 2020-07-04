import React, { useState } from 'react';
import { Button } from 'antd';

import InviteForm from './components/InviteForm';

const RequestCollector = () => {
  const [visible, setVisible] = useState(false);

  const onSubmit = values => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
      >
        Request an invite
      </Button>

      <InviteForm
        visible={visible}
        onSubmit={onSubmit}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default RequestCollector;
