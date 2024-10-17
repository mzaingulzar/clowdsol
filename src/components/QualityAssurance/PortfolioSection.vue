<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>Our Prime Projects</h4>
          </div>
          <div class="col-lg-12">
            <div class="row portR reveal">
              <div class="col-lg-6">
                <br />
                <br />
                <h5 class="sliderHeading">Zen Interiors</h5>
                <p class="slideIntro">
                  At Black Spinel, we prioritize delivering high-quality websites
                  that meet and exceed our clients expectations. Our
                  comprehensive quality assurance (QA) process ensures that
                  every aspect of the website, from design to functionality,
                  performs flawlessly and provides an exceptional user
                  experience. We perform following QA practices before deploying
                  the project.
                </p>
                <ul>
                  <li>Rigorous Testing</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>Performance Optimization</li>
                  <li>Content Validation</li>
                  <li>Security and Privacy</li>
                  <li>User Experience (UX) Testing</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <div class="ppImgWrapper">
                  <img src="@/assets/technology/trip-aus.png" />
                </div>
              </div>
            </div>
            <div class="row portR2 reveal">
              <div class="col-lg-6" id="bimmer1">
                <div class="ppImgWrapper">
                  <img src="@/assets/technology/goauto.png" />
                </div>
              </div>
              <div class="col-lg-6" id="bimmer2">
                <br />
                <h5 class="sliderHeading">Bimmer Tech</h5>
                <p class="slideIntro">
                  At Black Spinel, we take pride in delivering top-notch websites
                  that exceed industry standards for quality and performance.
                  Our dedicated quality assurance (QA) team meticulously tests
                  every aspect of BimmerTech to ensure it meets our clients'
                  expectations and delivers an exceptional user experience.We
                  perform following QA practices before deploying the project.
                </p>
                <ul>
                  <li>Comprehensive Testing</li>
                  <li>Cross-Device Compatibility</li>
                  <li>Performance Optimization</li>
                  <li>Content Integrity</li>
                  <li>Security Measures</li>
                  <li>User Experience (UX) Evaluation</li>
                </ul>
              </div>
            </div>
            <div class="row portR reveal">
              <div class="col-lg-6">
                <br />
                <br />
                <h5 class="sliderHeading">Business Center Dubai</h5>
                <p class="slideIntro">
                  At CloudSol, we uphold the highest standards of quality
                  assurance to ensure that every project we undertake, including
                  Business Center Dubai, exceeds client expectations and
                  delivers outstanding results. Our meticulous testing
                  procedures and attention to detail guarantee a flawless user
                  experience and optimal performance.
                </p>
                <ul>
                  <li>Thorough Testing Process</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>Performance Optimization</li>
                  <li>Content Validation</li>
                  <li>Security Measures</li>
                  <li>User Experience (UX) Evaluation</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <div class="ppImgWrapper">
                  <img src="@/assets/technology/scentbird.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <!-- <Carousel :autoplay="3000" :wrap-around="true">
              <Slide v-for="slide in protfolio" :key="slide">
                <div class="row">
                  <div class="col-lg-6">
                    <h5 class="sliderHeading">{{ slide.heading }}</h5>
                    <p class="slideIntro">{{ slide.description }}</p>
                    <h5 class="clientRequirements">Client Requirements:</h5>
                    <p class="slideIntro">{{ slide.cr }}</p>
                    <h5 class="clientRequirements">Our Solution:</h5>
                    <p class="slideIntro">{{ slide.os }}</p>
                  </div>
                  <div class="col-lg-6">
                    <div class="ppImgWrapper">
                      <img src="@/assets/technology/trip-aus.png" />
                    </div>
                  </div>
                </div>
                <div class="carousel__item">{{ slide.heading }}</div>
              </Slide>

              <template #addons>
                <Navigation />
                <Pagination />
              </template>
            </Carousel> -->
          </div>
        </div>
        <!--/row-->
      </div>
    </div>
  </div>
</template>

