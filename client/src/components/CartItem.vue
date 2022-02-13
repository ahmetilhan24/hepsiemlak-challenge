<template>
  <div class="cart-item flex--row row--top--left">
    <div class="cart-item__left flex--column column--middle--center">
      <picture>
        <img
          src="https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdis-fircasi.jpeg?v=1561027551798"
          alt=""
        />
      </picture>
      <div class="cart-item__left__amount">
        <button>+</button>
        <input type="number" />
        <button>-</button>
      </div>
    </div>
    <div class="cart-item__right flex--column column--middle--right">
      <div
        class="cart-item__right__info flex--column column--middle--left"
      >
      <h3>Lorem ipsum dolar sit ament</h3>
      <span>
        <b>
          398 TRY
        </b>
      </span>
      </div>
      <button class="primary-btn small">Remove</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
};
</script>
<style lang="scss" scoped>
.cart-item {
  width: 100%;
  margin-bottom: 40px;
  border-bottom: 1px solid $gray-one;
  padding-bottom: 10px;
  &__left {
    margin-right: 20px;
    picture {
      margin-bottom: 10px;
      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
    }
    &__amount {
      input[type="number"] {
        width: 40px;
        height: 24px;
        border-radius: 3px;
        border: 1px solid $dark-two;
        margin: 0 5px;
      }
      button {
        width: 24px;
        height: 24px;
        border: 1px solid $dark-two;
        border-radius: 50%;
        background: transparent;
      }
    }
  }
  &__right{
    justify-content: space-between;
    min-height: 100px;
    &__info{
      h3{
        color: $dark-two;margin-bottom: 10px;
      }
    }
  }
}
</style>
