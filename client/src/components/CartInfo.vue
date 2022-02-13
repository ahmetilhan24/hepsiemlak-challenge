<template>
  <div class="cart-info flex--column">
    <h3>Shopping Detail</h3>
    <div class="cart-info__detail flex--column  column--middle--center">
      <div class="cart-info__detail__items">
        <div class="cart-info__detail__items__item flex--row row--middle--center">
          <p>Lorem ipsuum dolar</p>
          <span>
            <b>
            12 TRY
            </b>
          </span>
        </div>
      </div>
      <div class="cart-info__detail__total flex--row row--middle--center">
        <p>Total count</p>
        <span>120 TRY</span>
      </div>
    </div>
    <div class="cart-info__buttons flex--row row--middle--center">
      <router-link to="" class="secondary-btn flex--row row--middle--center">
        Continue Shopping
      </router-link>
      <button class="primary-btn">Place Order</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartInfo",
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
    &__items{
      width: 100%;
      padding: 20px 0;
      &__item{
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
