<template>
  <div class="specifications" v-if="switcher">
    <p :class="{ cLtGray: getTheme }">{{ content }}</p>
    <h5 :class="{ cWhite: getTheme }">Features:</h5>
    <features />
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../specifications/specifications.css";
import features from "../features/features";
import { mapGetters } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  props: ["content", "switcher"],
    computed: {
    ...mapGetters(["getTheme"])
  },
};
</script>

<style></style>
