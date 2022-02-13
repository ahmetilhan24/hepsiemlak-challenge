<template>
  <div class="cart flex--row row--top--center">
    <div class="cart__items flex--column column--middle--center">
      <cart-item v-for="item in getCart" :product="item" :key="item" />
      <!--Not result-->
    <p v-if="getCart.length === 0">Cart empty 🙁 </p>
    </div>
    <div class="cart__info">
      <cart-info/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CartInfo from '../components/CartInfo.vue';
import CartItem from "../components/CartItem.vue";
export default {
  name: "Cart",
  components: { CartItem, CartInfo },
  computed: {
    ...mapGetters({
      getCart: "getCart"
    })
  }
};
</script>

<style lang="scss" scoped>
.cart{
  width: 100%;
  max-width: $max-width-one;
  margin-top: 60px;
  justify-content: space-between;
  @media only screen and (max-width: $small) {
  flex-wrap: wrap;
  padding: 0 10px;
  }
  &__items{
    width: 60%;
    margin-right: 20px;
    @media only screen and (max-width: $small) {
  width: 100%;
  }
  }
  &__info{
    width: 40%;
    @media only screen and (max-width: $small) {
  width: 100%;
  }
  position: sticky;
  top: 30px;
  }
}
</style>