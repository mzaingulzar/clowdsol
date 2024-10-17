<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>Mobile Application Development</h4>
            <!-- <h5>Driving Value With Emerging Technology And Tools</h5> -->

            <div class="wordMA">
              We create value-added applications tailored exactly to your
              specific business requirements for enhanced efficiency,
              functionality and usability. Black Spinel is vastly experienced in
              developing Mobile Applications specific to various industries. Our
              portfolio stands out, but not limited to high profile educational,
              productivity and ecommerce based apps.
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-2">
            <div class="zCard">
              <img src="@/assets/technology/img 3.png" alt="" />
              <h5>Unique<br />Concept Apps</h5>
              <!-- <a href="#">More Info</a> -->
            </div>
          </div>
          <div class="col-lg-2">
            <div class="zCard">
              <img src="@/assets/technology/img 4.png" alt="" />
              <h5>
                Products<br />
                Apps
              </h5>
              <!-- <a href="#">More Info</a> -->
            </div>
          </div>
          <div class="col-lg-2">
            <div class="zCard">
              <img src="@/assets/technology/img 5.png" alt="" />
              <h5>SaaS<br />Solutions</h5>
              <!-- <a href="#">More Info</a> -->
            </div>
          </div>
          <div class="col-lg-2">
            <div class="zCard">
              <img src="@/assets/technology/img 1.png" alt="" />
              <h5>Business<br />Apps</h5>
              <!-- <a href="#">More Info</a> -->
            </div>
          </div>
          <div class="col-lg-2">
            <div class="zCard">
              <img src="@/assets/technology/img 2.png" alt="" />
              <h5>Enterprise <br />Solutions</h5>
              <!-- <a href="#">More Info</a> -->
            </div>
          </div>
          <div class="col-lg-1"></div>
        </div>
        <!--/row-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologyTypes',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wordMA {
  color: #ffffff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  text-align: left;
  margin-bottom: 30px;
  min-height: 60px;
}
#word {
  color: #ffffff;
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
  background-color: #ffffff15;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 60px;
  h4 {
    color: theme('colors.secondary');
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
    color: #ffffff;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: center;
    margin-bottom: 0px;
  }
  h6 {
    color: #ffffff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: center;
    margin-bottom: 30px;
  }
  .zCard {
    margin: 5px;
    border-radius: 8px;
    background: rgba(163, 76, 183, 0.05);
    // background: linear-gradient(
    //   0deg,
    //   rgba(163, 76, 183, 1) 0%,
    //   rgba(163, 76, 183, 0.7) 71%
    // );
    border: 1px solid theme('colors.tertiary[100]');
    text-align: center;
    padding-top: 40px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    img {
      display: inline-block;
      width: 80px;
    }
    h5 {
      color: theme('colors.secondary');
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-top: 20px;
      margin-bottom: 0px;
    }
    p {
      color: #ffffff;
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
  .wordMA {
    font-size: 14px;
  }
}
</style>
