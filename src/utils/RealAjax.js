import axios from 'axios';
import globalConfig from '../config';
import './interceptors';

const api = globalConfig.getAPIPath();

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
    return axios.get(`${api}/category/getCategorys`);
  }

  /**
   * 用户登录
   *
   * @param username
   * @param password
   */
  login(username, password) {
    window.console.log(api);
    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    return axios.post(`${api}/login`, data);
  }

  /**
   * 获取类别菜单
   */
  getCategorys() {
    return axios.get(`${api}/category/getCategorys`);
  }

  /**
   * 根据id查询设备类别
   * @param id 设备id
   */
  getCategoryById(id) {
    return axios.get(`${api}/category/getCategoryById?id=${id}`);
  }

   /**
   * 添加设备类别
   * @param category_pid
   * @param categoryName
   */
  postCategory(detail) {
    return axios.post(`${api}/category/postCategory`, detail);
  }

   /**
   * 更新设备类别
   * @param id
   * @param category_pid
   * @param categoryName
   */
  updateCategory(detail) {
    return axios.post(`${api}/category/updateCategory`, detail);
  }


   /**
   * 根据id查询设备类别
   * @param id
   * @param isdel
   */
  delCategory(detail) {
    return axios.post(`${api}/category/delCategory`, detail);
  }

  /**
   * 设备管理列表
   * @param pageNum
   * @param pageSize
   * @param queryMap: { devName devCode }
   */
  getDevices(detail) {
    return axios.post(`${api}/dev/getDevices`, detail);
  }

   /**
   * 添加设备
   */
  postDevice(detail) {
    return axios.post(`${api}/dev/postDevice`, detail);
  }

   /**
   * 更新设备
   */
  putDeviceById(detail) {
    return axios.post(`${api}/dev/putDeviceById`, detail);
  }

   /**
   * 修改设备状态 报废设备
   * @param id
   * @param devStatus
   */
  putDeviceStatusById(detail) {
    return axios.post(`${api}/dev/putDeviceStatusById`, detail);
  }

  /**
   * 设备故障列表
   * @param pageNum
   * @param pageSize
   */
  getFaults(detail) {
    return axios.post(`${api}/fault/getFaults`, detail);
  }

  /**
   * 添加设备故障
   * @param faultLevel
   * @param faultDevId
   * @param faultStatus
   */
  addFault(detail) {
    return axios.post(`${api}/fault/addFault`, detail);
  }

  /**
   * 更新设备故障
   * @param id
   * @param faultCateId
   * @param faultLevel
   * @param faultDevId
   * @param faultStatus
   */
  updateFault(detail) {
    return axios.post(`${api}/fault/updateFault`, detail);
  }

  /**
   * 删除故障设备
   * @param id
   * @param isdel
   */
  delFaultRecord(detail) {
    return axios.post(`${api}/fault/delFaultRecord`, detail);
  }

  /**
   * 设备计划（维修和保养）列表信息
   * @param pageSize
   * @param pageNo
   * @param queryMap planType
   */
  planListPage(detail) {
    return axios.post(`${api}/dev/plan/listPage`, detail);
  }

  /**
   * 维修和保养 新增
   */
  planSave(detail) {
    return axios.post(`${api}/dev/plan/save`, detail);
  }

    /**
   * 维修和保养 修改
   */
  planUpdate(detail) {
    return axios.post(`${api}/dev/plan/update`, detail);
  }

  /**
   * 计划详情
   * @param id
   */
  planDetail(id) {
    return axios.post(`${api}/dev/plan/detail`, id);
  }

   /**
   * 计划删除
   * @param id
   */
  planDel(id) {
    return axios.post(`${api}/dev/plan/del`, id);
  }


 /**
   * 被动计划列表
   * @param pageNum
   * @param pageSize
   */
  passiveListPage(detail) {
    return axios.post(`${api}/passive/listPage`, detail);
  }

   /**
   * 被动计划修改
   */
  passiveUpdatePassive(detail) {
    return axios.post(`${api}/passive/updatePassive`, detail);
  }

   /**
   * 被动计划新增
   */
  passiveSavePassive(detail) {
    return axios.post(`${api}/passive/savePassive`, detail);
  }

   /**
   * 删除被动计划
   * @param id
   */
  passiveDeletePassive(detail) {
    return axios.post(`${api}/passive/deletePassive`, detail);
  }





}

export default Ajax;
