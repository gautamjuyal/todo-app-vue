<template>
  <div class="backdrop"><slot></slot></div>
</template>

<style scoped>
.backdrop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000030;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
