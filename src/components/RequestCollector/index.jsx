import React, { useState } from 'react';
import { Button, notification } from 'antd';

import InviteForm from './components/InviteForm';
import { submitInviteForm } from '../../api/invite';

const RequestCollector = () => {
  // invite form modal visibility
  const [visible, setVisible] = useState(false);
  // Submit button loading status
  const [loading, setLoading] = useState(false);

  // submit the invite form
  const onSubmit = async values => {
    const {fullname, email} = values;

    // send request
    setLoading(true);
    try {
      await submitInviteForm({name: fullname, email});

      // notification
      notification.success({
        message: "All set!",
        description: "Thank you! Your request has been received, keep tuned!"
      })

      // Close the dialog and reset loading status
      setVisible(false);
      setLoading(false);
    } catch (error) {
      // reset loading status
      setLoading(false);
      console.log("submit error: " + error);
    }
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
        loading={loading}
        onSubmit={onSubmit}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default RequestCollector;
