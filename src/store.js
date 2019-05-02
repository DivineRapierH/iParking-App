import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    reserved: false,
    parkedTime: null,
    chargedTime: null,
    leftParking: true,
    reserveTime: null,
    pageState: 1,
    carport: "A31",
    users: [
      {
        name: "admin",
        password: "admin",
        license: "渝D00001",
        parkinfo: {
          reservetime: null,
          leavetime: null
          // carport: "A31"
        },
        records: [{ reservetime: null, leavetime: null, carport: "", price: 0 }]
      }
    ]
  },
  getters: {
    getPage: state => state.pageState,
    isLogin: state => state.login,
    getCarport: state => state.carport,
    getReserveTime: state => state.reserveTime,
    getParkedTime: state => state.parkedTime,
    getChargedTime: state => state.chargedTime,
    getUserById: (state, username) => {
      const index = state.users.findIndex(item => item.name === username);
      if (index === -1) {
        // 没有符合的用户名
        return null;
      }
      return state.users[index];
    }
  },
  mutations: {
    userStatus(state, flag) {
      state.login = flag;
    },
    reserve(state, time) {
      state.reserved = true;
      state.reserveTime = time;
    },
    park(state, time) {
      state.parkedTime = time;
    },
    pay(state, time) {
      state.chargedTime = time;
    },
    page(state, pageid) {
      state.pageState = pageid;
    },
    addUser(state, { useritem }) {
      state.users.push(useritem);
    },
    changeUserState(state, { useritem }) {
      const index = state.users.findIndex(item => item.name === useritem.name);
      state.users.splice(index, 1, useritem);
    },
    addRecord(state, payload) {
      // payload: {name: "admin",
      // password: "admin",
      // license: "渝D00001",
      // parkinfo: {
      //   reservetime: null,
      //   leavetime: null,
      //   carport: "a01"
      // }, price: 0}
      let record = {
        reservetime: payload.parkinfo.reservetime,
        leavetime: payload.parkinfo.leavetime,
        carport: payload.parkinfo.carport,
        price: payload.price
      };
      state.records.push(record);
    }
  },
  actions: {}
  // plugins: [createPersistedState()]
});
