<template>
    <div class="index">
      <!-- 主页面图片 -->
        <div class="bg-swiper">
            <index-swiper></index-swiper>
        </div>
        <img class="inv" src="../../../static/images/inv.png"/>
        <!-- 背景音乐 -->
        <div class="bg_music" v-if="isPlay" @tap="audioPlay">
            <img src="../../../static/images/music_icon.png" class="musicImg music_icon"/>
            <img src="../../../static/images/music_play.png" class="music_play pauseImg"/>
        </div>
        <div class="bg_music" v-else @tap="audioPlay">
            <img src="../../../static/images/music_icon.png" class="musicImg"/>
            <img src="../../../static/images/music_play.png" class="music_play playImg"/>
        </div>
        <!-- 邀请函详情 -->
        <div class="info" :animation="animationData">
            <div class="content">
                <h1>李凯延 <span>❤</span> 金小悠</h1>
                <p>谨定于 2020年12月26日（星期六）晚上18:00</p>
                <p>农历 十一月十二日 晚上六点 举办百日宴</p>
                <p>席设：今成酒楼</p>
                <p>地址：佛山市顺德区新丰西路与荣阳路交叉路口西侧</p>
                <img src="../../../static/images/we.png" class="img_footer"/>
            </div>
        </div>
    </div>
</template>

<script>
import IndexSwiper from 'components/indexSwiper'
import tools from '../../common/js/h_tools'
const audioCtx = wx.createInnerAudioContext()
export default {
  name: 'Index',
  components: {
    IndexSwiper
  },
  data () {
    return {
      isPlay: true
    }
  },
  onShow () {
    const that = this
    that.isPlay = true
    // 音乐
    audioCtx.src = 'cloud://bertlearning-62870c.6265-bertlearning-62870c/music/yudao.mp3'
    audioCtx.autoplay = true
  },

  methods: {
    audioPlay () {
      const that = this
      if (that.isPlay) {
        audioCtx.pause()
        that.isPlay = false
        tools.showToast('您已暂停音乐播放~')
      } else {
        audioCtx.play()
        that.isPlay = true
        tools.showToast('背景音乐已开启~')
      }
    }
  },

  // 自定义转发内容
  onShareAppMessage: function (res) {
    return {
      title: '自定义分享内容',
      path: '/pages/index/main',
      imageUrl: 'https://img-blog.csdnimg.cn/20190918091410914.gif'
    }
  }
}
</script>

<style scoped lang="stylus">
@-webkit-keyframes musicRotate
  from
    -webkit-transformb rotate(0deg)
  to
    -webkit-transform rotate(360deg)
@-webkit-keyframes musicStop
  from
    -webkit-transform rotate(20deg)
  to
    -webkit-transform rotate(0deg)
@-webkit-keyframes musicStart
  from
    -webkit-transform rotate(0deg)
  to
    -webkit-transform rotate(20deg)
@-webkit-keyframes infoAnimation
  0%
    -webkit-transform scale(1) translate(0, 0)
  50%
    -webkit-transform scale(.9) translate(5px, 5px)
  100%
    -webkit-transform scale(1) translate(0, 0)
.index
  height 100%
  position relative
  .img
    width 100%
    height 100%
  .bg-swiper
    width 100%
    height 100%
  .inv
    position absolute
    top 20rpx
    left 89rpx
    width 572rpx
    height 69rpx
    z-index 9
  .bg_music
    position fixed
    right 0
    top 20rpx
    width 100rpx
    z-index 99
    display flex
    justify-content flex-start
    align-items flex-start
    .musicImg
      width 60rpx
      height 60rpx
    .music_icon
      animation musicRotate 3s linear infinite
    .music_play
      width 28rpx
      height 60rpx
      margin-left -10rpx
      transform-origin top
      -webkit-transform rotate(20deg)
    .playImg
      animation musicStop 1s linear forwards
    .pauseImg
      animation musicStart 1s linear forwards
  .info
    width 630rpx
    background rgba(255, 255, 255, 0.75)
    z-index 9
    position fixed
    bottom 40rpx
    left 50rpx
    padding 10rpx
    animation infoAnimation 12s linear infinite
    .content
      width 626rpx
      border 1rpx solid #000
      display flex
      flex-direction column
      justify-content flex-start
      align-items center
      position relative
      padding-bottom 30rpx
      h1
        font-size 50rpx
        height 100rpx
        line-height 100rpx
        span
          color red
      p
        font-size 24rpx
        height 60rpx
        line-height 60rpx
      .img_footer
        position absolute
        bottom 0
        left 53rpx
        z-index 99
        height 14rpx
        width 520rpx
  #myAudio
    display none
</style>
