<template>
  <div class="audio-list">
    <div class="header"><h1>Your voice notes</h1></div>
    <div class="list">
      <VoiceNote />
    </div>
  </div>
</template>

<script>
import VoiceNote from "./VoiceNote.vue";

export default {
  components: {
    VoiceNote,
  },
};
</script>

<style scoped>
.audio-list {
  width: 100%;
  max-height: 100%;
  background: white;
  display: flex;
  border-radius: 10px;
  box-shadow: 4px 4px 20px #00000020;
  padding: 20px;
  flex-direction: column;
  gap: 25px;
}

.header h1 {
  font-family: "Noto Sans", sans-serif;
  letter-spacing: -2px;
  word-spacing: 2px;
  font-weight: 600;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  overflow-y: scroll;
}
</style>
