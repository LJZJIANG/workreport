webpackJsonp([1],{"65I4":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("/5sW"),o=r("Dd8w"),i=r.n(o),n=r("mtWM"),l=r.n(n),s="https://hrm-api.1919.cn/hrm/ejr/api",p={data:function(){return{timer:null,dialogTableVisible:!0,token:"",buttonText:"满满的正能量",reportDateArr:[],form:{projectId:"",stageId:"",attendType:"COMPANY",reportDetail:"",reportType:"WHOLE_DAY"},attendTypeList:[],reportTypeList:[],projectList:[],participateStage:[],rules:{projectId:[{required:!0,message:"请选择项目名称",trigger:"blur"}],stageId:[{required:!0,message:"请选择项目阶段",trigger:"blur"}],attendType:[{required:!0,message:"请选择所在地",trigger:"blur"}],reportType:[{required:!0,message:"请选择报工类型",trigger:"blur"}],reportDetail:[{required:!0,min:10,message:"请填写日志（长度大于10字）",trigger:"blur"}]}}},mounted:function(){this.getAttendType(),this.getReportType(),this.getButtonText()},methods:{onSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var r=e.reportDateArr,a=0;e.timer=setInterval(function(){r.length!==a?(e.submitFun(r[a]),a++):clearInterval(e.timer)},2e3)}})},submitFun:function(t){var e=this,r=i()({reportDate:t},this.form);l.a.post(s+"/dailyReport/add",r,{headers:{"x-rpc-wrap":1,authorization:this.token}}).then(function(t){e.$message.success(r.reportDate+"提交成功")}).catch(function(t){e.$message.error(r.reportDate+"保存出错")})},getButtonText:function(){var t=["早晨起来，拥抱太阳","让身体充满，灿烂的阳光","满满的正能量","嘴角向下，会迷失方向","嘴角向上，蒸蒸日上","世上没有路，都是人开创","脚底板磨破了，道路就顺畅"],e=this.randomNumBoth(0,t.length-1);this.buttonText=t[e]},randomNumBoth:function(t,e){var r=e-t,a=Math.random();return t+Math.round(a*r)},handleInputToken:function(){this.dialogTableVisible=!1,this.getProjectList()},handleChangeProject:function(t){this.getParticipateStage([t])},getAttendType:function(){var t=this;l.a.get(s+"/meta/dict/attend-type").then(function(e){t.attendTypeList=e.data.data})},getReportType:function(){var t=this;l.a.get(s+"/meta/dict/report-type").then(function(e){t.reportTypeList=e.data.data})},getProjectList:function(){var t=this;l.a.get(s+"/project/getParticipateProject",{headers:{"x-rpc-wrap":1,authorization:this.token}}).then(function(e){t.projectList=e.data.data})},getParticipateStage:function(t){var e=this;l.a.post(s+"/stage/getParticipateStage",{projectIds:t},{headers:{"x-rpc-wrap":1,authorization:this.token}}).then(function(t){e.participateStage=t.data.data})}}},c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("el-form",{ref:"form",staticClass:"form-conntainer",attrs:{rules:t.rules,model:t.form,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"项目名称",prop:"projectId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择项目名称"},on:{change:t.handleChangeProject},model:{value:t.form.projectId,callback:function(e){t.$set(t.form,"projectId",e)},expression:"form.projectId"}},t._l(t.projectList,function(t){return r("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"项目阶段",prop:"stageId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择项目阶段"},model:{value:t.form.stageId,callback:function(e){t.$set(t.form,"stageId",e)},expression:"form.stageId"}},t._l(t.participateStage,function(t){return r("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"所在地",prop:"attendType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择所在地"},model:{value:t.form.attendType,callback:function(e){t.$set(t.form,"attendType",e)},expression:"form.attendType"}},t._l(t.attendTypeList,function(t){return r("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"报工日期"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"dates",placeholder:"选择时间（可多选）",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.reportDateArr,callback:function(e){t.reportDateArr=e},expression:"reportDateArr"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"报工类型",prop:"reportType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择活动区域"},model:{value:t.form.reportType,callback:function(e){t.$set(t.form,"reportType",e)},expression:"form.reportType"}},t._l(t.reportTypeList,function(t){return r("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"日志",prop:"reportDetail"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.form.reportDetail,callback:function(e){t.$set(t.form,"reportDetail",e)},expression:"form.reportDetail"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v(t._s(t.buttonText))])],1)],1),t._v(" "),t.dialogTableVisible?r("el-dialog",{attrs:{title:"填写token","close-on-click-modal":!1,visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.token,callback:function(e){t.token="string"==typeof e?e.trim():e},expression:"token"}}),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.handleInputToken}},[t._v("确 定")])],1)],1):t._e()],1)},staticRenderFns:[]};var u={name:"App",data:function(){return{url:"../static/lzxg.html"}},components:{WorkReport:r("VU/8")(p,c,!1,function(t){r("65I4"),r("a9h9")},"data-v-15535591",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("WorkReport",{staticClass:"work-report"}),this._v(" "),e("iframe",{staticClass:"iframe",attrs:{src:this.url}})],1)},staticRenderFns:[]};var f=r("VU/8")(u,d,!1,function(t){r("b2uT")},null,null).exports,m=r("zL8q"),h=r.n(m);r("tvR6");a.default.config.productionTip=!1,a.default.use(h.a),new a.default({el:"#app",render:function(t){return t(f)}})},a9h9:function(t,e){},b2uT:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a9e1cad46f5a8f20c229.js.map