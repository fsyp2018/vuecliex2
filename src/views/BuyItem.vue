<template>
    <div>
      <div style="overflow-x: hidden;">
      <div class="row">
          <ItemSidebar/>
          <router-view/>
      </div>
      </div>
    </div>
</template>

<script>
import ItemSidebar from './ItemSidebar.vue'
export default {
  components: {
    ItemSidebar
  }
}
</script>
