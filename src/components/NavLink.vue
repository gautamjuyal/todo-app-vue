<template>
  <router-link :to="routeInfo">
    <div class="nav-link">
      <img :src="iconSrc" alt="nav-btn" />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    src: String,
    page: String,
  },
  data: function () {
    return {
      routeInfo: { name: this.page },
    };
  },
  computed: {
    iconSrc() {
      return require("@/assets/icons/" + this.src + ".svg");
    },
  },
};
</script>

<style scoped>
.nav-link {
  padding: 14px 14px;
  background: #1e0059;
  border-radius: 10px;
  display: grid;
  place-items: center;
  transition: all 300ms ease;
  display: flex;
  color: white;
  gap: 5px;
}

.nav-link:active,
.nav-link:focus {
  background: #744be4;
}

.nav-link:hover {
  filter: brightness(1.5);
}

img {
  width: 25px;
  filter: invert(1);
}
</style>
