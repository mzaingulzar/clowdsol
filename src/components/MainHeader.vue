<template>
  <!-- <div class="header bg-light preHdeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <span class="hideOnMobile">Contact us 24/7 </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
          info@clowdsol.com
        </div>
      </div>
    </div>
  </div> -->
  <nav
    class="navbar navbar-expand-lg sticky-top navbar-light bg-light headerBG"
  >
    <div class="container">
      <a class="navbar-brand" href="#" @click.prevent="goto('HomeView')">
        <img src="@/assets/logo-white.svg"/>
      </a>

      <button
        class="navbar-toggler navbar-toggler-right custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar1"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar1">

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="goto('AboutUs')"
              >About Us</a
            >
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              IT Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" @click.prevent="goto('WebSoft')"
                >Web & Software Development
              </a>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="goto('MobileApp')"
                >Mobile App Development
              </a>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="goto('QualityAssurance')"
                >Quality Assurance
              </a>
              <a class="dropdown-item" @click.prevent="goto('SeO')" href="#"
                >SEO</a
              >
              <a class="dropdown-item" @click.prevent="goto('TC')" href="#"
                >Technology Consultancy
              </a>
              <a class="dropdown-item" @click.prevent="goto('BS')" href="#"
                >Branding
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Design Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="goto('GraphicServices')"
                >Graphics
              </a>
              <a class="dropdown-item" href="#" @click.prevent="goto('UIUX')"
                >UI/UX
              </a>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="goto('VideoEditing')"
                >Video Editing
              </a>
              <a class="dropdown-item" href="#" @click.prevent="goto('ThreeD')"
                >3D
              </a>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="goto('AnnimationServices')"
                >Animations
              </a>
              <!-- <a class="dropdown-item" href="#">UI/UX </a>
              <a class="dropdown-item" href="#">Video Editing </a>
              <a class="dropdown-item" href="#">3D Design </a>
              <a class="dropdown-item" href="#">Animations </a> -->
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#" @click.prevent="goto('Careers')"
              >Careers</a
            >
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#" @click.prevent="goto('OurPortfolio')"
              >Portfolio</a
            > 
          </li>
          <li class="nav-item socialIcons">
            <a href="https://www.instagram.com/clowdsol/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/clowdsol/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                />
              </svg>
            </a>
            <a href="https://twitter.com/Clowdsol">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/clowdsol">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <div class="container-flued homeSlide1">
    <div class="row">
      <div class="col-12">
        <h2>"Stay Prepared, Stay Protected</h2>
        <h5>Insurance for Life's Uncertainties"</h5>
        <h6>Your Shield in an Uncertain World"</h6>
        <a href="#" class="yellowButton">Get Your Quote</a>
      </div>
    </div>
  </div> -->
  <!--container-->
</template>

