<template>
    <div>
      <loading :active.sync="isLoading"></loading>
      <h3 class="ml-3 mr-3 mt-3">在光之戰士的故事中，一路上遇到的人物，有時他們的情報會起到關鍵性的作用。</h3>
<div class="card mb-3 ml-3 mr-3 mt-3 " style="flex-direction:row;border:3px #AAAAAA ridge;border-radius:10px;font-size:24px;" v-for="(item) in products" :key="item.id">
  <img :src="item.imageUrl" class="card-img-top" style="width:auto;height:300px;">
  <div class="card-body">
    <h4 class="card-title">{{ item.title }}</h4>
    <p class="card-text">{{ item.description }}</p>
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
          if (item.category === '劇情人物') {
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
