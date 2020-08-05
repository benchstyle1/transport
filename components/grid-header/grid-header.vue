<template>
  <div class="grid-header" styleName="grid-header">
    <span :class="{cWhite: getTheme}">Rent </span>
    <select
      v-model="selected"
      :change="$emit('onChange', selected)"
      :class="{ bckgBlack: getTheme }"
    >
      <option selected>whatever</option>
      <option v-for="type in getTypes" :key="type">{{ type }}</option>
    </select>
    <span>Add new</span>
    <button @click="add">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#FCFCFC" />
      </svg>
    </button>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "./grid-header.css";
import { mapGetters } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  computed: {
    ...mapGetters(["allVehicles", "getTheme"]),
    getTypes: function() {
      return Array.from(new Set(this.allVehicles.map(element => element.type)));
    }
  },
  data() {
    return {
      selected: "whatever"
    };
  },
  methods: {
    add() {
      this.$emit("onAdd", true);
    }
  }
};
</script>
