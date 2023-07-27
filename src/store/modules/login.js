import {setStore,getStore} from '../../utils/store'
const login = {
  // namespaced: true,
  state: () => ({
    token: getStore({name:'token'}) || "",
    userInfo: getStore({name:'userInfo'})||{},
    systemData: 10,
    userData: 20,
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setStore({name:'token',content:token})
    },
    setUserInfo(state, value) {
      state.userInfo = value;
      setStore({name:'userInfo',content:value})
    },
    setSystemData(state, value) {
      state.systemData = value;
      
    },
    setUserData(state, value) {
      state.userData = value;
    },
  },
  actions: {},
};

export default login;
