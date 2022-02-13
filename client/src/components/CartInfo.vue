<template>
  <div class="cart-info flex--column">
    <h3>Shopping Detail</h3>
    <div class="cart-info__detail flex--column column--middle--center">
      <div class="cart-info__detail__items">
        <div
          v-for="item in getCart"
          :key="item.id"
          class="cart-info__detail__items__item flex--row row--middle--center"
        >
          <p>
            {{ item.name }}
          </p>
          <span>
            <b>
              {{ item.amount * item.price + " " + item.currency }}
            </b>
          </span>
        </div>
      </div>
      <div class="cart-info__detail__total flex--row row--middle--center">
        <p>Total count</p>
        <span>
          {{ getCartTotal + " " + "TRY"}}
        </span>
      </div>
    </div>
    <div class="cart-info__buttons flex--row row--middle--center">
      <router-link
        :to="{ name: 'Products' }"
        class="secondary-btn flex--row row--middle--center"
      >
        Continue Shopping
      </router-link>
      <button
        :disabled="getCart?.length === 0"
        class="primary-btn"
        @click="order"
      >
        Place Order
      </button>
    </div>
    <preloader :loader="loader" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Preloader from "./Preloader.vue";
export default {
  components: { Preloader },
  name: "CartInfo",
  data() {
    return {
      cartTotal: 0,
      loader: false,
    };
  },
  computed: {
    ...mapGetters({
      getCart: "getCart",
      getCartTotal: "getCartTotal",
    }),
  },
  methods: {
    ...mapActions({
      placeOrder: "placeOrder",
    }),
    order() {
      this.loader = true;
      this.placeOrder()
        .then((res) => {
          this.loader = false;
          this.cartTotal = 0;
          alert(res.data.message);
          this.$router.push({
            name: "Products"
          })
        })
        .catch((err) => {
          this.loader = false;
          alert({ err }.err.response.data.message);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.cart-info {
  padding: 20px;
  border: 2px solid $gray-one;
  border-radius: 10px;
  h3 {
    margin-bottom: 20px;
  }
  &__detail {
    width: 100%;
    justify-content: space-between;
    &__total {
      width: 100%;
      justify-content: space-between;
      border-top: 1px solid $gray-one;
      padding-top: 10px;
    }
    &__items {
      width: 100%;
      padding: 20px 0;
      &__item {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    }
  }
  &__buttons {
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;
  }
}
</style>
