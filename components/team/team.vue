<template>
  <div class="team" styleName="team" v-if="switcher">
    <p :class="{cLtGray: getTheme}">{{ content }}</p>
    <h5 :class="{cWhite: getTheme}">Qualified specialists</h5>
    <staff />
    <p :class="{cLtGray: getTheme}">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </p>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../team/team.css";
import { mapGetters } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  props: ["content", "switcher"],
    computed: {
    ...mapGetters(["getTheme"])
  },
};
</script>
