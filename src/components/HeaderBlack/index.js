import React from 'react';
import { Link } from 'react-router';
import './index.less';
import { connect } from 'react-redux';
import moment from 'moment';

/**
 * 看板头部
 */
class Header extends React.PureComponent {
  render() {
    return (
      <div className="header-black">
        <div className="header-black-title">
          <span>{'油库监控中心'}</span>
        </div>
        <div className="header-black-content">
          <span><Link to="/home" className="to-home">{'首页'}</Link></span>
          <span className="">{this.props.userName}</span>
          <span>{moment().format('YYYY-MM-DD HH:mm')}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.Login.userName, // 登录后的用户名
  };
};

export default connect(
  mapStateToProps,
  null,
)(Header);
