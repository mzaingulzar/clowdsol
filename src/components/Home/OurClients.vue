<template>
  <div class="ourClients">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>Our <span>Clients</span></h4>
          </div>
          <div class="col-1"></div>
          <div class="col-10">
            <div class="marquee">
              <div class="marquee-content">
                <div class="marquee-item">
                  <img src="@/assets/technology/zen.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/bimmer.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/ascendris.png" alt="" />
                </div>
                <div class="marquee-item">
                  <img src="@/assets/technology/hh.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/zen.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/bimmer.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/ascendris.png" alt="" />
                </div>
                <div class="marquee-item">
                  <img src="@/assets/technology/hh.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/zen.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/bimmer.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/ascendris.png" alt="" />
                </div>
                <div class="marquee-item">
                  <img src="@/assets/technology/hh.png" alt="" />
                </div>
                <div class="marquee-item">
                  <img src="@/assets/technology/zen.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/bimmer.png" alt="" />
                </div>

                <div class="marquee-item">
                  <img src="@/assets/technology/ascendris.png" alt="" />
                </div>
                <div class="marquee-item">
                  <img src="@/assets/technology/hh.png" alt="" />
                </div>
              </div>
            </div>
            <!-- <marquee direction="left"
              ><div class="row">
                <div class="col-lg-2 col-md-4 col-sm-6 col-6 occ">
                  <img src="@/assets/technology/zen.png" />
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 col-6 occ">
                  <img src="@/assets/technology/bimmer.png" />
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 col-6 occ">
                  <img src="@/assets/technology/ascendris.png" />
                </div></div
            ></marquee> -->
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurClients',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ourClients {
  padding-bottom: 60px;
  background-color: #00000060;
  backdrop-filter: blur(10px);
}
.occ {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
h4 {
  color: theme('colors.secondary');
  font-family: Open Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 60px;
  text-align: center;
  margin-bottom: 10px;
  // span {
  //   color: theme('colors.tertiary[100]');
  // }
}
img {
  width: 100%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  transition-duration: 1s;
}
img:hover {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
.marquee {
  /*   overflow: hidden; */
  overflow: hidden;
}

.marquee-content {
  display: flex;
  animation: scrolling 30s linear infinite;
}

.marquee-item {
  flex: 0 0 200px;
  margin: 0 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 0px;
  /*   flex: 0 0 20vw; */
  /*   margin: 0 2vw; */
}

.marquee-item img {
  display: block;
  width: 100%;
  /*   padding: 0 20px; */
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translatex(-2400px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
