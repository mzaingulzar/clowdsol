<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>Animations</h4>
            <!-- <h5>Driving Value With Emerging Technology And Tools</h5> -->

            <div class="wordMA">
              We specialize in turning ideas into captivating animated
              experiences. With our cutting-edge animation services, we help
              businesses and brands communicate their message, engage their
              audience, and stand out in today's competitive landscape. From
              explainer videos to animated advertisements, we leverage the power
              of animation to bring your vision to life in a dynamic and
              compelling way. Our Animation Services
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="count">1</div>
              <h5>2D Animation</h5>
              <p>
                Create charming and expressive animations that capture the
                essence of your brand and captivate your audience with vibrant
                visuals and fluid motion.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="count">2</div>
              <h5>3D Animation</h5>
              <p>
                Bring depth and realism to your projects with immersive 3D
                animations that showcase your products, concepts, or stories in
                stunning detail
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="count">3</div>
              <h5>Motion Graphics</h5>
              <p>
                Enhance your videos and presentations with eye-catching motion
                graphics that add flair and visual interest to your content.
              </p>
            </div>
          </div>

          <div class="col-lg-2"></div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="count">4</div>
              <h5>Explainer Videos</h5>
              <p>
                Simplify complex ideas and concepts with engaging explainer
                videos that educate, inform, and entertain your audience.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="count">5</div>
              <h5>Animated Advertisements</h5>
              <p>
                Grab attention and drive engagement with animated advertisements
                that deliver your message effectively and leave a lasting
                impression on viewers.
              </p>
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
    padding-top: 40px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    margin-top: 20px;
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
      font-weight: 200;
      line-height: normal;
      margin-top: 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 120px;
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
