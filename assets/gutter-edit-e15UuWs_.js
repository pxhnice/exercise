import{d as b}from"./property-6606s0ZR.js";import{d as h,r as n,o as s,c as r,g as e,w as l,s as _,F as k,t as C,a as g,q as v}from"./index-wDcN0h0X.js";const w={class:"ex-property-row"},D={class:"ex-property-col_title"},N=h({__name:"gutter-edit",props:b,setup(y){const i=y,f=()=>{i.designer.copyContainerWidget(i.settingData)},V=o=>{};return(o,d)=>{const x=n("el-divider"),p=n("el-input-number"),a=n("el-form-item"),u=n("el-button");return s(),r("div",null,[e(x,null,{default:l(()=>[_(" 栅格列设置 ")]),_:1}),e(a,{label:"栅格间隙"},{default:l(()=>[e(p,{style:{width:"100%"},modelValue:o.optionsModel.gutter,"onUpdate:modelValue":d[0]||(d[0]=t=>o.optionsModel.gutter=t),min:0},null,8,["modelValue"])]),_:1}),e(a,{label:"当前栅格列"}),e(a,{"label-width":"0"},{default:l(()=>[g("ul",w,[(s(!0),r(k,null,v(o.settingData.children,(t,m)=>(s(),r("li",{class:"ex-property-col ex-mgb-10",key:t.id},[g("span",D,"栅格宽度"+C(m+1),1),e(p,{class:"ex-property-col_put",modelValue:t.options.span,"onUpdate:modelValue":c=>t.options.span=c,min:1,max:24},null,8,["modelValue","onUpdate:modelValue"]),e(u,{onClick:c=>V(m),class:"ex-mgl-10",icon:"Minus",type:"danger",plain:"",circle:""},null,8,["onClick"])]))),128))]),e(u,{style:{padding:"0px"},onClick:f,type:"primary",link:""},{default:l(()=>[_(" 添加栅格列 ")]),_:1})]),_:1})])}}});export{N as default};