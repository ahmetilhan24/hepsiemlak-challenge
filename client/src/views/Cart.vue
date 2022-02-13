<template>
  <div class="cart flex--row row--top--center">
    <div class="cart__items flex--column column--middle--center">
      <cart-item v-for="item in 6" :key="item" />
    </div>
    <div class="cart__info">
      <cart-info/>
    </div>
  </div>
</template>
<script>
import CartInfo from '../components/CartInfo.vue';
import CartItem from "../components/CartItem.vue";
export default {
  name: "Cart",
  components: { CartItem, CartInfo },
};
</script>

<style lang="scss" scoped>
.cart{
  width: 100%;
  max-width: $max-width-one;
  margin-top: 60px;
  justify-content: space-between;
  &__items{
    width: 60%;
    margin-right: 20px;
  }
  &__info{
    width: 40%;
    
  position: sticky;
  top: 30px;
  }
}
</style>