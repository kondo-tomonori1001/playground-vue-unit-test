<template>
  <p>{{ upperCaseName }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: "John",
    };
  },
  computed: {
    upperCaseName() {
      return this.name.toUpperCase();
    },
  },
};
</script>
