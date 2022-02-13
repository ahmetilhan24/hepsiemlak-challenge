<template>
  <app-layout/>
</template>
<script>
import AppLayout from "@/layouts/AppLayout.vue";
import { mapMutations } from 'vuex';
export default {
  name: "App",
  components: {
    AppLayout,
  },
  methods: {
    ...mapMutations({
      setCart: "setCart"
    })
  },
  created(){
    this.setCart(JSON.parse(localStorage.getItem("cart")))
  }
};
</script>
<style lang="scss">
@import "./assets/sass/theme.scss";
</style>
