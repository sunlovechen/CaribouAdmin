/**
 * 定义sidebar和header中的菜单项
 *
 * 1.菜单最多3层;
 * 2.只有"叶子"节点才能跳转;
 * 3.所有的key都不能重复;
 */

// 其实理论上可以嵌套更多层菜单的, 但是我觉得超过3层就不好看了

// 定义siderbar菜单
const sidebarMenu = [
  {
    key: 'home',  // route时url中的值
    name: '首页',  // 在菜单中显示的名称
  },
  {
    key: 'organization',
    name: '组织架构',
    child: [
      {
        key: 'userManagement',
        name: '用户管理',
      },
      {
        key: 'departmentManagement',
        name: '部门管理',
      },
      {
        key: 'jobManagement',
        name: '岗位管理',
      },
      {
        key: 'roleManagement',
        name: '角色管理',
      },
    ],
  },
  {
    key: 'equipment',
    name: '设备管理',
    child: [
      {
        key: 'deviceList',
        name: '设备列表',
      },
      {
        key: 'equipmentCategory',
        name: '设备类别',
      },
      {
        key: 'equipmentFailure',
        name: '设备故障',
      },
      {
        key: 'equipmentService',
        name: '设备保养',
      },
    ],
  },
];

export default sidebarMenu;

// 定义header菜单, 格式和sidebar是一样的
// 特殊的地方在于, 我规定header的最右侧必须是用户相关操作的菜单, 所以定义了一个特殊的key
// 另外注意这个菜单定义的顺序是从右向左的, 因为样式是float:right
export const headerMenu = [
  {
    // 一个特殊的key, 定义用户菜单, 在这个submenu下面设置icon/name不会生效
    key: 'userMenu',
    child: [
      {
        key: 'modifyUser',
        name: '修改用户信息',
        icon: 'bulb',
      },
    ],
  },
  {
    key: 'spectacular',
    name: '看板',
  },
  {
    key: 'energymanagement',
    name: '能源管理',
  },
];
