webpackJsonp([1,2],{143:function(e,t,a){"use strict";var r=a(4),l=a(225),o=a(219),n=a.n(o);r.default.use(l.a),t.a=new l.a({routes:[{path:"/ConnDisplay",name:"ConnDisplay",component:n.a},{path:"*",redirect:"/ConnDisplay"}]})},145:function(e,t){},146:function(e,t){},147:function(e,t,a){var r=a(7)(a(188),a(221),null,null);e.exports=r.exports},187:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"a",function(){return l}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return n});var r={1:{text:"打通中",type:"primary"},2:{text:"专线实施中",type:"default"},3:{text:"接入完成",type:"success"},4:{text:"暂停",type:"danger"},0:{text:"NaN",type:"danger"}},l=[{label:"打通中",value:1},{label:"专线实施中",value:2},{label:"接入完成",value:3},{label:"暂停",value:4},{label:"NaN",value:0}],o={1:"客户直签运营商",2:"UCloud代签运营商",3:"其他"},n=[{label:"客户直签运营商",value:1},{label:"UCloud代签运营商",value:2},{label:"其他",value:3}]},188:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(209),l=(a.n(r),a(217)),o=a.n(l),n=a(216),i=a.n(n);t.default={name:"app",components:{NavMenu:o.a,Container:i.a}}},189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(218),l=a.n(r);t.default={components:{TopBar:l.a}}},190:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(19),l=a.n(r),o=a(25),n=o.a.url;t.default={data:function(){return{user:"未知",avatar_url:"http://img0.imgtn.bdimg.com/it/u=1787407765,2524017231&fm=11&gp=0.jpg"}},methods:{signOut:function(){console.log("退出登录")},getCurrentUser:function(){var e=this;l.a.get(n+"common-api/get_current_user").then(function(t){e.user=t.data.current_user}).catch(function(e){console.log(e)})}},mounted:function(){this.getCurrentUser()}}},191:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(187),l=a(19),o=a.n(l),n=a(213),i=a.n(n),s=a(0),c=a.n(s),u=a(25);c.a.locale("zh-cn");var d=u.a.url;t.default={name:"crud",data:function(){var e=function(e,t,a){""===t?a(new Error("值为空或类型不对")):a()};return{optionStateHash:r.a,optionConnTypeHash:r.b,stateHash:r.c,connTypeHash:r.d,createConnFormVisible:!1,editConnFormVisible:!1,searching:!1,creating:!1,editing:!1,formInline:{CompanyId:"",AccountId:""},formCreate:{AccountId:"",ConnType:"",Address:"",UcloudAddr:"",ClientAddr:"",PeSwitch:"",SwitchPort:"",AzId:"",State:"",Bandwidth:"",ConnNo:"",Provider:"",AccessDate:"",Used:"",Manager:"",Remarks:"",ElecDev:"",ElecDevPort:"",OdfPort:"",InterConnIpUcloud:"",InterConnIpClient:"",Vlan:"",Description:""},formEdit:{AccountId:"",ConnType:"",Address:"",UcloudAddr:"",ClientAddr:"",PeSwitch:"",SwitchPort:"",AzId:"",State:"",Bandwidth:"",ConnNo:"",Provider:"",AccessDate:"",Used:"",Manager:"",Remarks:"",ElecDev:"",ElecDevPort:"",OdfPort:"",InterConnIpUcloud:"",InterConnIpClient:"",Vlan:"",Description:""},rules:{AccountId:[{validator:e,trigger:"blur"}],ConnType:[{validator:e,trigger:"blur"}],Address:[{validator:e,trigger:"blur"}],UcloudAddr:[{validator:e,trigger:"blur"}],ClientAddr:[{validator:e,trigger:"blur"}],PeSwitch:[{validator:e,trigger:"blur"}],SwitchPort:[{validator:e,trigger:"blur"}],AzId:[{validator:e,trigger:"blur"}]},responseList:[]}},filters:{time_formatter:function(e){return c()(e,"X").format("L")}},computed:{formatedFormCreate:function(){var e=c()(this.formCreate.AccessDate).format("X");return i.a.defaults({AccessDate:e},this.formCreate)},formatedEditCreate:function(){var e=c()(this.formEdit.AccessDate).format("X");return i.a.defaults({AccessDate:e},this.formEdit)},tableData:function(){return this.responseList}},methods:{debounceLoadAccountInfo:i.a.debounce(function(){this.loadAccountInfo()},500),loadAccountInfo:function(){var e=this;e.searching=!0;var t={Action:"UGetConn"};t=i.a.merge(t,this.formInline),o.a.get(d+"api-uhybird/account-crud",{params:t}).then(function(t){e.$message({message:"信息加载成功",type:"success"}),e.responseList=t.data.data.LIST,e.searching=!1}).catch(function(t){console.info(t),e.$message.error("服务器提了一个错误，稍后再试"),e.searching=!1})},createConn:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("form invalid"),!1;var a=t;a.creating=!0;var r={Action:"UCreateConn"};r=i.a.merge(r,a.formatedFormCreate),o.a.get(d+"api-uhybird/account-crud",{params:r}).then(function(e){0===e.data.data.RetCode?(a.$message({message:e.data.data.Message,type:"success"}),a.creating=!1,a.createConnFormVisible=!1,a.debounceLoadAccountInfo()):(a.$message({message:e.data.data.Message,type:"warning"}),a.creating=!1)}).catch(function(e){console.info(e),a.$message.error("服务器提了一个错误，稍后再试"),a.creating=!1})})},deleteConn:function(e,t){var a=this;this.$confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=a,r=t;r.Action="UDeleteConn",o.a.get(d+"api-uhybird/account-crud",{params:r}).then(function(t){0===t.data.data.RetCode?(e.$message({message:t.data.data.Message,type:"success"}),e.debounceLoadAccountInfo()):e.$message({message:t.data.data.Message,type:"warning"})}).catch(function(t){console.info(t),e.$message.error("服务器提了一个错误，稍后再试")})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},editConn:function(e,t){this.editConnFormVisible=!0,this.formEdit=t,this.formEdit.AccessDate=c()(this.formEdit.AccessDate,"X").format("L")},saveEditedConn:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("form invalid"),!1;var a=t;a.editing=!0;var r={Action:"UModifyConn"};r=i.a.merge(r,a.formatedEditCreate),o.a.get(d+"api-uhybird/account-crud",{params:r}).then(function(e){0===e.data.data.RetCode?(a.$message({message:e.data.data.Message,type:"success"}),a.editing=!1,a.editConnFormVisible=!1,a.debounceLoadAccountInfo()):(a.$message({message:e.data.data.Message,type:"warning"}),a.editing=!1)}).catch(function(e){console.info(e),a.$message.error("服务器提了一个错误，稍后再试"),a.editing=!1})})},Stateformatter:function(e,t){return console.log(e.State),this.stateHash[e.State].text},filterState:function(e,t){return this.stateHash[t.State].text===e},connTypeformatter:function(e,t){return console.log(e.State),this.connTypeHash[e.ConnType]},filterConnType:function(e,t){return this.connTypeHash[t.ConnType]===e}},watch:{formInline:{handler:function(){this.debounceLoadAccountInfo()},deep:!0}},mounted:function(){document.title="运营 · 专线客户信息管理",this.loadAccountInfo(),console.log(d)}}},209:function(e,t){},210:function(e,t){},211:function(e,t){},212:function(e,t){},214:function(e,t,a){function r(e){return a(l(e))}function l(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./af":32,"./af.js":32,"./ar":38,"./ar-dz":33,"./ar-dz.js":33,"./ar-ly":34,"./ar-ly.js":34,"./ar-ma":35,"./ar-ma.js":35,"./ar-sa":36,"./ar-sa.js":36,"./ar-tn":37,"./ar-tn.js":37,"./ar.js":38,"./az":39,"./az.js":39,"./be":40,"./be.js":40,"./bg":41,"./bg.js":41,"./bn":42,"./bn.js":42,"./bo":43,"./bo.js":43,"./br":44,"./br.js":44,"./bs":45,"./bs.js":45,"./ca":46,"./ca.js":46,"./cs":47,"./cs.js":47,"./cv":48,"./cv.js":48,"./cy":49,"./cy.js":49,"./da":50,"./da.js":50,"./de":52,"./de-at":51,"./de-at.js":51,"./de.js":52,"./dv":53,"./dv.js":53,"./el":54,"./el.js":54,"./en-au":55,"./en-au.js":55,"./en-ca":56,"./en-ca.js":56,"./en-gb":57,"./en-gb.js":57,"./en-ie":58,"./en-ie.js":58,"./en-nz":59,"./en-nz.js":59,"./eo":60,"./eo.js":60,"./es":62,"./es-do":61,"./es-do.js":61,"./es.js":62,"./et":63,"./et.js":63,"./eu":64,"./eu.js":64,"./fa":65,"./fa.js":65,"./fi":66,"./fi.js":66,"./fo":67,"./fo.js":67,"./fr":70,"./fr-ca":68,"./fr-ca.js":68,"./fr-ch":69,"./fr-ch.js":69,"./fr.js":70,"./fy":71,"./fy.js":71,"./gd":72,"./gd.js":72,"./gl":73,"./gl.js":73,"./he":74,"./he.js":74,"./hi":75,"./hi.js":75,"./hr":76,"./hr.js":76,"./hu":77,"./hu.js":77,"./hy-am":78,"./hy-am.js":78,"./id":79,"./id.js":79,"./is":80,"./is.js":80,"./it":81,"./it.js":81,"./ja":82,"./ja.js":82,"./jv":83,"./jv.js":83,"./ka":84,"./ka.js":84,"./kk":85,"./kk.js":85,"./km":86,"./km.js":86,"./ko":87,"./ko.js":87,"./ky":88,"./ky.js":88,"./lb":89,"./lb.js":89,"./lo":90,"./lo.js":90,"./lt":91,"./lt.js":91,"./lv":92,"./lv.js":92,"./me":93,"./me.js":93,"./mi":94,"./mi.js":94,"./mk":95,"./mk.js":95,"./ml":96,"./ml.js":96,"./mr":97,"./mr.js":97,"./ms":99,"./ms-my":98,"./ms-my.js":98,"./ms.js":99,"./my":100,"./my.js":100,"./nb":101,"./nb.js":101,"./ne":102,"./ne.js":102,"./nl":104,"./nl-be":103,"./nl-be.js":103,"./nl.js":104,"./nn":105,"./nn.js":105,"./pa-in":106,"./pa-in.js":106,"./pl":107,"./pl.js":107,"./pt":109,"./pt-br":108,"./pt-br.js":108,"./pt.js":109,"./ro":110,"./ro.js":110,"./ru":111,"./ru.js":111,"./se":112,"./se.js":112,"./si":113,"./si.js":113,"./sk":114,"./sk.js":114,"./sl":115,"./sl.js":115,"./sq":116,"./sq.js":116,"./sr":118,"./sr-cyrl":117,"./sr-cyrl.js":117,"./sr.js":118,"./ss":119,"./ss.js":119,"./sv":120,"./sv.js":120,"./sw":121,"./sw.js":121,"./ta":122,"./ta.js":122,"./te":123,"./te.js":123,"./tet":124,"./tet.js":124,"./th":125,"./th.js":125,"./tl-ph":126,"./tl-ph.js":126,"./tlh":127,"./tlh.js":127,"./tr":128,"./tr.js":128,"./tzl":129,"./tzl.js":129,"./tzm":131,"./tzm-latn":130,"./tzm-latn.js":130,"./tzm.js":131,"./uk":132,"./uk.js":132,"./uz":133,"./uz.js":133,"./vi":134,"./vi.js":134,"./x-pseudo":135,"./x-pseudo.js":135,"./yo":136,"./yo.js":136,"./zh-cn":137,"./zh-cn.js":137,"./zh-hk":138,"./zh-hk.js":138,"./zh-tw":139,"./zh-tw.js":139};r.keys=function(){return Object.keys(o)},r.resolve=l,e.exports=r,r.id=214},216:function(e,t,a){a(212);var r=a(7)(a(189),a(223),null,null);e.exports=r.exports},217:function(e,t,a){a(210);var r=a(7)(null,a(220),null,null);e.exports=r.exports},218:function(e,t,a){var r=a(7)(a(190),a(224),null,null);e.exports=r.exports},219:function(e,t,a){a(211);var r=a(7)(a(191),a(222),null,null);e.exports=r.exports},220:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{attrs:{"default-active":"1",id:"nav-menu",theme:"dark"}},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[a("p",[e._v("混合云运营平台")])])],1),e._v(" "),a("el-menu-item",{attrs:{index:"1-1"}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/ConnDisplay"}},[a("i",{staticClass:"el-icon-document"}),e._v(" 专线客户信息")])],1),e._v(" "),a("el-menu-item",{attrs:{index:"3"}},[a("a",{staticClass:"nav-link",attrs:{href:"/"}},[a("i",{staticClass:"el-icon-caret-left "}),e._v(" 返回首页")])])],1)},staticRenderFns:[]}},221:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("NavMenu"),e._v(" "),a("Container")],1)},staticRenderFns:[]}},222:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"crud"},[a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.searching,expression:"searching"}],staticClass:"box-card"},[a("div",{staticClass:"clearfix",slot:"header"},[a("el-form",{staticStyle:{float:"right"},attrs:{inline:!0,model:e.formInline}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"公司 ID"},model:{value:e.formInline.CompanyId,callback:function(t){e.formInline.CompanyId=t}}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"项目 ID"},model:{value:e.formInline.AccountId,callback:function(t){e.formInline.AccountId=t}}})],1),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){e.createConnFormVisible=!0}}},[e._v(" 新增")])],1),e._v(" "),a("p",[e._v("专线客户信息")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([["default",function(t){return[a("el-form",{staticClass:"display-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"Vlan"}},[a("span",[e._v(e._s(t.row.Vlan))])]),e._v(" "),a("el-form-item",{attrs:{label:"专线号码"}},[a("span",[e._v(e._s(t.row.ConnNo))])]),e._v(" "),a("el-form-item",{attrs:{label:"PE 交换机"}},[a("span",[e._v(e._s(t.row.PeSwitch))])]),e._v(" "),a("el-form-item",{attrs:{label:"线路提供商"}},[a("span",[e._v(e._s(t.row.Provider))])]),e._v(" "),a("el-form-item",{attrs:{label:"可用区 ID"}},[a("span",[e._v(e._s(t.row.AzId))])]),e._v(" "),a("el-form-item",{attrs:{label:"占用接入点光纤芯(对)"}},[a("span",[e._v(e._s(t.row.Used))])]),e._v(" "),a("el-form-item",{attrs:{label:"ODF 端口"}},[a("span",[e._v(e._s(t.row.OdfPort))])]),e._v(" "),a("el-form-item",{attrs:{label:"专线互联IP 客户端"}},[a("span",[e._v(e._s(t.row.InterConnIpUcloud))])]),e._v(" "),a("el-form-item",{attrs:{label:"专线签约性质"}},[a("span",[a("el-tag",{attrs:{type:"primary"}},[e._v(e._s(e.connTypeHash[t.row.ConnType]))])],1)]),e._v(" "),a("el-form-item",{attrs:{label:"专线互联IP UCloud"}},[a("span",[e._v(e._s(t.row.InterConnIpClient))])]),e._v(" "),a("el-form-item",{attrs:{label:"客户端地址(物理位置)"}},[a("span",[e._v(e._s(t.row.ClientAddr))])]),e._v(" "),a("el-form-item",{attrs:{label:"光电设备端口"}},[a("span",[e._v(e._s(t.row.ElecDevPort))])]),e._v(" "),a("el-form-item",{attrs:{label:"机房"}},[a("span",[e._v(e._s(t.row.Address))])]),e._v(" "),a("el-form-item",{attrs:{label:"交换机端口"}},[a("span",[e._v(e._s(t.row.SwitchPort))])]),e._v(" "),a("el-form-item",{attrs:{label:"接入时间"}},[a("span",[e._v(e._s(e._f("time_formatter")(t.row.AccessDate)))])]),e._v(" "),a("el-form-item",{attrs:{label:"光电设备"}},[a("span",[e._v(e._s(t.row.ElecDev))])]),e._v(" "),a("el-form-item",{attrs:{label:"UCloud 端地址(物理位置)"}},[a("span",[e._v(e._s(t.row.UcloudAddr))])]),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("span",[e._v(e._s(t.row.Description))])])],1)]}]])}),e._v(" "),a("el-table-column",{attrs:{label:"公司ID",width:"100",prop:"CompanyId"}}),e._v(" "),a("el-table-column",{attrs:{label:"项目ID",width:"100",prop:"AccountId"}}),e._v(" "),a("el-table-column",{attrs:{label:"公司名称",prop:"CompanyName"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"State",width:"100",formatter:e.Stateformatter,filters:[{text:"NaN",value:"NaN"},{text:"打通中",value:"打通中"},{text:"专线实施中",value:"专线实施中"},{text:"接入完成",value:"接入完成"},{text:"暂停",value:"暂停"}],"filter-method":e.filterState},scopedSlots:e._u([["default",function(t){return[a("el-tag",{attrs:{type:e.stateHash[t.row.State].type,"close-transition":""}},[e._v(e._s(e.stateHash[t.row.State].text))])]}]])}),e._v(" "),a("el-table-column",{attrs:{label:"带宽",width:"100",prop:"Bandwidth"}}),e._v(" "),a("el-table-column",{attrs:{label:"客户经理",width:"100",prop:"Manager"}}),e._v(" "),a("el-table-column",{attrs:{label:"备注",prop:"Remarks"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([["default",function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.editConn(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.deleteConn(t.$index,t.row)}}},[e._v("删除")])]}]])})],1)],1),e._v(" "),a("el-dialog",{staticClass:"motai",attrs:{title:"专线客户信息创建",size:"full"},model:{value:e.createConnFormVisible,callback:function(t){e.createConnFormVisible=t}}},[a("el-form",{ref:"formCreate",staticClass:"create-table-expand",attrs:{"label-position":"right",model:e.formCreate,rules:e.rules,inline:""}},[a("el-form-item",{attrs:{label:"项目ID",prop:"AccountId",required:""}},[a("el-input",{model:{value:e.formCreate.AccountId,callback:function(t){e.formCreate.AccountId=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专线签约性质",prop:"ConnType",required:""}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formCreate.ConnType,callback:function(t){e.formCreate.ConnType=t}}},e._l(e.optionConnTypeHash,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"机房",prop:"Address",required:""}},[a("el-input",{model:{value:e.formCreate.Address,callback:function(t){e.formCreate.Address=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"UCloud 端地址(物理位置)",prop:"UcloudAddr",required:""}},[a("el-input",{model:{value:e.formCreate.UcloudAddr,callback:function(t){e.formCreate.UcloudAddr=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客户端地址(物理地址)",prop:"ClientAddr",required:""}},[a("el-input",{model:{value:e.formCreate.ClientAddr,callback:function(t){e.formCreate.ClientAddr=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"PE 交换机",prop:"PeSwitch",required:""}},[a("el-input",{model:{value:e.formCreate.PeSwitch,callback:function(t){e.formCreate.PeSwitch=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"交换机端口",prop:"SwitchPort",required:""}},[a("el-input",{model:{value:e.formCreate.SwitchPort,callback:function(t){e.formCreate.SwitchPort=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"可用区 ID",prop:"AzId",required:""}},[a("el-input",{model:{value:e.formCreate.AzId,callback:function(t){e.formCreate.AzId=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formCreate.State,callback:function(t){e.formCreate.State=t}}},e._l(e.optionStateHash,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"带宽"}},[a("el-input",{model:{value:e.formCreate.Bandwidth,callback:function(t){e.formCreate.Bandwidth=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专线号码"}},[a("el-input",{model:{value:e.formCreate.ConnNo,callback:function(t){e.formCreate.ConnNo=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"线路提供商"}},[a("el-input",{model:{value:e.formCreate.Provider,callback:function(t){e.formCreate.Provider=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"接入时间"}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formCreate.AccessDate,callback:function(t){e.formCreate.AccessDate=t}}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"占用接入点光纤芯(对)"}},[a("el-input",{model:{value:e.formCreate.Used,callback:function(t){e.formCreate.Used=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客户经理"}},[a("el-input",{model:{value:e.formCreate.Manager,callback:function(t){e.formCreate.Manager=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.formCreate.Remarks,callback:function(t){e.formCreate.Remarks=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"光电设备"}},[a("el-input",{model:{value:e.formCreate.ElecDev,callback:function(t){e.formCreate.ElecDev=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"光电设备端口"}},[a("el-input",{model:{value:e.formCreate.ElecDevPort,callback:function(t){e.formCreate.ElecDevPort=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ODF 端口"}},[a("el-input",{model:{value:e.formCreate.OdfPort,callback:function(t){e.formCreate.OdfPort=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专线互联 IP UCloud"}},[a("el-input",{model:{value:e.formCreate.InterConnIpUcloud,callback:function(t){e.formCreate.InterConnIpUcloud=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专线互联 IP 客户端"}},[a("el-input",{model:{value:e.formCreate.InterConnIpClient,callback:function(t){e.formCreate.InterConnIpClient=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"VLAN"}},[a("el-input",{model:{value:e.formCreate.Vlan,callback:function(t){e.formCreate.Vlan=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{model:{value:e.formCreate.Description,callback:function(t){e.formCreate.Description=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:" "}},[e._v("\n        前面带 "),a("code",{staticStyle:{color:"red"}},[e._v("*")]),e._v(" 为必填项，由于字段较多，建议使用 "),a("code",[e._v("Tab")]),e._v(" 或者 "),a("code",[e._v("↓")]),e._v(" 切换输入框或选择\n      ")])],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(t){e.createConnFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.creating},on:{click:function(t){e.createConn("formCreate")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"motai",attrs:{title:"专线客户信息更新",size:"full"},model:{value:e.editConnFormVisible,callback:function(t){e.editConnFormVisible=t}}},[a("el-form",{ref:"formEdit",staticClass:"create-table-expand",attrs:{"label-position":"right",model:e.formEdit,rules:e.rules,inline:""}},[a("el-form-item",{attrs:{label:"项目ID",prop:"AccountId",required:""}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formEdit.AccountId,callback:function(t){e.formEdit.AccountId=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专线签约性质",prop:"ConnType",required:""}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formEdit.ConnType,callback:function(t){e.formEdit.ConnType=t}}},e._l(e.optionConnTypeHash,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"机房",prop:"Address",required:""}},[a("el-input",{model:{value:e.formEdit.Address,callback:function(t){e.formEdit.Address=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"UCloud 端地址(物理位置)",prop:"UcloudAddr",required:""}},[a("el-input",{model:{value:e.formEdit.UcloudAddr,callback:function(t){e.formEdit.UcloudAddr=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客户端地址(物理地址)",prop:"ClientAddr",required:""}},[a("el-input",{model:{value:e.formEdit.ClientAddr,callback:function(t){e.formEdit.ClientAddr=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"PE 交换机",prop:"PeSwitch",required:""}},[a("el-input",{model:{value:e.formEdit.PeSwitch,callback:function(t){e.formEdit.PeSwitch=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"交换机端口",prop:"SwitchPort",required:""}},[a("el-input",{model:{value:e.formEdit.SwitchPort,callback:function(t){e.formEdit.SwitchPort=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"可用区 ID",prop:"AzId",required:""}},[a("el-input",{model:{value:e.formEdit.AzId,callback:function(t){e.formEdit.AzId=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司名称"}},[a("el-input",{model:{value:e.formEdit.CompanyName,callback:function(t){e.formEdit.CompanyName=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formEdit.State,callback:function(t){e.formEdit.State=t}}},e._l(e.optionStateHash,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"带宽"}},[a("el-input",{model:{value:e.formEdit.Bandwidth,callback:function(t){e.formEdit.Bandwidth=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专线号码"}},[a("el-input",{model:{value:e.formEdit.ConnNo,callback:function(t){e.formEdit.ConnNo=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"线路提供商"}},[a("el-input",{model:{value:e.formEdit.Provider,callback:function(t){e.formEdit.Provider=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"接入时间"}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formEdit.AccessDate,callback:function(t){e.formEdit.AccessDate=t}}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"占用接入点光纤芯(对)"}},[a("el-input",{model:{value:e.formEdit.Used,callback:function(t){e.formEdit.Used=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客户经理"}},[a("el-input",{model:{value:e.formEdit.Manager,callback:function(t){e.formEdit.Manager=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.formEdit.Remarks,callback:function(t){e.formEdit.Remarks=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"光电设备"}},[a("el-input",{model:{value:e.formEdit.ElecDev,callback:function(t){e.formEdit.ElecDev=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"光电设备端口"}},[a("el-input",{model:{value:e.formEdit.ElecDevPort,callback:function(t){e.formEdit.ElecDevPort=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ODF 端口"}},[a("el-input",{model:{value:e.formEdit.OdfPort,callback:function(t){e.formEdit.OdfPort=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专线互联 IP UCloud"}},[a("el-input",{model:{value:e.formEdit.InterConnIpUcloud,callback:function(t){e.formEdit.InterConnIpUcloud=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专线互联 IP 客户端"}},[a("el-input",{model:{value:e.formEdit.InterConnIpClient,callback:function(t){e.formEdit.InterConnIpClient=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"VLAN"}},[a("el-input",{model:{value:e.formEdit.Vlan,callback:function(t){e.formEdit.Vlan=t}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{model:{value:e.formEdit.Description,callback:function(t){e.formEdit.Description=t}}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(t){e.editConnFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editing},on:{click:function(t){e.saveEditedConn("formEdit")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},223:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"container"}},[a("TopBar"),e._v(" "),a("transition",{attrs:{name:"slide-fade"}},[a("router-view",{staticClass:"content"})],1)],1)},staticRenderFns:[]}},224:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"top-bar"},[a("div",{staticClass:"top-wrapper"},[a("div",{staticClass:"user-area pull-right"},[a("div",{staticClass:"user-avatar"},[a("span",{staticClass:"avatar-img"}),e._v(" "),a("i",{staticClass:"el-icon-arrow-down"}),e._v(" "),a("div",{staticClass:"drop-menu"},[a("ul",[a("li",[a("i",{staticClass:"iconfont"},[e._v("")]),e._v(e._s(e.user))])])])])]),e._v(" "),a("el-col",{staticClass:"search-area pull-right",attrs:{span:8}},[a("el-form",{attrs:{onsubmit:"return false;"}},[a("el-form-item",[a("i",{staticClass:"el-icon-search"}),e._v(" "),a("el-input",{attrs:{placeholder:"搜索"}})],1)],1)],1)],1)])},staticRenderFns:[]}},227:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(146),l=(a.n(r),a(145)),o=(a.n(l),a(144)),n=a.n(o),i=a(4),s=a(147),c=a.n(s),u=a(143);i.default.use(n.a),new i.default({router:u.a,el:"#app",template:"<App/>",components:{App:c.a}})},25:function(e,t,a){"use strict";var r={get url(){return"/"}};t.a=r}},[227]);
//# sourceMappingURL=app.1a6009b6a3f2bb6bacb8.js.map