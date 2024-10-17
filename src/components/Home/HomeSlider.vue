<template>
  <div class="container-flued homeSlide1">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 leftSide">
          <h2 class="h2hs">We <br />transform</h2>
          <section class="animation">
            <div class="first"><div>Ideas</div></div>
            <div class="second"><div>bussiness</div></div>
            <div class="third"><div>Technologies</div></div>
          </section>
          <h6 class="h6hs">
            Black Spinel, a dynamic tech company specializing in innovative design
            solutions. At Black Spinel we believe in the power of creativity and
            technology to transform businesses.
          </h6>
        </div>
        <div class="col-lg-6 rightSide">
          <div class="row">
            <div class="col-12 circle1" id="circle1">
              <img src="@/assets/responsive.png" class="imghs" />
            </div>
            <!-- <div class="col-12 circle2" id="circle2">
              <img src="@/assets/responsive.png" />
            </div> -->
          </div>
          <!-- <div class="row">
            <div class="col-6 circle3">
              <img src="@/assets/3.png" />
            </div>
            <div class="col-6 circle4">
              <img src="@/assets/2.png" />
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSlider',
  data() {
    return {
      headTail: 'H',
    };
  },
  methods: {},
  mounted() {
    /*var gthis = this;
    setInterval(function () {
      if (gthis.headTail == 'H') {
        gthis.headTail = 'T';
        document.getElementById('circle1').style.display = 'none';
        document.getElementById('circle2').style.display = 'block';
      } else {
        document.getElementById('circle2').style.display = 'none';
        document.getElementById('circle1').style.display = 'block';
        gthis.headTail = 'H';
      }
    }, 5000);*/
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lan="scss">
.animation {
  height: 70px;
  overflow: hidden;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  /* height: 2.81rem; */
  margin-bottom: 2.81rem;
  display: inline-block;
  text-transform: uppercase;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  background-color: rgba(53, 164, 251, 1);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: theme('colors.secondary');;
}
.second div {
  background-color: theme('colors.tertiary[100]');
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: theme('colors.secondary');
}
.third div {
  background-color: black;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: theme('colors.secondary');;
}

@keyframes text-animation {
  0% {
    margin-top: 0;
  }
  10% {
    margin-top: 0;
  }
  20% {
    margin-top: -48px;
  }
  30% {
    margin-top: -48px;
  }
  40% {
    margin-top: -125px;
  }
  60% {
    margin-top: -125px;
  }
  70% {
    margin-top: -48px;
  }
  80% {
    margin-top: -48px;
  }
  90% {
    margin-top: 0;
  }
  100% {
    margin-top: 0;
  }
}

.headerBG {
  background: #00000099 !important;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 60px;
  .navbar-brand {
    color: #242f9b;
    img {
      height: 40px;
    }
  }
  .navbar-nav {
    .nav-item {
      font-weight: 400;
      font-size: 16px;
      a {
        color: theme('colors.primary');
      }
      a:hover {
        color: theme('colors.tertiary[100]');
        transition-duration: 0.5s;
      }
      a::after {
        color: theme('colors.tertiary[100]');
        transition-duration: 0.5s;
      }
    }
    .socialIcons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    margin-top: 26px;
  }

  .dropdown-item {
    color: theme('colors.secondary') !important;
    height: 40px;
    line-height: 33px;
  }
  .dropdown-item:hover {
    background-color: theme('colors.primary');
    /* color: rgba(163, 76, 183, 1) !important; */
    transition-duration: 0.5s !important;
  }
  .getQouteA {
    border-radius: 8px;
    border: 3px solid #ffc93c;
    padding: 8px 16px;
    color: #242f9b;
    text-decoration: none;
  }
}
@-webkit-keyframes slidein {
  from {
    background-position: top;
    background-size: 3000px;
  }
  to {
    background-position: -100px 0px;
    background-size: 2750px;
  }
}

@keyframes slidein {
  from {
    background-position: top;
    background-size: 3000px;
  }
  to {
    background-position: -100px 0px;
    background-size: 2750px;
  }
}

.homeSlide1::after {
  background: rgb(137, 23, 186, 0.5);
}
.homeSlide1 {
  /* background: #00000055; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url('@/assets/clouds.png');
  background-size: cover;
  -webkit-animation: slidein 10s;
  animation: slidein 10s; */

  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  padding-bottom: 40px;
  .leftSide {
    h2 {
      color: theme('colors.secondary');;
      font-family: Inter;
      font-size: 72px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2),
        0px -4px 5px rgba(255, 255, 255, 0.2);
      margin-top: 60px;
      animation: 0.5s ease-in 0s 1 slideInFromLeft;
      text-transform: uppercase;
      z-index: 2;
    }
    h5 {
      color: theme('colors.secondary');;
      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: left;
      animation: 0.7s ease-in 0s 1 slideInFromLeft;
    }
    h6 {
      color: theme('colors.secondary');;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 200;
      line-height: normal;
      animation: 0.9s ease-in 0s 1 slideInFromLeft;
      margin-top: 30px;
      z-index: 2;
    }
    .row {
      margin-right: 0px;
    }
    .yellowButton {
      width: 220px;
      margin: 0 auto;
      display: block;
      text-align: center;
      margin-top: 40px;
      margin-bottom: 50px;
      animation: 1.1s ease-in 0s 1 slideInFromLeft;
    }
  }
  .rightSide {
    .circle1 {
      /*animation: 5s ease-in 0s 1 slideInFromLeft;*/
      margin-top: 80px;
      width: 100%;
      img {
        width: 100%;
        filter: drop-shadow(0 0 0.75rem #cccccc99);
      }
    }
    .circle2 {
      /*animation: 5s ease-in 0s 1 slideInFromLeft;*/
      margin-top: 80px;
      display: none;
      width: 100%;
      img {
        width: 100%;
        filter: drop-shadow(0 0 0.75rem #cccccc99);
      }
    }
    .circle3 {
      animation: 1.2s ease-in 0s 1 slideInFromLeft;
      margin-top: -80px;
      margin-left: -30px;
      img {
        width: 100%;
        filter: drop-shadow(0 0 0.75rem #00000099);
      }
    }
    .circle4 {
      animation: 1.4s ease-in 0s 1 slideInFromLeft;
      margin-top: -165px;
      margin-left: -20px;
      img {
        width: 120%;
        filter: drop-shadow(0 0 0.75rem #00000099);
      }
    }
  }
}
@keyframes slideInFromLeft {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  5% {
    transform: scale(1);
    opacity: 1;
  }
  95% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
.yellowButton {
  padding: 14px 16px;
  border-radius: 8px;
  background: #ffc93c;
  color: theme('colors.primary');
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
}
.circle1 {
  /*animation: 5s ease-in 0s 1 slideInFromLeft;*/
  margin-top: 80px;
  width: 100%;
  img {
    width: 100%;
    filter: drop-shadow(0 0 0.75rem #cccccc99);
  }
}
.circle2 {
  /*animation: 5s ease-in 0s 1 slideInFromLeft;*/
  margin-top: 80px;
  display: none;
  width: 100%;
  img {
    width: 100%;
    filter: drop-shadow(0 0 0.75rem #cccccc99);
  }
}
@media screen and (min-width: 1500px) {
  .homeSlide1 {
    h5 {
      text-align: center;
    }
  }
}
@media screen and (max-width: 1200px) {
  .homeSlide1 {
    .leftSide {
      h2 {
        color: white;
        font-size: 48px;
        z-index: 2;
      }
      h5 {
        font-size: 32px;
      }
      h6 {
        color: white;
        font-size: 24px;
        z-index: 2;
      }
    }
  }
  .rightSide {
    .circle4 {
      margin-top: -144px !important;
    }
  }
}
@media screen and (min-width: 992px) {
  .headerBG {
    .navbar-nav {
      width: 100%;
      .nav-item {
        width: 20%;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        .getQouteA {
          font-size: 14px;
          margin-top: 0px;
          display: inline-block;
        }
      }
    }
  }
  .dropdown-menu {
    /* background-color: #242f9b !important; */
    background: rgb(53, 164, 251);
    background: linear-gradient(
      108deg,
      rgba(53, 164, 251, 0.5) 0%,
      rgba(163, 76, 183, 0.5) 71%
    ) !important;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    margin-top: 20px;
  }
}
@media screen and (max-width: 992px) {
  .getQouteA {
    width: 160px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #ffc93c;
  }

  .navbar-collapse {
    background: rgb(53, 164, 251);
    background: linear-gradient(
      108deg,
      rgba(53, 164, 251, 0.9) 0%,
      theme('colors.tertiary[100]') 71%
    ) !important;
    padding-left: 10px;
    margin-top: 21px;
    .nav-item {
      font-weight: 400;
      font-size: 16px;
      box-sizing: border-box;
      a {
        color: theme('colors.secondary') !important;
      }
      .getQouteA {
        width: 98%;
        text-align: center;
        display: inline-block;
        color: #242f9b !important;
        box-sizing: border-box;
        margin-bottom: 10px;
      }
    }
    .socialIcons {
      a {
        margin-bottom: 20px;
        margin-top: 10px;
      }
      padding-right: 20px;
      padding-left: 10px;
    }
    .dropdown-menu {
      background: theme('colors.primary') !important;
      margin-right: 10px;
    }
  }
  .homeSlide1 {
    h2 {
      font-size: 48px;
    }
    h5 {
      font-size: 48px;
      width: 100%;
      text-align: center;
    }
    h6 {
      font-size: 32px;
    }
    .leftSide {
      h6 {
        font-size: 18px;
      }
    }
    .rightSide {
      .circle1 {
        width: 300px;
        margin: 0 auto;
        display: block;
        img {
          width: 100%;
          margin-top: 20px;
        }
      }
      .circle2 {
        width: 300px;
        margin: 0 auto;
        display: block;
        img {
          width: 100%;
          margin-top: 20px;
        }
      }
      .circle3 {
        img {
          width: 46vw;
        }
      }
      .circle4 {
        img {
          width: 54vw;
        }
      }
    }
  }
  .h2hs {
    color: white !important;
    font-family: Inter !important;
    font-weight: 700 !important;
  }
  .h6hs {
    color: white !important;
    font-family: Inter !important;
    margin-top: 10px !important;
  }
  .imghs {
    width: 300px !important;
    margin: 0 auto !important;
    display: block !important;
  }
  .circle1 {
    width: 300px;
    margin: 0 auto;
    display: block;
    img {
      width: 100%;
      margin-top: 30px;
    }
  }
  .circle2 {
    width: 300px;
    margin: 0 auto;
    display: block;
    img {
      width: 100%;
      margin-top: 30px;
    }
  }
}
@media screen and (max-width: 540px) {
  .hideOnMobile {
    display: none;
  }
  .homeSlide1 {
    h2 {
      font-size: 32px;
      margin-top: 80px;
    }
    h5 {
      font-size: 32px;
      width: 100%;
      text-align: center;
    }
    h6 {
      font-size: 24px;
    }
  }
  .rightSide {
    .circle4 {
      margin-top: -30% !important;
      img {
        width: 100%;
      }
    }
  }
}
</style>
