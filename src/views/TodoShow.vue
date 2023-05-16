<template>
  <div class="todo-show">
    <div class="top-bar">
      <router-link :to="{ name: 'home' }"
        ><button type="button">
          <img src="@/assets/icons/back.svg" /><span>Back</span>
        </button></router-link
      >
      <div class="todo-actions">
        <button type="button" @click="updateTodoStatus">
          <img src="@/assets/icons/check.svg" /><span v-if="isDone"
            >Mark as Undone</span
          >
          <span v-else>Mark as Done</span>
        </button>
        <button type="button" @click="toggleEditState">
          <img src="@/assets/icons/edit.svg" /><span>Edit</span>
        </button>
      </div>
    </div>

    <div class="main-area">
      <div class="content-area" v-if="!editState">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
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

        <div class="buttons">
          <button type="submit" class="submit">Done</button>
          <button type="button" class="cancel" @click="cancelEdit">
            Cancel
          </button>
        </div>
      </form>

      <div class="utility">
        <div class="dates">
          <div>
            <span class="faded">Last modified</span><span>21.03.2023</span>
          </div>
          <div>
            <span class="faded">Date created </span><span>20.03.2023</span>
          </div>
        </div>

        <div class="status">
          <span>Status : {{ isDone ? "Done" : "Undone" }} </span>
          <img src="@/assets/icons/checkcircle.svg" v-if="isDone" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Services from "@/services/services";

export default {
  props: ["id"],
  data() {
    return {
      todo: {},
      title: "",
      text: "",
      isDone: "",
      date: "",
      editState: false,
    };
  },
  created() {
    Services.getSingleData(this.id).then((res) => {
      this.todo = res.data.data;
      this.title = this.todo.title;
      this.text = this.todo.subText;
      this.isDone = this.todo.isDone;
    });
    // this.todo = this.$store.getters.getTodoById(this.id);
    // this.title = this.todo.title;
    // this.text = this.todo.text;
    // this.isDone = this.todo.isDone;
  },
  methods: {
    toggleEditState() {
      this.editState = !this.editState;
    },
    cancelEdit() {
      this.editState = false;
    },
    todoUpdate() {
      console.log({ title: this.title, text: this.text });
      if (this.title.trim() && this.text.trim()) {
        this.$store.dispatch("updateData", {
          id: this.todo.id,
          title: this.title,
          text: this.text,
        });
        this.cancelEdit();
      }
    },
    updateTodoStatus() {
      this.isDone = !this.isDone;
      this.$store.dispatch("updateStatus", {
        id: this.todo.id,
        isDone: this.isDone,
      });
      console.log(this.isDone);
    },
  },
};
</script>

<style scoped>
.todo-show {
  background-color: #f2f6fe;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 40px 60px;
  animation: upAnim 400ms ease;
}

@keyframes upAnim {
  0% {
    transform: translateY(20px);
    opacity: 50%;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
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
  background: #744ce2;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  border-color: transparent;
  padding: 10px 20px;
  transition: all 200ms ease;
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
}

.top-bar button:hover {
  filter: grayscale(0.5);
}

.top-bar button img {
  filter: invert(1);
  width: 20px;
}

.todo-actions {
  display: flex;
  gap: 20px;
}

.main-area {
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.content-area,
.edit-area {
  background: white;
  height: 100%;
  width: 55vw;
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: 4px 4px 20px #00000020;
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
  transition: all 200ms ease;
  cursor: pointer;
}

button.submit {
  color: white;
  background: #744be4;
}

button.submit:hover {
  filter: grayscale(0.5);
}

button.cancel:hover {
  filter: brightness(0.9);
}

button.cancel {
  background: white;
  color: #562bcb;
  border: 1px solid #744be4;
}

.buttons {
  display: flex;
  gap: 10px;
}
.utility {
  width: 25vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px 20px #00000020;
  padding: 20px 30px;
}

.dates {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-bottom: 1px solid #1e0059;
  padding-bottom: 15px;
}

.dates div {
  display: flex;
  flex-direction: column;
}

.faded {
  color: #5a5a5a;
}

.status {
  padding: 15px 0;
  border-bottom: 1px solid #1e0059;
  display: flex;
  gap: 6px;
}

.status img {
  width: 20px;
}
</style>