<script>
// import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
// import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'PortfolioSection',
  props: {
    msg: String,
  },
  data() {
    return {
      protfolio: [
        {
          heading: 'Zen Interiors',
          description:
            'Zen Interiors is an ecommerce solution for furniture which is develop by over expert team of Magento.',
          cr: 'Client want to sell his products online and want to categorized his products like chair, sofa bet etc.               along with all sales and inventory records. And want               all these features active within a month.',
          os: 'Our expertise team evaluates the requirements and decide to use magneto as it provides Scalable and optimized database structure, customize theming system, Magento extensions, Customize the shopping cart and checkout process and Implement secure coding practices to prevent common web application security issues',
          src: require('@/assets/technology/trip-aus.png'),
        },
        {
          heading: 'Bimmer Tech',
          description:
            'Bimmer Tech is a customized e-commerce solution plus inventory management syetem for many warehouses across the globe which is develop in Symfony framework and Vue.js as frontend framework.',
          cr: 'Client want to manage inventory management system for all warehouses across the globe and want customized reports of inventory. Client also want to sell  products online and the nearest warehouse will receive the order and against each order most affordable courier charges will selected from five available courier services.',
          os: 'Our expertise team evaluates the requirements and decide to use Symfony as backend and vue.js as frontend frameworks depending on these features. Symfony is a high-performance PHP web application framework that follows the model-view-controller (MVC) architectural pattern and Vue.js to create multiple plugins and widgets with one standard approach every where in the project.',
          src: require('@/assets/technology/goauto.png'),
        },
        {
          heading: 'Business Center Dubai',
          description:
            'Bussiness Center Dubai is a dynamic content vmanagement to showcase which is develop by over expert team of Wordpress.',
          cr: 'Client want to update his offices or meetings room available for rent by himself on regular bases with interactive and efficient interface. client want responsive website so it can be easily showcase his services on all devices.',
          os: 'Our expertise team evaluates the requirements and decide to use wordpress as a solutions depending on the features that Easy content management for non-technical users, user-friendly interface, A wide variety of themes and customization options annd Built-in or easily integratable SEO features.',
          src: require('@/assets/technology/scentbird.png'),
        },
      ],
    };
  },
  components: {
    //Carousel,
    //Slide,
    //Pagination,
    //Navigation,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.portR {
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  opacity: 0;
  //animation: 1s ease-out 0s 1 slideInFromLeft;
}
.portR.reveal.active {
  animation: 1s ease-out 0s 1 slideInFromLeft;
  opacity: 1;
}
.portR2 {
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  opacity: 0;
  //animation: 1s ease-out 0s 1 slideInFromRight;
}
.portR2.reveal.active {
  animation: 1s ease-out 0s 1 slideInFromRight;
  opacity: 1;
}
.carousel__icon {
  fill: #ffffff;
}
</style>
<style scoped lang="scss">
.ppImgWrapper {
  width: 100%;
  height: 380px;
  overflow-y: scroll;
  img {
    width: 100%;
  }
}
h4 {
  margin-bottom: 40px;
}
ul {
  li {
    color: #ffffff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    margin-top: 10px;
    text-align: left;
  }
}
p {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  text-align: left;
}
.card {
  margin-top: 20px;
}
.card {
  background-color: #ffffffee;
}
.card-header {
  border: 0px;
  background-color: #00000011;
  padding: 0px;
}
.btn-link {
  width: 100%;
  height: 70px;
  span {
    display: inline-block;
    float: left;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 10px;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  img {
    height: 50px;
    float: right;
  }
}
#word {
  color: black;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: left;
  margin-bottom: 30px;
  min-height: 60px;
}
.fourCards {
  //background-image: url('@/assets/FourCardsBG.jpg');
  background-color: #00000011;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 40px;
  h4 {
    color: white;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-top: 40px;
    text-shadow: 0 2px 1px #00000005, -1px 3px 1px #00000010,
      -2px 5px 1px #00000015;
  }
  h5 {
    color: black;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
    margin-bottom: 0px;
  }
  h6 {
    color: black;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: center;
    margin-bottom: 30px;
  }
  .zCard {
    margin: 20px;
    border-radius: 8px;
    background: rgba(163, 76, 183, 0.05);
    // background: linear-gradient(
    //   0deg,
    //   rgba(163, 76, 183, 1) 0%,
    //   rgba(163, 76, 183, 0.7) 71%
    // );
    border: 1px solid rgba(163, 76, 183, 1);
    text-align: center;
    padding-top: 40px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-sizing: border-box;
    img {
      display: inline-block;
    }
    h5 {
      color: rgba(163, 76, 183, 1);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-top: 20px;
      margin-bottom: 0px;
    }
    p {
      color: #000;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin-top: 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 150px;
    }
    a {
      border-radius: 8px;
      border: 2px solid rgba(163, 76, 183, 1);
      background-color: rgba(163, 76, 183, 1);
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding: 4px 12px;
      text-decoration: none;
    }
  }
}
.sliderHeading {
  width: 100%;
  padding: 0 !important;
  margin: 0px !important;
  color: white !important;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 400 !important;
  line-height: normal;
  text-align: center;
  margin-top: 40px;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.0196078431),
    -1px 3px 1px rgba(0, 0, 0, 0.062745098),
    -2px 5px 1px rgba(0, 0, 0, 0.0823529412);
}
.slideIntro {
  font-size: 14px !important;
  color: white !important;
  text-align: justify !important;
  font-weight: 200 !important;
}
.clientRequirements {
  width: 100%;
  padding: 0 !important;
  margin: 0px !important;
  color: white !important;
  font-family: Inter;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: normal;
  text-align: center;
  margin-top: 40px;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.0196078431),
    -1px 3px 1px rgba(0, 0, 0, 0.062745098),
    -2px 5px 1px rgba(0, 0, 0, 0.0823529412);
}
@media screen and (max-width: 1300px) {
  .fourCards {
    .zCard {
      padding-left: 5px;
      padding-right: 5px;
      h5 {
        min-height: 48px;
      }
    }
  }
  // .slideIntro,
  // .sliderHeading {
  //   padding-left: 0px !important;
  // }
  // .clientRequirements {
  //   padding-left: 0px !important;
  // }
  .ppImgWrapper {
    img {
      // margin-left: 40px;
    }
  }
}
@media screen and (max-width: 992px) {
  div#bimmer1 {
    order: 2;
  }
  div#bimmer2 {
    order: 1;
  }
  .slideIntro {
    text-align: left !important;
  }
}
</style>
