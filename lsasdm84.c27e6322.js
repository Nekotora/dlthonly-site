parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"bSfm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IonIcon=void 0;var o=require("./ionicons.core.js"),t=function(){function t(){this.isVisible=!1,this.lazy=!0}return t.prototype.componentWillLoad=function(){var o=this;this.waitUntilVisible(this.el,"50px",function(){o.isVisible=!0,o.loadIcon()})},t.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.waitUntilVisible=function(o,t,e){var i=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var r=this.io=new this.win.IntersectionObserver(function(o){o[0].isIntersecting&&(r.disconnect(),i.io=void 0,e())},{rootMargin:t});r.observe(o)}else e()},t.prototype.loadIcon=function(){var o=this;if(!this.isServer&&this.isVisible){var t=this.getUrl();t&&i(t).then(function(t){o.svgContent=s(o.doc,t,o.el["s-sc"])})}if(!this.ariaLabel){var e=r(this.name,this.mode,this.ios,this.md);e&&(this.ariaLabel=e.replace("ios-","").replace("md-","").replace(/\-/g," "))}},t.prototype.getUrl=function(){var o=n(this.src);return o||((o=r(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(o):(o=n(this.icon))?o:(o=r(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(o):null)},t.prototype.getNamedUrl=function(o){return this.resourcesUrl+"svg/"+o+".svg"},t.prototype.hostData=function(){var o;return{role:"img",class:Object.assign({},c(this.color),(o={},o["icon-"+this.size]=!!this.size,o))}},t.prototype.render=function(){return!this.isServer&&this.svgContent?(0,o.h)("div",{class:"icon-inner",innerHTML:this.svgContent}):(0,o.h)("div",{class:"icon-inner"})},Object.defineProperty(t,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important;--ion-color-base:currentColor}:host(.icon-small){font-size:var(--ion-icon-size-small,18px)!important}:host(.icon-large){font-size:var(--ion-icon-size-large,32px)!important}.icon-inner,svg{display:block;height:100%;width:100%}svg{fill:var(--ion-color-base);stroke:var(--ion-color-base)}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},enumerable:!0,configurable:!0}),t}(),e=new Map;function i(o){var t=e.get(o);return t||(t=fetch(o,{cache:"force-cache"}).then(function(o){return o.ok?o.text():Promise.resolve(null)}),e.set(o,t)),t}function r(o,t,e,i){return t=(t||"md").toLowerCase(),e&&"ios"===t?o=e.toLowerCase():i&&"md"===t?o=i.toLowerCase():o&&(o=o.toLowerCase(),/^md-|^ios-|^logo-/.test(o)||(o=t+"-"+o)),"string"!=typeof o||""===o.trim()?null:""!==o.replace(/[a-z]|-|\d/gi,"")?null:o}function n(o){return"string"==typeof o&&(o=o.trim()).length>0&&/(\/|\.)/.test(o)?o:null}function s(o,t,e){if(t){var i=o.createDocumentFragment(),r=o.createElement("div");r.innerHTML=t,i.appendChild(r);for(var n=r.childNodes.length-1;n>=0;n--)"svg"!==r.childNodes[n].nodeName.toLowerCase()&&r.removeChild(r.childNodes[n]);var s=r.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()&&(e&&s.setAttribute(e,""),a(s)))return r.innerHTML}return""}function a(o){if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(var t=0;t<o.attributes.length;t++){var e=o.attributes[t].value;if("string"==typeof e&&0===e.toLowerCase().indexOf("on"))return!1}for(t=0;t<o.childNodes.length;t++)if(!a(o.childNodes[t]))return!1}return!0}function c(o){var t;return o?((t={"ion-color":!0})["ion-color-"+o]=!0,t):null}exports.IonIcon=t;
},{"./ionicons.core.js":"nqC5"}]},{},["bSfm"], null)
//# sourceMappingURL=lsasdm84.c27e6322.map