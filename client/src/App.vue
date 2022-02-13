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
      setCart: "setCart",
      setCartTotal: "setCartTotal"
    })
  },
  created(){
    //get cart items where localstorag
    this.setCart(JSON.parse(localStorage.getItem("cart")) || [])
    //get cart total where localstorage
    this.setCartTotal()
  }
};
</script>
<style lang="scss">
@import "./assets/sass/theme.scss";
</style>
