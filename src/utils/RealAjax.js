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
    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    return axios.post('/api/login', data);
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

   /**
   * 添加设备类别
   * @param category_pid
   * @param categoryName
   */
  postCategory(detail) {
    return axios.post('/api/category/postCategory', detail);
  }

   /**
   * 更新设备类别
   * @param id
   * @param category_pid
   * @param categoryName
   */
  updateCategory(detail) {
    return axios.post('/api/category/updateCategory', detail);
  }


   /**
   * 根据id查询设备类别
   * @param id
   * @param isdel
   */
  delCategory(detail) {
    return axios.post('/api/category/delCategory', detail);
  }
}

export default Ajax;
