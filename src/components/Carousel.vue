<template>
    <div>
      <loading :active.sync="isLoading"></loading>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="typestyle">
<span class="typeing" v-for="(item, index) in Introduction" :key="item.id" v-bind:style="{animationDelay: `${0.5 + index * 0.1}s`}">{{ item }}</span>
</div>
  <div class="carousel-inner mr-auto ml-auto" style="width:90%;">
    <div class="carousel-item active">
        <img src="../assets/img/bg1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/bg2.jpg" class="d-block w-100" alt="...">
    </div>
        <div class="carousel-item">
      <img src="../assets/img/bg3.jpg" class="d-block w-100" alt="...">
    </div>
        <div class="carousel-item">
      <img src="../assets/img/bg4.jpg" class="d-block w-100" alt="...">
    </div>
        <div class="carousel-item">
      <img src="../assets/img/bg5.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      Introduction: '1000年前，一個漂浮在無名星球上空的大陸中，一個技術先進的文明試圖利用光之四元素水晶的力量。他們沒有意識到，自然的力量是其無法控制的。缺少對立暗之水晶的力量，光之水晶的力量將毀滅世界。光與暗平衡將要被打破之下，獲得暗之水晶力量的四戰士要重新平衡光之水晶的力量。這幾位被稱作暗之戰士的人成功完成了任務，恢復了世界和平。但是他們的勝利對拯救末日文明來說太晚了，儘管浮空大陸還在，但上面的文明已經淪為毀滅。在這片大陸上，盲人占卜種族古魯甘和預言者預測這種事最終還會再演。',
      isLoading: false
    }
  },
  methods: {
    Carousel () {
      $('.carousel').carousel({
        interval: 1000,
        pause: false
      })
    }
  },
  created () {
    const vm = this
    vm.Carousel()
  }
}
</script>
