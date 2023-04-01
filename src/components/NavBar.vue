<template>
  <div class="nav">
    <div class="links">
      <NavLink src="todos" page="home" />
      <NavLink src="add" page="add-todo" />
      <NavLink src="search" />
      <NavLink src="audio" />
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
  components: { NavLink },
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
