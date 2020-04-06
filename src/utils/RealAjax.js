import axios from 'axios';
import globalConfig from '../config';
import './interceptors';

/**
 * 封装所有ajax逻辑, 为了配合async/await, 所有ajax请求都要返回promise对象
 */
class Ajax {
  /**
   * 测试接口
   *
   * @returns {*}
   */
  testApi() {
    return axios.get('/api/category/getCategorys');
  }

  /**
   * 用户登录
   *
   * @param username
   * @param password
   */
  login(username, password) {
    return axios.post('/api/login', { username, password },
      { headers: { 'Content-Type': 'multipart/form-data' } });
  }

  /**
   * 获取类别菜单
   */
  getCategorys() {
    return axios.get('/api/category/getCategorys');
  }

  /**
   * 根据id查询设备类别
   * @param id 设备id
   */
  getCategoryById(id) {
    return axios.get(`/api/category/getCategoryById?id=${id}`);
  }
}

export default Ajax;
