<template>
  <main class="tabs-view flex--column column--middle--center">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "TabsView",
};
</script>

<style lang="scss" scoped>
.tabs-view {
  width: 100%;
}
</style>
