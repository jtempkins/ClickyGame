(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"key":1,"id":1,"image":"/assets/images/butterfly.png","clicked":false},{"key":2,"id":2,"image":"/assets/images/unicorn2.png","clicked":false},{"key":3,"id":3,"image":"/assets/images/dragon.png","clicked":false},{"key":4,"id":4,"image":"/assets/images/egyptian.png","clicked":false},{"key":5,"id":5,"image":"/assets/images/gnome.png","clicked":false},{"key":6,"id":6,"image":"/assets/images/horse.png","clicked":false},{"key":7,"id":7,"image":"/assets/images/octopus.png","clicked":false},{"key":8,"id":8,"image":"/assets/images/pixie.png","clicked":false},{"key":9,"id":9,"image":"/assets/images/pony.png","clicked":false},{"key":10,"id":10,"image":"/assets/images/rockyBullwinkle.png","clicked":false},{"key":11,"id":11,"image":"/assets/images/slime.png","clicked":false},{"key":12,"id":12,"image":"/assets/images/unicorn.png","clicked":false}]')},,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),s=a(9),n=a.n(s),l=a(1),r=a(2),o=a(6),m=a(4),u=a(3),g=a(7),k=(a(15),a(16),function(e){return i.a.createElement("div",{className:"navbar "},i.a.createElement("div",null,"Clicky Game"),i.a.createElement("div",{className:e.clickQuality},e.clickImage),i.a.createElement("div",null,"Score: ",e.score," ",i.a.createElement("span",{className:"pipe"},"|")," High Score: ",e.highScore))}),h=(a(17),function(){return i.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},i.a.createElement("p",{className:"m-0"},"Click on an image and earn points. If you click on the same image twice you lose!"))}),d=a(5),f=(a(18),function(e){return i.a.createElement("div",{className:"card",key:e.target.key},i.a.createElement("img",{className:"card-img-top card-height",src:e.target.image,alt:""}))}),y=(a(19),function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={count:0},a.handleIncrement=function(){a.setState({count:a.state.count+1}),console.log(a.state.count)},a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"row"},d.map((function(t){return i.a.createElement("div",{className:"col-md-3",key:t.id},i.a.createElement(f,{target:t,className:"btn btn-primary",onClick:e.handleIncrement}))})))}}]),t}(c.Component)),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={score:0,highScore:0,clickQuality:"",clickImage:"",mysticals:a.shuffleArray(),wasClicked:[],shake:!1},a.clickEvent=a.checkClicked.bind(Object(u.a)(a)),a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"shuffleArray",value:function(){for(var e=d.slice(),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t}},{key:"checkClicked",value:function(e){var t=this,a=this.state.wasClicked.slice(),c=this.shuffleArray(),i=this.state.score,s=this.state.highScore;if(this.state.wasClicked.includes(e)||(i===s?(i++,s++):i++,a.push(e)),this.state.wasClicked.includes(e)){return this.setState({score:0,highScore:s,clickImage:"incorrect",clickQuality:"Incorrect guess!",mysticals:c,wasClicked:[],shake:!0})}return this.setState({score:i,highScore:s,clickImage:"correct",clickQuality:"You Guessed Correctly!",mysticals:c,wasClicked:a,shake:!1}),setTimeout((function(){return t.setState({clickImage:""})}),500)}},{key:"render",value:function(){var e=this.state;return i.a.createElement("div",null,i.a.createElement(k,{score:e.score,highScore:e.highScore,clickImage:e.clickImage,clickQuality:e.clickQuality}),i.a.createElement(h,null),i.a.createElement(y,{shake:e.shake,mysticals:e.mysticals,clickEvent:this.clickEvent}))}}]),t}(c.Component);a(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f5404187.chunk.js.map