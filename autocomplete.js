!function(e,t){"function"==typeof define&&define.amd?define("autocomplete",[],t):"object"==typeof exports?module.exports=t(require,exports):t(null,e)}(this,function(e,t){"use strict";function n(e){function t(){E++,m=[],s=void 0,h.display="none"}function n(){for(;v.firstChild;)v.removeChild(v.firstChild);var n=!1,o="#9?$";m.forEach(function(e){e.group&&(n=!0)});var r=function(e){var t=p.createElement("div");return t.textContent=e.label,t};e.render&&(r=e.render);var l=function(e){var t=p.createElement("div");return t.textContent=e,t};if(e.renderGroup&&(l=e.renderGroup),m.forEach(function(n){if(n.group&&n.group!==o){o=n.group;var i=l(n.group);i&&(i.className+=" group",v.appendChild(i))}var a=r(n);a&&(a.addEventListener("click",function(o){e.itemSelected(n.item,d),t(),o.preventDefault(),o.stopPropagation()}),n===s&&(a.className+=" selected"),v.appendChild(a))}),e.emptyMsg&&m.length<1){var a=p.createElement("div");a.className="empty",a.textContent=e.emptyMsg,v.appendChild(a)}var f=d.getBoundingClientRect(),u=f.top+d.offsetHeight;h.top=u+"px",h.left=f.left+"px",h.width=d.offsetWidth+"px",h.maxHeight=window.innerHeight-u+"px",h.height="auto",h.display="block",i()}function o(o){var i=o.which||o.keyCode||0,r=++E;if(38!==i&&40!==i&&13!==i){if(27===i)return void t();d.value.length>=g?d.value!==c&&e.fetch(d.value,function(e){E===r&&e&&(m=e,s=m.length>0?m[0]:void 0,n())}):t(),c=d.value}}function i(){var e=v.getElementsByClassName("selected");if(e.length>0){var t=e[0],n=t.previousElementSibling;if(n&&n.className.indexOf("group")!==-1&&!n.previousElementSibling&&(t=n),t.offsetTop<v.scrollTop)v.scrollTop=t.offsetTop;else{var o=t.offsetTop+t.offsetHeight,i=v.scrollTop+v.offsetHeight;o>i&&(v.scrollTop+=o-i)}}}function r(){if(m.length<1)s=void 0;else if(s===m[0])s=m[m.length-1];else for(var e=m.length-1;e>0;e--)if(s===m[e]||1===e){s=m[e-1];break}}function l(){if(m.length<1&&(s=void 0),!s||s===m[m.length-1])return void(s=m[0]);for(var e=0;e<m.length-1;e++)if(s===m[e]){s=m[e+1];break}}function a(o){var i=o.which||o.keyCode||0;return 38===i||40===i?(38===i?r():l(),n(),void o.preventDefault()):void(13===i&&s&&(e.itemSelected(s.item,d),t()))}function f(){setTimeout(function(){p.activeElement!==d&&t()},100)}function u(){d.removeEventListener("keydown",a),d.removeEventListener("keyup",o),d.removeEventListener("focus",o),d.removeEventListener("blur",f),t();var e=v.parentNode;e&&e.removeChild(v)}var d,s,c,p=document,v=p.createElement("div"),h=v.style,m=[],g=e.minLength||2,E=0;if(!e.input)throw"input undefined";return d=e.input,c=d.value,p.body.appendChild(v),v.className="autocomplete "+(e.className||""),h.position="absolute",d.addEventListener("keydown",a),d.addEventListener("keyup",o),d.addEventListener("focus",o),d.addEventListener("blur",f),{destroy:u}}t.autocomplete=n});