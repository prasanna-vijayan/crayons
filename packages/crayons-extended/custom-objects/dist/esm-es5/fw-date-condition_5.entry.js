var __awaiter=this&&this.__awaiter||function(t,e,r,o){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,n){function s(t){try{l(o.next(t))}catch(e){n(e)}}function a(t){try{l(o["throw"](t))}catch(e){n(e)}}function l(t){t.done?r(t.value):i(t.value).then(s,a)}l((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return l([t,e])}}function l(s){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,i&&(n=s[0]&2?i["return"]:s[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,s[1])).done)return n;if(i=0,n)s=[s[0]&2,n.value];switch(s[0]){case 0:case 1:n=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){r.label=s[1];break}if(s[0]===6&&r.label<n[1]){r.label=n[1];n=s;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(s);break}if(n[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(a){s=[6,a];i=0}finally{o=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};import{r as registerInstance,h,c as createEvent}from"./index-f435cf58.js";import{T as TranslationController}from"./Translation-7ee0e3b3.js";import"./index-fb937839.js";var DateCondition=function(){function t(t){registerInstance(this,t);this.state="normal";this.hintText="";this.errorText="";this.error=false;this.showError=true;this.controlProps={}}t.prototype.onInputBlur=function(){this.requiredValidation()};t.prototype.onSelectionChange=function(t){this.value=t.detail.value};t.prototype.isValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.error){return[2,!this.error]}this.requiredValidation();return[2,!this.error]}))}))};t.prototype.setError=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.error=t;if(t){this.state="error";this.showError&&(this.errorText=e)}else{this.state="normal";this.hintText=""}return[2]}))}))};t.prototype.refresh=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.datepicker.clearValue();this.setError(false);return[2]}))}))};t.prototype.requiredValidation=function(){if(this.controlProps["mode"]==="range"){this.valueRangeExists(this.value)?this.setError(false):this.setError(true,TranslationController.t("filters.validation.required"))}else{this.valueExists(this.value)?this.setError(false):this.setError(true,TranslationController.t("filters.validation.required"))}};t.prototype.valueExists=function(t){return!(typeof t==="undefined"||t==="")};t.prototype.valueRangeExists=function(t){return t&&this.valueExists(t["fromDate"])&&this.valueExists(t["toDate"])};t.prototype.componentWillLoad=function(){if(this.controlProps["mode"]==="range"){this.value={fromDate:this.controlProps["fromDate"],toDate:this.controlProps["toDate"]}}else{this.value=this.controlProps["value"]}};t.prototype.render=function(){var t=this;return h("fw-datepicker",Object.assign({ref:function(e){return t.datepicker=e},state:this.state,hintText:this.hintText,errorText:this.errorText},this.controlProps,{readonly:true}))};return t}();DateCondition.style=":host {display: block}";var filterDropdownCss=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}.dropdown{--fw-popover-min-width:160px}.dropdown-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:#ffffff;border-radius:4px;min-width:50px;min-height:32px;font-size:14px;font-weight:400;color:#2c5cc5;border:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box}@media (prefers-reduced-motion){.dropdown-container:focus,.dropdown-container:hover{border:2px solid #2c5cc5}}.dropdown-status-icon{-webkit-margin-end:4px;margin-inline-end:4px}.dropdown-label{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-after:0px;padding-block-end:0px;-webkit-padding-end:6px;padding-inline-end:6px;-webkit-padding-before:0px;padding-block-start:0px}@media (prefers-reduced-motion){.dropdown-status-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:20px;min-height:20px;-webkit-transition:all 0.15s;transition:all 0.15s}:host(:not([dir="rtl"])) .dropdown-status-icon.expanded,:host([dir="ltr"]) .dropdown-status-icon.expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([dir="rtl"]) .dropdown-status-icon.expanded{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}';var FilterDropdown=function(){function t(t){registerInstance(this,t)}t.prototype.onSelection=function(t){this.selectedText=t.detail.meta.selectedOptions[0].text;this.dropdown.hide()};t.prototype.onDropdownOpen=function(){this.isExpanded=true};t.prototype.onDropdownClose=function(){this.isExpanded=false};t.prototype.componentWillLoad=function(){var t=this;this.selectedText=this.options.filter((function(e){return e.value===t.value}))[0].text};t.prototype.render=function(){var t=this;return h("fw-popover",{ref:function(e){return t.dropdown=e},class:"dropdown","same-width":"false",placement:"bottom-start",autoFocusOnContent:true,hoist:true},h("div",{class:"dropdown-container",slot:"popover-trigger",tabIndex:0,role:"button"},h("span",{class:"dropdown-label"},this.selectedText),h("span",{class:{"dropdown-status-icon":true,expanded:this.isExpanded}},h("fw-icon",{name:"chevron-down",color:"#2c5cc5",size:8,library:"system"}))),h("fw-list-options",{slot:"popover-content",value:this.value,allowDeselect:false,options:this.options}))};return t}();FilterDropdown.style=filterDropdownCss;var InputCondition=function(){function t(t){registerInstance(this,t);this.state="normal";this.hintText="";this.errorText="";this.value="";this.error=false;this.showError=true;this.controlProps={}}t.prototype.onInputBlur=function(){this.requiredValidation()};t.prototype.onInputChange=function(t){this.value=t.detail.value};t.prototype.isValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.error){return[2,!this.error]}this.requiredValidation();return[2,!this.error]}))}))};t.prototype.setError=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.error=t;if(t){this.state="error";this.showError&&(this.errorText=e)}else{this.state="normal";this.hintText=""}return[2]}))}))};t.prototype.refresh=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.value=undefined;this.setError(false);return[2]}))}))};t.prototype.requiredValidation=function(){this.valueExists(this.value)?this.setError(false):this.setError(true,TranslationController.t("filters.validation.required"))};t.prototype.valueExists=function(t){return!(typeof t==="undefined"||t===""||t===null)};t.prototype.componentWillLoad=function(){};t.prototype.render=function(){return h("fw-input",Object.assign({},this.controlProps,{state:this.state,hintText:this.hintText,errorText:this.errorText,value:this.value}))};return t}();InputCondition.style=":host {display: block}";var inputRangeConditionCss=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.range-container{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.range-container fw-input-condition{width:150px}.range-container .range-text{min-height:34px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-margin-after:0px;margin-block-end:0px;margin-inline:12px;-webkit-margin-before:0px;margin-block-start:0px}';var InputRangeCondition=function(){function t(t){registerInstance(this,t);this.fwInput=createEvent(this,"fwInput",7);this.error=false;this.controlProps={}}t.prototype.onInputBlur=function(){this.valueExists(this.fromValue)&&this.valueExists(this.toValue)&&this.minMaxValidation()};t.prototype.onInputChange=function(t){var e=t.composedPath()[0],r=e.tagName,o=e.name;if(r==="FW-INPUT"){var i=t.detail.value;var n=this.valueExists(i)?parseInt(i):"";if(o==="from"){this.fromValue=n}else{this.toValue=n}this.value={from:this.fromValue,to:this.toValue};this.fwInput.emit({value:this.value});t.stopImmediatePropagation();t.stopPropagation();t.preventDefault()}};t.prototype.isValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.error){return[2,!this.error]}this.requiredValidation();!this.error&&this.minMaxValidation();return[2,!this.error]}))}))};t.prototype.requiredValidation=function(){this.fromElement.isValid();this.toElement.isValid();this.error=!(this.valueExists(this.fromValue)&&this.valueExists(this.toValue))};t.prototype.minMaxValidation=function(){if(this.fromValue>=this.toValue||this.toValue<this.fromValue){this.error=true;this.toElement.setError(true,TranslationController.t("filters.validation.minMax",{fromValue:this.fromValue}))}else{this.error=false;this.toElement.setError(false)}};t.prototype.valueExists=function(t){return!(typeof t==="undefined"||t==="")};t.prototype.componentWillLoad=function(){var t,e;this.fromValue=(t=this.value)===null||t===void 0?void 0:t.from;this.toValue=(e=this.value)===null||e===void 0?void 0:e.to};t.prototype.render=function(){var t=this;return h("div",{class:"range-container"},h("fw-input-condition",{controlProps:Object.assign(Object.assign({},this.controlProps),{type:"number",name:"from",placeholder:TranslationController.t("filters.placeholder.startRange")}),ref:function(e){t.fromElement=e},value:this.fromValue}),h("span",{class:"range-text"}," ",TranslationController.t("filters.placeholder.and")," "),h("fw-input-condition",{controlProps:Object.assign(Object.assign({},this.controlProps),{type:"number",name:"to",placeholder:TranslationController.t("filters.placeholder.endRange")}),ref:function(e){t.toElement=e},value:this.toValue}))};return t}();InputRangeCondition.style=inputRangeConditionCss;var SelectCondition=function(){function t(t){registerInstance(this,t);this.state="normal";this.hintText="";this.errorText="";this.error=false;this.showError=true;this.controlProps={}}t.prototype.onInputBlur=function(){this.requiredValidation()};t.prototype.onSelectionChange=function(t){var e,r;this.value=(r=(e=t.detail)===null||e===void 0?void 0:e.meta)===null||r===void 0?void 0:r.selectedOptions};t.prototype.isValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.error){return[2,!this.error]}this.requiredValidation();return[2,!this.error]}))}))};t.prototype.refresh=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.value=undefined;this.setError(false);return[2]}))}))};t.prototype.setError=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.error=t;if(t){this.state="error";this.showError&&(this.errorText=e)}else{this.state="normal";this.hintText=""}return[2]}))}))};t.prototype.requiredValidation=function(){this.valueExists(this.value)?this.setError(false):this.setError(true,TranslationController.t("filters.validation.required"))};t.prototype.valueExists=function(t){return!(typeof t==="undefined"||t===""||(t===null||t===void 0?void 0:t.length)===0)};t.prototype.componentWillLoad=function(){};t.prototype.render=function(){return h("fw-select",Object.assign({state:this.state,hintText:this.hintText,errorText:this.errorText,selectedOptions:this.value},this.controlProps))};return t}();SelectCondition.style=":host {display: block}";export{DateCondition as fw_date_condition,FilterDropdown as fw_filter_dropdown,InputCondition as fw_input_condition,InputRangeCondition as fw_input_range_condition,SelectCondition as fw_select_condition};