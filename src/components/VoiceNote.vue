<template>
  <div class="voice-note">
    <button type="button">Play</button>
    <p>audio name</p>
  </div>
</template>

<script></script>

<style scoped>
.voice-note {
  width: 100%;
  display: flex;
  background: #e3e3e3;
  padding: 10px 20px;
  border-radius: 8px;
  gap: 20px;
  align-items: center;
}

button {
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  border-color: transparent;
  background-color: #744be4;
  color: white;
}

button:hover {
  filter: grayscale(0.5);
}
</style>
