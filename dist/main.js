(()=>{var e={937:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(645),i=r.n(n)()((function(e){return e[1]}));i.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}button{font-size:1.5rem;background-color:#7ed5d8;border:1px solid #fff;border-radius:5px;padding:10px}button:hover{cursor:pointer;background-color:#38b4b8}#startup{display:flex;flex-direction:column;align-items:center;border:1px solid gray;border-radius:5px;width:70%;margin:auto;margin-top:20px;padding:10px}#startup>button{padding:10px 30px;margin-top:5px;margin-bottom:5px}#startup h2{text-align:center}#player-list{margin-top:5px;margin-bottom:5px}#startup form{display:flex;align-items:center;justify-content:space-evenly;font-size:1.5rem;border:1px solid gray;border-radius:5px;padding:8px}#startup form label{display:flex;margin-right:10px}#startup form input[type=checkbox]:hover{cursor:pointer}#startup form img{border:1px solid gray;margin-right:10px}#startup form button{font-size:1.5rem;background-color:#7ed5d8;border:1px solid #fff;border-radius:5px;padding:10px}#startup form button:hover{cursor:pointer;background-color:#38b4b8}#icon-select{position:relative}.icon-choice:hover,#current-icon:hover{cursor:pointer;border-color:#ff0 !important}#icon-choices{position:absolute;top:-90px;left:-75px;display:flex;z-index:1;background-color:rgba(255,235,205,.9);padding:15px}#icon-choices img{margin-left:4px;margin-right:4px}.player-entry{display:flex;align-items:center;margin-bottom:10px}.player-entry *{margin-right:10px}.error{color:red}#rules{position:absolute;top:0;background-color:rgba(100,100,100,.5);z-index:1;width:100%;min-height:100vh;display:flex;justify-content:center}.modal{background-color:bisque;width:80%;margin-top:25px;margin-bottom:25px;padding:10px;border:1px solid #fff;border-radius:5px;display:flex;flex-direction:column;align-items:center}.modal h2,.modal p{margin-bottom:10px}*{box-sizing:border-box}html{position:relative}h1{font-size:3rem;text-align:center}h2{font-size:2rem;text-align:center}#card-list{display:flex;max-width:100% !important;overflow-x:hidden;scroll-behavior:smooth}#flippable-card-list{display:flex;width:680px;height:500px;justify-content:center;align-items:center;flex-wrap:wrap;margin:0 auto}#flippable-card-list .card{background-color:initial !important}.card{min-height:100px;min-width:100px;max-height:100px;max-width:100px;background-color:blue;margin:1rem;display:flex;justify-content:center;align-items:center}.player-image{height:50px;width:50px;max-height:50px;max-width:50px;background-color:red}.hidden{display:none !important}.test-img{position:fixed;top:0}',""]);const o=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&i[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},798:function(e,t,r){e=r.nmd(e),function(r,n){"use strict";var i={};r.PubSub=i,function(e){var t={},r=-1;function n(e,t,r){try{e(t,r)}catch(e){setTimeout(function(e){return function(){throw e}}(e),0)}}function i(e,t,r){e(t,r)}function o(e,r,o,a){var l,c=t[r],u=a?i:n;if(Object.prototype.hasOwnProperty.call(t,r))for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&u(c[l],e,o)}function a(e){var r=String(e);return Boolean(Object.prototype.hasOwnProperty.call(t,r)&&function(e){var t;for(t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!0;return!1}(t[r]))}function l(e,t,r,n){var i=function(e,t,r){return function(){var n=String(e),i=n.lastIndexOf(".");for(o(e,e,t,r);-1!==i;)i=(n=n.substr(0,i)).lastIndexOf("."),o(e,n,t,r);o(e,"*",t,r)}}(e="symbol"==typeof e?e.toString():e,t,n);return!!function(e){for(var t=String(e),r=a(t)||a("*"),n=t.lastIndexOf(".");!r&&-1!==n;)n=(t=t.substr(0,n)).lastIndexOf("."),r=a(t);return r}(e)&&(!0===r?i():setTimeout(i,0),!0)}e.publish=function(t,r){return l(t,r,!1,e.immediateExceptions)},e.publishSync=function(t,r){return l(t,r,!0,e.immediateExceptions)},e.subscribe=function(e,n){if("function"!=typeof n)return!1;e="symbol"==typeof e?e.toString():e,Object.prototype.hasOwnProperty.call(t,e)||(t[e]={});var i="uid_"+String(++r);return t[e][i]=n,i},e.subscribeAll=function(t){return e.subscribe("*",t)},e.subscribeOnce=function(t,r){var n=e.subscribe(t,(function(){e.unsubscribe(n),r.apply(this,arguments)}));return e},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(e){var r;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&0===r.indexOf(e)&&delete t[r]},e.countSubscriptions=function(e){var r,n,i=0;for(r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&0===r.indexOf(e)){for(n in t[r])i++;break}return i},e.getSubscriptions=function(e){var r,n=[];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&0===r.indexOf(e)&&n.push(r);return n},e.unsubscribe=function(r){var n,i,o,a="string"==typeof r&&(Object.prototype.hasOwnProperty.call(t,r)||function(e){var r;for(r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&0===r.indexOf(e))return!0;return!1}(r)),l=!a&&"string"==typeof r,c="function"==typeof r,u=!1;if(!a){for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(i=t[n],l&&i[r]){delete i[r],u=r;break}if(c)for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&i[o]===r&&(delete i[o],u=!0)}return u}e.clearSubscriptions(r)}}(i),void 0!==e&&e.exports&&(t=e.exports=i),t.PubSub=i,e.exports=t=i}("object"==typeof window&&window||this)},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},a=[],l=0;l<e.length;l++){var c=e[l],u=n.base?c[0]+n.base:c[0],s=o[u]||0,d="".concat(u," ").concat(s);o[u]=s+1;var p=r(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:d,updater:i(f,n),references:1}),a.push(d)}return a}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var o=n(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var l=r(o[a]);t[l].references--}for(var c=n(e,i),u=0;u<o.length;u++){var s=r(o[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=c}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,i=r.media,o=r.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";var e=r(379),t=r.n(e),n=r(795),i=r.n(n),o=r(569),a=r.n(o),l=r(565),c=r.n(l),u=r(216),s=r.n(u),d=r(589),p=r.n(d),f=r(937),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=s(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var m=r(798),h=r.n(m);const b="BUILD_CARD",y="BUILD_FLIPPABLE_CARD",v="BUILD_PLAYER",x="SUBMIT_PLAYER_FORM",I="START_GAME",P="SHOW_RULES",C="SHOW_ICON_CHOICES",O="SEND_LOG",S=(e,t,r=null)=>{let n=document.createElement(e);return t&&(n.className=t),r&&r.appendChild(n),n};function E(e,t,r){t.includes(e.target)||r.classList.add("hidden")}function T(e){return e.sort((()=>.5-Math.random()))}function k(e,t){return t===e.length-1?0:++t}const w=(e,t,r)=>{let n,i;function o(e){i.style.backgroundImage=`url('${e}')`}return{build:function(n="card"){return i=S("div",n,t),i.setAttribute("data-id",r),o(e),i},setImage:o,buildPlayer:function(e){n=e},removePlayer:function(){n.dom.remove(),n=null},hasPlayer:function(){return null!=n},getPlayer:function(){return n},getDOM:function(){return i},setDOM:function(e){i=e},getId:function(){return r},getImageSrc:function(){return e},getParentNode:function(){return t}}},L=(e,t,r,n="images/blank.png")=>{let{build:i,setImage:o,getDOM:a,setDOM:l,getId:c,getImageSrc:u,getParentNode:s}=w(n,t,r),d=!1;return{build:i,setImage:o,flipImage:function(){d=!d,o(d?e:n)},getDOM:a,setDOM:l,getId:c,getImageSrc:u,getRealImageSrc:function(){return e},getParentNode:s,isFlipped:function(){return d}}},M=(()=>{let e=0;const t=[];let r=[];return{getCards:function(){return t},getFlippableCards:function(){return r},addFlippableCard:function(e){r.push(e),h().publishSync(y,e)},addCard:function(e){t.push(e),h().publishSync(b,e)},getPlayersLength:function(){return e},setPlayersLength:function(t){e=t},removeFlippableCard:function(e){r=r.filter((t=>t!=e)),e.getDOM().remove()},getCardById:function(e){return t.filter((t=>t.getId()===e))[0]},getFlippableCardById:function(e){return r.filter((t=>t.getId()===e))[0]},getCardPlayer:function(e){let r=t.filter((t=>t.getPlayer()&&t.getPlayer().id===e.id));return r.length>0?r[0]:null},getCardPosition:function(e){let r=0;for(let n of t){if(e.getId()==n.getId())break;++r}return r},getCard:function(e){return t[e]},getFlippableCard:function(e){return r[e]}}})(),A=document.querySelector("main"),B=e=>{let t=document.getElementById(e);return null==t&&(t=S("ul",null,A),t.setAttribute("id",e)),{dom:t}},j=(()=>{const{dom:e}=B("card-list");return{dom:e,scrollTo:function(t){let{right:r}=t.getBoundingClientRect();e.scrollTo(r,0)},moveToEndIfReach:function(t){(function(t){return[...e.children].indexOf(t)+1===e.children.length})(t)&&function(e){let t=e.children[0];e.removeChild(t),e.appendChild(t)}(e)}}})(),D=(()=>{const{dom:e}=B("flippable-card-list");return{dom:e}})();let F=[];for(let e=1;e<=7;e++)N=`images/animal${e}.png`,F.push({src:N});var N;const _=F;function q(e,t){if(!function(e){let t=M.getCards()[e];return!t||!t.player}(t))return!1;let r=M.getCard(t);return h().publishSync(v,{card:r,player:e}),!0}function R(e){return k(M.getCards(),e)}function z(e){for(let t of T(_)){let r=(e?M.getFlippableCards():M.getCards()).length+1;if(e){let e=L(t.src,D.dom,r);M.addFlippableCard(e)}else{let e=w(t.src,j.dom,r);M.addCard(e)}}}function U(e){M.setPlayersLength(e.length),z(),z(),z(!0),function(e){e.forEach((e=>{let t=e.type?H:G;!function(e,t,r){let n=r.call(null,e,t,W.players.length+1);W.players.push(n),function(e){if(!(M.getCards().filter((e=>e.player)).length<M.getPlayersLength()))return;let t=function(){let e=M.getCards().length,t=Math.round(e/M.getPlayersLength()),r=[];for(let n=0;n<e;n+=t)M.getCards()[n].hasPlayer()||r.push(n);return r}();for(let r of t)if(q(e,r))return!0}(n)}(e.name,e.icon,t)}))}(e),W.setPlayerTurn(T(W.players)[0]),h().publish(O,{type:0,text:`Game started. ${W.getPlayerTurn().name} starts.`}),W.callAi()}function $(e,t){return e.filter((e=>e.id===t))[0]}const G=(e,t,r,n=!1)=>({name:e,imageSrc:t,id:r,finish_line:1,ai:n}),H=(e,t,r)=>{const n=G(e,t,r,!0);let i=[];return Object.assign(n,{memorize:function(e,t){let r={cardImage:e,position:t};(function(e,t){return i.filter((r=>r.cardImage==e&&r.position==t)).length>0})(e,t)||i.push(r)},selectBestChoice:function(e){let t=R(M.getCardPosition(e)),r=M.getCard(t).getImageSrc(),n=(o=r,i.filter((e=>e.cardImage==o))[0]);var o;return n?M.getFlippableCard(n.position):M.getFlippableCard(function(){let e=0,t=M.getFlippableCards().length;for(;i.filter((t=>t.position==e)).length>0;)e=Math.round(Math.random()*(t-1));return e}())}})},Z=(()=>{let e=S("img","test-img",document.querySelector("main"));return{clickedAtSameImage:function(e,t,r){for(;t.hasPlayer();){h().publish(O,{type:0,text:`${W.getPlayerTurn().name} found the correct image`});let e=t.getPlayer();if(e=$(W.players,e.id),e.finish_line>0&&(e.finish_line-=1),W.getPlayerTurn().finish_line+=1,t.hasPlayer()&&e.id==W.getPlayerTurn().id)break;t.hasPlayer()&&(r=R(r),t=M.getCard(r))}j.scrollTo(t.getDOM()),j.moveToEndIfReach(t.getDOM()),e.removePlayer(),h().publishSync(v,{card:t,player:W.getPlayerTurn()})},skipToNextPlayer:function(){let t=W.players.indexOf(W.getPlayerTurn());var r;W.setPlayerTurn(W.players[(r=t,k(W.players,r))]),h().publish(O,{type:3,text:`Wrong choose. Now ${W.getPlayerTurn().name}'s turn`});let n=M.getCardPlayer(W.getPlayerTurn());e.src=n.getPlayer().imageSrc,j.scrollTo(n.getDOM()),j.moveToEndIfReach(n.getDOM())},wonTheGame:function(e){M.getFlippableCards().forEach((e=>e.getDOM().removeEventListener("click",W.flipCardEvent)))}}})(),W=(()=>{let e=null,t=[],r=!1;function n(n){if(!n)return void Z.skipToNextPlayer();if(r&&!e.ai)return;let o=M.getFlippableCards().indexOf(n);if(n.isFlipped())return;!function(e,n){r=!0,e.flipImage(),setTimeout((()=>{e.flipImage(),r=!1}),1e3),t.filter((e=>e.ai)).forEach((t=>t.memorize(e.getRealImageSrc(),n)))}(n,o);let a=M.getCardPlayer(W.getPlayerTurn()),l=R(M.getCardPosition(a)),c=M.getCard(l);n.getRealImageSrc()===c.getImageSrc()?Z.clickedAtSameImage(a,c,l):Z.skipToNextPlayer();let u=function(){let e=t.filter((e=>e.finish_line>0));return e.length>1?null:1===e.length?e[0]:null}();if(null!=u)return console.log("ok has winner",u),h().publish(O,{type:1,text:`${u.name} won the game!`}),Z.wonTheGame(u);e.ai&&setTimeout((()=>i()),1100)}function i(){if(e.ai){let t=M.getCardPlayer(e);return n(e.selectBestChoice(t))}}return{setPlayerTurn:function(t){e=t},getPlayerTurn:function(){return e},flipCard:n,flipCardEvent:function(t){if(e.ai)return;let r=Number.parseInt(t.target.getAttribute("data-id"));n(M.getFlippableCardById(r))},players:t,callAi:i}})();h().subscribe(b,(function(e,t){let r=t.getParentNode(),n=t.getId(),i=t.getImageSrc(),o=S("div","card",r);t.setDOM(o),o.setAttribute("data-id",n),t.setImage(i)})),h().subscribe(y,(function(e,t){let r=t.getParentNode(),n=t.getId(),i=t.getImageSrc(),o=S("div","card",r);t.setDOM(o),o.setAttribute("data-id",n),t.setImage(i),o.addEventListener("click",W.flipCardEvent)})),h().subscribe(v,(function(e,t){let r={name:t.player.name,imageSrc:t.player.imageSrc,dom:S("img","player-image",t.card.getDOM()),id:t.player.id};r.dom.src=t.player.imageSrc,t.card.buildPlayer(r)}));const Y=document.getElementById("rules"),J=document.querySelector(".modal"),X=document.getElementById("player-list"),K=document.getElementById("startup"),Q=document.getElementById("errors"),V=document.getElementsByTagName("main")[0],ee=document.getElementById("icon-choices"),te=document.getElementById("current-icon");h().subscribe(x,(function(e,t){let{event:r,playerList:n}=t,i={name:r.target.elements.playerName.value,type:r.target.elements.playerType.checked,icon:r.target.elements.playerIcon.value};n.push(i),function(e,t){let r=S("div","player-entry",X),n=S("p",null),i=S("img",null),o=S("p",null),a=S("button",null);n.textContent=e.name,i.src=e.icon,o.textContent=e.type?"(Bot)":"",a.textContent="X",a.addEventListener("click",(()=>{let n=t.indexOf(e);t.splice(n,1),r.remove()})),r.appendChild(i),r.appendChild(n),r.appendChild(o),r.appendChild(a)}(i,n),r.target.reset()})),h().subscribe(I,(function(e,t){(function(e){for(;e.firstChild;)e.lastChild.remove()})(Q),t.length<2?S("p","error",Q).textContent="You must have at least 2 players to play!":(V.classList.remove("hidden"),K.classList.add("hidden"),U(t))})),h().subscribe(P,(function(e){Y.classList.remove("hidden"),document.body.addEventListener("click",(e=>{E(e,[J],Y)}))})),h().subscribe(C,(function(e){ee.classList.toggle("hidden"),document.body.addEventListener("click",(e=>{E(e,[ee,te],ee)}))}));const re=document.getElementById("player-form"),ne=document.getElementById("start-game"),ie=document.querySelector(".show-rules"),oe=document.getElementById("current-icon"),ae=document.getElementById("playerIcon"),le=document.querySelectorAll(".icon-choice"),ce=[];re.reset(),re.addEventListener("submit",(e=>{if(e.preventDefault(),ce.length>=4)return;let t={event:e,playerList:ce};h().publish(x,t)})),ne.addEventListener("click",(()=>{h().publish(I,ce)})),ie.addEventListener("click",(()=>{h().publish(P)})),oe.addEventListener("click",(()=>{h().publish(C)})),le.forEach((e=>{e.addEventListener("click",(()=>{oe.src=e.src,ae.value=e.src}))}))})()})();