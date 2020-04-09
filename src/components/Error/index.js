import React from 'react';
import { Icon } from 'antd';
import './index.less';

/**
 * 显示错误信息
 * 可以当404页来用
 */
class Error extends React.PureComponent {

  render() {
    return (
      <div className="not-found">
        <div style={{ fontSize: '32px' }}><Icon type="smile-o" /></div>
        <h1>{this.props.errorMsg || '努力开发中，敬请期待'}</h1>
      </div>
    );
  }

}

export default Error;
