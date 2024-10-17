<template>
  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12"></div>
          <div class="col-lg-2"></div>
          <div class="col-lg-8">
            <div class="zCard">
              <h4>Contact Us</h4>
              <!-- <h5>Driving Value With Emerging Technology And Tools</h5> -->
              <p>
                Black Spinel aims to reduce your workload, save your time, cut your
                unnecessary cost of hiring and maintaining an IT function, and
                boost your profitability. We hope you want the same. So why the
                wait? Let’s connect and start a new journey!
              </p>

              <h3>
                <a href="tel:+12816618974">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ffffff"
                    class="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  +12816618974
                </a>
              </h3>

              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    v-model="name"
                  />
                  <div class="alert alert-danger" v-if="nameErrorMsg !== ''">
                    {{ nameErrorMsg }}
                  </div>
                  <!-- <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                > -->
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <div class="alert alert-danger" v-if="emailErrorMsg !== ''">
                    {{ emailErrorMsg }}
                  </div>
                  <!-- <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                > -->
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Phone</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Phone"
                  />
                </div>
                <div class="form-group">
                  <label for="message">Your Query</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                    v-model="message"
                  ></textarea>
                  <div class="alert alert-danger" v-if="messageErrorMsg !== ''">
                    {{ messageErrorMsg }}
                  </div>
                </div>
                <!-- <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div> -->
                <div class="form-group">
                  <div class="alert alert-success" v-if="apiResponse !== ''">
                    {{ apiResponse }}
                  </div>
                  <button
                    type="submit"
                    @click.prevent="validate()"
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <!-- <a href="#">More Info</a> -->
            </div>
          </div>
          <div class="col-lg-2"></div>
          <!-- <div class="col-lg-3">
            <div class="zCard">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9L10 12H14L12 15M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
                  stroke="rgba(163, 76, 183, 1)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h5>Mobile App Development</h5>
              <p>Some description about this service</p>
              <a href="#">More Info</a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="zCard">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>product-management</title>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="icon"
                    fill="rgba(163, 76, 183, 1)"
                    transform="translate(42.666667, 34.346667)"
                  >
                    <path
                      d="M426.247658,366.986259 C426.477599,368.072636 426.613335,369.17172 426.653805,370.281095 L426.666667,370.986667 L426.666667,392.32 C426.666667,415.884149 383.686003,434.986667 330.666667,434.986667 C278.177524,434.986667 235.527284,416.264289 234.679528,393.025571 L234.666667,392.32 L234.666667,370.986667 L234.679528,370.281095 C234.719905,369.174279 234.855108,368.077708 235.081684,366.992917 C240.961696,371.41162 248.119437,375.487081 256.413327,378.976167 C275.772109,387.120048 301.875889,392.32 330.666667,392.32 C360.599038,392.32 387.623237,386.691188 407.213205,377.984536 C414.535528,374.73017 420.909655,371.002541 426.247658,366.986259 Z M192,7.10542736e-15 L384,106.666667 L384.001134,185.388691 C368.274441,181.351277 350.081492,178.986667 330.666667,178.986667 C301.427978,178.986667 274.9627,184.361969 255.43909,193.039129 C228.705759,204.92061 215.096345,223.091357 213.375754,241.480019 L213.327253,242.037312 L213.449,414.75 L192,426.666667 L-2.13162821e-14,320 L-2.13162821e-14,106.666667 L192,7.10542736e-15 Z M426.247658,302.986259 C426.477599,304.072636 426.613335,305.17172 426.653805,306.281095 L426.666667,306.986667 L426.666667,328.32 C426.666667,351.884149 383.686003,370.986667 330.666667,370.986667 C278.177524,370.986667 235.527284,352.264289 234.679528,329.025571 L234.666667,328.32 L234.666667,306.986667 L234.679528,306.281095 C234.719905,305.174279 234.855108,304.077708 235.081684,302.992917 C240.961696,307.41162 248.119437,311.487081 256.413327,314.976167 C275.772109,323.120048 301.875889,328.32 330.666667,328.32 C360.599038,328.32 387.623237,322.691188 407.213205,313.984536 C414.535528,310.73017 420.909655,307.002541 426.247658,302.986259 Z M127.999,199.108 L128,343.706 L170.666667,367.410315 L170.666667,222.811016 L127.999,199.108 Z M42.6666667,151.701991 L42.6666667,296.296296 L85.333,320.001 L85.333,175.405 L42.6666667,151.701991 Z M330.666667,200.32 C383.155809,200.32 425.80605,219.042377 426.653805,242.281095 L426.666667,242.986667 L426.666667,264.32 C426.666667,287.884149 383.686003,306.986667 330.666667,306.986667 C278.177524,306.986667 235.527284,288.264289 234.679528,265.025571 L234.666667,264.32 L234.666667,242.986667 L234.808715,240.645666 C237.543198,218.170241 279.414642,200.32 330.666667,200.32 Z M275.991,94.069 L150.412,164.155 L192,187.259259 L317.866667,117.333333 L275.991,94.069 Z M192,47.4074074 L66.1333333,117.333333 L107.795,140.479 L233.373,70.393 L192,47.4074074 Z"
                      id="Combined-Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <h5>Product <br />& Solutions</h5>
              <p>Some description about this service</p>
              <a href="#">More Info</a>
            </div>
          </div> -->
        </div>
        <!--/row-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ContactUs',
  props: {
    msg: String,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      nameErrorMsg: '',
      emailErrorMsg: '',
      messageErrorMsg: '',
      apiResponse: '',
    };
  },
  methods: {
    validate() {
      let error = 0;
      if (this.name == '') {
        error = error + 1;
        this.nameErrorMsg = 'Name is required.';
        document.getElementById('name').style.borderBottom = '1px solid red';
        document.getElementById('name').style.borderRadius = '0px';
      } else {
        this.nameErrorMsg = '';
        document.getElementById('name').style.borderBottom =
          '1px solid #374151';
        document.getElementById('name').style.borderRadius = '0px';
      }
      if (this.email == '') {
        error = error + 1;
        this.emailErrorMsg = 'Email is required.';
        document.getElementById('email').style.borderBottom = '1px solid red';
        document.getElementById('email').style.borderRadius = '0px';
      } else {
        this.emailErrorMsg = '';
        document.getElementById('email').style.borderBottom =
          '1px solid rgb(197, 141, 209)';
        document.getElementById('email').style.borderRadius = '0px';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
          error = error + 1;
          this.emailErrorMsg = 'Please enter a valid email address';
          document.getElementById('email').style.borderBottom = '1px solid red';
          document.getElementById('email').style.borderRadius = '0px';
        } else {
          this.emailErrorMsg = '';
          document.getElementById('email').style.borderBottom =
            '1px solid rgb(197, 141, 209)';
          document.getElementById('email').style.borderRadius = '0px';
        }
      }

      if (this.message == '') {
        error = error + 1;
        this.messageErrorMsg = 'Message is required.';
        document.getElementById('message').style.borderBottom = '1px solid red';
        document.getElementById('message').style.borderRadius = '0px';
      } else {
        this.messageErrorMsg = '';
        document.getElementById('message').style.border =
          '1px solid rgb(197, 141, 209)';
        document.getElementById('message').style.borderRadius = '0px';
      }
      if (error == 0) {
        axios
          .post('https://clowdsol.com/sendEmail.php', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
          })
          .then(response => {
            if (response.data == 'success') {
              this.apiResponse =
                'Thanks for contacting us. We will reach to you soon!';
            }
            //this.apiResponse = response.data;
          });
      }
    },
  },
};
// var words = [
//     'We help your company go through its digtial transformations process making it into an agile and exponential coampany.',
//     'Clowdsol aims to reduce your workload, save your time, cut your unnecessary cost of hiring and maintaining an IT function, and boost your profitability. We hope you want the same. So why the wait? Let’s connect and start a new journey!',
//   ],
//   part,
//   i = 0,
//   offset = 0,
//   len = words.length,
//   forwards = true,
//   skip_count = 0,
//   skip_delay = 15,
//   speed = 70;
// var wordflick = function () {
//   setInterval(function () {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         ++skip_count;
//         if (skip_count == skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     } else {
//       if (offset <= 0) {
//         forwards = true;
//         i++;
//         offset = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }
//     part = words[i].substr(0, offset);
//     if (skip_count == 0) {
//       if (forwards) {
//         offset++;
//       } else {
//         offset = offset - 10;
//       }
//     }
//     if (document.getElementById('word')) {
//       document.getElementById('word').innerHTML = part;
//     }
//   }, speed);
//};

