<template>
  <div>Test</div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'reply-click', commentId: string): void
  (e: 'view-user-profile', userId: string): void
  (e: 'report', commentId: string): void
}>();

function defineEmits() {
  return null;
}
</script>

<style>
div {
  color: red;
}
</style>
