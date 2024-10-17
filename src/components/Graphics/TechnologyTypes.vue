<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>Graphic Design Services</h4>
            <!-- <h5>Driving Value With Emerging Technology And Tools</h5> -->

            <div class="wordMA">
              We offer expert graphic design services that breathe life into
              your brand's visual identity. Our team of talented designers
              specializes in creating stunning visuals that capture attention,
              convey your message, and leave a lasting impression on your
              audience.
            </div>
          </div>
          <div class="col-lg-6">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img src="@/assets/design-icons/logo.png" class="w200" />
                </div>
                <div class="col-lg-9">
                  <h5>Logo design</h5>
                  <p>
                    Develop unique and memorable logos that represent your brand
                    identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img src="@/assets/design-icons/branding.png" class="w200" />
                </div>
                <div class="col-lg-9">
                  <h5>Branding and identity design</h5>
                  <p>
                    Create a consistent visual identity for your brand, like
                    typography, color palettes, and brand guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img
                    src="@/assets/design-icons/marketingMaterial.png"
                    class="w200"
                  />
                </div>
                <div class="col-lg-9">
                  <h5>Marketing materials</h5>
                  <p>
                    Design eye-catching marketing materials such as brochures,
                    flyers, posters, and social media graphics.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img src="@/assets/design-icons/packaging.png" class="w200" />
                </div>
                <div class="col-lg-9">
                  <h5>Packaging design</h5>
                  <p>
                    Create engaging and functional packaging designs that
                    attract customers and protect your products.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img src="@/assets/design-icons/website.png" class="w200" />
                </div>
                <div class="col-lg-9">
                  <h5>Website and app design</h5>
                  <p>
                    Design user-friendly and visually appealing websites and
                    mobile applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img
                    src="@/assets/design-icons/socialMedia.png"
                    class="w200"
                  />
                </div>
                <div class="col-lg-9">
                  <h5>Social Media Graphics</h5>
                  <p>
                    Appealing Post Design, Story Design, Cover Photo and Profile
                    Picture Design, Animated Social Media Graphics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img
                    src="@/assets/design-icons/illustration.png"
                    class="w200"
                  />
                </div>
                <div class="col-lg-9">
                  <h5>Illustrations and infographics</h5>
                  <p>
                    Create custom illustrations and infographics to communicate
                    complex information effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3"></div>
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
  min-height: 60px;
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
      display: inline-block;
      width: 120px;
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
      text-align: left;
    }
    p {
      color: #ffffff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 200;
      line-height: normal;
      margin-top: 10px;
      text-align: left;
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
      // align-items: center;
      //min-height: 100px;
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
