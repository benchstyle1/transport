<template>
  <div class="staff" styleName="staff">
    <div class="employee" v-for="employee in employees" :key="employee.name">
      <img :src="employee.image" :alt="employee.name" />
      <div class="employee-info">
        <p :class="{ cWhite: getTheme }">{{ employee.name }}</p>
        <p :class="{ cLtGray: getTheme }">{{ employee.position }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../staff/staff.css";
import { mapGetters } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  data() {
    return {
      employees: [
        {
          name: "Marvin McKinney",
          position: "Pilot assistant",
          image: require("../../assets/img/Marvin McKinney.jpg")
        },
        {
          name: "Savannah Nguyen",
          position: "Mechanic",
          image: require("../../assets/img/Savannah Nguyen.jpg")
        },
        {
          name: "Courtney Henry",
          position: "Stewardess",
          image: require("../../assets/img/Courtney Henry.jpg")
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getTheme"])
  }
};
</script>

<style></style>
