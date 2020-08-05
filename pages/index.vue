<template>
  <div class="main" :class="{ bckgDblue: getTheme }">
    <navigation />
    <error v-if="getStatus" />
    <gridWrapper
      :class="{ bckgBlack: getTheme }"
      v-else
      v-on:onAdd="showModal = $event"
      :style="{}"
    />
    <modalWindow v-if="showModal" v-on:onClose="showModal = $event" />
  </div>
</template>

<script>
import navigation from "../components/navigation/navigation";
import gridWrapper from "../components/grid-wrapper/grid-wrapper.vue";
import error from "../components/error/error";
import modalWindow from "../components/modalWindow/modalWindow";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    navigation,
    gridWrapper,
    error,
    modalWindow
  },
  computed: {
    ...mapGetters(["getStatus", "getTheme"])
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    ...mapActions(["getVehicles"])
  },
  created() {
    this.getVehicles();
  }
};
</script>

<style>
@font-face {
  font-family: "Codec Pro";
  src: url("../assets/fonts/CodecPro.ttf");
}

body {
  overflow: hidden;
}

.main {
  width: 100vw;
  height: 100vh;
  font-family: Codec Pro;
}

button:hover,
svg:hover {
  cursor: pointer;
}

input:active,
input:focus,
select:active,
select:focus,
button:active,
button:focus {
  outline: none;
}

.bckgDblue {
  background-color: #012345 !important;
}

.bckgBlack {
  background-color: #011c37 !important;
}

.fillWhite {
  fill: #fcfcfc !important;
  stroke: white !important;
}

.cLtGray {
  color: #99a7b5 !important;
}

.cDGray {
  color: #677b8f !important;
}

.cWhite {
  color: #fcfcfc !important;
}
</style>

