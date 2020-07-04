import React from 'react';
import { Layout } from 'antd';

import styles from './index.module.css';

const { Header, Footer, Content } = Layout;

const RootLayout = props => (
  <Layout className={styles.layout}>

    {/* Header */}
    <Header className={styles.header}>
      <div className={styles.logo}>
        {"BROCCOLI & CO."}
      </div>
    </Header>

    {/* Content wrapper */}
    <Content className={styles.content}>
      {/* content */}
      <>{props.children}</>
    </Content>

    {/* Footer */}
    <Footer className={styles.footer}>Broccoli ©2020 Created by Zhen Cao</Footer>
  </Layout>
);

export default RootLayout;
