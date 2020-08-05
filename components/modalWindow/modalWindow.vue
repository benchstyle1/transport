<template>
  <transition name="modal-window" styleName="modal-window">
    <div class="modal-background" styleName="modal-background">
      <div class="modal-wrapper" :class="{ bckgDblue: getTheme }">
        <div class="modal-frame">
          <div class="modal-header">
            <h5 :class="{ cWhite: getTheme }">Add new vehicle</h5>
            <button @click="close" :class="{ bckgBlack: getTheme }">
              <svg
                :class="{ fillWhite: getTheme }"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99999 5.58623L11.95 0.63623L13.364 2.05023L8.41399 7.00023L13.364 11.9502L11.95 13.3642L6.99999 8.41423L2.04999 13.3642L0.635986 11.9502L5.58599 7.00023L0.635986 2.05023L2.04999 0.63623L6.99999 5.58623Z"
                  fill="#012345"
                />
              </svg>
            </button>
          </div>
          <div
            class="image-field"
            :style="'background-image: url(' + vehicle.image + ')'"
            :class="{ bckgBlack: getTheme }"
          >
            <div class="image-field-wrapper" :class="{ bckgDblue: getTheme }">
              <input type="file" accept="image/*" @change="setImagePath" />
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12V15H22V17H19V20H17V17H14V15H17V12H19ZM19.008 0C19.556 0 20 0.445 20 0.993V10.342C19.3576 10.1151 18.6813 9.99944 18 10V2H2L2.001 16L11.293 6.707C11.465 6.53448 11.694 6.43073 11.9371 6.41526C12.1802 6.39979 12.4206 6.47367 12.613 6.623L12.706 6.708L16.252 10.258C15.4766 10.4943 14.7572 10.8851 14.1369 11.407C13.5167 11.9288 13.0086 12.5709 12.6432 13.2944C12.2779 14.0179 12.0628 14.808 12.0111 15.6169C11.9593 16.4258 12.0719 17.2368 12.342 18.001L0.992 18C0.728813 17.9997 0.476497 17.895 0.290489 17.7088C0.104482 17.5226 -1.33455e-07 17.2702 0 17.007V0.993C0.00183004 0.730378 0.1069 0.479017 0.292513 0.293218C0.478126 0.107418 0.72938 0.00209465 0.992 0H19.008ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z"
                  fill="#4959FF"
                />
              </svg>
            </div>
          </div>
          <div class="input-form">
            <div class="name-type">
              <input
                type="text"
                placeholder="Name"
                v-model="vehicle.name"
                :class="{ bckgBlack: getTheme, cLtGray: getTheme}"
              />
              <div class="type">
                <select v-model="vehicle.type" :class="{ bckgBlack: getTheme, cLtGray: getTheme}">
                  <option selected disabled style="display: none">Type</option>
                  <option selected :class="{ bckgBlack: getTheme, cLtGray: getTheme}">custom</option>
                </select>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99996 6.00002L0.756958 1.75702L2.17196 0.343018L4.99996 3.17202L7.82796 0.343018L9.24296 1.75702L4.99996 6.00002Z"
                    fill="#4959FF"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Description"
              v-model="vehicle.description"
              :class="{ bckgBlack: getTheme, cLtGray: getTheme}"
            />
            <div class="rent-price">
              <input
                type="text"
                placeholder="Rent price"
                v-model="vehicle.rent"
                :class="{ bckgBlack: getTheme, cLtGray: getTheme}"
              /><span :class="{ cDGray: getTheme }">$/h</span>
            </div>
            <button @click="add">Complete</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CSSModules from "vue-css-modules";
import styles from "../modalWindow/modalWindow.css";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  mixins: [CSSModules(styles)],
  computed: {
    ...mapGetters(["getTheme"])
  },
  data() {
    return {
      vehicle: {
        description: "",
        id: this.getRandomId(),
        image: "",
        name: "",
        preview: "",
        rent: "",
        specifications_text: "Some specifications text",
        team_text: "Some team text",
        term_text: "Some term text",
        type: "Type"
      }
    };
  },
  methods: {
    ...mapMutations(["addVehicle"]),
    close() {
      this.$emit("onClose", false);
    },
    add() {
      if (this.vehicle.type === "") {
        this.vehicle.type = "custom";
      }
      this.addVehicle(this.vehicle);
      this.close();
    },
    getRandomId() {
      let result = [];
      for (let i = 0; i < 24; i++) {
        result.push(Math.round(Math.random() * 10).toString(16));
      }
      return result.join("");
    },
    setImagePath(event) {
      console.log(event);
      this.vehicle.image = URL.createObjectURL(event.target.files[0]);
      this.vehicle.preview = URL.createObjectURL(event.target.files[0]);
    }
  }
};
</script>

<style></style>
