import{r as s,h as t,i as r}from"./p-d6a83339.js";import{c as i,g as o}from"./p-a9ded7f3.js";import"./p-112455b1.js";const a=class{constructor(t){s(this,t),this.parent="body",this.minimum=.08,this.easing="ease",this.speed=200,this.trickle=!0,this.trickleSpeed=200,this.template='<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="1"></div>',this.show=!1}async start(){try{this.show=!0,this.progressObj.start()}catch(s){console.error("Error in start method",s)}}async done(){try{this.show=!1,this.progressObj.done()}catch(s){console.error("Error in done method",s)}}async inc(){try{this.progressObj.inc()}catch(s){console.error("Error in inc method",s)}}async set(s){try{this.progressObj.set(s)}catch(t){console.error("Error in set method",t)}}showChanged(s){s?this.progressObj.start():this.progressObj.done()}disconnectedCallback(){this.progressObj.done()}componentWillLoad(){this.progressObj=i(o(this)),this.show&&this.progressObj.start()}render(){return t(r,null,t("slot",null))}static get watchers(){return{show:["showChanged"]}}};export{a as fw_progress_loader}