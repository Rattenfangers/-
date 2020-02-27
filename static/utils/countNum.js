let state;
let mycount;

function increment() {
  mycount++;
  postMessage(mycount);
  setTimeout(increment,1000);
}

onmessage = function (ev) {
  state = ev.data.state;
  mycount = ev.data.nowcount;
  if (state == "run"){
    self.close();
  }
  increment();
}



