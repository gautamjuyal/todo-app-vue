<template>
  <div class="todo-board">
    <TodoCard v-for="todo in todoArray" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import TodoCard from "@/components/TodoCard.vue";

export default {
  components: {
    TodoCard,
  },
  data() {
    return {
      todoArray: this.$store.state.todos,
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  width: 6px;
  background: #00000020;
  border-radius: 25px;
}

::-webkit-scrollbar-thumb {
  background: #c2c2c2;
  border-radius: 25px;
}
.todo-board {
  background: #fff;
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 10px;
  margin: 0 auto;
}
</style>
