<template>
  <div class="faqWrapper">
    <div class="FaQ" id="portfolio">
      <div class="container-flued">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h4>Technology Stack</h4>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-10">
              <div class="row">
                <div class="col-12 buttonsWrapper">
                  <div class="pTabs">
                    <a
                      href="#"
                      :class="slectedTab == 'All' ? 'colorPurple' : ''"
                      @click.prevent="showAll"
                      >All
                    </a>
                    <a
                      href="#"
                      :class="slectedTab == 'Animation' ? 'colorPurple' : ''"
                      @click.prevent="showAnnimation"
                      >Backend</a
                    >
                    <a
                      href="#"
                      :class="slectedTab == 'Videos' ? 'colorPurple' : ''"
                      @click.prevent="showVideos"
                      >Frontend
                    </a>
                    <a
                      href="#"
                      :class="slectedTab == 'Designs' ? 'colorPurple' : ''"
                      @click.prevent="showDesigns"
                      >CMS
                    </a>
                    <a
                      href="#"
                      :class="slectedTab == 'Web' ? 'colorPurple' : ''"
                      @click.prevent="showWeb"
                      >Cloud & Devops
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-lg-2 col-md-4 col-sm-6 col-6"
                  v-for="p in projectsToShow"
                  :key="p"
                >
                  <div class="project">
                    <img :src="p.image" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="customModal" id="customModal">
    <div class="close" @click="closeModal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#ffffff"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
        />
      </svg>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'FaQ',
  props: {
    msg: String,
  },
  data() {
    return {
      projects: [
        {
          name: 'PHP',
          image: require('@/assets/technology/php.png'),
          type: 'backend',
        },
        {
          name: 'Node.js',
          image: require('@/assets/technology/node.png'),
          type: 'backend',
        },
        {
          name: 'Go Language',
          image: require('@/assets/technology/go.png'),
          type: 'backend',
        },
        {
          name: 'Codeigniter Framework',
          image: require('@/assets/technology/codeigniter.png'),
          type: 'backend',
        },
        {
          name: 'Laravel Framework',
          image: require('@/assets/technology/laravel.png'),
          type: 'backend',
        },
        {
          name: 'Symfony Framework',
          image: require('@/assets/technology/symfony.png'),
          type: 'backend',
        },
        {
          name: 'Yii Framework',
          image: require('@/assets/technology/yii.png'),
          type: 'backend',
        },
        {
          name: 'Zend Framework',
          image: require('@/assets/technology/zend.png'),
          type: 'backend',
        },
        {
          name: 'CakePHP Framework',
          image: require('@/assets/technology/cakephp.png'),
          type: 'backend',
        },
        {
          name: 'Vue',
          image: require('@/assets/technology/vue.png'),
          type: 'frontend',
        },
        {
          name: 'React',
          image: require('@/assets/technology/react.png'),
          type: 'frontend',
        },
        {
          name: 'Angular',
          image: require('@/assets/technology/angularjs.png'),
          type: 'frontend',
        },
        {
          name: 'Jquery',
          image: require('@/assets/technology/jquery.png'),
          type: 'frontend',
        },
        {
          name: 'Wordpress',
          image: require('@/assets/technology/wordpress.png'),
          type: 'cms',
        },
        {
          name: 'Joomla',
          image: require('@/assets/technology/joomla.png'),
          type: 'cms',
        },
        {
          name: 'Magento',
          image: require('@/assets/technology/magento.png'),
          type: 'cms',
        },
        {
          name: 'OpenCart',
          image: require('@/assets/technology/opencart.png'),
          type: 'cms',
        },
        {
          name: 'Shopify',
          image: require('@/assets/technology/shopify.png'),
          type: 'cms',
        },
        {
          name: 'Google Clouds',
          image: require('@/assets/technology/gc.png'),
          type: 'clouds',
        },
        {
          name: 'Amazon Cloud Services',
          image: require('@/assets/technology/amazon.png'),
          type: 'clouds',
        },
        {
          name: 'Digital Ocean',
          image: require('@/assets/technology/dgocean.png'),
          type: 'clouds',
        },
        {
          name: 'Git',
          image: require('@/assets/technology/git.png'),
          type: 'clouds',
        },
        {
          name: 'JIRA',
          image: require('@/assets/technology/jira.png'),
          type: 'clouds',
        },
      ],
      annimations: [
        {
          name: 'PHP',
          image: require('@/assets/technology/php.png'),
          type: 'backend',
        },
        {
          name: 'Node.js',
          image: require('@/assets/technology/node.png'),
          type: 'backend',
        },
        {
          name: 'Go Language',
          image: require('@/assets/technology/go.png'),
          type: 'backend',
        },
        {
          name: 'Codeigniter Framework',
          image: require('@/assets/technology/codeigniter.png'),
          type: 'backend',
        },
        {
          name: 'Laravel Framework',
          image: require('@/assets/technology/laravel.png'),
          type: 'backend',
        },
        {
          name: 'Symfony Framework',
          image: require('@/assets/technology/symfony.png'),
          type: 'backend',
        },
        {
          name: 'Yii Framework',
          image: require('@/assets/technology/yii.png'),
          type: 'backend',
        },
        {
          name: 'Zend Framework',
          image: require('@/assets/technology/zend.png'),
          type: 'backend',
        },
        {
          name: 'CakePHP Framework',
          image: require('@/assets/technology/cakephp.png'),
          type: 'backend',
        },
      ],
      videos: [
        {
          name: 'Vue',
          image: require('@/assets/technology/vue.png'),
          type: 'frontend',
        },
        {
          name: 'React',
          image: require('@/assets/technology/react.png'),
          type: 'frontend',
        },
        {
          name: 'Angular',
          image: require('@/assets/technology/angularjs.png'),
          type: 'frontend',
        },
        {
          name: 'Jquery',
          image: require('@/assets/technology/jquery.png'),
          type: 'frontend',
        },
      ],
      designes: [
        {
          name: 'Wordpress',
          image: require('@/assets/technology/wordpress.png'),
          type: 'cms',
        },
        {
          name: 'Joomla',
          image: require('@/assets/technology/joomla.png'),
          type: 'cms',
        },
        {
          name: 'Magento',
          image: require('@/assets/technology/magento.png'),
          type: 'cms',
        },
        {
          name: 'OpenCart',
          image: require('@/assets/technology/opencart.png'),
          type: 'cms',
        },
        {
          name: 'Shopify',
          image: require('@/assets/technology/shopify.png'),
          type: 'cms',
        },
      ],
      web: [
        {
          name: 'Google Clouds',
          image: require('@/assets/technology/gc.png'),
          type: 'clouds',
        },
        {
          name: 'Amazon Cloud Services',
          image: require('@/assets/technology/amazon.png'),
          type: 'clouds',
        },
        {
          name: 'Digital Ocean',
          image: require('@/assets/technology/dgocean.png'),
          type: 'clouds',
        },
        {
          name: 'Git',
          image: require('@/assets/technology/git.png'),
          type: 'clouds',
        },
        {
          name: 'JIRA',
          image: require('@/assets/technology/jira.png'),
          type: 'clouds',
        },
      ],
      projectsToShow: [],
      slectedTab: 'All',
    };
  },
  mounted() {
    this.projectsToShow = this.projects;
  },
  methods: {
    showAnnimation() {
      this.projectsToShow = this.annimations;
      this.slectedTab = 'Animation';
    },
    showAll() {
      this.projectsToShow = this.projects;
      this.slectedTab = 'All';
    },
    showVideos() {
      this.projectsToShow = this.videos;
      this.slectedTab = 'Videos';
    },
    showDesigns() {
      this.projectsToShow = this.designes;
      this.slectedTab = 'Designs';
    },
    showWeb() {
      this.projectsToShow = this.web;
      this.slectedTab = 'Web';
    },
    closeModal() {
      document.getElementById('customModal').style.display = 'none';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.colorPurple {
  color: white !important;
  transition-duration: 0.6s;
  border: 1px solid theme('colors.tertiary[100]');
  background-color: theme('colors.tertiary[100]') !important;
}
.buttonsWrapper {
  background-color: #000000dd;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
}
.faqWrapper {
  background-color: #ffffffdd;
}
@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.wave {
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  animation: wave 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.wave:nth-of-type(2) {
  bottom: -1.25em;
  animation: wave 18s linear reverse infinite;
  opacity: 0.8;
}

.wave:nth-of-type(3) {
  bottom: -2.5em;
  animation: wave 20s -1s reverse infinite;
  opacity: 0.9;
}

@keyframes wave {
  2% {
    transform: translateX(1);
  }

  25% {
    transform: translateX(-25%);
  }

  50% {
    transform: translateX(-50%);
  }

  75% {
    transform: translateX(-25%);
  }

  100% {
    transform: translateX(1);
  }
}
.FaQ {
  // background-image: url('@/assets/faqBg.jpg');
  // background-color: #cccccc;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  padding-bottom: 60px;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: auto;
  background: linear-gradient(
    315deg,
    rgba(53, 164, 251, 0.2) 3%,
    rgba(163, 76, 183, 0.2) 38%,
    rgba(53, 164, 251, 0.1) 68%,
    rgba(163, 76, 183, 0.1) 98%
  );
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
  padding-bottom: 40px;
  h4 {
    color: black;
    font-family: Open Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-top: 60px;
    text-align: center;
    margin-bottom: 30px;
  }
  .panel-heading {
    // border-bottom: 2px solid #ffc93c;
    width: 100%;
    position: relative;
    .active {
      right: 10px;
      background-color: #000000;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      padding-left: 2px;
      svg {
        display: block;
        padding-top: 0px;
      }
    }
    .panel-title a {
      color: #000000;
      font-family: Open Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: 16px; /* 66.667% */
      width: 100%;
      text-decoration: none;
    }
  }
  .panel-body {
    color: #000000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 139%; /* 27.8px */
    padding-top: 15px;
    padding-bottom: 30px;
  }
  .panel-default {
    border-bottom: 2px solid rgba(163, 76, 183, 1);
    margin-bottom: 40px;
    margin-top: 10px;
  }
}
.panel-heading .collapsed .active {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  position: absolute;
  float: right;
  transition-duration: 1s;
}

.panel-heading .active {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  position: absolute;
  float: right;
  transition-duration: 1s;
}
.pTabs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    background-color: #ffffffdd;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    padding: 7px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-decoration: none;
    color: #000000;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
    height: 100%;
  }
  a:hover {
    color: rgba(163, 76, 183, 1);
    transition-duration: 0.6s;
  }
}
.project {
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  img {
    max-height: 80px;
    width: auto;
  }
}
.customModal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000000cc;
  top: 0;
  right: 0;
  z-index: 9999;
  padding: 40px;
  svg {
    float: right;
  }
}
@media screen and (max-width: 992px) {
  .FaQ {
    h4 {
      font-size: 24px;
    }
    .panel-heading {
      .panel-title a {
        font-size: 18px;
        font-weight: 700;
        line-height: 16px; /* 66.667% */
      }
    }
    .panel-body {
      font-size: 14px;
    }
  }
  .pTabs {
    a {
      font-size: 12px;
      margin-left: 2px;
      margin-right: 2px;
    }
  }
}
</style>
