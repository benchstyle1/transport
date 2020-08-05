<template>
  <div class="card" styleName="card">
    <img :src="card_data.preview" :alt="card_data.name" />
    <div class="info">
      <h4 :class="{ cWhite: getTheme }">{{ card_data.name }}</h4>
      <p>{{ card_data.description }}</p>
      <p>{{ card_data.rent }} $/h</p>
    </div>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../card/card.css";
import { mapGetters } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  props: ["card_data"],
  computed: {
    ...mapGetters(["getTheme"])
  }
};
</script>

<style></style>
