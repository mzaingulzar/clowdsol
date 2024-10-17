<template>
  <div>
    <div class="fixedButtonDiv2">
      <a href="tel:+12816618974">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="29"
          viewBox="0 0 21 29"
          fill="none"
        >
          <path
            d="M17.6547 28.5413C14.9079 27.7589 12.3658 26.4004 10.0282 24.466C7.6907 22.5315 5.73771 20.299 4.16928 17.7685C2.60085 15.238 1.49267 12.5294 0.844747 9.64269C0.196822 6.75598 0.175565 3.97678 0.780975 1.30507C0.865596 0.932195 1.06387 0.657857 1.3758 0.482058C1.68773 0.306259 2.03533 0.27295 2.4186 0.38213L7.59275 1.85606C7.89085 1.94098 8.13586 2.11002 8.32777 2.36318C8.51968 2.61634 8.60402 2.89399 8.58079 3.19614L8.42396 7.78294C8.40073 8.08509 8.33521 8.34784 8.22739 8.57119C8.11958 8.79455 7.94922 8.97186 7.71631 9.10312L3.95907 11.2749C4.51489 13.0211 5.31543 14.7379 6.36071 16.4251C7.40598 18.1123 8.62962 19.6628 10.0316 21.0767L13.6968 19.0111C13.9307 18.8792 14.2128 18.8109 14.543 18.8062C14.8733 18.8015 15.1824 18.8617 15.4704 18.987L19.6806 21.1126C19.9646 21.2597 20.1777 21.4695 20.3199 21.742C20.462 22.0145 20.5003 22.2954 20.4347 22.5846L19.2923 27.6184C19.2077 27.9913 19.0094 28.2656 18.6975 28.4414C18.3856 28.6172 18.038 28.6505 17.6547 28.5413Z"
            fill="white"
          />
        </svg>
        Call Us Now
        <span>+12816618974</span></a
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {},
};
</script>

<style lang="scss">
.fixedButtonDiv {
  display: none;
}
.fixedButtonDiv2 {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: theme('colors.tertiary[100]');
  z-index: 10;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  a {
    color: #ffffff;
    text-decoration: none;
    padding: 10px 30px;
    display: block;
    font-weight: 600;
    font-size: 18px;
    padding-top: 0px;
    svg {
      margin-top: 13px;
    }
    span {
      display: block;
      font-size: 12px;
      font-weight: 14px;
      margin-left: 28px;
      margin-top: -13px;
    }
  }
}
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(55, 65, 81, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.custom-toggler.navbar-toggler {
  border-color: theme('colors.tertiary[100]');
}
#app {
  font-family: 'Inter', sans-serif !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px;
  padding: 0px;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px black;
  border-radius: 10px;
  background-color: theme('colors.primary');
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: theme('colors.tertiary[100]');
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: theme('colors.tertiary[100]');
}
</style>
