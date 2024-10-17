<template>
  <div class="DiscoverRange">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <img src="@/assets/ss.png" />
          </div>
          <div class="col-lg-8">
            <div class="drContent">
              <h4>At Black Spinel, we are more than just a technology company.</h4>
              <p>
                We are creative engineers, design enthusiasts, and digital
                visionaries committed to transforming ideas, businesses, and
                technologies. Our multi-disciplinary approach sets us apart,
                allowing us to offer comprehensive solutions that cater to the
                dynamic needs of our clients.
              </p>
              <p>
                Elevating Success through Innovative Design and Technology! We
                believe in the power of creativity and technology to bring about
                positive transformations. Our mission is to craft products and
                experiences that not only represent our clients' brands but also
                drive them forward in the ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HighValue',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.DiscoverRange {
  background-color: #00000055;
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  .drContent {
    margin-top: 20px;
  }
  img {
    width: 85%;
    margin: 0 auto;
    opacity: 1;
    display: block;
  }
  h4 {
    color: rgb(237, 221, 240);
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0px;
    text-transform: uppercase;
  }
  p {
    margin-top: 20px;
    color: rgb(237, 221, 240);
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 0px;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1300px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: -380px;
    }
  }
}
@media screen and (min-width: 1100px) and (max-width: 1200px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: -300px;
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1100px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: -300px;
    }
  }
}
@media screen and (max-width: 992px) {
  .DiscoverRange {
    img {
      width: 100%;
    }

    .drContent {
      h4 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
        margin-top: 10px;
      }
      a {
        padding: 7px 16px;
        font-size: 16px;
        width: auto;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: -340px;
      .drContent {
        h4 {
          margin-top: 280px;
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: -250px;
      .drContent {
        h4 {
          margin-top: 200px;
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: -200px;
      .drContent {
        h4 {
          margin-top: 150px;
        }
      }
    }
  }
}
</style>
