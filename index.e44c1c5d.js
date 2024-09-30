!function(){function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var t=new/*#__PURE__*/(function(){var r;function e(){var r=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;!function(r,e){if(!(r instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.size=t,this.score=0,this.gameField=Array.from({length:this.size},function(){return Array(r.size).fill(0)})}return r=[{key:"removeZeros",value:function(r){return r.filter(function(r){return 0!==r})}}],function(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}(e.prototype,r),e}()),n=document.querySelector(".start"),o=document.querySelectorAll(".field-row"),i=document.querySelector(".game-score"),a=document.querySelector(".message-start"),c=document.querySelector(".hidden"),f=document.querySelector(".message-win"),s=t.size,u=t.score,l=t.gameField;function v(){for(var r=0;r<s;r++)for(var e=0;e<s;e++){2048===l[r][e]&&f.classList.remove("hidden");var t=o[r].children[e],n=t.textContent=l[r][e]||"";t.className=n?"field-cell field-cell--".concat(n):"field-cell"}i.innerText=u}function d(){var r=Math.floor(Math.random()*s),e=Math.floor(Math.random()*s);0===l[r][e]?l[r][e]=.1>Math.random()?4:2:d()}function m(){var r=e(l),t=!1,n=!1,o=!1;if(r.every(function(e){return r.every(function(r,t){return e[t]>0})})){o=!0;for(var i=0;i<4;i++)for(var a=r[i],f=0;f<4;f++)a[f]===a[f+1]&&(t=!0);r=y(r);for(var s=0;s<4;s++)for(var u=r[s],v=0;v<4;v++)u[v]===u[v+1]&&(n=!0)}t||n||!o||c.classList.remove("hidden")}function y(r){return r.map(function(e,t){return r.map(function(r){return r[t]})})}function h(r){for(var e=!1,t=0;t<r.length-1;t++)r[t]===r[t+1]?(r[t]*=2,r.splice(t+1,1),u+=r[t],e=!0):0===r[t]&&0===r[t+1]&&(e=!1);for(;r.length<s;)r.push(0);return{row:r,moved:e}}function g(r){switch(r.key){case"ArrowLeft":!function(){for(var r=!1,n=0;n<s;n++){var o=e(l[n]),i=t.removeZeros(l[n]),a=h(i);l[n]=i,(a.moved||JSON.stringify(o)!==JSON.stringify(a.row))&&(r=!0)}r&&(d(),m()),v()}();break;case"ArrowRight":!function(){for(var r=!1,n=0;n<s;n++){var o=e(l[n]),i=h(t.removeZeros(l[n].reverse()));l[n]=i.row.reverse(),(i.moved||JSON.stringify(o)!==JSON.stringify(i.row))&&(r=!0)}r&&(d(),m()),v()}();break;case"ArrowUp":!function(){var r=!1;l=y(l);for(var n=0;n<s;n++){var o=e(l[n]),i=h(t.removeZeros(l[n]));l[n]=i.row,(i.moved||JSON.stringify(o)!==JSON.stringify(i.row))&&(r=!0)}l=y(l),r&&(d(),m()),v()}();break;case"ArrowDown":!function(){var r=!1;l=y(l);for(var n=0;n<s;n++){var o=e(l[n]),i=h(t.removeZeros(l[n].reverse()));l[n]=i.row.reverse(),(i.moved||JSON.stringify(o)!==JSON.stringify(i.row))&&(r=!0)}l=y(l),r&&(d(),m()),v()}()}}n.addEventListener("click",function(){document.addEventListener("keydown",g),a.hidden=!0,"Start"===n.innerText?(n.innerText="Restart",n.classList.replace("start","restart")):(c.classList.add("hidden"),u=0,l=l=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),d(),d(),v()})}();
//# sourceMappingURL=index.e44c1c5d.js.map
