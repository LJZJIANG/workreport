webpackJsonp([1],{DZoB:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("/5sW"),o=r("mtWM"),i=r.n(o),l="https://hrm-api.1919.cn/hrm/ejr/api",n={data:function(){return{dialogTableVisible:!0,token:"",form:{projectId:"",stageId:"",attendType:"COMPANY",reportDetail:"",reportDate:"",reportType:"WHOLE_DAY"},attendTypeList:[],reportTypeList:[],projectList:[],participateStage:[],rules:{projectId:[{required:!0,message:"请选择项目名称",trigger:"blur"}],stageId:[{required:!0,message:"请选择项目阶段",trigger:"blur"}],attendType:[{required:!0,message:"请选择所在地",trigger:"blur"}],reportDate:[{required:!0,message:"请选择报工日期",trigger:"blur"}],reportType:[{required:!0,message:"请选择报工类型",trigger:"blur"}],reportDetail:[{required:!0,message:"请填写日志",trigger:"blur"}]}}},mounted:function(){this.getAttendType(),this.getReportType()},methods:{onSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t&&i.a.post(l+"/dailyReport/add",e.form,{headers:{"x-rpc-wrap":1,authorization:e.token}}).then(function(t){}).catch(function(t){e.$message.error("保存出错")})})},handleInputToken:function(){this.dialogTableVisible=!1,this.getProjectList()},handleChangeProject:function(t){this.getParticipateStage([t])},getAttendType:function(){var t=this;i.a.get(l+"/meta/dict/attend-type").then(function(e){t.attendTypeList=e.data.data})},getReportType:function(){var t=this;i.a.get(l+"/meta/dict/report-type").then(function(e){t.reportTypeList=e.data.data})},getProjectList:function(){var t=this;i.a.get(l+"/project/getParticipateProject",{headers:{"x-rpc-wrap":1,authorization:this.token}}).then(function(e){t.projectList=e.data.data})},getParticipateStage:function(t){var e=this;i.a.post(l+"/stage/getParticipateStage",{projectIds:t},{headers:{"x-rpc-wrap":1,authorization:this.token}}).then(function(t){e.participateStage=t.data.data})}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("el-form",{ref:"form",staticClass:"form-conntainer",attrs:{rules:t.rules,model:t.form,"label-width":"140px"}},[r("el-form-item",{attrs:{label:"项目名称",prop:"projectId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择项目名称"},on:{change:t.handleChangeProject},model:{value:t.form.projectId,callback:function(e){t.$set(t.form,"projectId",e)},expression:"form.projectId"}},t._l(t.projectList,function(t){return r("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"项目阶段",prop:"stageId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择项目阶段"},model:{value:t.form.stageId,callback:function(e){t.$set(t.form,"stageId",e)},expression:"form.stageId"}},t._l(t.participateStage,function(t){return r("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"所在地",prop:"attendType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择所在地"},model:{value:t.form.attendType,callback:function(e){t.$set(t.form,"attendType",e)},expression:"form.attendType"}},t._l(t.attendTypeList,function(t){return r("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"报工日期",prop:"reportDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.form.reportDate,callback:function(e){t.$set(t.form,"reportDate",e)},expression:"form.reportDate"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"报工类型",prop:"reportType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择活动区域"},model:{value:t.form.reportType,callback:function(e){t.$set(t.form,"reportType",e)},expression:"form.reportType"}},t._l(t.reportTypeList,function(t){return r("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"日志",prop:"reportDetail"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.form.reportDetail,callback:function(e){t.$set(t.form,"reportDetail",e)},expression:"form.reportDetail"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("年轻人要讲武德")])],1)],1),t._v(" "),t.dialogTableVisible?r("el-dialog",{attrs:{title:"填写token","close-on-click-modal":!1,visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.token,callback:function(e){t.token="string"==typeof e?e.trim():e},expression:"token"}}),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.handleInputToken}},[t._v("确 定")])],1)],1):t._e()],1)},staticRenderFns:[]};var p={name:"App",components:{WorkReport:r("VU/8")(n,s,!1,function(t){r("DZoB")},"data-v-79aae380",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("WorkReport")],1)},staticRenderFns:[]};var u=r("VU/8")(p,c,!1,function(t){r("m1Sh")},null,null).exports,d=r("zL8q"),f=r.n(d);r("tvR6");a.default.config.productionTip=!1,a.default.use(f.a),new a.default({el:"#app",render:function(t){return t(u)}})},m1Sh:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3518e2a408de73db2114.js.map