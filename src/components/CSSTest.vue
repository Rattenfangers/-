<template>
    <div>
<!--      左半边定宽，右边自适应，一个左移动画-->
      <div class="outer">
        <div class="left"></div>
        <div class="right">
          <div class="imgtest move-left"></div>
        </div>
      </div>
<!--      0.5px的线-->
      <div class="linehalfpx"></div>
      <div style="border-top: 1px solid black;margin: 10px 0"></div>
<!--      弹性布局-->
      <div class="flexbox">
        <nav class="flexitem"></nav>
        <nav class="flexitem"></nav>
        <nav class="flexitem"></nav>
      </div>
<!--      清除浮动-->
      <div class="parent clearfix">
        <div class="child1"></div>
        <div class="child2"></div>
      </div>
<!--      进度条-->
      <div class="flexbox">
        <div id="process-bar" class="process-bar" >
          <div class="process-num">{{process}}</div>
          <div id="process-now" class="process-now"></div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "CSSTest",
        data() {
            return{
                progress: 0,
            }
        },
        methods: {
        },
        mounted(){
            let timer = setInterval(()=>{
                if(this.progress >= 100){
                    window.clearInterval(timer);
                    this.progress = 100;
                }else {
                    this.progress++;
                }
            },100)
        },
        computed:{
            process(){
                return this.progress+"%";
            },

        },
        watch:{
            processNowLen(){
                console.log(this.processNowLen);
            }
        }
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

  .left{
    background-color: #42b983;
    width: 200px;
    height: inherit;
    float: left;
  }
  .right{
    background-color: cornflowerblue;
    margin-left: 200px;
    height: inherit;
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
  .parent{
    width: 100%;
    border: slateblue solid 3px;
    margin: 10px 0;
    box-sizing: border-box;
  }
  .child1{
    background-color: dodgerblue;
    height: 300px;
    width: 200px;
    float: left;
  }
  .child2{
    margin: 0 0 0 200px;
    height: 150px;
    background-color: lightgreen;
  }
  .clearfix{
    /*overflow: hidden; !*触发BFC，清除浮动*!*/
    *zoom: 1; /* 兼容IE !*/
  }
  .clearfix:after{
    content: "";
    line-height:0;			/*行高为0*/
    display:block;			/*将文本转为块级元素*/
    visibility:hidden;		/*将元素隐藏*/
    clear:both;				/*清除浮动*/
  }
  .process-bar{
    display: inline-block;
    flex-grow: 1;
    border: green solid 2px;
    border-radius: 4px;
    position: relative;
    height: 26px;
    margin: 0 auto;
    line-height: 26px;
    color: green;
    overflow: hidden;
  }
  .process-bar .process-now{
    float: left;
    height: 100%;
    width: 0%;
    background-color: green;
    animation: process 10s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .process-bar .process-num{
    position: absolute;
    color: black;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
  }
  @keyframes process {
    from {width: 0%}
    to {width: 100%}
  }
</style>
