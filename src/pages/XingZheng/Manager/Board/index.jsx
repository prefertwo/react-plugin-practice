import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Avatar } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const renderHeader = () => (
  <div>
    <Avatar size="large" src="" />
  </div>
);

function renderHeader2() {
  return <div>头部</div>;
}

function Index() {
  // const []
  return (
    <PageHeaderWrapper title={renderHeader()}>
      <div>
        {/* <div></div> */}
        <CopyToClipboard text={'这里是复制的内容'}>
          <div>复制</div>
        </CopyToClipboard>
      </div>
    </PageHeaderWrapper>
  );
}

export default Index;
