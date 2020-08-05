<template>
  <div class="rent-terms" v-if="switcher">
    <p :class="{cLtGray: getTheme}">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </p>
    <p :class="{cLtGray: getTheme}">{{ content }}</p>
    <h5 :class="{cWhite: getTheme}">Additional conditions:</h5>
    <conditions />
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../rent/rent.css";
import conditions from "../conditions/conditions";
import { mapGetters } from "vuex";

export default {
  props: ["content", "switcher"],
    computed: {
    ...mapGetters(["getTheme"])
  },
};
</script>

<style></style>
