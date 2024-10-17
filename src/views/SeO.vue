<template>
  <div class="preloader" id="preloader">
    <div class="loader"></div>
  </div>
  <div class="videoBg">
    <video autoplay muted loop playsinline id="myVideo">
      <source src="@/assets/bg.mp4" type="video/mp4" />
    </video>
  </div>
  <MainHeader />
  <TechnologyTypes />
  <!-- <MainPortfolio /> -->
  <PortfolioSection />
  <FooterCom />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TechnologyTypes from '@/components/SeO/TechnologyTypes.vue';
// import MainPortfolio from '@/components/QualityAssurance/MainPortfolio.vue';
import FooterCom from '@/components/FooterCom.vue';
import PortfolioSection from '@/components/SeO/PortfolioSection.vue';

export default {
  name: 'QualityAssurance',
  components: {
    MainHeader,
    TechnologyTypes,
    FooterCom,
    // MainPortfolio,
    PortfolioSection,
  },
  mounted() {
    var video = document.getElementById('myVideo');
    video.play();
  },
};
// document.addEventListener(
//   'DOMContentLoaded',
//   function () {
//     document.getElementById('preloader').style.display = 'none';
//   },
//   false
// );
window.onload = function () {
  document.getElementById('preloader').style.display = 'none';
  window.scrollTo(0, 0);
};
function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
.videoBg {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: -1;
  background-color: #000000;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: -1;
}
body {
  font-family: 'Inter', sans-serif !important;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Inter', sans-serif !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px;
  padding: 0px;
}
.preloader {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000000aa;
  z-index: 9999;
}
/* HTML: <div class="loader"></div> */
.loader {
  width: 60px;
  aspect-ratio: 1;
  display: flex;
  margin: 0 auto;
  margin-top: 45vh;
}
.loader::before,
.loader::after {
  content: '';
  flex: 1;
  animation: l14 1.5s -0.25s infinite linear alternate both;
}
.loader::after {
  --s: -1, -1;
  animation-delay: 0.5s;
}
@keyframes l14 {
  0%,
  30% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px)
      rotateY(0deg);
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
    background: #a34cb7;
  }
  37.5% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px)
      rotateX(0deg);
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
    background: #a34cb7;
  }
  50% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px)
      rotateX(-90deg);
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
    background: #a34cb7;
    border-radius: 0;
  }
  50.01% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px)
      rotateX(-90.1deg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
    background: #35a4fb;
    border-radius: 100px 0 0 100px;
  }
  62.5% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px)
      rotateX(-180deg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
    background: #35a4fb;
    border-radius: 100px 0 0 100px;
  }
  70%,
  100% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px)
      rotateX(-180deg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
    background: #35a4fb;
    border-radius: 100px 0 0 100px;
  }
}
</style>
