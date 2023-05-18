<template>
  <div class="nav">
    <div class="links">
      <NavLink
        v-for="link in links"
        :key="link.src"
        :src="link.src"
        :page="link.page"
        :isActive="link.isActive"
        @click="clickHandler.bind(null, link.src)"
      ></NavLink>
    </div>
    <div class="actions">
      <NavLink src="settings" />
      <NavLink src="logout" />
    </div>
  </div>
</template>

<script>
import NavLink from "@/components/NavLink";

export default {
  data() {
    return {
      links: [
        { src: "todos", page: "home", isActive: false },
        { src: "add", page: "add-todo", isActive: false },
        { src: "search", page: "", isActive: false },
        { src: "audio", page: "", isActive: false },
      ],
    };
  },
  components: { NavLink },
  methods: {
    clickHandler(src) {
      console.log("what");
      this.links.find((link) => link.src === src).isActive = true;

      //   if (link.src === e) link.isActive = true;
      //   else link.isActive = false;
      // }
    },
  },
};
</script>

<style scoped>
.nav {
  height: 100%;
  background: #1e0059;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;
  align-items: center;
  border-right: 1px solid white;
}

.links,
.actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
