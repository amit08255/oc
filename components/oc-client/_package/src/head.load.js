!function(e,t){"use strict";function n(){}function r(e,t){if(e){"object"==typeof e&&(e=[].slice.call(e));for(var n=0,r=e.length;r>n;n++)t.call(e,e[n],n)}}function a(e,n){var r=Object.prototype.toString.call(n).slice(8,-1);return n!==t&&null!==n&&r===e}function o(e){return a("Function",e)}function u(e){return a("Array",e)}function i(e){var t=e.split("/"),n=t[t.length-1],r=n.indexOf("?");return-1!==r?n.substring(0,r):n}function c(e){e=e||n,e._done||(e(),e._done=1)}function l(e,t,r,a){var o="object"==typeof e?e:{test:e,success:t?u(t)?t:[t]:!1,failure:r?u(r)?r:[r]:!1,callback:a||n},i=!!o.test;return i&&o.success?(o.success.push(o.callback),C.load.apply(null,o.success)):!i&&o.failure?(o.failure.push(o.callback),C.load.apply(null,o.failure)):a(),C}function s(e){var t={};if("object"==typeof e)for(var n in e)e[n]&&(t={name:n,url:e[n]});else t={name:i(e),url:e};var r=O[t.name];return r&&r.url===t.url?r:(O[t.name]=t,t)}function d(e){e=e||O;for(var t in e)if(e.hasOwnProperty(t)&&e[t].state!==R)return!1;return!0}function f(e){e.state=x,r(e.onpreload,function(e){e.call()})}function m(e){e.state===t&&(e.state=_,e.onpreload=[],g({url:e.url,type:"cache"},function(){f(e)}))}function p(){var e=arguments,t=e[e.length-1],n=[].slice.call(e,1),a=n[0];return o(t)||(t=null),u(e[0])?(e[0].push(t),C.load.apply(null,e[0]),C):(a?(r(n,function(e){!o(e)&&e&&m(s(e))}),v(s(e[0]),o(a)?a:function(){C.load.apply(null,n)})):v(s(e[0])),C)}function y(){var e=arguments,t=e[e.length-1],n={};return o(t)||(t=null),u(e[0])?(e[0].push(t),C.load.apply(null,e[0]),C):(r(e,function(e){e!==t&&(e=s(e),n[e.name]=e)}),r(e,function(e){e!==t&&(e=s(e),v(e,function(){d(n)&&c(t)}))}),C)}function v(e,t){return t=t||n,e.state===R?void t():e.state===B?void C.ready(e.name,t):e.state===_?void e.onpreload.push(function(){v(e,t)}):(e.state=B,void g(e,function(){e.state=R,t(),r(M[e.name],function(e){c(e)}),S&&d()&&r(M.ALL,function(e){c(e)})}))}function h(e){e=e||"";var t=e.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function g(t,r){function a(t){t=t||e.event,i.onload=i.onreadystatechange=i.onerror=null,r()}function o(n){n=n||e.event,("load"===n.type||/loaded|complete/.test(i.readyState)&&(!j.documentMode||j.documentMode<9))&&(e.clearTimeout(t.errorTimeout),e.clearTimeout(t.cssTimeout),i.onload=i.onreadystatechange=i.onerror=null,r())}function u(){if(t.state!==R&&t.cssRetries<=20){for(var n=0,r=j.styleSheets.length;r>n;n++)if(j.styleSheets[n].href===i.href)return void o({type:"load"});t.cssRetries++,t.cssTimeout=e.setTimeout(u,250)}}r=r||n;var i,c=h(t.url);"css"===c?(i=j.createElement("link"),i.type="text/"+(t.type||"css"),i.rel="stylesheet",i.href=t.url,t.cssRetries=0,t.cssTimeout=e.setTimeout(u,500)):(i=j.createElement("script"),i.type="text/"+(t.type||"javascript"),i.src=t.url),i.onload=i.onreadystatechange=o,i.onerror=a,i.async=!1,i.defer=!1,t.errorTimeout=e.setTimeout(function(){a({type:"timeout"})},7e3);var l=j.head||j.getElementsByTagName("head")[0];l.insertBefore(i,l.lastChild)}function T(){for(var e=j.getElementsByTagName("script"),t=0,n=e.length;n>t;t++){var r=e[t].getAttribute("data-headjs-load");if(r)return void C.load(r)}}function E(e,t){if(e===j)return S?c(t):A.push(t),C;if(o(e)&&(t=e,e="ALL"),u(e)){var n={};return r(e,function(e){n[e]=O[e],C.ready(e,function(){d(n)&&c(t)})}),C}if("string"!=typeof e||!o(t))return C;var a=O[e];if(a&&a.state===R||"ALL"===e&&d()&&S)return c(t),C;var i=M[e];return i?i.push(t):i=M[e]=[t],C}function L(){return j.body?void(S||(S=!0,T(),r(A,function(e){c(e)}))):(e.clearTimeout(C.readyTimeout),void(C.readyTimeout=e.setTimeout(L,50)))}function b(){j.addEventListener?(j.removeEventListener("DOMContentLoaded",b,!1),L()):"complete"===j.readyState&&(j.detachEvent("onreadystatechange",b),L())}var S,j=e.document,A=[],M={},O={},k="async"in j.createElement("script")||"MozAppearance"in j.documentElement.style||e.opera,w=e.head_conf&&e.head_conf.head||"head",C=e[w]=e[w]||function(){C.ready.apply(null,arguments)},_=1,x=2,B=3,R=4;if("complete"===j.readyState)L();else if(j.addEventListener)j.addEventListener("DOMContentLoaded",b,!1),e.addEventListener("load",L,!1);else{j.attachEvent("onreadystatechange",b),e.attachEvent("onload",L);var D=!1;try{D=!e.frameElement&&j.documentElement}catch(N){}D&&D.doScroll&&!function z(){if(!S){try{D.doScroll("left")}catch(t){return e.clearTimeout(C.readyTimeout),void(C.readyTimeout=e.setTimeout(z,50))}L()}}()}C.load=C.js=k?y:p,C.test=l,C.ready=E,C.ready(j,function(){d()&&r(M.ALL,function(e){c(e)}),C.feature&&C.feature("domloaded",!0)})}(window);