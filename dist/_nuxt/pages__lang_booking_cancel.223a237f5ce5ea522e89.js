webpackJsonp([15],{"7cJG":function(t,e,i){"use strict";e.a={data:function(){return{steps:[{title:this.$t("booking.steps.1.title"),number:1},{title:"line"},{title:this.$t("booking.steps.2.title"),number:2},{title:"line"},{title:this.$t("booking.steps.3.title"),number:3},{title:"line"},{title:this.$t("booking.steps.4.title"),number:4}]}},created:function(){this.isB2b&&(this.steps=[{title:this.$t("booking.steps.1.title"),number:1},{title:"line"},{title:this.$t("booking.steps.2.title"),number:2},{title:"line"},{title:this.$t("booking.steps.4.title"),number:3}])},methods:{isActive:function(t){return t===this.currentStep||this.currentStep>=t},isAvailable:function(t){return t<=this.availableSteps&&3!==t}},props:{isB2b:{type:Boolean,required:!1,default:!1},currentStep:{type:Number,required:!0},availableSteps:{type:Number,required:!0},handleStepChange:{type:Function,required:!1,default:function(){}}}}},AsmH:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"BookingProgress"},[i("ul",t._l(t.steps,function(e,s){return i("li",{key:s,class:{"is-line":"line"===e.title},attrs:{"aria-hidden":"line"===e.title}},["line"!==e.title?i("button",{staticClass:"Button Button--progress",class:{"is-active":t.isActive(e.number)},attrs:{type:"button"},on:{click:function(i){t.isAvailable(e.number)&&t.handleStepChange(e.number)}}},[e.number?i("span",{staticClass:"Button-number"},[t._v(t._s(e.number))]):t._e(),i("span",{staticClass:"Button-title"},[t._v(t._s(e.title))])]):t._e()])}),0)])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},WbkS:function(t,e,i){"use strict";var s=i("7cJG"),n=i("AsmH"),a=i("VU/8")(s.a,n.a,!1,null,null,null);a.options.__file="components/bookingProgress.vue",e.a=a.exports},YD5t:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"BoxedLayout"},[i("p",{staticClass:"BoxedLayout-siteTitle"},[i("nuxt-link",{attrs:{to:{name:"lang",params:{lang:t.$i18n.locale}}}},[t._v("Adriatic Sunsets")])],1),i("bookingProgress",{attrs:{"current-step":4,"available-steps":4}}),i("div",{staticClass:"BoxedLayout-main"},[i("h1",{staticClass:"BoxedLayout-mainTitle"},[t._v(t._s(t.$t("booking.success.cancel")))]),i("p",{staticClass:"BoxedLayout-back"},[t._v(t._s(t.$t("booking.continueTo"))+" "),i("nuxt-link",{attrs:{to:{name:"lang",params:{lang:t.$i18n.locale}}}},[t._v(t._s(t.$t("booking.homepage")))])],1)])],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},dzeU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("iI2Q"),n=i("YD5t"),a=i("VU/8")(s.a,n.a,!1,null,null,null);a.options.__file="pages/_lang/booking/cancel.vue",e.default=a.exports},iI2Q:function(t,e,i){"use strict";var s=i("WbkS");e.a={components:{bookingProgress:s.a},head:{htmlAttrs:{class:"is-boxed-layout fontsLoaded"}}}}});