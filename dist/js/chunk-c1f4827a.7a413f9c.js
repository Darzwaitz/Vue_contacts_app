(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1f4827a"],{"6e06":function(e,t,a){"use strict";a("e4f6")},a980:function(e,t,a){"use strict";a.r(t);var i=a("7a23"),s=function(e){return Object(i["y"])("data-v-dffb47ba"),e=e(),Object(i["w"])(),e},c={class:"form-control"},n=s((function(){return Object(i["i"])("label",{for:"email"},"Your Email",-1)})),r={class:"form-control"},o=s((function(){return Object(i["i"])("label",{for:"message"},"Message",-1)})),l={key:0,class:"errors"},u={class:"actions"},m=Object(i["j"])("Send Message");function b(e,t,a,s,b,d){var f=Object(i["D"])("base-button");return Object(i["v"])(),Object(i["h"])("form",{onSubmit:t[2]||(t[2]=Object(i["N"])((function(){return d.submitForm&&d.submitForm.apply(d,arguments)}),["prevent"]))},[Object(i["i"])("div",c,[n,Object(i["M"])(Object(i["i"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return b.email=e})},null,512),[[i["J"],b.email,void 0,{trim:!0}]])]),Object(i["i"])("div",r,[o,Object(i["M"])(Object(i["i"])("textarea",{id:"message",rows:"5","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.message=e})},null,512),[[i["J"],b.message,void 0,{trim:!0}]])]),b.formIsValid?Object(i["g"])("",!0):(Object(i["v"])(),Object(i["h"])("p",l," Please enter a valid email and fill in a message ")),Object(i["i"])("div",u,[Object(i["k"])(f,null,{default:Object(i["L"])((function(){return[m]})),_:1})])],32)}a("caad"),a("2532"),a("ac1f"),a("5319");var d={data:function(){return{email:"",message:"",formIsValid:!0}},methods:{submitForm:function(){this.formIsValid=!0,""!==this.email&&this.email.includes("@")&&""!==this.message?(this.$store.dispatch("requests/contactCoach",{email:this.email,message:this.message,coachId:this.$route.params.id}),this.$router.replace("/coaches")):this.formIsValid=!1}}},f=(a("6e06"),a("6b0d")),j=a.n(f);const O=j()(d,[["render",b],["__scopeId","data-v-dffb47ba"]]);t["default"]=O},e4f6:function(e,t,a){}}]);
//# sourceMappingURL=chunk-c1f4827a.7a413f9c.js.map