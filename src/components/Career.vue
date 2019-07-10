<template>
    <div>
      <!-- <loading :active.sync="isLoading"></loading> -->
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
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      selitem: '職業'
    }
  },
  methods: {
    getProducts (selitem) {
      this.$store.dispatch('productsModules/getProducts', selitem)
    }
  },
  created () {
    const vm = this
    vm.getProducts(vm.selitem)
  },
  computed: {
    ...mapGetters('productsModules', ['products'])
  }
}
</script>
