!function(t,e){"function"==typeof define&&define.amd?define(["exports"],e):"object"==typeof exports&&"string"!=typeof exports.nodeName?e(exports):e(t.commonJsStrict={})}(this,function(t){"function"!=typeof Promise&&function(t){function e(t,e){return function(){t.apply(e,arguments)}}function n(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(t,e(o,this),e(r,this))}function i(t){var e=this;return null===this._state?void this._deferreds.push(t):void u(function(){var n=e._state?t.onFulfilled:t.onRejected;if(null!==n){var i;try{i=n(e._value)}catch(e){return void t.reject(e)}t.resolve(i)}else(e._state?t.resolve:t.reject)(e._value)})}function o(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void l(e(n,t),e(o,this),e(r,this))}this._state=!0,this._value=t,s.call(this)}catch(t){r.call(this,t)}}function r(t){this._state=!1,this._value=t,s.call(this)}function s(){for(var t=0,e=this._deferreds.length;e>t;t++)i.call(this,this._deferreds[t]);this._deferreds=null}function a(t,e,n,i){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=i}function l(t,e,n){var i=!1;try{t(function(t){i||(i=!0,e(t))},function(t){i||(i=!0,n(t))})}catch(t){if(i)return;i=!0,n(t)}}var h=setTimeout,u="function"==typeof setImmediate&&setImmediate||function(t){h(t,1)},c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};n.prototype.catch=function(t){return this.then(null,t)},n.prototype.then=function(t,e){var o=this;return new n(function(n,r){i.call(o,new a(t,e,n,r))})},n.all=function(){var t=Array.prototype.slice.call(1===arguments.length&&c(arguments[0])?arguments[0]:arguments);return new n(function(e,n){function i(r,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){i(r,t)},n)}t[r]=s,0==--o&&e(t)}catch(t){n(t)}}if(0===t.length)return e([]);for(var o=t.length,r=0;r<t.length;r++)i(r,t[r])})},n.resolve=function(t){return t&&"object"==typeof t&&t.constructor===n?t:new n(function(e){e(t)})},n.reject=function(t){return new n(function(e,n){n(t)})},n.race=function(t){return new n(function(e,n){for(var i=0,o=t.length;o>i;i++)t[i].then(e,n)})},n._setImmediateFn=function(t){u=t},"undefined"!=typeof module&&module.exports?module.exports=n:t.Promise||(t.Promise=n)}(this),"function"!=typeof window.CustomEvent&&function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t}();var e,n,i,o=["Webkit","Moz","ms"],r=document.createElement("div").style;function s(t){if(t in r)return t;for(var e=t[0].toUpperCase()+t.slice(1),n=o.length;n--;)if((t=o[n]+e)in r)return t}function a(t,e){for(var n in t=t||{},e)e[n]&&e[n].constructor&&e[n].constructor===Object?(t[n]=t[n]||{},a(t[n],e[n])):t[n]=e[n];return t}function l(t){if("createEvent"in document){var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),t.dispatchEvent(e)}else t.fireEvent("onchange")}function h(t,e,n){if("string"==typeof e){var i=e;(e={})[i]=n}for(var o in e)t.style[o]=e[o]}function u(t,e){t.classList?t.classList.add(e):t.className+=" "+e}n=s("transform"),e=s("transformOrigin"),i=s("userSelect");var c=function(t,e,n){this.x=parseFloat(t),this.y=parseFloat(e),this.scale=parseFloat(n)};c.parse=function(t){return t.style?c.parse(t.style[n]):t.indexOf("matrix")>-1||t.indexOf("none")>-1?c.fromMatrix(t):c.fromString(t)},c.fromMatrix=function(t){var e=t.substring(7).split(",");return e.length&&"none"!==t||(e=[1,0,0,1,0,0]),new c(parseInt(e[4],10),parseInt(e[5],10),parseFloat(e[0]))},c.fromString=function(t){var e=t.split(") "),n=e[0].substring("translate3d".length+1).split(","),i=e.length>1?e[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0;return new c(o,r,i)},c.prototype.toString=function(){return"translate3d("+this.x+"px, "+this.y+"px, 0px) scale("+this.scale+")"};var p=function(t){if(!t||!t.style[e])return this.x=0,void(this.y=0);var n=t.style[e].split(" ");this.x=parseFloat(n[0]),this.y=parseFloat(n[1])};function d(t,e,n){var i=e.width,o=e.height,r=t.getContext("2d");switch(t.width=e.width,t.height=e.height,r.save(),n){case 2:r.translate(i,0),r.scale(-1,1);break;case 3:r.translate(i,o),r.rotate(180*Math.PI/180);break;case 4:r.translate(0,o),r.scale(1,-1);break;case 5:t.width=o,t.height=i,r.rotate(90*Math.PI/180),r.scale(1,-1);break;case 6:t.width=o,t.height=i,r.rotate(90*Math.PI/180),r.translate(0,-o);break;case 7:t.width=o,t.height=i,r.rotate(-90*Math.PI/180),r.translate(-i,o),r.scale(1,-1);break;case 8:t.width=o,t.height=i,r.translate(0,i),r.rotate(-90*Math.PI/180)}r.drawImage(e,0,0,i,o),r.restore()}function m(){var t,e,o,r=this.options.viewport.type?"cr-vp-"+this.options.viewport.type:null;this.options.useCanvas=this.options.enableOrientation||f.call(this),this.data={},this.elements={},t=this.elements.boundary=document.createElement("div"),e=this.elements.viewport=document.createElement("div"),this.elements.img=document.createElement("img"),o=this.elements.overlay=document.createElement("div"),this.options.useCanvas?(this.elements.canvas=document.createElement("canvas"),this.elements.preview=this.elements.canvas):this.elements.preview=this.elements.img,u(t,"cr-boundary"),h(t,{width:this.options.boundary.width+"px",height:this.options.boundary.height+"px"}),u(e,"cr-viewport"),r&&u(e,r),h(e,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),e.setAttribute("tabindex",0),u(this.elements.preview,"cr-image"),u(o,"cr-overlay"),this.element.appendChild(t),t.appendChild(this.elements.preview),t.appendChild(e),t.appendChild(o),u(this.element,"croppie-container"),this.options.customClass&&u(this.element,this.options.customClass),function(){var t,e,o,r,s,a=this,u=!1;function p(t,e){var n=a.elements.preview.getBoundingClientRect(),i=s.y+e,o=s.x+t;a.options.enforceBoundary?(r.top>n.top+e&&r.bottom<n.bottom+e&&(s.y=i),r.left>n.left+t&&r.right<n.right+t&&(s.x=o)):(s.y=i,s.x=o)}function d(n){if(n.preventDefault(),!u){if(u=!0,t=n.pageX,e=n.pageY,n.touches){var o=n.touches[0];t=o.pageX,e=o.pageY}s=c.parse(a.elements.preview),window.addEventListener("mousemove",m),window.addEventListener("touchmove",m),window.addEventListener("mouseup",f),window.addEventListener("touchend",f),document.body.style[i]="none",r=a.elements.viewport.getBoundingClientRect()}}function m(i){i.preventDefault();var r=i.pageX,u=i.pageY;if(i.touches){var c=i.touches[0];r=c.pageX,u=c.pageY}var d=r-t,m=u-e,f={};if("touchmove"==i.type&&i.touches.length>1){var g=i.touches[0],w=i.touches[1],b=Math.sqrt((g.pageX-w.pageX)*(g.pageX-w.pageX)+(g.pageY-w.pageY)*(g.pageY-w.pageY));o||(o=b/a._currentZoom);var x=b/o;return v.call(a,x),void l(a.elements.zoomer)}p(d,m),f[n]=s.toString(),h(a.elements.preview,f),y.call(a),e=u,t=r}function f(){u=!1,window.removeEventListener("mousemove",m),window.removeEventListener("touchmove",m),window.removeEventListener("mouseup",f),window.removeEventListener("touchend",f),document.body.style[i]="",w.call(a),R.call(a),o=0}a.elements.overlay.addEventListener("mousedown",d),a.elements.viewport.addEventListener("keydown",function(t){var e=37,l=38,u=39,d=40;if(!t.shiftKey||t.keyCode!=l&&t.keyCode!=d){if(t.keyCode>=37&&t.keyCode<=40){t.preventDefault();var m=function(t){switch(t){case e:return[1,0];case l:return[0,1];case u:return[-1,0];case d:return[0,-1]}}(t.keyCode);s=c.parse(a.elements.preview),document.body.style[i]="none",r=a.elements.viewport.getBoundingClientRect(),function(t){var e=t[0],r=t[1],l={};p(e,r),l[n]=s.toString(),h(a.elements.preview,l),y.call(a),document.body.style[i]="",w.call(a),R.call(a),o=0}(m)}}else{var f=0;f=t.keyCode==l?parseFloat(a.elements.zoomer.value,10)+parseFloat(a.elements.zoomer.step,10):parseFloat(a.elements.zoomer.value,10)-parseFloat(a.elements.zoomer.step,10),a.setZoom(f)}}),a.elements.overlay.addEventListener("touchstart",d)}.call(this),this.options.enableZoom&&function(){var t=this,e=t.elements.zoomerWrap=document.createElement("div"),n=t.elements.zoomer=document.createElement("input");function i(){g.call(t,{value:parseFloat(n.value),origin:new p(t.elements.preview),viewportRect:t.elements.viewport.getBoundingClientRect(),transform:c.parse(t.elements.preview)})}function o(e){var n,o;n=e.wheelDelta?e.wheelDelta/1200:e.deltaY?e.deltaY/1060:e.detail?e.detail/-60:0,o=t._currentZoom+n,e.preventDefault(),v.call(t,o),i.call(t)}u(e,"cr-slider-wrap"),u(n,"cr-slider"),n.type="range",n.step="0.0001",n.value=1,n.style.display=t.options.showZoomer?"":"none",t.element.appendChild(e),e.appendChild(n),t._currentZoom=1,t.elements.zoomer.addEventListener("input",i),t.elements.zoomer.addEventListener("change",i),t.options.mouseWheelZoom&&(t.elements.boundary.addEventListener("mousewheel",o),t.elements.boundary.addEventListener("DOMMouseScroll",o))}.call(this)}function f(){return this.options.enableExif&&window.EXIF}function v(t){if(this.options.enableZoom){var e=this.elements.zoomer,n=L(t,4);e.value=Math.max(e.min,Math.min(e.max,n))}}function g(t){var i=this,o=t?t.transform:c.parse(i.elements.preview),r=t?t.viewportRect:i.elements.viewport.getBoundingClientRect(),s=t?t.origin:new p(i.elements.preview);function a(){var t={};t[n]=o.toString(),t[e]=s.toString(),h(i.elements.preview,t)}if(i._currentZoom=t?t.value:i._currentZoom,o.scale=i._currentZoom,a(),i.options.enforceBoundary){var l=function(t){var e=this._currentZoom,n=t.width,i=t.height,o=this.options.boundary.width/2,r=this.options.boundary.height/2,s=this.elements.preview.getBoundingClientRect(),a=s.width,l=s.height,h=n/2,u=i/2,c=-1*(h/e-o),p=-1*(u/e-r),d=1/e*h,m=1/e*u;return{translate:{maxX:c,minX:c-(a*(1/e)-n*(1/e)),maxY:p,minY:p-(l*(1/e)-i*(1/e))},origin:{maxX:a*(1/e)-d,minX:d,maxY:l*(1/e)-m,minY:m}}}.call(i,r),u=l.translate,d=l.origin;o.x>=u.maxX&&(s.x=d.minX,o.x=u.maxX),o.x<=u.minX&&(s.x=d.maxX,o.x=u.minX),o.y>=u.maxY&&(s.y=d.minY,o.y=u.maxY),o.y<=u.minY&&(s.y=d.maxY,o.y=u.minY)}a(),_.call(i),R.call(i)}function w(){var t=this._currentZoom,i=this.elements.preview.getBoundingClientRect(),o=this.elements.viewport.getBoundingClientRect(),r=c.parse(this.elements.preview.style[n]),s=new p(this.elements.preview),a=o.top-i.top+o.height/2,l=o.left-i.left+o.width/2,u={},d={};u.y=a/t,u.x=l/t,d.y=(u.y-s.y)*(1-t),d.x=(u.x-s.x)*(1-t),r.x-=d.x,r.y-=d.y;var m={};m[e]=u.x+"px "+u.y+"px",m[n]=r.toString(),h(this.elements.preview,m)}function y(){var t=this.elements.boundary.getBoundingClientRect(),e=this.elements.preview.getBoundingClientRect();h(this.elements.overlay,{width:e.width+"px",height:e.height+"px",top:e.top-t.top+"px",left:e.left-t.left+"px"})}p.prototype.toString=function(){return this.x+"px "+this.y+"px"};var b,x,C,E,_=(b=y,x=500,function(){var t=this,e=arguments,n=C&&!E;clearTimeout(E),E=setTimeout(function(){E=null,C||b.apply(t,e)},x),n&&b.apply(t,e)});function R(){var t,e=this.get();I.call(this)&&(this.options.update.call(this,e),this.$?this.$(this.element).trigger("update",e):(window.CustomEvent?t=new CustomEvent("update",{detail:e}):(t=document.createEvent("CustomEvent")).initCustomEvent("update",!0,!0,e),this.element.dispatchEvent(t)))}function I(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function Z(){var t,i,o,r,s,a=0,u=1.5,d=1,m={},f=this.elements.preview,g=this.elements.zoomer,b=new c(0,0,d),x=new p;if(I.call(this)&&!this.data.bound){if(this.data.bound=!0,m[n]=b.toString(),m[e]=x.toString(),m.opacity=1,h(f,m),t=f.getBoundingClientRect(),i=this.elements.viewport.getBoundingClientRect(),o=this.elements.boundary.getBoundingClientRect(),this._originalImageWidth=t.width,this._originalImageHeight=t.height,this.options.enableZoom){this.options.enforceBoundary&&(r=i.width/t.width,s=i.height/t.height,a=Math.max(r,s)),a>=u&&(u=a+1),g.min=L(a,4),g.max=L(u,4);var C=Math.max(o.width/t.width,o.height/t.height);d=null!==this.data.boundZoom?this.data.boundZoom:C,v.call(this,d),l(g)}else this._currentZoom=d;b.scale=this._currentZoom,m[n]=b.toString(),h(f,m),this.data.points.length?function(t){if(4!=t.length)throw"Croppie - Invalid number of points supplied: "+t;var i=t[2]-t[0],o=this.elements.viewport.getBoundingClientRect(),r=this.elements.boundary.getBoundingClientRect(),s={left:o.left-r.left,top:o.top-r.top},a=o.width/i,l=t[1],u=t[0],p=-1*t[1]+s.top,d=-1*t[0]+s.left,m={};m[e]=u+"px "+l+"px",m[n]=new c(d,p,a).toString(),h(this.elements.preview,m),v.call(this,a),this._currentZoom=a}.call(this,this.data.points):function(){var t=this.elements.preview.getBoundingClientRect(),e=this.elements.viewport.getBoundingClientRect(),i=this.elements.boundary.getBoundingClientRect(),o=e.left-i.left,r=e.top-i.top,s=o-(t.width-e.width)/2,a=r-(t.height-e.height)/2,l=new c(s,a,this._currentZoom);h(this.elements.preview,n,l.toString())}.call(this),w.call(this),y.call(this)}}function B(t){var e=this.elements.canvas,n=this.elements.img,i=e.getContext("2d"),o=f.call(this);t=this.options.enableOrientation&&t;i.clearRect(0,0,e.width,e.height),e.width=n.width,e.height=n.height,o?function(t,e){window.EXIF||e(0),EXIF.getData(t,function(){var t=EXIF.getTag(this,"Orientation");e(t)})}(n,function(i){d(e,n,parseInt(i)),t&&d(e,n,t)}):t&&d(e,n,t)}function F(t,e){var n,i=this,o=[],r=null;if("string"==typeof t)n=t,t={};else if(Array.isArray(t))o=t.slice();else{if(void 0===t&&i.data.url)return Z.call(i),R.call(i),null;n=t.url,o=t.points||[],r=void 0===t.zoom?null:t.zoom}i.data.bound=!1,i.data.url=n||i.data.url,i.data.points=(o||i.data.points).map(function(t){return parseFloat(t)}),i.data.boundZoom=r;var s=function(t,e){var n,i=e||new Image;return i.src===t?n=new Promise(function(t,e){t(i)}):(n=new Promise(function(e,n){"http"===t.substring(0,4).toLowerCase()&&i.setAttribute("crossOrigin","anonymous"),i.onload=function(){setTimeout(function(){e(i)},1)}}),i.src=t),i.style.opacity=0,n}(n,i.elements.img);return s.then(function(){i.options.useCanvas&&(i.elements.img.exifdata=null,B.call(i,t.orientation||1)),Z.call(i),R.call(i),e&&e()}),s}function L(t,e){return parseFloat(t).toFixed(e||0)}function X(){var t=this.elements.preview.getBoundingClientRect(),e=this.elements.viewport.getBoundingClientRect(),n=e.left-t.left,i=e.top-t.top,o=(e.width-this.elements.viewport.offsetWidth)/2,r=(e.height-this.elements.viewport.offsetHeight)/2,s=n+this.elements.viewport.offsetWidth+o,a=i+this.elements.viewport.offsetHeight+r,l=this._currentZoom;(l===1/0||isNaN(l))&&(l=1);var h=this.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return n=Math.max(h,n/l),i=Math.max(h,i/l),s=Math.max(h,s/l),a=Math.max(h,a/l),{points:[L(n),L(i),L(s),L(a)],zoom:l}}var M={type:"canvas",format:"png",quality:1},Y=["jpeg","webp","png"];function S(t){var e=this,n=X.call(e),i=a(M,a({},t)),o="string"==typeof t?t:i.type||"viewport",r=i.size,s=i.format,l=i.quality,c=i.backgroundColor,p="boolean"==typeof i.circle?i.circle:"circle"===e.options.viewport.type,d=e.elements.viewport.getBoundingClientRect(),m=d.width/d.height;return"viewport"===r?(n.outputWidth=d.width,n.outputHeight=d.height):"object"==typeof r&&(r.width&&r.height?(n.outputWidth=r.width,n.outputHeight=r.height):r.width?(n.outputWidth=r.width,n.outputHeight=r.width/m):r.height&&(n.outputWidth=r.height*m,n.outputHeight=r.height)),Y.indexOf(s)>-1&&(n.format="image/"+s,n.quality=l),n.circle=p,n.url=e.data.url,n.backgroundColor=c,new Promise(function(t,i){t("canvas"===o?function(t,e){var n=e.points,i=n[0],o=n[1],r=n[2]-n[0],s=n[3]-n[1],a=e.circle,l=document.createElement("canvas"),h=l.getContext("2d"),u=r,c=s;return e.outputWidth&&e.outputHeight&&(u=e.outputWidth,c=e.outputHeight),l.width=u,l.height=c,e.backgroundColor&&(h.fillStyle=e.backgroundColor,h.fillRect(0,0,u,c)),h.drawImage(t,i,o,r,s,0,0,u,c),a&&(h.fillStyle="#fff",h.globalCompositeOperation="destination-in",h.beginPath(),h.arc(u/2,c/2,u/2,0,2*Math.PI,!0),h.closePath(),h.fill()),l.toDataURL(e.format,e.quality)}.call(e,e.elements.preview,n):function(t){var e=t.points,n=document.createElement("div"),i=document.createElement("img"),o=e[2]-e[0],r=e[3]-e[1];return u(n,"croppie-result"),n.appendChild(i),h(i,{left:-1*e[0]+"px",top:-1*e[1]+"px"}),i.src=t.url,h(n,{width:o+"px",height:r+"px"}),n}.call(e,n))})}if(window.jQuery){var j=window.jQuery;j.fn.croppie=function(t){if("string"===typeof t){var e=Array.prototype.slice.call(arguments,1),n=j(this).data("croppie");return"get"===t?n.get():"result"===t?n.result.apply(n,e):"bind"===t?n.bind.apply(n,e):this.each(function(){var n=j(this).data("croppie");if(n){var i=n[t];if(!j.isFunction(i))throw"Croppie "+t+" method not found";i.apply(n,e),"destroy"===t&&j(this).removeData("croppie")}})}return this.each(function(){var e=new k(this,t);e.$=j,j(this).data("croppie",e)})}}function k(t,e){if(this.element=t,this.options=a(a({},k.defaults),e),m.call(this),this.options.url){var n={url:this.options.url,points:this.options.points};delete this.options.url,delete this.options.points,F.call(this,n)}}k.defaults={viewport:{width:100,height:100,type:"square"},boundary:{width:300,height:300},orientationControls:{enabled:!0,leftClass:"",rightClass:""},customClass:"",showZoomer:!0,enableZoom:!0,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,update:function(){}},a(k.prototype,{bind:function(t,e){return F.call(this,t,e)},get:function(){return X.call(this)},result:function(t){return S.call(this,t)},refresh:function(){return function(){Z.call(this)}.call(this)},setZoom:function(t){v.call(this,t),l(this.elements.zoomer)},rotate:function(t){(function(t){if(!this.options.useCanvas)throw"Croppie: Cannot rotate without enableOrientation";var e=this.elements.canvas,n=(this.elements.img,document.createElement("canvas")),i=1;n.width=e.width,n.height=e.height,n.getContext("2d").drawImage(e,0,0),90!==t&&-270!==t||(i=6),-90!==t&&270!==t||(i=8),180!==t&&-180!==t||(i=3),d(e,n,i),g.call(this)}).call(this,t)},destroy:function(){return function(){var t,e;this.element.removeChild(this.elements.boundary),t=this.element,e="croppie-container",t.classList?t.classList.remove(e):t.className=t.className.replace(e,""),this.options.enableZoom&&this.element.removeChild(this.elements.zoomerWrap),delete this.elements}.call(this)}}),t.Croppie=window.Croppie=k,"object"==typeof module&&module.exports&&(module.exports=k)});