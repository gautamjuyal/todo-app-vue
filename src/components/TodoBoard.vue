<template>
  <div class="todo-board">
    <TodoCard v-for="todo in todoArray" :key="todo._id" :todo="todo" />
    <CardLoader v-if="!todoArray.length" />
    <CardLoader v-if="!todoArray.length" />
    <CardLoader v-if="!todoArray.length" />
    <CardLoader v-if="!todoArray.length" />
  </div>
</template>

<script>
import TodoCard from "@/components/TodoCard.vue";
import CardLoader from "@/components/CardLoader.vue";
import Services from "@/services/services";

export default {
  components: {
    TodoCard,
    CardLoader,
  },
  created() {
    Services.getData().then((res) => (this.todoArray = res.data.data));
  },
  data() {
    return {
      todoArray: [],
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
