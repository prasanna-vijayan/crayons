import{r as registerInstance,h}from"./index-f21e28a1.js";var accordionBodyCss=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.accordion-body{font-size:var(--fw-accordion-body-font-size, 14px);line-height:var(--fw-accordion-body-line-height, 18px);background-color:var(--fw-accordion-body-background-color, #f5f7f9);padding:var(--fw-accordion-body-padding, 20px);border-end-start-radius:var(--fw-accordion-border-radius, 8px);border-end-end-radius:var(--fw-accordion-border-radius, 8px);border-start-end-radius:0;border-start-start-radius:0}.accordion-body.collapsed{display:none}.accordion-body.no-bounding-box{border-radius:0}';var AccordionBody=function(){function o(o){registerInstance(this,o);this.type="default"}o.prototype.render=function(){return h("div",{class:{"accordion-body":true,collapsed:!this.expanded,"no-bounding-box":this.type==="no_bounding_box"}},h("slot",null))};return o}();AccordionBody.style=accordionBodyCss;export{AccordionBody as fw_accordion_body};