<script>
export default {
  name: 'MainHeader',
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
<style scoped lan="scss">
.bg-light {
  background-color: theme('colors.primary') !important;
}
.animation {
  height: 70px;
  overflow: hidden;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  /* height: 2.81rem; */
  margin-bottom: 2.81rem;
  display: inline-block;
  text-transform: uppercase;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  background-color: rgba(53, 164, 251, 1);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: theme('colors.secondary');
}
.second div {
  background-color: rgba(163, 76, 183, 1);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: theme('colors.secondary');
}
.third div {
  background-color: black;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: theme('colors.secondary');
}

@keyframes text-animation {
  0% {
    margin-top: 0;
  }
  10% {
    margin-top: 0;
  }
  20% {
    margin-top: -48px;
  }
  30% {
    margin-top: -48px;
  }
  40% {
    margin-top: -125px;
  }
  60% {
    margin-top: -125px;
  }
  70% {
    margin-top: -48px;
  }
  80% {
    margin-top: -48px;
  }
  90% {
    margin-top: 0;
  }
  100% {
    margin-top: 0;
  }
}

.preHdeader {

  background: linear-gradient(to right, #000000, theme('colors.tertiary[100]')) !important;
  
  color: theme('colors.secondary');
  height: 40px;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  svg {
    margin-left: 10px;
    margin-right: 10px;
  }
}
.headerBG {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 70px;
  background-color: #ffffff11;
  .navbar-brand {
    width: 200px;
    color: #242f9b;
    height: auto;
    img {
      width: 100%;
      opacity: 1;
    }
  }
  .navbar-nav {
    .nav-item {
      font-weight: 400;
      font-size: 16px;
      a {
        color: theme('colors.secondary');
        text-transform: uppercase;
      }
      a:hover {
        color: theme('colors.tertiary[100]');
        transition-duration: 0.5s;
      }
      a::after {
        color: theme('colors.tertiary[100]');;
        transition-duration: 0.5s;
      }
    }
    .socialIcons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    margin-top: 26px;
  }

  .dropdown-item {
    color: theme('colors.secondary') !important;
    height: 40px;
    line-height: 33px;
  }
  .dropdown-item:hover {
    background-color: #00000070;
    /* color: rgba(163, 76, 183, 1) !important; */
    transition-duration: 0.5s !important;
  }
  .getQouteA {
    border-radius: 8px;
    border: 3px solid #ffc93c;
    padding: 8px 16px;
    color: #242f9b;
    text-decoration: none;
  }
}
@-webkit-keyframes slidein {
  from {
    background-position: top;
    background-size: 3000px;
  }
  to {
    background-position: -100px 0px;
    background-size: 2750px;
  }
}

@keyframes slidein {
  from {
    background-position: top;
    background-size: 3000px;
  }
  to {
    background-position: -100px 0px;
    background-size: 2750px;
  }
}

.homeSlide1::after {
  background: rgb(137, 23, 186, 0.5);
}
.homeSlide1 {
  /* background: #d9d9d9; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/clouds.png');
  background-size: cover;
  -webkit-animation: slidein 10s;
  animation: slidein 10s;

  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  padding-bottom: 40px;
  .leftSide {
    h2 {
      color: #000000;
      font-family: Inter;
      font-size: 72px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2),
        0px -4px 5px rgba(255, 255, 255, 0.2);
      margin-top: 60px;
      animation: 0.5s ease-in 0s 1 slideInFromLeft;
      text-transform: uppercase;
    }
    h5 {
      color: theme('colors.secondary');
      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: left;
      animation: 0.7s ease-in 0s 1 slideInFromLeft;
    }
    h6 {
      color: #000000;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 200;
      line-height: normal;
      animation: 0.9s ease-in 0s 1 slideInFromLeft;
      margin-top: 30px;
    }
    .row {
      margin-right: 0px;
    }
    .yellowButton {
      width: 220px;
      margin: 0 auto;
      display: block;
      text-align: center;
      margin-top: 40px;
      margin-bottom: 50px;
      animation: 1.1s ease-in 0s 1 slideInFromLeft;
    }
  }
  .rightSide {
    .circle1 {
      animation: 0.8s ease-in 0s 1 slideInFromLeft;
      margin-top: 40px;
      img {
        width: 130%;
        filter: drop-shadow(0 0 0.75rem #00000099);
      }
    }
    .circle2 {
      animation: 1s ease-in 0s 1 slideInFromLeft;
      margin-top: 80px;
      img {
        width: 100%;
        filter: drop-shadow(0 0 0.75rem #00000099);
      }
    }
    .circle3 {
      animation: 1.2s ease-in 0s 1 slideInFromLeft;
      margin-top: -80px;
      margin-left: -30px;
      img {
        width: 100%;
        filter: drop-shadow(0 0 0.75rem #00000099);
      }
    }
    .circle4 {
      animation: 1.4s ease-in 0s 1 slideInFromLeft;
      margin-top: -165px;
      margin-left: -20px;
      img {
        width: 120%;
        filter: drop-shadow(0 0 0.75rem #00000099);
      }
    }
  }
}
@keyframes slideInFromLeft {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.yellowButton {
  padding: 14px 16px;
  border-radius: 8px;
  background: #ffc93c;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
}
@media screen and (min-width: 1500px) {
  .homeSlide1 {
    h5 {
      text-align: center;
    }
  }
}
@media screen and (max-width: 1200px) {
  .homeSlide1 {
    .leftSide {
      h2 {
        font-size: 48px;
      }
      h5 {
        font-size: 32px;
      }
      h6 {
        font-size: 24px;
      }
    }
  }
  .rightSide {
    .circle4 {
      margin-top: -144px !important;
    }
  }
  .headerBG {
    .navbar-nav {
      .nav-item {
        a {
          font-size: 12px;
        }
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .headerBG {
    .navbar-nav {
      width: 100%;
      .nav-item {
        width: 20%;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        .getQouteA {
          font-size: 14px;
          margin-top: 0px;
          display: inline-block;
        }
      }
    }
  }
  .dropdown-menu {
    /* background-color: #242f9b !important; */
    background: rgb(53, 164, 251);
    background: linear-gradient(to right, #000000, theme('colors.tertiary[100]')) !important;
    backdrop-filter: blur(10px);
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    margin-top: 20px;
  }
}
@media screen and (max-width: 992px) {
  .getQouteA {
    width: 160px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #ffc93c;
  }

  .navbar-collapse {
    background: linear-gradient(to right, #000000, theme('colors.tertiary[100]')) !important;
    padding-left: 10px;
    margin-top: 21px;
    .nav-item {
      font-weight: 400;
      font-size: 16px;
      box-sizing: border-box;
      a {
        color: theme('colors.secondary') !important;
      }
      .getQouteA {
        width: 98%;
        text-align: center;
        display: inline-block;
        color: #242f9b !important;
        box-sizing: border-box;
        margin-bottom: 10px;
      }
    }
    .socialIcons {
      a {
        margin-bottom: 20px;
        margin-top: 10px;
      }
      padding-right: 20px;
      padding-left: 10px;
    }
    .dropdown-menu {
      background: #00000070 !important;
      margin-right: 10px;
    }
  }
  .homeSlide1 {
    h2 {
      font-size: 48px;
    }
    h5 {
      font-size: 48px;
      width: 100%;
      text-align: center;
    }
    h6 {
      font-size: 32px;
    }
    .rightSide {
      .circle1 {
        img {
          width: 50%;
        }
      }
      .circle2 {
        img {
          width: 44vw;
        }
      }
      .circle3 {
        img {
          width: 46vw;
        }
      }
      .circle4 {
        img {
          width: 54vw;
        }
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .hideOnMobile {
    display: none;
  }
  .homeSlide1 {
    h2 {
      font-size: 32px;
      margin-top: 80px;
    }
    h5 {
      font-size: 32px;
      width: 100%;
      text-align: center;
    }
    h6 {
      font-size: 24px;
    }
  }
  .rightSide {
    .circle4 {
      margin-top: -30% !important;
      img {
        width: 100%;
      }
    }
  }
}
</style>
