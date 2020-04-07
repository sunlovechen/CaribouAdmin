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

  /**
   * 设备故障列表
   * @param pageNum
   * @param pageSize
   */
  getFaults(detail) {
    return axios.post('/api/fault/getFaults', detail);
  }

  /**
   * 设备管理列表
   * @param pageNum
   * @param pageSize
   * @param queryMap: { devName devCode }
   */
  getDevices(detail) {
    return axios.post('/api/dev/getDevices', detail);
  }

   /**
   * 添加设备
   */
  postDevice(detail) {
    return axios.post('/api/dev/postDevice', detail);
  }

   /**
   * 更新设备
   */
  putDeviceById(detail) {
    return axios.post('/api/dev/putDeviceById', detail);
  }

   /**
   * 修改设备状态 报废设备
   * @param id
   * @param devStatus
   */
  putDeviceStatusById(detail) {
    return axios.post('/api/dev/putDeviceStatusById', detail);
  }
}

export default Ajax;
