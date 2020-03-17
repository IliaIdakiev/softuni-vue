<template>
  <div>
    <div class="main-content">
      <aside v-if="$slots.nav" class="content-navigation">
        <slot name="nav"></slot>
      </aside>
      <section v-if="$slots.info" class="content-info">
        <slot name="info"></slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>