<template>
  <div class="add-todo-page">
    <h1 class="main-view-header">Add your todo</h1>
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

      <NotificationCard :status="notifStatus" v-show="showNotif">{{
        notifText
      }}</NotificationCard>
    </form>
  </div>
</template>

<script>
import Services from "@/services/services";
import NotificationCard from "@/components/NotificationCard.vue";

export default {
  components: {
    NotificationCard,
  },
  data() {
    return {
      inputTitle: "",
      inputText: "",
      showNotif: false,
      notifStatus: "",
      notifText: "",
    };
  },
  methods: {
    showNotifHandler(status, text) {
      this.notifStatus = status;
      this.notifText = text;
      this.showNotif = true;
      setTimeout(() => {
        this.showNotif = false;
      }, 2000);
    },
    submitHandler() {
      if (this.inputTitle.trim() && this.inputText.trim()) {
        Services.postData({
          title: this.inputTitle,
          subText: this.inputText,
          isDone: false,
          date: new Date(),
        })
          .then((res) => {
            if (res.data.status === "success") {
              this.showNotifHandler("success", "Todo created successfully");
              // this.$router.push({
              //   name: "todo-show",
              //   params: { id: res.data.data._id },
              // });
              this.inputTitle = "";
              this.inputText = "";
            }
          })
          .catch((err) => this.showNotifHandler("failure", err));
      } else {
        this.showNotifHandler("failure", "Can not save empty todo");
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
