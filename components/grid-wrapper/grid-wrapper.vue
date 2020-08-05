<template>
  <div class="grid-wrapper" styleName="grid-wrapper">
    <gridHeader v-on:onChange="setScrollTop($event)" v-on:onAdd="add($event)"/>
    <grid :width="4" :height="3" :selected="selected" />
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../grid-wrapper/grid-wrapper.css";
import gridHeader from "../grid-header/grid-header";
import grid from "../grid/grid";

export default {
  mixins: [CSSModules(styles)],
  components: {
    gridHeader,
    grid,
  },
  data() {
    return {
      selected: "",
    };
  },
  created() {},
  methods: {
    setScrollTop(event) {
      this.selected = event;
      if (document.getElementsByClassName("grid-container")[0]) {
        document.getElementsByClassName("grid-container")[0].scrollTop = 0;
      }
    },
    add(event) {
      this.$emit('onAdd', event)
    },
  }
};
</script>
