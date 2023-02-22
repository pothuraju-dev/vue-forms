<template>
  <div class="container">
    <h1>Welcome to Vue Forms</h1>
    <div >
      <button
        class="btn btn-primary m-1"
        @click="$router.push({ path: '/starter' })"
      >
        Starter Form
      </button>
      <button
        class="btn btn-primary"
        @click="$router.push({ path: '/' })"
      >
        Home
      </button>
    </div>
  </div>
</template>
<script>
export default {
    name:"HeaderVue",
}
</script>