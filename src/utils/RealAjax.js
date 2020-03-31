import axios from 'axios';
import globalConfig from '../config';

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
    return axios.get('https://apiblog.jspang.com/default/getArticleList');
  }

  /**
   * 用户登录
   *
   * @param username
   * @param password
   */
  login(username, password) {
    return axios.post(`${globalConfig.getAPIPath()}/login`, { username, password });
  }
}

export default Ajax;
