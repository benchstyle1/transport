<template>
  <div class="conditions" styleName="conditions">
    <ul>
      <li
        v-for="(condition, index) in conditions"
        :key="index"
        :class="{ cLtGray: getTheme }"
      >
        {{ condition }}
      </li>
    </ul>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../conditions/conditions.css";
import { mapGetters } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  computed: {
    ...mapGetters(["getTheme"])
  },
  data() {
    return {
      conditions: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ut.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci vero distinctio perferendis corrupti saepe! Quasi."
      ]
    };
  }
};
</script>
