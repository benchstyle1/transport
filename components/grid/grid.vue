<template>
  <div class="grid-container">
    <div class="grid" styleName="grid">
      <card :class="{bckgDblue: getTheme}"
        v-for="vehicle in filtered"
        :key="vehicle.id"
        :card_data="vehicle"
        @click.native="details(vehicle)"
      />
    </div>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../grid/grid.css";
import card from "../card/card";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  props: ["width", "height", "selected"],
  components: {
    card
  },
  computed: {
    ...mapGetters(["allVehicles", "getTheme"]),
    filtered() {
      if (this.selected == "" || this.selected == "whatever") {
        return this.allVehicles;
      } else {
        return this.allVehicles.filter(
          element => element.type === this.selected
        );
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setCurrentVehicle"]),
    details(vehicle_data) {
      this.setCurrentVehicle(vehicle_data);
      this.$router.push({
        name: "details"
      });
    },
  }
};
</script>
