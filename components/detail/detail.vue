<template>
  <div class="detail" styleName="detail">
    <img :src="vehicle.image" :alt="vehicle.image" />
    <div class="description">
      <h4 :class="{ cWhite: getTheme }">{{ vehicle.name }}</h4>
      <switchers :switchers="switchers"/>
      <specifications :content="vehicle.specifications_text" :switcher="switchers[0]"/>
      <team :content="vehicle.team_text" :switcher="switchers[1]"/>
      <rent :content="vehicle.term_text" :switcher="switchers[2]"/>
      <cost :rent="vehicle.rent" />
    </div>
  </div>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../detail/detail.css";
import switchers from "../switchers/switchers"
import specifications from "../specifications/specifications";
import team from "../team/team"
import rent from "../rent/rent"
import staff from "../staff/staff";
import cost from "../cost/cost";
import { mapGetters } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  computed: {
    ...mapGetters(["vehicle", "getTheme"])
  },
  data() {
    return {
      switchers: [true, false, false]
    };
  },

};
</script>
