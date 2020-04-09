import axios from 'axios';
import store from '../redux/store';
import { changeSpinCreator } from '../redux/Spin';
import { message } from 'antd';

axios.defaults.withCredentials = true;

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    store.dispatch(changeSpinCreator(true));
    return config;
  },
  error => {
    // 对请求错误做些什么
    store.dispatch(changeSpinCreator(false));
    return Promise.reject(error);
  },
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    store.dispatch(changeSpinCreator(false));
    if (response && response.data && response.data.code !== '10001') {
      message.error(response.data.msg);
    }
    return response && response.data;
  },
  error => {
    // 对响应错误做点什么
    store.dispatch(changeSpinCreator(false));
    return Promise.reject(error);
  },
);
