<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>Branding</h4>
            <!-- <h5>Driving Value With Emerging Technology And Tools</h5> -->

            <div class="wordMA">
              Welcome to Black Spinel, where we specialize in helping businesses
              stand out in today's competitive marketplace through strategic
              branding. With our comprehensive suite of branding services, we
              empower businesses to establish a strong brand identity, connect
              with their target audience, and drive growth and success.<br />
              At Black Spinel, we believe that effective branding goes beyond just a
              logo and color palette – it's about telling your unique story and
              creating meaningful connections with your audience. Our approach
              to branding is strategic, collaborative, and results-driven. We
              work closely with our clients to understand their brand vision,
              values, and objectives, allowing us to develop customized branding
              strategies that resonate with their target market. Our services
              include
            </div>
          </div>
          <div class="col-lg-3">
            <div class="zCard">
              <div class="count">1</div>
              <h5>Brand <br />Strategy</h5>
              <p>
                Define your brand's positioning, messaging, and value
                proposition to differentiate yourself in the marketplace and
                connect with your audience on a deeper level.
              </p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="zCard">
              <div class="count">2</div>
              <h5>Logo Design and Visual Identity</h5>
              <p>
                Create a visually compelling brand identity that reflects your
                brand's personality, values, and essence.
              </p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="zCard">
              <div class="count">3</div>
              <h5>Brand <br />Guidelines:</h5>
              <p>
                Develop comprehensive brand guidelines to ensure consistency and
                cohesion across all brand touchpoints, from marketing materials
                to digital assets.
              </p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="zCard">
              <div class="count">4</div>
              <h5>Brand <br />Experience:</h5>
              <p>
                Curate memorable brand experiences that engage and delight your
                audience at every touchpoint, from website interactions to
                customer service.
              </p>
            </div>
          </div>
          <div class="col-lg-3"></div>
          <div class="col-lg-3">
            <div class="zCard">
              <div class="count">5</div>
              <h5>Brand <br />Collateral:</h5>
              <p>
                Design impactful brand collateral, including business cards,
                letterheads, brochures, and other marketing materials, to leave
                a lasting impression on your audience.
              </p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="zCard">
              <div class="count">6</div>
              <h5>Brand <br />Storytelling</h5>
              <p>
                Craft authentic and compelling brand stories that resonate with
                your audience and evoke emotional connections.
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
