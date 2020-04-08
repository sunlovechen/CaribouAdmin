import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import './utils/index.js'; // 引入各种prototype辅助方法
import store from 'redux/store.js'; // redux store

// 开始引入各种自定义的组件
import App from './components/App';
import Home from './components/Home';
import Error from './components/Error';
import Login from './components/Login';
import Spectacular from './components/Spectacular';
import UserManagement from './components/UserManagement';
import DeviceList from './components/DeviceList';
import EnergyManagement from './components/EnergyManagement';
import EquipmentCategory from './components/EquipmentCategory';
import DepartmentManagement from './components/DepartmentManagement';
import JobManagement from './components/JobManagement';
import RoleManagement from './components/RoleManagement';
import WorkProcessList from './components/WorkProcessList';
import WorkOrder from './components/WorkOrder';

import './index.less';

// 路由表, 只要menu.js中所有的叶子节点配置了路由就可以了
// 我本来想根据menu.js自动生成路由表, 但那样太不灵活了, 还是自己配置好些
const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="login" component={Login} />
        <Route path="spectacular" component={Spectacular} />
        <Route path="energymanagement" component={EnergyManagement} />

        <Route path="organization">
          <Route path="userManagement" component={UserManagement} />
          <Route path="departmentManagement" component={DepartmentManagement} />
          <Route path="jobManagement" component={JobManagement} />
          <Route path="roleManagement" component={RoleManagement} />
        </Route>

        <Route path="equipment">
          <Route path="deviceList" component={DeviceList} />
          <Route path="equipmentCategory" component={EquipmentCategory} />
        </Route>
        <Route path="workProcess">
          <Route path="workProcessList" component={WorkProcessList} />
          <Route path="workOrder" component={WorkOrder} />
        </Route>

        <Route path="*" component={Error} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
