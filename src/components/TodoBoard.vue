<template>
  <div class="todo-board">
    <TodoCard
      v-for="todo in todoArray"
      :key="todo.id"
      :cardHeader="todo.title"
      :cardText="todo.text"
      :todo="todo"
    />
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  row-gap: 10px;
  column-gap: 20px;
  margin: 0 auto;
}
</style>
