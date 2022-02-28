<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <br />
    <a v-if="admin" id="admin" href="/admin">Admin</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      admin: false,
    };
  },
};
</script>
