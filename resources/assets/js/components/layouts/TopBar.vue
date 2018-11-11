<template>
<div>
  <div class="logo">
      <a href="" title="Meow temple" id="logo"><img src="images/logo.png" alt="" height="86px" width="204px"></a>
  </div>
    <div class="container rightbox">
        <div class="main clearfix">
            <nav id="menu" class="nav"><button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="icon-menu"> </i> Menu</button>
                <ul>
                    <li v-on:mouseenter="show = true" v-on:mouseleave="show = false">
                      <transition name="bounce">
                        <a href="/#/sign/ready" v-if="show" >
                            <span class="icon"></span>
                            <span class="menu_icon">
                                <img src="images/poem.png"><div class="menu_text">指路詩籤</div>
                            </span>
                        </a>
                      </transition>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon"></span>
                            <span class="menu_icon">
                                <img src="images/dream.png"><div class="menu_text">夢的意境</div>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon"></span>
                            <span class="menu_icon">
                                <img src="images/tarot.png"><div class="menu_text">迷霧塔羅</div>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "TopBar",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    // mouseIn() {
    //   this.show = !this.show;
    //   console.log(123);
    //   console.log(this.show);
    // },
    // mouseOver() {
    //   this.show = !this.show;
    //   console.log(4444);
    //   console.log(this.show);
    // },
  },
};
</script>
<style>
/* .bounce-leave-active,.bounce-enter-active{
    transition:  all 1s ease;
}
.bounce-leave-active,.bounce-enter{
    height: 500px
}
.bounce-leave,.bounce-enter-active{
    height: 0px;
} */

.rightbox {
  float: right;
}
.logo {
  position: absolute;
  top: 0px;
  left: 0;
  width: 203px;
  height: 85px;
  z-index: 99;
  float: left;
}
.menu_icon{
    font-size: 16px;
    color: #eec8b2;
    right: 40px;
    position: relative;
}
.menu_text{
    position: absolute;
    top: 25px;
    right: 0px;
}
</style>
