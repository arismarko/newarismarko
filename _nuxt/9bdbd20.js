(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{226:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("c81291bc",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";n.r(e);var r={},o=n(229),c=n(15);var component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-primary is-medium is-primary is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("img",{staticClass:"heroimg",attrs:{src:"/images/aris.png",alt:"me"}}),this._v(" "),e("h1",{staticClass:"title"},[this._v("Aris Markogiannakis")]),this._v(" "),e("h2",{staticClass:"subtitle is-bold"},[this._v("\n        Senior Developer · Community Leader · Visiting Lecturer\n      ")])])])])}],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports},229:function(t,e,n){"use strict";var r=n(226),o=n.n(r);e.default=o.a},230:function(t,e,n){(e=n(32)(!1)).push([t.i,"",""]),t.exports=e},236:function(t,e,n){var content=n(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("d70b964a",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";var r=n(236),o=n.n(r);e.default=o.a},240:function(t,e,n){"use strict";n.r(e);var r={name:"ListItem",props:{item:Object},computed:{}},o=n(237),c=n(15);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.boardItemContent},[n("span",[n("strong",[t._v(t._s(t.item.year)+" "),n("br"),t._v("\n      "+t._s(t.item.jobtitle))]),t._v(" "),n("br"),t._v("\n    "+t._s(t.item.name))])])}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports},245:function(t,e,n){(e=n(32)(!1)).push([t.i,".lists_1cs8m{padding-top:10px;text-align:left}.boardItemContent_2PNPU{word-break:break-all;position:relative;background:#fff;border-radius:4px;font-size:17px;text-align:left;cursor:pointer;padding:5px}.messagebody_2pb1a{margin:10px;background:#fff;padding:5px}",""]),e.locals={lists:"lists_1cs8m",boardItemContent:"boardItemContent_2PNPU",messagebody:"messagebody_2pb1a"},t.exports=e},257:function(t,e,n){"use strict";n.r(e);n(44),n(240);var r={name:"Lists",props:{items:Array},computed:{teachingJobs:function(){return this.items.filter((function(t){return"teaching"===t.type})).sort((function(a,b){return a.order-b.order}))},devJobs:function(){return this.items.filter((function(t){return"development"===t.type})).sort((function(a,b){return a.order-b.order}))},communityJobs:function(){return this.items.filter((function(t){return"community"===t.type})).sort((function(a,b){return a.order-b.order}))}}},o=n(237),c=n(15);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.$style.lists},[n("div",{},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-4"},[n("article",{staticClass:"message is-black"},[t._m(0),t._v(" "),n("div",{class:t.$style.messagebody},t._l(t.devJobs,(function(t){return n("div",{key:t.order,staticClass:"board-item"},[n("ListItem",{attrs:{item:t}})],1)})),0)])]),t._v(" "),n("div",{staticClass:"column is-4 is-narrow"},[n("article",{staticClass:"message is-black"},[t._m(1),t._v(" "),n("div",{class:t.$style.messagebody},t._l(t.teachingJobs,(function(t){return n("div",{key:t.order,staticClass:"board-item"},[n("ListItem",{attrs:{item:t}})],1)})),0)])]),t._v(" "),n("div",{staticClass:"column is-4 is-narrow"},[n("article",{staticClass:"message is-black"},[t._m(2),t._v(" "),n("div",{class:t.$style.messagebody},t._l(t.communityJobs,(function(t){return n("div",{key:t.order,staticClass:"board-item"},[n("ListItem",{attrs:{item:t}})],1)})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"message-header"},[e("p",[this._v("SW Development")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"message-header"},[e("p",[this._v("Teaching")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"message-header"},[e("p",[this._v("Community")])])}],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports;installComponents(component,{ListItem:n(240).default})},261:function(t,e,n){"use strict";n.r(e);n(27);var r=n(4),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("bio").fetch();case 3:return r=e.sent,e.abrupt("return",{jobs:r});case 5:case"end":return e.stop()}}),e)})))()}},c=n(15),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("Hero"),this._v(" "),e("div",{staticClass:"container"},[e("section",{staticClass:"articles"},[e("div",{staticClass:"card article",staticStyle:{"padding-top":"30px","padding-bottom":"30px"}},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column is-12 register"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("h1",{staticClass:"title is-1"},[this._v("Bio")]),this._v(" "),e("p",[this._v("\n                    A senior FullStack Developer with years of professional\n                    experience gained working on a variety of web enterprise\n                    projects in agile environment. I am specialised in front\n                    and back-end web development, business applications and\n                    project management.\n                  ")]),this._v(" "),e("Lists",{attrs:{items:this.jobs}})],1)])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(228).default,Lists:n(257).default})}}]);