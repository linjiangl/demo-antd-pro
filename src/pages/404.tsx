import { HomeOutlined, LeftOutlined } from '@ant-design/icons';
import { history, useIntl } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC = () => {
  const intl = useIntl();

  return (
    <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <Result
        status="404"
        title="404"
        subTitle={intl.formatMessage({ id: 'pages.404.subTitle' })}
        extra={[
          <Button type="primary" icon={<HomeOutlined />} onClick={() => history.push('/')} key="home">
            {intl.formatMessage({ id: 'pages.404.buttonText' })}
          </Button>,
          <Button icon={<LeftOutlined />} onClick={() => history.go(-1)} key="back">
            返回上一页
          </Button>,
        ]}
      />
    </div>
  );
};

export default NoFoundPage;
