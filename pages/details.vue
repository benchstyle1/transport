<template>
  <div class="main" :class="{ bckgDblue: getTheme }">
    <navigation />
    <detail />
  </div>
</template>

<script>
import navigation from "../components/navigation/navigation";
import detail from "../components/detail/detail";
import { mapGetters } from "vuex";

export default {
  components: {
    navigation,
    detail,
  },
  computed: {
    ...mapGetters(["getStatus", "getTheme"])
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
  height: 100vh;
  width: 100vw;
  font-family: Codec Pro;
  overflow-x: hidden;
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

.fillLtGray {
  fill: #99a7b5 !important;
  stroke: #99a7b5 !important;
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

.active {
  color: #4959ff !important;
}
</style>
