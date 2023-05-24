<template>
  <div class="audio-notes">
    <div class="recorder-section">
      <h1 class="main-view-header">Record voice notes</h1>
      <AudioRecorder />
    </div>
    <div class="list-section">
      <AudioList />
    </div>
  </div>
</template>

<script>
import AudioRecorder from "@/components/AudioRecorder.vue";
import AudioList from "@/components/AudioList.vue";

export default {
  components: {
    AudioRecorder,
    AudioList,
  },
};
</script>

<style scoped>
.audio-notes {
  width: 100%;
  height: 100vh;
  padding: 30px 50px;
  display: flex;
  gap: 20px;
  background-color: #f2f6fe;
}

.recorder-section,
.list-section {
  width: 50%;
  display: flex;
}

.recorder-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
