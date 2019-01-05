<template>
  <ul class="tabbar">
    <router-link
      v-for="item in navs"
      :key="item.path"
      :to="item.path"
      tag="li"
    >
      <span><i class="iconfont" v-html='item.meta.icon'></i></span>
      <span>{{item.meta.title}}</span>
    </router-link>
  </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'tabbar',
  data () {
    return {
      navs: routes.filter(item => item.meta.isNav === true)
    }
  },
  mounted () {
    console.log(this.navs)
  }
}
</script>

<style lang="scss">
.tabbar{
  display: flex;
  height: 40px;
  background-color: #fff;
  li{
    flex:1;
    text-align: center;
    display: flex;
    flex-direction: column;
    // &.icon {
    //   font-size: 20px;
    //   height:32px;
    //   line-height: 32px;
    // }
  }
}
.router-link-exact-active,
router-link-active{
  color:#f30
}

@font-face {
  font-family: 'iconfont';  /* project id 835076 */
  src: url('//at.alicdn.com/t/font_835076_v0hzgxc327.eot');
  src: url('//at.alicdn.com/t/font_835076_v0hzgxc327.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_835076_v0hzgxc327.woff') format('woff'),
  url('//at.alicdn.com/t/font_835076_v0hzgxc327.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_835076_v0hzgxc327.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>
