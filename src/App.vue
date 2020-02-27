<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->

    <CSStest></CSStest>

<!--    <ES6regTest></ES6regTest>-->

      <JSTest></JSTest>
  </div>
</template>

<script>
import CSStest from "@/components/CSStest";
// import ES6regTest from "@/components/ES6regTest";
import JSTest from "@/components/JSTest";
export default {
  name: 'app',
  components: {
    // ES6regTest,
    CSStest,
    JSTest,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  *{
    padding: 0;
    margin: 0;
  }
</style>
