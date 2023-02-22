<template>
  <div id="app" class="container py-4">
    <transition name="fade" mode="out-in">
      <router-view :key="rerender" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
