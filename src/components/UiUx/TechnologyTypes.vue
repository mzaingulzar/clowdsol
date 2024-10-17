<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>UI/UX</h4>
            <!-- <h5>Driving Value With Emerging Technology And Tools</h5> -->

            <div class="wordMA">
              Forget frustrating interfaces, ClowdSol crafts experiences that
              click. Imagine users interacting with your digital products with
              delight, not confusion. That's the power of exceptional UI/UX
              design, and that's what we do at ClowdSol. We're not just
              designers, we're experienced architects.
            </div>
          </div>
          <div class="col-lg-12">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img src="@/assets/uiux/technology.png" class="mainImag" />
                </div>
                <div class="col-lg-9">
                  <h6>Here's how we transform your digital presence:</h6>
                  <ul>
                    <li>
                      <b>We listen.</b> We dig deep to understand your users,
                      their needs, and their pain points. Gone are the days of
                      guessing games – we build experiences based on real
                      people, real data.
                    </li>
                    <li>
                      <b>We design with purpose. </b> We don't just make things
                      pretty, we make them intuitive, engaging, and effective.
                      Every element is carefully crafted to guide users
                      seamlessly towards their goals.
                    </li>
                    <li>
                      <b>We build for success.</b> Whether it's increased
                      conversions, boosted brand loyalty, or simply happier
                      customers, we align your UI/UX with your business
                      objectives.
                    </li>
                  </ul>
                  <h6>Our services cover the entire journey:</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/uiux/1.png" class="w200" />
                <h5>User research & analysis</h5>
                <p>
                  We uncover hidden insights to inform smart design decisions.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/uiux/wireframing.png" class="w200" />
                <h5>Wireframing & prototyping</h5>
                <p>
                  We bring your ideas to life, testing and refining for optimal
                  user experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/uiux/visual.png" class="w200" />
                <h5>Visual Design</h5>
                <p>
                  We create interfaces that are not only beautiful, but also
                  clear, intuitive, and brand-aligned.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/uiux/ui.png" class="w200" />
                <h5>User interface development</h5>
                <p>
                  We translate designs into functional and responsive
                  interfaces.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/uiux/ux.png" class="w200" />
                <h5>UX strategy & consulting</h5>
                <p>
                  We guide you through the entire process, ensuring long-term
                  success.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
          <!-- <div class="col-lg-3">
            <div class="zCard">
              <div class="count">5</div>
              <h5>Voice Search SEO</h5>
              <p>
                With the increasing popularity of voice-enabled devices and
                voice search queries, optimizing for voice search has become
                essential.
              </p>
            </div>
          </div> -->
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
.count {
  width: 50px;
  height: 50px;
  background-color: theme('colors.tertiary[100]');
  border-radius: 50%;
  color: #ffffff;
  font-size: 30px;
  line-height: 50px;
  margin: 0 auto;
}
.wordMA {
  color: #ffffff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  text-align: left;
  margin-bottom: 30px;
  //min-height: 60px;
  text-align: center;
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
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    margin-bottom: 20px;
    img {
      display: block;
      width: 120px;
      margin: 0 auto;
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
      text-align: center;
    }
    p {
      color: #ffffff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 200;
      line-height: normal;
      margin-top: 10px;
      text-align: center;
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
      // align-items: center;
      //min-height: 100px;
    }
    h6 {
      color: #fff;
      font-family: Inter;
      font-size: 18px;
      text-align: left;
      font-weight: 600;
      margin-top: 0px;
      margin-bottom: 0px;
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

    ul {
      li {
        font-size: 16px;
        color: #ffffff;
        font-weight: 200;
        text-align: left;
        margin-top: 10px;
        b {
          font-weight: 700;
        }
      }
    }
  }
}
.mainImag {
  width: 70% !important;
  height: auto !important;
}
@media screen and (max-width: 1300px) {
  .fourCards {
    .zCard {
      padding-left: 5px;
      padding-right: 5px;
      h5 {
        //min-height: 48px;
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
  }
  .wordMA {
    font-size: 14px;
  }
}
</style>
