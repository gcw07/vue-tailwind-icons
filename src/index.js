import IconComponent from "./Icon.vue";

const VueTailwindIcons = {
  install(Vue, options) {
    if (!options) {
      options = { set: 'solid' };
    }

    Vue.component('icon', {
      extends: IconComponent,
      data() {
        return {
          defaultSet: options.set
        }
      }
    });
  }
};

export default VueTailwindIcons;