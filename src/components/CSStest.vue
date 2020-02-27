<template>
    <div id="qwe">
        <p id="test" class="a">4654654</p>
        <select @change="changeColor()" id="change">
            <option disabled value="">请选择颜色</option>
            <option id="a" value="a" class="colorSpan1 hidden"></option>
            <div for="a"></div>
            <option value="b" class="colorSpan2 hidden"></option>
            <option value="c" class="colorSpan3 hidden"></option>
        </select>
      <br>
      <input id="txt" type="text" v-on:keyup="txtvaild" placeholder="输入正数" >
      <div class="outer">
        <div class="left"></div>
        <div class="right">
          <div class="imgtest move-left"></div>
        </div>
      </div>
      <div class="linehalfpx"></div>
      <div style="border-top: 1px solid black;margin: 10px 0"></div>
      <div class="flexbox">
        <nav class="flexitem"></nav>
        <nav class="flexitem"></nav>
        <nav class="flexitem"></nav>
      </div>
    </div>
</template>
<script>
    export default {
        name: "CSStest",

        methods: {
            changeColor: function(){
                let sel = document.getElementById("change");
                let p = document.getElementById("test");
                p.className = sel.options[sel.selectedIndex].value;
            },
            //
            txtvaild: function (e) {
                let reg = /^\+?\d*$/;
                let inputval = e.target.value;
                if(!reg.test(inputval)){
                    e.target.style.color = "red";
                }else {
                    e.target.style.color = color;
                }
                //console.log(e.target.style.color);
            },
        },
    }
    //获取页面内id为txt的元素的color属性
    let color;
    window.onload = function(){
        let input = document.getElementById('txt');
        color = window.getComputedStyle(input).color;
    }
</script>

<style scoped>
  input{
    margin-top: 16px;
    color: orange;
  }
    .hidden{
        position: absolute;
        clip: rect(0 0 0 0);
    }
    .colorSpan1{
        background: crimson;

    }
    .colorSpan2{
        background: darkslateblue;
    }
    .colorSpan3{
        background: blue;
    }
    option{
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        background: transparent;
        border:none;
    }

    #qwe .a{
        color: crimson !important;
    }
    #qwe {
        color: #42b983 !important;
    }
    .c{
        color: darkslateblue;
    }


    .b{
        color: blue ;
    }
  .left{
    background-color: #42b983;
    width: 200px;
    height: inherit;
    float: left;
  }
  .right{
    background-color: cornflowerblue;
    height: inherit;
    margin-left: 200px;
    position: relative;
  }
  .outer{
    height: 200px;
  }
  .imgtest{
    height: inherit;
    width: 60px;
    background-color: crimson;
    right: 80px;
    position: absolute;
  }
  .move-left{
    animation: moveleft 2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes  moveleft{
    from { right: 0px}
    to { right: 80px}
  }
  .linehalfpx{
    width: 100%;
    margin: 10px 0;
    transform: scaleY(0.5);
    transform-origin: 0 0;
    border-top: 1px solid black;
  }
  .flexbox{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .flexitem{
    height: 100px;
    flex-grow: 1;
    margin: 0 2%;
    background-color: orange;
    transition: flex-grow 0.5s linear;
  }
  .flexitem:hover{
    flex-grow: 2;
    transition: flex-grow 0.5s linear;
    cursor: pointer;
  }
  .flexitem:

</style>
