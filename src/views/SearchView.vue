<template>
  <div class="search-view">
    <div class="search-bar">
      <input type="search" v-model="searchInput" />
      <button type="button" @click="searchTodo">Search</button>
    </div>
    <TodoBoard :reqPayload="searchTerm" :key="searchTerm" />
  </div>
</template>

<script>
import TodoBoard from "@/components/TodoBoard";
export default {
  components: {
    TodoBoard,
  },
  data() {
    return {
      searchInput: "",
      searchTerm: "",
    };
  },
  methods: {
    searchTodo() {
      this.searchTerm = this.searchInput;
    },
  },
};
</script>

<style scoped>
.search-view {
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  padding: 20px 30px;
  overflow-y: scroll;
  background: #f2f6fe;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  width: 100%;
}

.search-bar input {
  width: 50%;
  height: 45px;
  border-radius: 10px 0 0 10px;
  outline: 1px solid black;
  border-color: transparent;
  font-size: 18px;
  padding: 5px 10px;
}

.search-bar input:focus,
.search-bar input:active {
  outline: 1px solid #744be2;
}

.search-bar button {
  height: 45px;
  border-radius: 0 10px 10px 0;
  padding: 0 10px;
  border-color: transparent;
  background-color: #744be2;
  outline: 1px solid #744be2;
  color: white;
  font-size: 16px;
  transition: all 300ms ease;
}
.search-bar button:hover {
  background-color: #1e0059;
  outline: 1px solid #1e0059;
}
</style>
