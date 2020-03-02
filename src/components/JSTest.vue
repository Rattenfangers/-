<template>
  <div>
    <!--      选择颜色框-->
    <p id="test" class="a">4654654</p>
    <select @change="changeColor()" id="change">
      <option disabled selected="selected" >请选择颜色</option>
      <option value="a" >crimson</option>
      <option value="b" >blue</option>
      <option value="c" >darkslateblue</option>
    </select>
    <br>
    <!--      输入校验，错误时文字变色-->
    <input id="txt" type="text" v-on:keyup="txtvaild" placeholder="输入正数" >
    <div style="padding: 6px ">
      <div class="countBox">
        <p id="myCount" >{{updatecount}}</p>
      </div>
      <div id="myButton" class="myButton" @click="controlWorker(btstate)">
        点击开始计数
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    let worker;
    export default {
        name: "JSTest",
        methods:{
            //web worker
            controlWorker: function (btstate) {
                let mybt = document.getElementById("myButton");
                let mycount = document.getElementById("myCount");
                if(btstate == "stop"){
                    this.btstate = "run";
                    worker = new Worker("../static/utils/countNum.js");
                    worker.postMessage({nowcount:mycount.innerText,state:btstate});
                    mybt.innerText = "点击暂停计数";
                    worker.onmessage = function (ev) {
                        mycount.innerText = ev.data;
                    }
                }else {
                    //暂停时将ev.data的值间接赋值给this.count   在onmessage中无法使用this.count来赋值
                    this.count = mycount.innerText;
                    worker.postMessage({nowcount:mycount.innerText,state:btstate});
                    this.btstate = "stop";
                    mybt.innerText = "点击开始计数";
                }
            },
            ...mapMutations([
                'increment',
            ]),
            changeColor: function(){
                let sel = document.getElementById("change");
                let p = document.getElementById("test");
                p.className = sel.options[sel.selectedIndex].value;
            },
            txtvaild: function (e) {
                let reg = /^\+?\d*$/;
                let inputval = e.target.value;
                if(!reg.test(inputval)){
                    e.target.style.color = "red";
                }else {
                    e.target.style.color = this.color;
                }
                //console.log(e.target.style.color);
            },
        },
        data(){
            return{
                btstate: "stop",
                count: 0,
                color(){}
            }
        },
        computed: {
            updatecount(){
                return this.count;
            },
            ...mapState([

            ])
        },
        mounted(){
            //初始获取页面内id为txt的元素的color属性
            let input = document.getElementById("txt");
            this.color = window.getComputedStyle(input).color;
        }
    };
    // function sortarr(a,b){
    //     return a-b;
    // }
    // function step(n) {
    //     let max2step = n/2;
    //     let result = 0;
    //     let a;
    //     for(let i=0; i<=max2step; i++){
    //         a = 1;
    //         for(let j = 0; j<i; j++){
    //             a = a*(n-i-j)/(j+1);
    //         }
    //         result += a;
    //     }
    //     return result;
    // }
    // let n = 5;
    // console.log(n+"阶台阶有"+step(n)+"种走法");
    // let a = {name:"a456",
    //     show:function () {
    //         console.log(name);
    //         console.log(this.name);
    //     }};
    // for(let i=0; i<5; i++){
    //     setTimeout(() => {
    //         console.log(i);
    //     }, (i+1)*1000);
    // }
    // setTimeout(()=>{
    //     a.show();
    // },6000);
    new Promise((resolve) => {
        console.log('1')
        resolve()
        console.log('2')
    }).then(() => {
        console.log('3')
    })
    setTimeout(() => {
        console.log('4')
    })
    console.log('5')


</script>

<style scoped>
  select{
    height: 24px;
    line-height: 24px;
  }
  option{
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    background: transparent;
    border:none;
  }
  .a{
    color: crimson ;
  }
  .b{
    color: blue ;
  }
  .c{
    color: darkslateblue;
  }
  .countBox{
    display: inline-block;
    box-sizing: border-box;
    margin: auto;
    width: 40px;
    height: 30px;
    border-width: 2px;
    border-style: solid;
    border-color: #2c3e50;
    line-height: 26px;
    vertical-align: bottom;
  }
  .countBox > p{
    font-weight: 700;
    font-size: medium;
  }
  .myButton{
    display: inline-block;
    box-sizing: border-box;
    margin-left: 6px;
    background-color: lightskyblue;
    border: lightskyblue solid 2px;
    color: midnightblue;
    min-width: 40px;
    height: 30px;
    vertical-align: bottom;
    padding: 0 8px;
    line-height: 26px;
    font-weight: 700;
    border-radius: 15px ;
    cursor: pointer;
    transition: background-color 0.5s;
  }
  .myButton:hover{
    background-color: #fff;
    transition: background-color 0.5s;
  }
</style>
