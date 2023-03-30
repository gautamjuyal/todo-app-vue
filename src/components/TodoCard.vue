<template>
  <router-link :to="{ name: 'todo-show', params: { todo: todo } }">
    <div class="todo-card" :class="Done">
      <h2>{{ cardHeader }}</h2>
      <p>{{ cardText }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    isDone: Boolean,
    cardHeader: String,
    cardText: String,
    todo: Object,
  },
  computed: {
    Done() {
      if (this.isDone) return "done";
      else return "";
    },
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
}
.todo-card {
  min-width: 100%;
  background: #ffffff;
  color: #150d25;
  text-decoration: none;
  border-radius: 15px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #00000050;
}

.todo-card.done {
  background: #1d123f;
  color: grey;
}

h2 {
  text-decoration: none;
  font-weight: 600;
}

p {
  text-decoration: none;
  line-height: 20px;
  overflow: hidden;
}
</style>
