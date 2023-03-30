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
      return require("@/assets/icons/" + this.src + ".png");
    },
  },
};
</script>

<style scoped>
.nav-link {
  width: 50px;
  height: 50px;
  background: #1e0059;
  border-radius: 10px;
  display: grid;
  place-items: center;
  transition: all 300ms ease;
}

.nav-link:active,
.nav-link:focus {
  background: #744be4;
}

.nav-link:hover {
  filter: brightness(1.5);
}

img {
  width: 20px;
  filter: invert(1);
}
</style>
