<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>Video Editing</h4>
            <!-- <h5>Driving Value With Emerging Technology And Tools</h5> -->
            <div class="wordMA">
              Ditch the boring, tell your story in style! Forget generic videos
              that blend into the noise. At Black Spinel, we're video editing
              wizards who transform your ideas into eye-catching,
              attention-grabbing masterpieces. Whether you're a social media
              star, a marketing whiz, or simply want to share your story in a
              way that sticks, we've got the magic touch. Types of Videos We are
              Pro At Editing
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/ve/socialMedia.png" class="w200" />
                <h5>Social Media & Marketing</h5>
                <p>
                  Captivate your audience with dynamic edits optimized for
                  platforms like Instagram, TikTok, and beyond. Get ready for
                  likes, shares, and viral fame!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/ve/animated.png" class="w200" />
                <h5>Animated Magic</h5>
                <p>
                  Breathe life into your ideas with stunning animations that
                  leave viewers mesmerized. Thing explainer videos, character
                  creations, and anything your imagination can dream up.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/ve/bespoke.png" class="w200" />
                <h5>Bespoke Brilliance</h5>
                <p>
                  Need something one-of-a-kind? We tailor our services to your
                  unique needs, ensuring your video reflects your brand and
                  message perfectly.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/ve/faceless.png" class="w200" />
                <h5>Faceless & Talking Head Pros</h5>
                <p>
                  Want to focus on your message without showing your face? We've
                  got you covered with engaging faceless videos. Or, deliver
                  your presentation with polished talking head edits that keep
                  viewers hooked.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/ve/broll.png" class="w200" />
                <h5>B-Roll Bonanza</h5>
                <p>
                  We know the power of high-quality footage, so we seamlessly
                  integrate B-roll to add depth and visual impact to your
                  videos.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/ve/shortSweet.png" class="w200" />
                <h5>Short & Sweet</h5>
                <p>
                  Need to grab attention fast? Our short-form editing expertise
                  crafts captivating clips that pack a punch in seconds.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <div class="zCard">
              <div class="row">
                <img src="@/assets/ve/long.png" class="w200" />
                <h5>Long-Form Luxury</h5>
                <p>
                  Sit back and relax! We'll handle your long-form projects with
                  seamless editing that keeps viewers engaged from start to
                  finish.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="zCard">
              <div class="row">
                <div class="col-lg-3">
                  <img src="@/assets/storyVideo.png" class="mainImag" />
                </div>
                <div class="col-lg-9 dflex">
                  <p class="leftAlign">
                    <b
                      >We're not just technical wizards, we're creative
                      storytellers.</b
                    >
                    We combine our expertise with a passion for visual magic to
                    craft videos that resonate with your audience and achieve
                    your goals.
                  </p>
                  <p class="leftAlign">
                    <b>Ready to unleash the power of video?</b> Let's chat!
                    We'll help you unlock the full potential of your content and
                    take your brand to new heights.
                  </p>
                  <h6>
                    Remember, you can further customize this with your specific
                    brand voice and add a call to action to encourage contact!
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
