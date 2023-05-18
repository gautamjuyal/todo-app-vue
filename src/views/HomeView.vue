<template>
  <div class="home">
    <h1 class="main-view-header">Your Todos</h1>
    <TodoBoard />
  </div>
</template>

<script>
import TodoBoard from "@/components/TodoBoard.vue";

export default {
  name: "HomeView",
  components: {
    TodoBoard,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  width: 8px;
  background: #00000040;
  border-radius: 25px;
}

::-webkit-scrollbar-thumb {
  background: #6d6d6d;
  border-radius: 25px;
}

.home {
  width: 100%;
  height: 100vh;
  background-color: #f2f6fe;
  color: #160e25;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  overflow-y: scroll;
}
</style>
