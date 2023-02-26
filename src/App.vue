<template>
  <div id="app" class="container py-4">
   <!-- <Header/> -->
    <transition name="fade" mode="out-in">
      <router-view :key="rerender" />
    </transition>
  </div>
</template>

<script>
// import Header from "./components/Header"
export default {
  name: "App",
  components:{}
};
</script>

<style></style>
