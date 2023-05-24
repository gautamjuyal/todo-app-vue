<template>
  <div class="recorder">
    <div class="action-array">
      <button type="button" class="start">Start</button>
      <button type="button" class="pause">Pause</button>
      <button type="button" class="stop">Stop</button>
    </div>
    <div class="audio-name">
      <label>Name your voice note</label>
      <input type="text" />
    </div>
    <div class="buttons">
      <button type="button" class="cancel">Cancel</button>
      <button type="button" class="submit">Save</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.recorder {
  width: 70%;
  height: max-content;
  background-color: white;
  overflow: hidden;
  padding: 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 4px 4px 20px #00000020;
}

.action-array {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.action-array button {
  padding: 10px 40px;
  border-radius: 10px;
  border-color: transparent;
  background: #744be4;
  color: white;
  font-size: 16px;
  box-shadow: 2px 3px 3px #00000040;
}

.action-array button:hover {
  filter: grayscale(0.5);
}

.action-array button.disabled {
  background: #888888;
}

.audio-name {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.audio-name input {
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 16px;
}

.buttons {
  display: flex;
  gap: 20px;
}

.buttons button {
  padding: 10px 20px;
  border-radius: 8px;
  width: 50%;
  font-size: 16px;
  border-color: transparent;
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
</style>
