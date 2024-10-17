<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>3D</h4>
            <!-- <h5>Driving Value With Emerging Technology And Tools</h5> -->
            <div class="wordMA">
              Welcome to the future of visual storytelling! where imagination
              meets innovation in the realm of 3D. Here at Black Spinel, we're your
              one-stop shop for breathtaking 3D design, modeling, rendering, and
              animation. We don't just create visuals, we craft experiences that
              captivate audiences and elevate your brand. But that's just the
              tip of the iceberg. Scroll down to explore the diverse range of
              services we offer, tailored to meet your unique needs and bring
              your 3D dreams to life.
            </div>
          </div>
          <div class="col-lg-6">
            <div class="zCard">
              <div class="row">
                <h5>3D Design & Modeling<br /><br /></h5>
                <div class="col-lg-6">
                  <div class="zCard">
                    <div class="row">
                      <img
                        src="@/assets/threeD/productDesign.png"
                        class="w200"
                      />
                      <h5>Product Design</h5>
                      <p>
                        Craft captivating 3D models for diverse products, from
                        furniture and electronics to toys and jewelry.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="zCard">
                    <div class="row">
                      <img
                        src="@/assets/threeD/characterDesign.png"
                        class="w200"
                      />
                      <h5>Character Design</h5>
                      <p>
                        Bring characters to life with expertly crafted 3D
                        models, perfect for games, animation, and 3D printing.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="zCard">
                    <div class="row">
                      <img src="@/assets/threeD/enviourment.png" class="w200" />
                      <h5>Environment Design</h5>
                      <p>
                        Immerse your audience in realistic 3D environments ideal
                        for games, simulations, and architectural
                        visualizations.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="zCard">
                    <div class="row">
                      <img src="@/assets/threeD/sculpting.png" class="w200" />
                      <h5>Sculpting</h5>
                      <p>
                        Add intricate details and organic shapes to your models
                        using cutting-edge digital sculpting tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="zCard">
              <div class="row">
                <h5>3D Rendering & Animation<br /><br /></h5>
                <div class="col-lg-6">
                  <div class="zCard2">
                    <div class="row">
                      <img
                        src="@/assets/threeD/productDesign.png"
                        class="w200"
                      />
                      <h5>Photorealistic Rendering</h5>
                      <p>
                        Showcase your designs, products, or architecture with
                        stunningly realistic images and animations.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="zCard2">
                    <div class="row">
                      <img
                        src="@/assets/threeD/characterDesign.png"
                        class="w200"
                      />
                      <h5>Motion Graphics & Animation</h5>
                      <p>
                        Create dynamic animated videos and graphics to elevate
                        your brand's storytelling.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="zCard2">
                    <div class="row">
                      <img src="@/assets/threeD/enviourment.png" class="w200" />
                      <h5>Interactive Experiences</h5>
                      <p>
                        Engage your audience with immersive 3D experiences for
                        websites, apps, or virtual reality platforms.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="zCard2">
                    <div class="row">
                      <img src="@/assets/threeD/sculpting.png" class="w200" />
                      <h5>3D Data <br />Visualization</h5>
                      <p>
                        Transform complex data sets into visually compelling 3D
                        representations, making information more impactful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img src="@/assets/3d-modeling.png" class="mainImag" />
                </div>
                <div class="col-lg-9">
                  <h6>Think:</h6>
                  <ul>
                    <li>
                      <b>Products that come alive</b> with stunning 360° models
                      and hyper-realistic close-ups.
                    </li>
                    <li>
                      <b>Characters that leap off the screen</b> with
                      captivating animation, breathing life into your vision.
                    </li>
                    <li>
                      <b>Interactive experiences that wow</b> your customers
                      with virtual tours, AR demos, and more.
                    </li>
                  </ul>
                  <h6>
                    With ClowdSol's 3D Solutions, you can unlock the full
                    potential of your projects, captivating your audience with
                    precision and creativity. Partner with us to bring your
                    vision to life in the most compelling way possible.
                  </h6>
                </div>
              </div>
            </div>
          </div>
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
.dflex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.leftAlign {
  text-align: left !important;
  height: auto !important;
  min-height: auto !important;
}
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
      min-height: 100px;
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
      text-align: left !important;
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
  .zCard2 {
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
      line-height: 18px;
      margin-top: 10px;
      text-align: center;
      min-height: 76px;
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
      text-align: left !important;
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
