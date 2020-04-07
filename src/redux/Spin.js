// 遮罩开关
export const changeSpinCreator = spining => {
  return { type: 'CHANGE_SPIN', payload: spining };
};

const initState = {
  spining: false, // 是否显示遮罩
};

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_SPIN':
      return { ...state, spining: action.payload };
    default:
      return state;
  }
};

export default { initState, reducer };
