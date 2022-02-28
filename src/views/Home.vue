<template>
  <div class="home">
    <HelloWorld msg="World" />
    <TestComputed />
    <TestTerms />
    <TestClick />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TestComputed from "@/components/TestComputed.vue";
import TestTerms from "@/components/TestTerms.vue";
import TestClick from "@/components/TestClick.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    TestComputed,
    TestTerms,
    TestClick,
  },
};
</script>
