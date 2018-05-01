webpackJsonp([1],{"0rpm":function(t,e){},Ak98:function(t,e){},"Gw8+":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},r,!1,function(t){s("0rpm")},null,null).exports,i=s("/ocq"),o=s("PJh5"),c=s.n(o);var l={name:"cigarettes-table",props:{cigarettes:{type:Number,default:0},days:{type:Number,default:0},cigarettesPerDay:{type:Number,default:0}},data:function(){return{emojiCigarette:"🚬"}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cigarette-table"},[s("table",{staticClass:"ui celled table"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.$tc("day",1)))]),t._v(" "),s("th",[t._v(t._s(t.$tc("cigarette",2)))])])]),t._v(" "),s("tbody",t._l(t.days,function(e){return s("tr",[s("td",[t._v(t._s(e))]),t._v(" "),s("td",t._l(t.cigarettesPerDay,function(e){return s("span",[t._v(t._s(t.emojiCigarette))])}))])}))])])},staticRenderFns:[]};var m={name:"ViewIndex",components:{CigarettesTable:s("VU/8")(l,u,!1,function(t){s("Ak98")},"data-v-a921b3ae",null).exports},data:function(){return{formPackAmount:20,formPackPrice:6.2,formCigarettesPerDay:15,formLastCigarette:c()().format("YYYY-MM-DD HH:mm")}},computed:{now:function(){return c()()},lastCigarette:function(){return c()("2013-01-22 13:37","YYYY-MM-DD HH:mm")},timedelta:function(){return t=this.lastCigarette,e=this.now,s=e.diff(t),{m:(a=c.a.duration(s)).minutes(),h:a.hours(),d:a.days(),M:a.months(),y:a.years()};var t,e,s,a},cigarettePrice:function(){return this.formPackPrice/this.formPackAmount},cigarettes:function(){return this.cigarettesPerMinute*this.minutes},cigarettesPerMinute:function(){return this.formCigarettesPerDay/1440},pricePerMinute:function(){return this.cigarettesPerMinute*this.cigarettePrice},days:function(){return this.now.diff(this.lastCigarette,"days")},minutes:function(){return this.now.diff(this.lastCigarette,"minutes")},cost:function(){return this.minutes*this.pricePerMinute}},methods:{},filters:{formatDate:function(t){return t.format("DD.MM.YYYY mm:HH")}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"index"}},[s("div",{staticClass:"container",attrs:{id:"form-container"}},[s("form",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("form.label.cigarettesPerDay")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formCigarettesPerDay,expression:"formCigarettesPerDay"}],attrs:{type:"number",name:"cigarettes-per-day",placeholder:t.$t("form.placeholder.cigarettesPerDay")},domProps:{value:t.formCigarettesPerDay},on:{input:function(e){e.target.composing||(t.formCigarettesPerDay=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("form.label.packPrice")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formPackPrice,expression:"formPackPrice"}],attrs:{type:"number",name:"pack-price",placeholder:t.$t("form.placeholder.packPrice")},domProps:{value:t.formPackPrice},on:{input:function(e){e.target.composing||(t.formPackPrice=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("form.label.packAmount")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formPackAmount,expression:"formPackAmount"}],attrs:{type:"number",name:"pack-amount",placeholder:t.$t("form.placeholder.packAmount")},domProps:{value:t.formPackAmount},on:{input:function(e){e.target.composing||(t.formPackAmount=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("form.label.lastCigarette")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formLastCigarette,expression:"formLastCigarette"}],attrs:{type:"text",name:"last-cigarette",placeholder:t.$t("form.placeholder.lastCigarette")},domProps:{value:t.formLastCigarette},on:{input:function(e){e.target.composing||(t.formLastCigarette=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"ui button",attrs:{type:"submit"}},[t._v(t._s(t.$t("form.submit")))])])]),t._v(" "),s("div",{staticClass:"container",attrs:{id:"table-container"}},[s("table",{staticClass:"ui celled table"},[t._m(0),t._v(" "),s("tbody",[s("tr",[t._m(1),t._v(" "),s("td",[t._v(t._s(t.now))])]),t._v(" "),s("tr",[s("td",[t._v("last cigarette")]),t._v(" "),s("td",[t._v(t._s(t._f("formatDate")(t.lastCigarette)))])]),t._v(" "),s("tr",[s("td",[t._v("Delta Object")]),t._v(" "),s("td",[t._v("\n          "+t._s(t.$t("msg.timedelta",t.timedelta))+"\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("$")]),t._v(" "),s("td",[t._v(t._s(t.cost))])]),t._v(" "),s("tr",[s("td",[t._v("price/minute")]),t._v(" "),s("td",[t._v(t._s(t.pricePerMinute))])])])])]),t._v(" "),s("div",{staticClass:"container",attrs:{id:"cigarettes-table-container"}},[s("cigarettes-table",{attrs:{cigarettes:t.cigarettes,days:t.days,"cigarettes-per-day":parseInt(t.formCigarettesPerDay)}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Key")]),this._v(" "),e("th",[this._v("Property")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("div",{staticClass:"ui ribbon label"},[this._v("Now")])])}]};var j=s("VU/8")(m,d,!1,function(t){s("Gw8+")},null,null).exports;a.a.use(i.a);var f=new i.a({routes:[{path:"/",name:"ViewIndex",component:j}]}),h=s("TXmL");a.a.use(h.a),a.a.config.productionTip=!1;var v=new h.a({locale:"de",messages:{en:{year:"year | years",month:"month | months",day:"day | days",hour:"hour | hours",minute:"minute | minutes",msg:{timedelta:"{y} years, {M} months, {d} days, {h} hours, {m} minutes."}},de:{year:"Jahr | Jahre",month:"Monat | Monate",day:"Tag | Tage",hour:"Stunde | Stunden",minute:"Minute | Minuten",cigarette:"Zigarette | Zigaretten",msg:{timedelta:"{y} years, {M} months, {d} days, {h} hours, {m} minutes."},form:{submit:"Berechnen",label:{cigarettesPerDay:"Anzahl der Zigaretten pro Tag",packPrice:"Kosten pro Schachtel",packAmount:"Anzahl pro Schachtel",lastCigarette:"Zeitpunkt der letzten Zigarette"},placeholder:{cigarettesPerDay:"Durchschnittlich gerauchte Zigaretten pro Tag",packPrice:"Kosten pro Schachtel Zigaretten",packAmount:"Anzahl an Zigaretten pro Schachtel",lastCigarette:"YYYY-MM-DD HH:mm"}}}}});new a.a({i18n:v,el:"#app",router:f,components:{App:n},template:"<App/>"}).$mount("#app")},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return s(n(t))}function n(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.25cf4f7b40771ef758a6.js.map