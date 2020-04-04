<template>
  <hero-icons-solid v-if="iconSet === 'solid'" :name="name"></hero-icons-solid>
  <hero-icons-outline v-else-if="iconSet === 'outline'" :name="name"></hero-icons-outline>
  <zond-icons v-else-if="iconSet === 'zondicons'" :name="name"></zond-icons>
</template>

<script>
  import heroIconsOutline from './sets/heroicons-outline.vue';
  import heroIconsSolid from './sets/heroicons-solid.vue';
  import zondIcons from './sets/zondicons.vue';

  export default {
    props: {
      name: {
        type: String,
        required: true,
      },

      set: {
        type: String,
      },
    },

    components: {
      heroIconsOutline,
      heroIconsSolid,
      zondIcons
    },

    computed: {
      iconSet() {
        return this.set ? this.set : this.defaultSet;
      },
    }
  };
</script>
