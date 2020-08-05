<template>
  <div class="switchers" styleName="switchers" >
    <span @click="switchItem(0)" :class="{cLtGray: getTheme, active: switchers[0] }"  
      >Specifications</span
    >
    <span @click="switchItem(1)" :class="{cLtGray: getTheme, active: switchers[1] }" >Team</span>
    <span @click="switchItem(2)" :class="{cLtGray: getTheme, active: switchers[2] }" 
      >Rent terms</span
    >
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../switchers/switchers.css";
import { mapGetters } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  props: ["switchers"],
    computed: {
    ...mapGetters(["getTheme"])
  },
  methods: {
    switchItem(index) {
      for (let i = 0; i < this.switchers.length; i++) {
        this.switchers.splice(i, 1, false);
      }
      this.switchers.splice(index, 1, true);
    }
  }
};
</script>

<style></style>
