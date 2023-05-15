<template>
  <div class="mainBox">
    <div class="heading"></div>
    <div>
      <div class="subtext"></div>
      <div class="subtext"></div>
      <div class="subtext"></div>
      <div class="subtext"></div>
      <div class="subtext"></div>
      <div class="subtext"></div>
    </div>
  </div>
</template>

<style scoped>
.mainBox {
  width: 400px;
  height: 250px;
  background: #ffffff;
  color: #150d25;
  border-radius: 15px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #00000050;
}

.mainBox div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.heading {
  width: 80%;
  background: #5e5e5e30;
  height: 30px;
  border-radius: 6px;
  animation: swipe 600ms ease alternate infinite;
}

.subtext {
  width: 100%;
  background: #5e5e5e30;
  height: 15px;
  border-radius: 6px;
  animation: swipe 600ms ease alternate infinite;
}

.subtext:last-of-type {
  width: 70%;
}

@keyframes swipe {
  0% {
    background: #5e5e5e30;
  }
  100% {
    background: #9f9f9f30;
  }
}
</style>
