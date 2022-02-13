<template>
  <div class="products flex--column column--middle--center">
    <search-area/>
  </div>
</template>

<script>
import SearchArea from '../components/SearchArea.vue'
export default {
  components: { SearchArea },
  name: "Products"
}
</script>
<style lang="scss" scoped>
.products{
  width: 100%;
}
</style>