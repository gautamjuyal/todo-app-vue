<template>
  <div class="add-todo-page">
    <h1>Add a todo</h1>
    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <label for="new-todo-title">Title</label>
        <input id="new-todo-title" type="text" v-model="inputTitle" />
      </div>
      <div class="input-field">
        <label for="new-todo-text">Description</label>
        <textarea id="new-todo-text" v-model="inputText"></textarea>
      </div>

      <button type="submit">Add todo</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTitle: "",
      inputText: "",
    };
  },
  methods: {
    submitHandler() {
      if (this.inputTitle.trim() && this.inputText.trim()) {
        this.$store.dispatch("addData", {
          title: this.inputTitle,
          text: this.inputText,
        });
        this.inputTitle = "";
        this.inputText = "";
      }
    },
  },
};
</script>

<style scoped>
.add-todo-page {
  background: #f2f6fe;
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: upAnim 400ms ease;
}

@keyframes upAnim {
  0% {
    transform: translateY(15px);
    opacity: 50%;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}

form {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 30px;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
}

input {
  height: 40px;
  border-radius: 5px;
  font-size: 17px;
  padding: 0 10px;
}

textarea {
  max-width: 100%;
  min-height: 40px;
  border-radius: 5px;
  font-size: 17px;
  padding: 5px 10px;
}

button {
  width: 100px;
  padding: 10px 0;
  border-radius: 10px;
  border-color: transparent;
  background-color: #744be2;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: all 300ms ease;
}

button:hover {
  background-color: #1e0059;
}
</style>