document.addEventListener('DOMContentLoaded', function () {
  //wordflick();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary: purple;
.form-group {
  margin-top: 20px;
  label {
    color: #ffffff;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    float: left;
  }
  input {
    background: #00000055;
    border: 0px;
    border-bottom: 1px solid theme('colors.tertiary[100]');
    color: #ffffff;
  }
  textarea {
    background: #00000055;
    border: 0px;
    border-bottom: 1px solid theme('colors.tertiary[100]');
    color: #ffffff;
  }
  .alert {
    color: red;
    font-weight: 300;
    padding: 5px 10px;
    border-radius: 0px;
  }
}
.form-control:focus {
  border-color: rgba(226, 184, 66, 0.91);
  outline: 0;
  box-shadow: none;
}
.btn-primary {
  background-color: theme('colors.tertiary[100]');
  border-color: theme('colors.tertiary[100]');
  width: 100%;
  color: #ffffff;
  margin-bottom: 0px;
}
.btn-primary:hover {
  background-color: theme('colors.tertiary[300]');
  border-color: theme('colors.tertiary[300]');
}
.btn-primary:active,
.btn-primary:focus {
  background-color: theme('colors.tertiary[300]');
  border-color: theme('colors.tertiary[300]');
}
.btn:first-child:active {
  background-color: theme('colors.tertiary[300]');
  border-color: theme('colors.tertiary[300]');
}
h3 {
  color: #ffffff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin-top: 30px;
}
h4 {
  color: #292341;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
h5 {
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline-block;
  margin-left: 20px;
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
  max-width: 800px;
  margin: 0 auto;
}
.fourCards {
  //background-image: url('@/assets/FourCardsBG.jpg');
  background-color: #ffffff15;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 0px;
  padding-top: 20px;
  h4 {
    color: theme('colors.secondary');
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-top: 0px;
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
    margin: 20px;
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
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    img {
      display: inline-block;
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
      font-weight: 300;
      line-height: normal;
      margin-top: 10px;
      text-align: justify;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 50px;
    }
    a {
      border-radius: 8px;
      color: #fff;
      font-family: Inter;
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
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
}
</style>
