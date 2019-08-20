<template>
      <div style="overflow-x: hidden;">
      <div class="row">
            <nav class="col-md-2 d-none d-md-block sidebar" style="box-shadow:none;padding:150px 0 0 50px">
      <div class="sidebar-sticky">
        <ul class="nav flex-column mb-2">
          <li class="nav-item mb-3">
              <button type="button" class="btn btn-outline-secondary" style="border:3px #AAAAAA ridge;border-radius:10px;" @click.prevent="changeitem('劍')">&nbsp;&nbsp;&nbsp;劍&nbsp;&nbsp;&nbsp;</button>
          </li>
          <li class="nav-item mb-3">
              <button type="button" class="btn btn-outline-secondary" style="border:3px #AAAAAA ridge;border-radius:10px;" @click.prevent="changeitem('盾')">&nbsp;&nbsp;&nbsp;盾&nbsp;&nbsp;&nbsp;</button>
          </li>
          <li class="nav-item mb-3">
              <button type="button" class="btn btn-outline-secondary" style="border:3px #AAAAAA ridge;border-radius:10px;" @click.prevent="changeitem('道具')">&nbsp;道具&nbsp;</button>
          </li>
        </ul>
      </div>
    </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <!-- <loading :active.sync="isLoading"></loading> -->
    <!-- 產品列表 -->
    <table class="table mt-4">
      <thead>
        <tr style="border:3px #AAAAAA ridge;border-radius:10px;font-size:24px;">
          <th>產品名稱</th>
          <th>產品說明</th>
          <th>售價</th>
          <th>數量</th>
          <th width="120">購買</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="item.id" style="border:3px #AAAAAA ridge;border-radius:10px;font-size:24px;">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price | currency }}</td>
          <td><NumInput @numchange="nchange" :ik="index"></NumInput></td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="addtoCart(item.id,item.num,item.title)">加到購物車</button>
          </td>
        </tr>
      </tbody>
    </table>
        </main>
              </div>
      </div>
</template>

<script>
import NumInput from './NumInput.vue'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      selitem: '劍'
    }
  },
  methods: {
    getProducts (selitem) {
      this.$store.dispatch('productsModules/getProducts', selitem)
    },
    // getProducts () {
    //   const vm = this
    //   const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/products/all`
    //   vm.$store.dispatch('updateLoading', true)
    //   this.$http.get(api).then(response => {
    //     vm.products = response.data.products.filter(item => {
    //       if (item.category === '劍') {
    //         return true
    //       }
    //     })
    //     for (let i = vm.products.length - 1; i >= 0; i--) {
    //       vm.products[i].num = '1'
    //     }
    //     vm.$store.dispatch('updateLoading', false)
    //   })
    // },
    addtoCart (id, qty, title) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty, title })
      // this.$store.dispatch('addtoCart', { id, qty })
      // this.$bus.$emit('messsage:push', title + qty + '個已加到購物車中', 'success')
      // const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/cart`
      // const cart = {
      //   product_id: id,
      //   qty
      // }
      // // console.log(cart)
      // this.$http.post(url, { data: cart }).then(response => {
      //   this.$bus.$emit('messsage:push', title + qty + '個已加到購物車中', 'success')
      //   console.log(response)
      // })
    },
    nchange (count) {
      this.$store.dispatch('productsModules/nchange', count)
      // const vm = this
      // const pnum = count[0]
      // const pindex = count[1]
      // console.log(this.products)
      // this.products[pindex].num = pnum
      // console.log(pnum, pindex)
    },
    changeitem (sel) {
      const vm = this
      vm.selitem = sel
      vm.getProducts(vm.selitem)
    //   console.log(vm.selitem)
    }
  },
  created () {
    const vm = this
    vm.getProducts(vm.selitem)
  },
  components: {
    NumInput
  },
  computed: {
    ...mapGetters('productsModules', ['products'])
  }
}
</script>
