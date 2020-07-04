import React from 'react';
import RequestCollector from '../RequestCollector';
import styles from './index.module.css';

const Banner = props => (
  <div className={styles.banner}>
    {/* Slogan */}
    <h2>
      <span>A better way</span>
      <span>to enjoy everyday.</span>
    </h2>

    <p>Be the first to know when we launch.</p>

    {/* Invite button */}
    <RequestCollector />
  </div>
);

export default Banner;
