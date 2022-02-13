<template>
  <div class="cart flex--row row--top--center">
    <div class="cart__items flex--column column--middle--center">
      <cart-item v-for="item in getCart" :product="item" :key="item" />
      <!--Not result-->
      <p v-if="getCart?.length === 0">Cart empty 🙁</p>
    </div>
    <div class="cart__info">
      <cart-info />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CartInfo from "../components/CartInfo.vue";
import CartItem from "../components/CartItem.vue";
export default {
  name: "Cart",
  components: { CartItem, CartInfo },
  computed: {
    ...mapGetters({
      getCart: "getCart",
    }),
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  max-width: $max-width-one;
  margin-top: 60px;
  justify-content: space-between;

  padding: 0 10px;
  @media only screen and (max-width: $small) {
    flex-wrap: wrap;
  }
  &__items {
    width: 60%;
    margin-right: 20px;
    @media only screen and (max-width: $small) {
      width: 100%;
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
  &__info {
    width: 40%;
    position: sticky;
    top: 30px;
    @media only screen and (max-width: $small) {
      width: 100%;
      position: static;
      top: auto !important;
    }
  }
}
</style>
