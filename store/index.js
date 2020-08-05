import vehicles from "../vehicles.json";

export default {
  state() {
    return {
      vehicles: [],
      currentVehicle: {},
      isError: false,
      isDark: false,
    };
  },
  mutations: {
    setVehicles(state, payload) {
      state.vehicles = payload;
    },
    addVehicle(state, payload) {
      state.vehicles.push(payload)
    },
    setCurrentVehicle(state, payload) {
      state.currentVehicle = JSON.parse(JSON.stringify(payload));
    },
    setStatus(state, payload) {
      state.isError = payload;
      if (!state.isError) this.commit("setVehicles", vehicles);
    },
    setTheme(state) {
      state.isDark = !state.isDark;
    }

  },
  actions: {
    async getVehicles() {
      let _this = this;
      let value = false;
      let promise = new Promise(function(resolve, reject) {
        if (Math.random() <= 0.35) {
          value = true;
          reject(value);
        }
        const delay = parseInt(Math.random() * 1000);
        setTimeout(() => {
          resolve(value);
        }, delay);
      });
      let result = 
        await promise
          .then(function(fulfilled) {
            _this.commit("setStatus", fulfilled)
          })
          .catch(function (error) {
            _this.commit("setStatus", error)
          })
      return result;
    }
  },
  getters: {
    allVehicles: state => {
      return state.vehicles;
    },
    vehicle: state => {
      return state.currentVehicle;
    },
    getStatus: state => {
      return state.isError;
    },
    getTheme: state => {
      return state.isDark;
    }
  }
};
