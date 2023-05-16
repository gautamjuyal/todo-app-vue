<template>
  <div class="card" :class="status"><slot></slot></div>
</template>

<script>
export default {
  props: {
    status: String,
  },
};
</script>

<style scoped>
.card {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  padding: 15px 20px;
  border-radius: 0 0 10px 10px;
  width: max-content;
  animation: slide-in 400ms cubic-bezier(0.56, 0.31, 0, 0.89);
}

.success {
  background: #03c988;
  color: white;
}

.failure {
  background: #ed2b2a;
  color: white;
}

@keyframes slide-in {
  0% {
    top: -50px;
  }
  100% {
    top: 0;
  }
}
</style>
