<template>
  <div class="app-container flex--column column--middle--center">
    <app-header />
    <app-tabs />
  </div>
</template>
<script>
import AppTabs from "@/layouts/tabs/AppTabs.vue";
import AppHeader from "@/layouts/header/AppHeader.vue";
export default {
  name: "AppLayout",
  components: {
    AppTabs,
    AppHeader,
  },
};
</script>
<style lang="scss" scoped>
.app-container{
  width: 100%;
}
</style>