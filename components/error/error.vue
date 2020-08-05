<template>
  <div class="error" styleName="error" :class="{ bckgBlack: getTheme }">
    <div class="error-content" >
      <h3 :class="{ cWhite: getTheme }">An error has occurred</h3>
      <p :class="{ cLtGray: getTheme }">Please refresh the page</p>
      <button @click="getVehicles">Reload page</button>
    </div>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../error/error.css";
import gridWrapper from "../grid-wrapper/grid-wrapper";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  methods: {
    ...mapActions(["getVehicles"])
  },
  computed: {
    ...mapGetters(["getTheme"])
  }
};
</script>

<style></style>
