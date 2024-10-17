<template>
  <div class="DiscoverRange">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img src="@/assets/dr2.png" />
            <div class="DRcontainer">
              <div class="row">
                <div class="col-lg-12">
                  <div class="drContent">
                    <h4>
                      Discover a Range of Insurance Solutions to Safeguard What
                      Matters Most
                    </h4>
                    <p>
                      Customized Insurance Solutions: Building a Safety Net for
                      Your Peace of Mind
                    </p>
                    <p>
                      Looking for affordable, same-day life insurance? Selec
                      tQuote can help. Our no medical exam life insurance offers
                      budget-friendly, fully underwritten rates and an easy
                      application process that takes less than an hour, with
                      some policies less than $1 a day. Get started today if
                      you’re 60 years or younger and in generally good
                      health—coverage starts immediately.
                    </p>
                    <a href="#">Get Your Quote</a>
                  </div>
                </div>
                <div class="col-lg-5">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscoverRange',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.DiscoverRange {
  background-color: #ffffff;
  padding-top: 40px;
  position: relative;
  padding-bottom: 20px;
  img {
    width: 50%;
    float: right;
  }
  .DRcontainer {
    margin-top: 30px;
    width: 90%;
    margin-right: 10%;
    background: #646fd4;
    margin-top: 60px;
    .drContent {
      padding: 40px;
      padding-bottom: 20px;
      h4 {
        color: #ffc93c;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      p {
        color: #fff;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 20px;
      }
      a {
        border-radius: 8px;
        padding: 14px 16px;
        background: #ffc93c;
        text-decoration: none;
        padding: 14px 16px;
        color: #000;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-align: center;
        width: 220px;
        margin: 0 auto;
        display: block;
        margin-top: 20px;
      }
    }
  }
}
@media screen and (min-width: 1200px) and (max-width: 1300px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: 50px;
    }
  }
}
@media screen and (min-width: 1100px) and (max-width: 1200px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: 50px;
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1100px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: 50px;
    }
  }
}
@media screen and (max-width: 992px) {
  .DiscoverRange {
    img {
      width: 100%;
    }
    .DRcontainer {
      margin-top: 60px;
      .drContent {
        h4 {
          margin-top: -30px;
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
}
@media screen and (max-width: 750px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: 50px;
      .drContent {
        h4 {
          margin-top: -30px;
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: 50px;
      .drContent {
        h4 {
          margin-top: -30px;
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .DiscoverRange {
    .DRcontainer {
      margin-top: 40px;
      .drContent {
        h4 {
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
