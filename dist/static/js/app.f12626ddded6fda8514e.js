webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("/5sW"),r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"topbar"}},[n("div",{staticClass:"logo"},[e._v("\n        VueResumer\n    ")]),e._v(" "),n("div",{staticClass:"actions"},[n("el-button",{attrs:{type:"primary"}},[e._v("注册")]),e._v(" "),n("el-button",[e._v("登录")]),e._v(" "),n("el-button",{on:{click:e.preview}},[e._v("预览简历")])],1)])},staticRenderFns:[]},l=n("VU/8")({methods:{preview:function(){this.$emit("preview")}}},r,!1,function(e){n("z/gj")},null,null).exports,o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"preview"}},[n("h1",[e._v(e._s(e.resume.profile.name||"请填写姓名"))]),e._v(" "),n("p",[e._v(e._s(e.resume.profile.city||"请添加所在地")+" | "+e._s(e.resume.profile.age||"请填写出生年月"))]),e._v(" "),n("hr"),e._v(" "),e.filter(e.resume.study).length>0?n("section",[n("h2",[e._v("教育经历")]),e._v(" "),e._l(e.filter(e.resume.study),function(t){return n("ul",[n("li",[e._v("学校名称："+e._s(t.school))]),e._v(" "),n("li",[e._v("毕业时间："+e._s(t.duration))]),e._v(" "),n("li",[e._v("学位："+e._s(t.degree))])])})],2):e._e(),e._v(" "),e.filter(e.resume.winning).length>0?n("section",[n("h2",[e._v("获奖情况")]),e._v(" "),e._l(e.filter(e.resume.winning),function(t){return n("ul",[n("li",[e._v("获得荣誉："+e._s(t.getWin))]),e._v(" "),n("li",[e._v("奖项描述："+e._s(t.describe))])])})],2):e._e(),e._v(" "),e.filter(e.resume.project).length>0?n("section",[n("h2",[e._v("项目经验")]),e._v(" "),e._l(e.filter(e.resume.project),function(t){return n("ul",[n("li",[e._v("项目名称："+e._s(t.name))]),e._v(" "),n("li",[e._v("项目时间："+e._s(t.degree))]),e._v(" "),n("li",[e._v("项目总结:"+e._s(t.summary))])])})],2):e._e(),e._v(" "),e.filter(e.resume.work).length>0?n("section",[n("h2",[e._v("工作经历")]),e._v(" "),e._l(e.filter(e.resume.work),function(t){return n("ul",[n("li",[e._v("公司名："+e._s(t.company))]),e._v(" "),n("li",[e._v("工作内容："+e._s(t.content))])])})],2):e._e(),e._v(" "),n("section",[n("h2",[e._v("联系方式")]),e._v(" "),n("p",[e._v("手机号码："+e._s(e.resume.contact.phone||"请输入您的手机号"))]),e._v(" "),n("p",[e._v("e-mail："+e._s(e.resume.contact.email||"请添加您的邮箱"))]),e._v(" "),n("p",[e._v("微信："+e._s(e.resume.contact.VX||"请添加您的WeChat"))]),e._v(" "),n("p",[e._v("QQ："+e._s(e.resume.contact.QQ||"请添加您的QQ"))])])])},staticRenderFns:[]},s=n("VU/8")({props:["resume"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var n in e)if(e[n]){t=!1;break}return t}}},o,!1,function(e){n("QIjT")},null,null).exports,c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("个人信息")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"姓名"}},[n("el-input",{model:{value:e.profile.name,callback:function(t){e.$set(e.profile,"name",t)},expression:"profile.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"所在城市"}},[n("el-input",{model:{value:e.profile.city,callback:function(t){e.$set(e.profile,"city",t)},expression:"profile.city"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"出生年月"}},[n("el-input",{model:{value:e.profile.age,callback:function(t){e.$set(e.profile,"age",t)},expression:"profile.age"}})],1)],1)],1)},staticRenderFns:[]},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("工作经历")]),e._v(" "),n("el-form",[e._l(e.work,function(t,i){return n("div",{staticClass:"container"},[n("el-form-item",{attrs:{label:"公司名称"}},[n("el-input",{model:{value:t.company,callback:function(n){e.$set(t,"company",n)},expression:"work.company"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"工作内容"}},[n("el-input",{model:{value:t.content,callback:function(n){e.$set(t,"content",n)},expression:"work.content"}})],1),e._v(" "),n("i",{staticClass:"el-icon-circle-close",on:{click:function(t){e.removeWork(i)}}}),e._v(" "),n("hr")],1)}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addWork()}}},[e._v("添加经历")])],2)],1)},staticRenderFns:[]},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("教育经历")]),e._v(" "),n("el-form",[e._l(e.study,function(t,i){return n("div",{staticClass:"container"},[n("el-form-item",{attrs:{label:"学校"}},[n("el-input",{model:{value:t.school,callback:function(n){e.$set(t,"school",n)},expression:"item.school"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"毕业时间"}},[n("el-input",{model:{value:t.duration,callback:function(n){e.$set(t,"duration",n)},expression:"item.duration"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"学位"}},[n("el-input",{model:{value:t.degree,callback:function(n){e.$set(t,"degree",n)},expression:"item.degree"}})],1),e._v(" "),n("i",{staticClass:"el-icon-circle-close",on:{click:function(t){e.removeItem(i)}}}),e._v(" "),n("hr")],1)}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addItem()}}},[e._v("添加经历")])],2)],1)},staticRenderFns:[]},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("联系方式")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"手机号码"}},[n("el-input",{model:{value:e.contact.phone,callback:function(t){e.$set(e.contact,"phone",t)},expression:"contact.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"邮箱地址"}},[n("el-input",{model:{value:e.contact.email,callback:function(t){e.$set(e.contact,"email",t)},expression:"contact.email"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"微信号"}},[n("el-input",{model:{value:e.contact.VX,callback:function(t){e.$set(e.contact,"VX",t)},expression:"contact.VX"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"QQ"}},[n("el-input",{model:{value:e.contact.QQ,callback:function(t){e.$set(e.contact,"QQ",t)},expression:"contact.QQ"}})],1)],1)],1)},staticRenderFns:[]},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("获奖情况")]),e._v(" "),n("el-form",[e._l(e.winning,function(t,i){return n("div",{staticClass:"container"},[n("el-form-item",{attrs:{label:"获得奖项"}},[n("el-input",{model:{value:t.getWin,callback:function(n){e.$set(t,"getWin",n)},expression:"item.getWin"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"奖项描述"}},[n("el-input",{model:{value:t.describe,callback:function(n){e.$set(t,"describe",n)},expression:"item.describe"}})],1),e._v(" "),n("i",{staticClass:"el-icon-circle-close",on:{click:function(t){e.removeItem(i)}}}),e._v(" "),n("hr")],1)}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addItem()}}},[e._v("添加荣誉")])],2)],1)},staticRenderFns:[]},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("项目经历")]),e._v(" "),n("el-form",[e._l(e.project,function(t,i){return n("div",{staticClass:"container"},[n("el-form-item",{attrs:{label:"项目名"}},[n("el-input",{model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"item.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"项目描述"}},[n("el-input",{model:{value:t.degree,callback:function(n){e.$set(t,"degree",n)},expression:"item.degree"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"项目总结"}},[n("el-input",{model:{value:t.summary,callback:function(n){e.$set(t,"summary",n)},expression:"item.summary"}})],1),e._v(" "),n("i",{staticClass:"el-icon-circle-close",on:{click:function(t){e.removeItem(i)}}}),e._v(" "),n("hr")],1)}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addItem()}}},[e._v("添加项目")])],2)],1)},staticRenderFns:[]},_={components:{Info:n("VU/8")({props:["profile"]},c,!1,null,null,null).exports,Work:n("VU/8")({props:["work"],methods:{addWork:function(){this.work.push({company:"",content:""})},removeWork:function(e){this.work.splice(e,1)}}},a,!1,null,null,null).exports,Study:n("VU/8")({props:["study"],methods:{addItem:function(){this.study.push({school:"",duration:"",degree:""})},removeItem:function(e){this.study.splice(e,1)}}},u,!1,null,null,null).exports,Contact:n("VU/8")({props:["contact"]},v,!1,null,null,null).exports,Winning:n("VU/8")({props:["winning"],methods:{addItem:function(){this.winning.push({getWin:"",describe:""})},removeItem:function(e){this.winning.splice(e,1)}}},m,!1,null,null,null).exports,Project:n("VU/8")({props:["project"],methods:{addItem:function(){this.project.push({name:"",degree:"",preview:"",summary:""})},removeItem:function(e){this.project.splice(e,1)}}},p,!1,null,null,null).exports},props:["resume"],data:function(){return{currentTab:0,icons:["shenfenzheng","book1","jiangbei1","gongzuoxinxi","xiangmu1","phone1"]}},methods:{}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("nav",[n("ol",e._l([0,1,2,3,4,5],function(t){return n("li",{class:{active:e.currentTab===t},on:{click:function(n){e.currentTab=t}}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-"+e.icons[t]}})])])}))]),e._v(" "),n("ol",{staticClass:"panes"},[n("li",{class:{active:0===e.currentTab}},[n("Info",{attrs:{profile:e.resume.profile}})],1),e._v(" "),n("li",{class:{active:1===e.currentTab}},[n("Study",{attrs:{study:e.resume.study}})],1),e._v(" "),n("li",{class:{active:2===e.currentTab}},[n("Winning",{attrs:{winning:e.resume.winning}})],1),e._v(" "),n("li",{class:{active:3===e.currentTab}},[n("Work",{attrs:{work:e.resume.work}})],1),e._v(" "),n("li",{class:{active:4===e.currentTab}},[n("Project",{attrs:{project:e.resume.project}})],1),e._v(" "),n("li",{class:{active:5===e.currentTab}},[n("Contact",{attrs:{contact:e.resume.contact}})],1)])])},staticRenderFns:[]},d={data:function(){return{previewMode:!1,resume:{profile:{name:"",city:"",age:""},work:[{company:"",content:""}],study:[{school:"",duration:"",degree:""}],contact:{phone:"",email:"",VX:"",QQ:""},winning:[{getWin:"",describe:""}],project:[{name:"",degree:"",summary:""}]}}},methods:{exit:function(){this.previewMode=!1},preview:function(){this.previewMode=!0}},components:{Editor:n("VU/8")(_,f,!1,function(e){n("e09K")},null,null).exports,Topbar:l,Preview:s}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{previewMode:this.previewMode},attrs:{id:"app"}},[t("Topbar",{staticClass:"topbar",on:{preview:this.preview}}),this._v(" "),t("main",[t("Editor",{staticClass:"editor",attrs:{resume:this.resume}}),this._v(" "),t("Preview",{staticClass:"preview",attrs:{resume:this.resume}})],1),this._v(" "),t("el-button",{attrs:{id:"exit"},on:{click:this.exit}},[this._v("退出预览")])],1)},staticRenderFns:[]},b=n("VU/8")(d,h,!1,function(e){n("fEau")},null,null).exports,k=(n("uMhA"),n("NcP2"),n("zL8q")),g=n.n(k);n("tvR6");i.default.use(g.a),i.default.config.productionTip=!1,new i.default({el:"#app",render:function(e){return e(b)}})},NcP2:function(e,t){},QIjT:function(e,t){},e09K:function(e,t){},fEau:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){},"z/gj":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f12626ddded6fda8514e.js.map