<template>
<div>
  <div class="logo">
      <a href="" title="Meow temple" id="logo"><img src="images/logo.png" alt="" height="86px" width="204px"></a>
  </div>
    <div class="container rightbox">
        <div class="main clearfix">
            <nav id="menu" class="nav"><button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="icon-menu"> </i> Menu</button>
                <ul>
                    <li id="slide_down" @mouseenter="enter()" @mouseleave="leave()" :class="{ slide: isActive }">
                        <a href="/#/sign/ready" >
                            <span class="icon"></span>
                            <span class="menu_icon">
                                <img src="images/poem.png"><div class="menu_text">指路詩籤</div>
                            </span>
                        </a>
                    </li>
                    <li id="slide_down2" @mouseenter="enter2()" @mouseleave="leave2()" :class="{ slide2: isActive2 }">
                        <a href="">
                            <span class="icon"></span>
                            <span class="menu_icon">
                                <img src="images/dream.png"><div class="menu_text">夢的意境</div>
                            </span>
                        </a>
                    </li>
                    <li id="slide_down3" @mouseenter="enter3()" @mouseleave="leave3()" :class="{ slide3: isActive3 }">
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
      isActive: false,
      isActive2: false,
      isActive3: false,
      // show: true,
      // className: '',
    };
  },
  // mounted: function () {
  //   var self = this;
  //   setInterval(function () {
  //     self.show = !self.show;
  //   }, 1000);
  // }
  methods: {
    enter() {
      this.isActive = true;
    },
    leave() {
      this.isActive = false;
    },
    enter2() {
      this.isActive2 = true;
    },
    leave2() {
      this.isActive2 = false;
    },
    enter3() {
      this.isActive3 = true;
    },
    leave3() {
      this.isActive3 = false;
    },
    mouseIn() {
    //   this.show = !this.show;
      // console.log(123);
    //   console.log(this.show);
    },
    mouseOver() {
      // this.class = 'bounce-enter-active';
      // this.show = !this.show;
      // console.log(4444);
      // console.log(this.show);
    },
  },
};
</script>
<style>
#slide_down {
  padding-top: 0px;
  transition: 0.5s;
}
#slide_down.slide {
  padding-top: 21px;
}
#slide_down2 {
  padding-top: 0px;
  transition: 0.5s;
}
#slide_down2.slide2 {
  padding-top: 21px;
}
#slide_down3 {
  padding-top: 0px;
  transition: 0.5s;
}
#slide_down3.slide3 {
  padding-top: 21px;
}

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
