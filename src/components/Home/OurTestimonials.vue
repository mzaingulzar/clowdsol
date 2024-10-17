<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>Our <span>Testimonials</span></h4>
          </div>

          <div class="col-lg-12">
            <div class="row middleAlign">
              <div class="col-1 cPointer" @click="changeSlide()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#fff"
                  class="bi bi-chevron-compact-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"
                  />
                </svg>
              </div>
              <div class="col-10 testimonialDiv">
                <TransitionGroup name="list" tag="div">
                  <div
                    class="row middleAlign"
                    v-for="p in ourPhilosphyC"
                    :key="p"
                  >
                    <div class="col-lg-3">
                      <img :src="p.img" class="profileImg" />
                    </div>
                    <!-- <div class="col-lg-3">
                      
                    </div> -->
                    <div class="col-lg-9">
                      <div class="cHeading">{{ p.heading }}</div>
                      <p class="cPara">{{ p.desc }}</p>
                    </div>
                  </div>
                </TransitionGroup>
              </div>
              <div class="col-1 cPointer" @click="changeSlide()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#fff"
                  class="bi bi-chevron-compact-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <!--/row-->
      </div>
    </div>
  </div>
</template>

<script>
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
  name: 'OurTestimonials',
  props: {
    msg: String,
  },
  data() {
    return {
      ourPhilosphy: [
        {
          img: require('@/assets/mohemin.jpg'),
          heading: 'Patrick Van, CEO Zen Interiors',
          desc: 'Black Spinel work meets the mark. The team is professional, organized, and on top of the ball. They always make a concerted effort to fully understand the requirements for their assignments. Steelkiwi is a reliable vendor that always delivers',
        },
        {
          img: require('@/assets/testi3.jpg'),
          heading: 'Rizwan Soomar, Director Asendris',
          desc: 'Black Spinel is a cutting edge healthcare innovators using cross functional engineering and analytics teams to create high impact and innovative solutions in our space.',
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      ourPhilosphyC: [
        {
          img: require('@/assets/testi1.jpg'),
          heading: 'Patrick Van, CEO Zen Interiors',
          desc: 'Black Spinel work meets the mark. The team is professional, organized, and on top of the ball. They always make a concerted effort to fully understand the requirements for their assignments. Steelkiwi is a reliable vendor that always delivers',
        },
      ],
      currnetSlideNumber: 'One',
      testmonialCount: 0,
    };
  },
  components: {
    // Carousel,
    // Slide,
    // Navigation,
  },
  mounted() {
    var gthis = this;
    setInterval(function () {
      gthis.changeSlide();
    }, 5000);
  },
  methods: {
    changeSlide() {
      this.testmonialCount = 0;
      //console.log(this.currnetSlideNumber);
      //this.currnetSlideNumber = 'One';
      if (this.currnetSlideNumber == 'One') {
        this.ourPhilosphyC = [
          {
            img: require('@/assets/mohemin.jpg'),
            heading: 'Enrico Del Guadio, CEO Alfred Ibiza',
            desc: 'Working with Black Spinel has been a game-changer for our organization. Their expert team of IT professionals consistently delivers innovative solutions that have transformed our operations and propelled our business forward.',
          },
        ];
        this.currnetSlideNumber = 'Two';
        this.testmonialCount = 1;
      }
      if (this.currnetSlideNumber == 'Two' && this.testmonialCount == 0) {
        this.ourPhilosphyC = [
          {
            img: require('@/assets/testi3.jpg'),
            heading: 'Rizwan Soomar, CEO Asendris',
            desc: "Black Spinel's commitment to excellence and client satisfaction is unparalleled. Their proactive approach, attention to detail, and dedication to understanding our unique needs have made them a trusted partner in our success. We highly recommend Black Spinel to any organization seeking top-tier IT services and solutions.",
          },
        ];
        this.currnetSlideNumber = 'Three';
        this.testmonialCount = 1;
      }
      if (this.currnetSlideNumber == 'Three' && this.testmonialCount == 0) {
        this.ourPhilosphyC = [
          {
            img: require('@/assets/testi1.jpg'),
            heading: 'Patrick Van, CEO Zen Interiors',
            desc: 'Black Spinel work meets the mark. The team is professional, organized, and on top of the ball. They always make a concerted effort to fully understand the requirements for their assignments. Steelkiwi is a reliable vendor that always delivers',
          },
        ];
        this.currnetSlideNumber = 'One';
      }
    },
    goto(selectedName) {
      this.$router.push({ name: selectedName, replace: true });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.carousel__icon {
  fill: white !important;
}
</style>
<style scoped lang="scss">
.testimonialDiv {
  height: 210px;
  overflow: hidden;
}
.list-enter-active {
  transition: all 0.5s ease;
  transition-delay: 0.55s;
}
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-300px) scale(0.8);
  /* transition-delay: 1s; */
}
.list-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
.middleAlign {
  display: flex;
  justify-content: center;
  flex-direction: row; /* <--- I added this */
  align-items: center; /* <--- Change here */
}
.cPointer {
  cursor: pointer;
}
.cPara {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 141.188%; /* 22.59px */
  letter-spacing: 2.56px;
  text-align: left justify;
  width: 100%;
}
.cHeading {
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.profileImg {
  width: 220px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}
.carousel__prev,
.carousel__next {
  color: white !important;
}
.carousel__icon {
  fill: red !important;
}
.fourCards {
  background: #ffffff05;
  padding-bottom: 40px;
  h4 {
    color: #ffffff;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
    // span {
    //   color: theme('colors.tertiary[100]');
    // }
  }
  h5 {
    color: #ffc93c;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-bottom: 30px;
  }
  .zCard {
    margin: 20px;
    border-radius: 8px;
    border: 1px solid rgba(0, 52, 120, 0.26);
    background: #ffffff;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-sizing: border-box;
    cursor: pointer;
    img {
      display: inline-block;
      height: 50px;
    }
    h5 {
      color: #070d59;
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.96px;
      text-transform: uppercase;
      height: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 20px;
    }
    p {
      color: #070d59;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.72px;
      text-transform: capitalize;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    a {
      border-radius: 8px;
      border: 2px solid #ffc93c;
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
.zCard:hover {
  background-color: #070d59;
  transition-duration: 0.5s;
  img {
    filter: brightness(0) invert(1);
    transition-duration: 0.5s;
  }
  h5 {
    color: #ffffff;
    transition-duration: 0.5s;
  }
  p {
    color: #ffffff;
    transition-duration: 0.5s;
  }
}
.colorWhite {
  color: white !important;
}
@media screen and (max-width: 1300px) {
  .fourCards {
    padding-left: 10px;
    padding-right: 10px;
    .zCard {
      margin: 5px;
      h5 {
        font-size: 24px;
      }
      p {
        height: 150px;
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .fourCards {
    h4 {
      font-size: 32px;
    }
  }
  .cHeading {
    text-align: center;
  }
  .testimonialDiv {
    height: auto;
  }
}
</style>
