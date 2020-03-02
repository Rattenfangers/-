<template>
  <div id="app">
    <header>
      <router-link to="CSSTest" ><div class="my-btn">CSSTest</div></router-link>
      <router-link to="JSTest" ><div class="my-btn">JSTest</div></router-link>
    </header>
    <router-view></router-view>
<!--    <CSStest></CSStest>-->

<!--    <ES6regTest></ES6regTest>-->

<!--      <JSTest></JSTest>-->
  </div>
</template>

<script>
import CSStest from "@/components/CSSTest";
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
  color: #2c3e50;
}
  *{
    padding: 0;
    margin: 0;
  }
  header{
    width: 100%;
    height: 30px;
  }
  .my-btn{
    display: inline-block;
    min-width: 40px;
    height: 30px;
    line-height: 30px;
    background-color: inherit;
    transition: background-color 1s;
    color: black;
  }
  .my-btn:hover{
    background-color: lightblue;
    transition: background-color 1s;
  }
</style>
