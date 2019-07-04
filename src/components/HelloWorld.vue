<template>
<div>
  <Alert></Alert>
  <TopNavbar class="sticky-top"/>
  <div class="mt-3">
      <router-view/>
  </div>

  </div>
</template>

<script>
import TopNavbar from '../views/TopNavbar.vue'
import Alert from '../views/AlertMessage'
export default {
  components: {
    TopNavbar,
    Alert
  }
}
</script>
