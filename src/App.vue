<template>
  <div id="app">
    <NavBar />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
#app {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.main-view-header {
  font-family: "Noto Sans", sans-serif;
  font-size: 40px;
  letter-spacing: -2px;
  word-spacing: 2px;
  font-weight: 600;
}
</style>
