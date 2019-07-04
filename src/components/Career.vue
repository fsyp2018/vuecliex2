<template>
    <div>
      <loading :active.sync="isLoading"></loading>
      <h3 class="ml-3 mr-3 mt-3">在旅途上會遇到不同的魔物，這時職業的搭配就非常重要，有些職業一開始可能非常的弱小，但到了某個時期，其展現的強大，將是其他職業無可比擬的</h3>
<div class="d-flex flex-row flex-wrap justify-content-around">
  <div class="card mb-3 ml-4 mr-4 mt-3" style="width: 18rem;border:3px #AAAAAA ridge;border-radius:10px;font-size:24px;" v-for="(item) in products" :key="item.id">
  <img :src="item.imageUrl" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ item.title }}</h5>
    <p class="card-text">{{ item.description }}</p>
  </div>
</div>
</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/products/all`
      vm.isLoading = true
      this.$http.get(api).then(response => {
        vm.products = response.data.products.filter(item => {
          if (item.category === '職業') {
            return true
          }
        })
        vm.isLoading = false
      })
    }
  },
  created () {
    const vm = this
    vm.getProducts()
  }
}
</script>
