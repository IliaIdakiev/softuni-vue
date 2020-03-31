<template>
  <div>About</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next(instance => {
      console.log(instance);
    })
  }
}
</script>

<style>
</style>