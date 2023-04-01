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
.todo-board {
  background: #fff;
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 10px;
  margin: 0 auto;
  box-shadow: 4px 4px 20px #00000020;
}
</style>
