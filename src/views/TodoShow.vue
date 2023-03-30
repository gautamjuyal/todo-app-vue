<template>
  <div class="todo-show">
    <div class="top-bar">
      <router-link to="/"><button type="button">Back</button></router-link>
      <button type="button" @click="toggleEditState">Edit</button>
    </div>

    <div class="content-area" v-if="!editState">
      <h1>{{ todo.title }}</h1>
      <p>{{ todo.text }}</p>
    </div>

    <form class="edit-area" @submit.prevent="todoUpdate" v-else>
      <div class="input-field">
        <label>Title</label>
        <input type="text" v-model="title" />
      </div>

      <div class="input-field">
        <label>Description</label>
        <textarea v-model="text"></textarea>
      </div>

      <button type="submit">Done</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      editState: true,
      title: this.todo.title,
      text: this.todo.text,
    };
  },
  methods: {
    toggleEditState() {
      this.editState = !this.editState;
    },
    todoUpdate() {
      console.log({ title: this.title, text: this.text });
      this.$store.dispatch("updateData", {
        id: this.todo.id,
        title: this.title,
        text: this.text,
      });

      this.editState = false;
    },
  },
};
</script>

<style scoped>
.todo-show {
  background-color: #f2f6fe;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 40px 60px;
}

.top-bar {
  width: 100%;
  border: 1px solid #0005;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}

.top-bar button {
  background: white;
  border-radius: 10px;
  cursor: pointer;
  border-color: transparent;
  padding: 10px 20px;
}

.content-area,
.edit-area {
  margin: auto;
  background: white;
  height: 100%;
  width: 50vw;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px 30px;
}

.content-area h1 {
  margin-bottom: 20px;
  font-weight: 500;
}

.edit-area {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
  font-size: 20px;
}

input,
textarea {
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
  max-width: 100%;
}

.edit-area button {
  display: flex;
  padding: 10px 25px;
  width: max-content;
  border-radius: 8px;
  font-size: 16px;
  border-color: transparent;
  color: white;
  background: #744be4;
  transition: all 200ms ease;
}

.edit-area button:hover {
  background: #1e0059;
}
</style>
