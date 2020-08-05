<template>
  <div class="cost" :class="{bckgBlack: getTheme}">
    <span :class="{cWhite: getTheme}">Rent for </span>
    <span>{{ rent }} $/h</span>
    <button>Rent now</button>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../cost/cost.css";
import { mapGetters } from "vuex";

export default {
  props: ["rent"],
  computed: {
    ...mapGetters(["getTheme"])
  }
};
</script>
