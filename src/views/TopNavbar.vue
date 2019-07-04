<template>
    <div>
      <loading :active.sync="isLoading"></loading>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link to="/">
            <a class="bg-light" href="#"><img src="../assets/img/logo.png" alt="" srcset="" style="width:85px;"></a>
          </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ml-5 ">
      <li class="nav-item mr-3 ml-3 active">
            <router-link to="/character">
              <button type="button" class="btn btn-secondary">主要人物</button>
            </router-link>
      </li>
      <li class="nav-item mr-3 ml-3">
            <router-link to="/storyrole">
              <button type="button" class="btn btn-secondary">劇情人物</button>
            </router-link>
      </li>
      <li class="nav-item mr-3 ml-3">
            <router-link to="/career">
              <button type="button" class="btn btn-secondary">職業介紹</button>
            </router-link>
      </li>
      <li class="nav-item mr-3 ml-3">
        <router-link to="/buyitem">
        <button type="button" class="btn btn-secondary">商品購買</button>
        </router-link>
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0 mr-3">
      <a href="#" @click="openshoppingModal" v-if="nub"><i class="fas fa-cart-plus"><span class="nub" >{{ nub }}</span></i></a>
   </div>
    <div class="form-inline my-2 my-lg-0">
      <a href="#" @click="openModal"><i class="fas fa-cog fa-2x"></i></a>
    </div>
  </div>
</nav>
<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <form class="modal-content" @submit.prevent="signin">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">請先登入</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="checkbox mb-3">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="user.username"
      >
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      >
      <div class="text-danger" v-if="confirmuser">帳號或密碼錯誤</div>
      </div>
      </div>
      <div class="modal-footer">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </div>
    </form>
  </div>
</div>
<!-- 開起購物車model -->
<div class="modal fade" id="shoppingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <form class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">購物清單</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="padding:0 10px 0 10px">
      <div >
<div>
      <div>
        <table class="table">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id,item.product.title,item.qty)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
      </div>
      </div>
      <div class="modal-footer">
      <button class="btn btn-lg btn-primary btn-block" @click="fillin">結帳去</button>
      </div>
    </form>
  </div>
</div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      cart: {},
      confirmuser: false,
      nub: 0,
      coupon_code: '',
      isLoading: false
    }
  },
  methods: {
    openModal () {
      const vm = this
      vm.user.username = ''
      vm.user.password = ''
      vm.confirmuser = false
      $('#exampleModalCenter').modal('show')
    },
    openshoppingModal () {
      $('#shoppingModal').modal('show')
    },
    signin () {
      const api = `${process.env.VUE_APP_API}/admin/signin`
      const vm = this
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data)
        if (response.data.success) {
          $('#exampleModalCenter').modal('hide')
          vm.$router.push('/admin/products')
        } else {
          vm.confirmuser = true
        }
      })
    },
    fillin () {
      const vm = this
      $('#shoppingModal').modal('hide')
      vm.$router.push('/orderform')
    },
    getCart () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/cart`
      vm.isLoading = true
      this.$http.get(url).then(response => {
        console.log(response.data)
        vm.cart = response.data.data
        vm.nub = response.data.data.carts.length
        vm.isLoading = false
      })
    },
    removeCartItem (id, title, qty) {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/cart/${id}`
      this.$http.delete(url).then(() => {
        this.$bus.$emit('messsage:push', title + qty + '個刪除成功', 'danger')
        vm.getCart()
      })
    }
  },
  created () {
    const vm = this
    vm.getCart()
  }
}
</script>
