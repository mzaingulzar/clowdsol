<template>
  <teleport to="head">
    <component :is="'script'" type="application/ld+json">
      { "@context": "https://schema.org/", "@type": "JobPosting", "title":
      "Upwork Professional", "description": "Clowdsol, a dynamic company based
      in Islamabad, is seeking a skilled and experienced Upwork professional to
      join our team. In this exciting role, you'll leverage your Upwork
      expertise to source and secure new projects that align with our business
      goals.", "identifier": { "@type": "PropertyValue", "name": "ClowdSol",
      "value": "job" }, "hiringOrganization": { "@type": "Organization", "name":
      "ClowdSol", "sameAs": "https://clowdsol.com/" }, "industry": "Sales and
      Marketing", "workHours": "6pm to 12am", "employmentType": "FULLTIME",
      "datePosted": "2024-02-13", "validThrough": "2024-04-30", "jobLocation": {
      "@type": "Place", "address": { "@type": "PostalAddress", "streetAddress":
      "G8 Markaz", "addressLocality": "Inslamabad", "postalCode": "44080",
      "addressCountry": "Pakistan", "addressRegion": "Islamabad" } } }
    </component>
  </teleport>

  <div class="fourCards">
    <div class="container-flued">
      <div class="container">
        <div class="row">
          <div class="col-12"></div>
          <div class="col-lg-6">
            <!-- <div class="row">
              <div class="col-lg-6">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h1>Software Engineer</h1>
                    </div>
                    <div class="flip-card-back">
                      <div class="flexAlignCenter">
                        <p>PHP<br />Laravel and Codeigter</p>
                        <p>
                          Experience in other frameworks of PHP will be a plus
                          point
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h1>Graphic Designer</h1>
                    </div>
                    <div class="flip-card-back">
                      <div class="flexAlignCenter">
                        <p>Photo Shop<br />skills are must required</p>
                        <p>
                          Experience in other tolls like illustrator or After
                          effects will be a plus point
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h1>
                        Lead Generation Specialist Intern<span>Female</span>
                      </h1>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        it is an Onsite job make sure you are from
                        Rawalpindi/Islamabad. Good Communication skills and
                        basic IT information will be a plus point.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h1>Vue.js Intern</h1>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        it is an Onsite job you must be from
                        Rawalpindi/Islamabad are prefered. BSCS is required.
                        Basic knowledge of javascript framworks will be a plus
                        point.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="row">
              <p>
                Black Spinel, a dynamic company based in Islamabad, is seeking a
                skilled and experienced Upwork professional to join our team. In
                this exciting role, you'll leverage your Upwork expertise to
                source and secure new projects that align with our business
                goals. This is a on-site opportunity with office hours from 6PM
                to 12AM PST.
              </p>
              <h5>Responsibilities:</h5>
              <ul>
                <li>
                  Develop and implement a comprehensive Upwork sourcing strategy
                  to identify and target potential clients.
                </li>
                <li>
                  Craft compelling proposals that showcase Black Spinel's expertise
                  and win over clients.
                </li>
                <li>
                  Negotiate project scope, budgets, and timelines to ensure
                  win-win agreements.
                </li>
                <li>
                  Manage ongoing communication with clients throughout the
                  project lifecycle.
                </li>
                <li>
                  Maintain detailed records of Upwork activity and project
                  progress.
                </li>
                <li>
                  Collaborate with internal teams to ensure successful project
                  delivery.
                </li>
              </ul>
              <h5>You'll be a perfect fit if you:</h5>
              <ul>
                <li>
                  Possess proven experience and a stellar track record of
                  securing high-quality projects.
                </li>
                <li>
                  Write compelling proposals that showcase Black Spinel's expertise
                  and seal the deal.
                </li>
                <li>
                  Secure projects with favorable terms for scope, budget, and
                  timelines.
                </li>
                <li>
                  Maintain seamless communication with clients throughout the
                  project journey.
                </li>
                <li>
                  Keep meticulous records of Upwork activity and project
                  progress.
                </li>
                <li>
                  Collaborate effectively with internal teams to deliver stellar
                  results.
                </li>
              </ul>
              <h5>Bonus points if you:</h5>
              <ul>
                <li>
                  Have experience in web development, graphic design, or video
                  editing (relevant to Black Spinel's services).
                </li>
                <li>
                  Possess SEO and marketing knowledge to attract Upwork clients.
                </li>
              </ul>
              <p class="secondPara">
                NOTE: This is your chance to transition from freelance to
                permanent based on your performance. Secure at least 3 projects
                for Black Spinel through Upwork within the first month, and a
                permanent position awaits!
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="zCard">
              <div id="cForm">
                <h4>Current Opportunities</h4>
                <!-- <h5>Driving Value With Emerging Technology And Tools</h5> -->
                <p>
                  If you are creative, and talented and believe in the fact that
                  “anything is possible with the right efforts in the right
                  direction” then you have the potential to be one of Black Spinel.
                </p>
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
                    <label for="exampleInputPassword1"
                      >Posiiton Apply For</label
                    >
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="position"
                    >
                      <option selected>Plsease Select</option>
                      <option value="Graphic Designer">
                        Software Engineer
                      </option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="Business Developer">
                        Business Developer
                      </option>
                      <option value="Sales Manager">Sales Manager</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="formFile" class="form-label"
                      >Attach Resume</label
                    >
                    <input
                      class="form-control"
                      type="file"
                      id="formFile"
                      accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/*"
                      @change="handleFileUpload($event)"
                    />
                    <!-- accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/*"-->
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
                      v-model="phone"
                    />
                  </div>
                  <div class="form-group">
                    <label for="message">Cover Letter</label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="3"
                      v-model="message"
                    ></textarea>
                    <div
                      class="alert alert-danger"
                      v-if="messageErrorMsg !== ''"
                    >
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
              </div>
              <div id="cFormSuccess">
                <img src="@/assets/careerSuccess.gif" />
              </div>
              <!-- <a href="#">More Info</a> -->
            </div>
          </div>
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
  name: 'CareersPage',
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
      position: '',
      phone: '',
      file: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
      const fileInstant = document.querySelector('#formFile');
      if (
        this.file.type ==
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        this.file.type == 'application/pdf'
      ) {
        if (this.file.size > 9999999) {
          alert('Pleae upload a file less than 10 MB');
          fileInstant.value = '';
        }
      } else {
        alert('Please select word or pdf file only');
        fileInstant.value = '';
      }
    },
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
          '1px solid rgb(197, 141, 209)';
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
        this.messageErrorMsg = 'Cover Lettter is required.';
        document.getElementById('message').style.borderBottom = '1px solid red';
        document.getElementById('message').style.borderRadius = '0px';
      } else {
        this.messageErrorMsg = '';
        document.getElementById('message').style.border =
          '1px solid rgb(197, 141, 209)';
        document.getElementById('message').style.borderRadius = '0px';
      }
      if (error == 0) {
        let formData = new FormData();
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('phone', this.phone);
        formData.append('position', this.position);
        formData.append('message', this.message);
        formData.append('file', this.file);
        axios
          .post('https://clowdsol.com/sendCareerEmail.php', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => {
            console.log(response, 'rl');
            if (response.data == 'success') {
              this.apiResponse =
                'Thank you for applying for the position. if you sortlisted we will reach to you soon!';
            }
            document.getElementById('cForm').style.display = 'none';
            document.getElementById('cFormSuccess').style.display = 'block';
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
.flexAlignCenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 300px;
  border: 1px solid theme('colors.tertiary[100]');
  border-radius: 20px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  margin-top: 20px;
}
#cFormSuccess {
  display: none;
}
/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 20px;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  color: black;
  border-radius: 20px;
  background: rgba(163, 76, 183, 0.2);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h1 {
    color: theme('colors.secondary');
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
}

/* Style the back side */
.flip-card-back {
  background-color: rgba(163, 76, 183, 0.7);
  color: #ffffffaa;
  transform: rotateY(180deg);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
  }
  padding: 20px;
}
.form-select:focus {
  border-color: #00000000;
  outline: 0;
  box-shadow: none;
  color: #ffffff;
  border-bottom: 1px solid theme('colors.tertiary[100]');
}
select {
  color: #ffffff;
  background-color: #000000;
  border: 0px;
  border-bottom: 1px solid theme('colors.tertiary[100]');
}
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
  background-color: rgb(197, 141, 209);
  border-color: rgb(197, 141, 209);
}
.btn:first-child:active {
  background-color: rgb(197, 141, 209);
  border-color: rgb(197, 141, 209);
}
h3 {
  color: #ffffff;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin-top: 40px;
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
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline-block;
  text-align: left;
}
p {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  display: inline-block;
  margin-top: 20px;
  text-align: justify;
}
ul li {
  color: #fff;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 200;
  line-height: 140%;
  text-align: justify;
  margin-left: 30px;
}
.secondPara {
  margin-top: 0px;
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
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
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
    background: rgba(163, 76, 183, 0.05);
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
}
</style>
