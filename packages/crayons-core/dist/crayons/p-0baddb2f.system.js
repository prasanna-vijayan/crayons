System.register(["./p-f887c8bb.system.js"],(function(e){"use strict";var n,r;return{setters:[function(e){n=e.c;r=e.a}],execute:function(){e({c:o,g:s});var t=n((function(e,n){(function(n,r){{e.exports=r}})(r,(function(){var e={};e.version="0.3.5";var n=e.settings={minimum:.08,easing:"linear",positionUsing:"",speed:200,trickle:true,trickleSpeed:200,showSpinner:true,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};e.configure=function(e){var r,t;for(r in e){t=e[r];if(t!==undefined&&e.hasOwnProperty(r))n[r]=t}return this};e.status=null;e.set=function(t){var a=e.isStarted();t=r(t,n.minimum,1);e.status=t===1?null:t;var u=e.render(!a),l=u.querySelector(n.barSelector),c=n.speed,f=n.easing;s((function(r){if(n.positionUsing==="")n.positionUsing=e.getPositioningCSS();o(l,i(t,c,f));if(t===1){o(u,{transition:"none",opacity:1});setTimeout((function(){o(u,{transition:"all "+c+"ms linear",opacity:0});setTimeout((function(){e.remove();r()}),c)}),c)}else{setTimeout(r,c)}}));return this};e.isStarted=function(){return typeof e.status==="number"};e.start=function(){if(!e.status)e.set(0);var r=function(){setTimeout((function(){if(!e.status)return;e.trickle();r()}),n.trickleSpeed)};if(n.trickle)r();return this};e.done=function(n){if(!n&&!e.status)return this;return e.inc(.3+.5*Math.random()).set(1)};e.inc=function(n){var t=e.status;if(!t){return e.start()}else if(t>1){return}else{if(typeof n!=="number"){if(t>=0&&t<.2){n=.1}else if(t>=.2&&t<.5){n=.04}else if(t>=.5&&t<.8){n=.02}else if(t>=.8&&t<.99){n=.005}else{n=0}}t=r(t+n,0,.994);return e.set(t)}};e.trickle=function(){return e.inc()};(function(){var n=0,r=0;e.promise=function(t){if(!t||t.state()==="resolved"){return this}if(r===0){e.start()}n++;r++;t.always((function(){r--;if(r===0){n=0;e.done()}else{e.set((n-r)/n)}}));return this}})();e.getElement=function(){var n=e.getParent();if(n){var r=Array.prototype.slice.call(n.querySelectorAll(".nprogress")).filter((function(e){return e.parentElement===n}));if(r.length>0){return r[0]}}return null};e.getParent=function(){if(n.parent instanceof HTMLElement){return n.parent}if(typeof n.parent==="string"){return document.querySelector(n.parent)}};e.render=function(r){if(e.isRendered())return e.getElement();u(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress";i.className="nprogress";i.innerHTML=n.template;var s=i.querySelector(n.barSelector),a=r?"-100":t(e.status||0),l=e.getParent(),c;o(s,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"});if(!n.showSpinner){c=i.querySelector(n.spinnerSelector);c&&f(c)}if(l!=document.body){u(l,"nprogress-custom-parent")}l.appendChild(i);return i};e.remove=function(){e.status=null;l(document.documentElement,"nprogress-busy");l(e.getParent(),"nprogress-custom-parent");var n=e.getElement();n&&f(n)};e.isRendered=function(){return!!e.getElement()};e.getPositioningCSS=function(){var e=document.body.style;var n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";if(n+"Perspective"in e){return"translate3d"}else if(n+"Transform"in e){return"translate"}else{return"margin"}};function r(e,n,r){if(e<n)return n;if(e>r)return r;return e}function t(e){return(-1+e)*100}function i(e,r,i){var s;if(n.positionUsing==="translate3d"){s={transform:"translate3d("+t(e)+"%,0,0)"}}else if(n.positionUsing==="translate"){s={transform:"translate("+t(e)+"%,0)"}}else{s={"margin-left":t(e)+"%"}}s.transition="all "+r+"ms "+i;return s}var s=function(){var e=[];function n(){var r=e.shift();if(r){r(n)}}return function(r){e.push(r);if(e.length==1)n()}}();var o=function(){var e=["Webkit","O","Moz","ms"],n={};function r(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,n){return n.toUpperCase()}))}function t(n){var r=document.body.style;if(n in r)return n;var t=e.length,i=n.charAt(0).toUpperCase()+n.slice(1),s;while(t--){s=e[t]+i;if(s in r)return s}return n}function i(e){e=r(e);return n[e]||(n[e]=t(e))}function s(e,n,r){n=i(n);e.style[n]=r}return function(e,n){var r=arguments,t,i;if(r.length==2){for(t in n){i=n[t];if(i!==undefined&&n.hasOwnProperty(t))s(e,t,i)}}else{s(e,r[1],r[2])}}}();function a(e,n){var r=typeof e=="string"?e:c(e);return r.indexOf(" "+n+" ")>=0}function u(e,n){var r=c(e),t=r+n;if(a(r,n))return;e.className=t.substring(1)}function l(e,n){var r=c(e),t;if(!a(e,n))return;t=r.replace(" "+n+" "," ");e.className=t.substring(1,t.length-1)}function c(e){return(" "+(e&&e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e}))}));var i={parent:"body",minimum:.08,easing:"ease",speed:200,trickle:true,trickleSpeed:200,template:'<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="1"></div>',show:false};function s(e){if(e===void 0){e={}}var n,r,t,s,o,a,u,l;return{parent:(n=e.parent)!==null&&n!==void 0?n:i.parent,minimum:(r=e.minimum)!==null&&r!==void 0?r:i.minimum,easing:(t=e.easing)!==null&&t!==void 0?t:i.easing,speed:(s=e.speed)!==null&&s!==void 0?s:i.speed,trickle:(o=e.trickle)!==null&&o!==void 0?o:i.trickle,trickleSpeed:(a=e.trickleSpeed)!==null&&a!==void 0?a:i.trickleSpeed,template:(u=e.template)!==null&&u!==void 0?u:i.template,show:(l=e.show)!==null&&l!==void 0?l:i.show}}function o(e){var n=Object.assign(Object.assign({},s(e)),{barSelector:'[role="progressbar"]'});var r=t().configure(n);if(!document.querySelector("#fw-progress-bar-style")){var i=document.createElement("style");i.id="fw-progress-bar-style";i.innerHTML="\n            .nprogress .bar {\n              background: var(--progress-loader-color,#2c5cc5);\n              position: fixed;\n              z-index: 1031;\n              top: 0;\n              left: 0;\n              width: 100%;\n              height: var(--progress-loader-height,2px);\n            }\n            .nprogress-custom-parent {\n              overflow: hidden;\n              position: relative;\n            }\n            .nprogress-custom-parent .nprogress .bar {\n              position: absolute;\n            }\n      ";document.head.appendChild(i)}return{start:a(r.start,n),done:a(r.done,n),set:a(r.set,n),inc:a(r.inc,n)}}function a(e,n){return function(){var r=[];for(var t=0;t<arguments.length;t++){r[t]=arguments[t]}try{if(n.parent){if(!document.querySelector(n.parent)){console.error("Document Selector ".concat(n.parent," not found"));return}}e.apply(this,r)}catch(i){console.error("Error occurred in calling Progress Loader Functions",i)}}}}}}));