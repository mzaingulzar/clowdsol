<template>
  <div class="Footer">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="logo"><img src="@/assets/logo-white.svg"/></div>
            <p>
              Black Spinel, a dynamic tech company specializing in innovative design
              solutions. At Black Spinel we believe in the power of creativity and
              technology to transform businesses.
            </p>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-2">
                <a href="#" @click.prevent="goto('HomeView')">Home</a>
              </div>
              <div class="col-lg-2">
                <a href="#" @click.prevent="goto('AboutUs')">About Us</a>
              </div>
              <div class="col-lg-2">
                <a href="#">Our Services</a>
                <div class="subFMenu">
                  <a href="#" @click.prevent="goto('WebSoft')"
                    >Web & Software Development
                  </a>
                  <a href="#" @click.prevent="goto('MobileApp')"
                    >Mobile App Development</a
                  >
                  <a href="#" @click.prevent="goto('QualityAssurance')"
                    >Quality Assurance
                  </a>
                  <a href="#" @click.prevent="goto('SeO')">SEO </a>
                  <a href="#" @click.prevent="goto('TC')"
                    >Technology Consultancy
                  </a>
                  <a href="#" @click.prevent="goto('BS')">Branding </a>
                </div>
              </div>
              <div class="col-lg-2">
                <a href="#">Design Services</a>
                <div class="subFMenu">
                  <a href="#" @click.prevent="goto('GraphicServices')"
                    >Graphics
                  </a>
                  <a href="#" @click.prevent="goto('UIUX')">UI/UX</a>
                  <a href="#" @click.prevent="goto('VideoEditing')"
                    >Video Editing
                  </a>
                  <a href="#" @click.prevent="goto('ThreeD')">3D </a>
                  <a href="#" @click.prevent="goto('AnnimationServices')"
                    >Annimations
                  </a>
                </div>
              </div>
              <div class="col-lg-2">
                <a href="#" @click.prevent="goto('Careers')">Careers</a>
              </div>
              <div class="col-lg-2">
                <a href="#" @click.prevent="goto('OurPortfolio')"
                  >Our Portfolio</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-12 allRights">All Rights Reserved</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterCom',
  props: {
    msg: String,
  },
  methods: {
    goto(selectedName) {
      this.$router.push({ name: selectedName, replace: true });
      setTimeout(function () {
        location.reload();
      }, 100);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Footer {
  // background-image: url('@/assets/footerBg.jpg');
  background-color: #000000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 20px;
  padding-top: 60px;
  .logo {
    color: #242f9b;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    img {
      height: 60px;
    }
  }
  p {
    color: #ffffff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 100%;
    margin-top: 10px;
  }
  a {
    width: 100%;
    text-align: left;
    text-decoration: none;
    display: block;
    color: #ffffff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5px;
  }
  .subFMenu {
    margin-top: 10px;
    margin-bottom: 5px;
    a {
      text-align: left;
      border-left: 2px solid rgba(53, 164, 251, 1);
      margin-top: 5px;
      padding-left: 10px;
    }
  }
  .allRights {
    color: #ccc;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-top: 30px;
  }
}
@media screen and (max-width: 992px) {
  .Footer {
    padding-top: 20px;
    padding-bottom: 10px;
    p {
      width: 100%;
    }
  }
}
</style>
