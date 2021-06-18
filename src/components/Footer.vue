<template>
  <footer>
    <Logo />
    <a
      href="https://www.nidc.kr"
      target="_blank">
      &copy;{{ new Date().getFullYear() }} DIKI
    </a>
  </footer>
</template>

<script>
import Logo from "~/components/Logo"

export default {
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
  footer {
    padding: 70px 0;
    text-align: center;
    opacity: .5;

    .logo {
      display: block;
      margin-bottom: 4px;
    }
  }
</style>
