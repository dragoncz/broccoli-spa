import React from 'react';
import { Button } from 'antd';
import styles from './index.module.css';

const Banner = props => (
  <div className={styles.banner}>
    <h2>
      <span>A better way</span>
      <span>to enjoy everyday.</span>
    </h2>

    <p>Be the first to know when we launch.</p>

    <Button type="primary">Request an invite</Button>
  </div>
);

export default Banner;
