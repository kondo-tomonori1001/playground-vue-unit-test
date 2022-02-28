<template>
  <div>Hello {{ msg }}</div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
    },
  },
};
</script>
