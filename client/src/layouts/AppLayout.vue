<template>
  <div class="app-container flex--column column--top--center">
    <app-header />
    <app-tabs />
    <app-footer/>
  </div>
</template>
<script>
import AppTabs from "@/layouts/tabs/AppTabs.vue";
import AppHeader from "@/layouts/header/AppHeader.vue";
import AppFooter from '@/layouts/footer/AppFooter.vue';
export default {
  name: "AppLayout",
  components: {
    AppTabs,
    AppHeader,
    AppFooter,
  },
};
</script>
<style lang="scss" scoped>
.app-container{
  width: 100%;
}
</style>