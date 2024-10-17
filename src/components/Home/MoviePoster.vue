<template>
  <div class="FaQ" id="portfolio">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 portHeading">
            <h3 v-if="title == 'showTitle'">Portfolio</h3>
            <h4>Movie Posters</h4>
          </div>
          <div class="col-lg-4">
            <div class="maincontainer">
              <div class="thecard">
                <div class="thefront">
                  <!--<h1>Front of Card</h1>
                  <p>
                    This is the front of the card. It contains important
                    information. Please see overleaf for more details.
                  </p>-->
                  <img src="@/assets/posters/p1.jpg" />
                </div>

                <div class="theback">
                  <!--<h1>Back of Card</h1>
                  <p>
                    Your use of this site is subject to the terms and conditions
                    governing this and all transactions.
                  </p>
                  <button>Submit</button>-->
                  <img src="@/assets/posters/p7.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="maincontainer">
              <div class="thecard">
                <div class="thefront">
                  <img src="@/assets/posters/p2.jpg" />
                </div>
                <div class="theback">
                  <img src="@/assets/posters/p8.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="maincontainer">
              <div class="thecard">
                <div class="thefront">
                  <img src="@/assets/posters/p3.jpg" />
                </div>
                <div class="theback">
                  <img src="@/assets/posters/p10.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="maincontainer">
              <div class="thecard">
                <div class="thefront">
                  <img src="@/assets/posters/p4.jpg" />
                </div>
                <div class="theback">
                  <img src="@/assets/posters/p11.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="maincontainer">
              <div class="thecard">
                <div class="thefront">
                  <img src="@/assets/posters/p5.jpg" />
                </div>
                <div class="theback">
                  <img src="@/assets/posters/p12.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="maincontainer">
              <div class="thecard">
                <div class="thefront">
                  <img src="@/assets/posters/p6.jpg" />
                </div>
                <div class="theback">
                  <img src="@/assets/posters/p13.jpg" />
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-12 mpHeading">
            <h3>Movie Posters</h3>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaQ',
  props: {
    title: String,
  },
  data() {
    return {
      projects: [
        {
          name: 'Throwback Football League',
          image: require('@/assets/projects/logo1.jpg'),
          type: 'design',
        },
        {
          name: 'North American Music Teachers Association',
          image: require('@/assets/projects/logo2.jpg'),
          type: 'design',
        },
        {
          name: 'Pacific Accountable Care',
          image: require('@/assets/projects/logo3.jpg'),
          type: 'design',
        },
      ],
    };
  },
  mounted() {
    this.projectsToShow = this.projects;
  },
  methods: {
    remove: function () {
      this.items.splice(this.randomIndex(), 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
.portHeading {
  color: rgba(255, 255, 255, 1);
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
.mpHeading {
  color: white;
  font-weight: 700;
  text-align: center;
  margin-top: -460px;
  z-index: 11;
  h3 {
    background-color: #00000066;
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    font-size: 64px;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
  }
}
@keyframes flipMoviePoster {
  0% {
    transform: rotateY(0deg);
  }
  40% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  90% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(10deg);
  }
}
.maincontainer {
  position: absolute;
  width: 353px;
  height: 400px;
  background: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* THE CARD HOLDS THE FRONT AND BACK FACES */
.thecard {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  //transition: all 0.8s ease;
  animation: flipMoviePoster 12s ease infinite;
}
.col-lg-4:nth-child(6) .thecard {
  animation-delay: 0.5s;
}
.col-lg-4:nth-child(2) .thecard {
  animation-delay: 1s;
}
.col-lg-4:nth-child(5) .thecard {
  animation-delay: 1.5s;
}
.col-lg-4:nth-child(3) .thecard {
  animation-delay: 2s;
}
.col-lg-4:nth-child(4) .thecard {
  animation-delay: 2.5s;
}

/* THE PSUEDO CLASS CONTROLS THE FLIP ON MOUSEOVER AND MOUSEOUT */
.thecard:hover {
  transform: rotateY(180deg);
}

/* THE FRONT FACE OF THE CARD, WHICH SHOWS BY DEFAULT */
.thefront {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #ffc728;
  color: #000;
}

/* THE BACK FACE OF THE CARD, WHICH SHOWS ON MOUSEOVER */
.theback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #fafafa;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
}

/*This block (starts here) is merely styling for the flip card, and is NOT an essential part of the flip code */
.thefront h1,
.theback h1 {
  font-family: 'zilla slab', sans-serif;
  padding: 30px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: white;
}

.thefront p,
.theback p {
  font-family: 'zilla slab', sans-serif;
  padding: 30px;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: white;
}
#portfolio {
  padding-bottom: 40px;
  .col-lg-4 {
    margin-top: 40px;
    position: relative;
    box-sizing: border-box;
    height: 400px;
    .pTitle {
      width: 100%;
      margin-top: -40px;
      height: 40px;
      background-color: #00000099;
      text-align: center;
      color: white;
      font-family: Open Sans;
      z-index: 9999;
      position: absolute;
      font-size: 18px;
      line-height: 40px;
      box-sizing: border-box;
    }
  }
  img {
    width: 100%;
    // border-bottom: 3px solid rgba(163, 76, 183, 1);
  }
}
.FaQ {
  // background-image: url('@/assets/faqBg.jpg');
  // background-color: #cccccc;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  padding-bottom: 60px;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: auto;
  background-color: #00000055;
  padding-bottom: 40px;
  h3 {
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
  }
  h4 {
    color: rgb(197, 141, 209);
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 992px) {
  .FaQ {
    h4 {
      font-size: 24px;
    }
  }
  .mpHeading {
    display: none;
  }
}
</style>
