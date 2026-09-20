import{a as jt,b as Nt,c as Vt,d as Qt,e as qt,f as Gt,g as N,h as Ht}from"./chunk-ZTGCDZU5.js";import{a as Ut}from"./chunk-QYKRFPHN.js";import{a as Ct,b as Mt}from"./chunk-4CVEMSXX.js";import{a as ht,b as pt,c as _t,d as S,e as bt,f as gt,h as ut,j as kt,k as xt,m as ft,n as vt,o as yt,p as Dt,q as Lt,r as Pt,s as Et,t as St,u as At}from"./chunk-55QPERUZ.js";import{n as Bt}from"./chunk-PY42M47M.js";import{C as Tt,D as zt,E as Ft,G as Rt,H as B,I as j,a as wt,d as I,m as Ot,s as It}from"./chunk-LSFW32BI.js";import"./chunk-NJTZ3MT6.js";import"./chunk-7LO3USVY.js";import"./chunk-3MVHMEVD.js";import{Bb as ct,C as Y,Cb as rt,Fb as d,Hb as g,Ib as P,Jb as E,Lb as H,Mb as F,Nb as R,Oa as s,Rb as X,S as J,Tb as k,U as C,Ub as st,Vb as m,W as tt,Wb as w,Xa as L,Y as h,a as W,ba as T,bb as _,bc as Z,ca as D,cb as O,da as Q,ea as q,ja as G,ka as et,oa as M,ob as f,oc as mt,pb as v,qb as y,ra as U,rb as nt,sb as at,sc as lt,tb as ot,ua as it,ub as b,uc as x,vb as o,vc as dt,wb as c,xb as u}from"./chunk-3XUCRQGE.js";var V=class n{constructor(a,t){this.dialogRef=a;this.data=t}onCancel(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static \u0275fac=function(t){return new(t||n)(L(jt),L(Nt))};static \u0275cmp=_({type:n,selectors:[["app-confirm-delete-dialog"]],decls:13,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,e){t&1&&(o(0,"h2",0),m(1,"Confirm Deletion"),c(),o(2,"div",1)(3,"p"),m(4," Are you sure you want to delete "),o(5,"strong"),m(6),c(),m(7,"? "),c()(),o(8,"div",2)(9,"button",3),d("click",function(){return e.onCancel()}),m(10,"Cancel"),c(),o(11,"button",4),d("click",function(){return e.onConfirm()}),m(12,"Delete"),c()()),t&2&&(s(6),w(e.data.itemName))},dependencies:[N,Qt,Gt,qt,j,B],styles:[".mat-dialog-content[_ngcontent-%COMP%]{font-size:1.1rem}"]})};var te=["mat-internal-form-field",""],ee=["*"],Xt=(()=>{class n{labelPosition="after";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(e,i){e&2&&k("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:te,ngContentSelectors:ee,decls:1,vars:0,template:function(e,i){e&1&&(P(),E(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var ie=["input"],ne=["label"],ae=["*"],K={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},oe=new tt("mat-checkbox-default-options",{providedIn:"root",factory:()=>K}),l=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(l||{}),$=class{source;checked},ce=(()=>{class n{_elementRef=h(it);_changeDetectorRef=h(lt);_ngZone=h(et);_animationsDisabled=Tt();_options=h(oe,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(t){let e=new $;return e.source=this,e.checked=t,e}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new G;indeterminateChange=new G;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=l.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){h(wt).load(Ft);let t=h(new mt("tabindex"),{optional:!0});this._options=this._options||K,this.color=this._options.color||K.color,this.tabIndex=t==null?0:parseInt(t)||0,this.id=this._uniqueId=h(It).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(t){t.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(t){t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(t){t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(t){let e=t!=this._indeterminate();this._indeterminate.set(t),e&&(t?this._transitionCheckState(l.Indeterminate):this._transitionCheckState(this.checked?l.Checked:l.Unchecked),this.indeterminateChange.emit(t)),this._syncIndeterminate(t)}_indeterminate=M(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorChangeFn=t}_transitionCheckState(t){let e=this._currentCheckState,i=this._getAnimationTargetElement();if(!(e===t||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(e,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let t=this._options?.clickAction;!this.disabled&&t!=="noop"?(this.indeterminate&&t!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?l.Checked:l.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&t==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(t){t.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(t,e){if(this._animationsDisabled)return"";switch(t){case l.Init:if(e===l.Checked)return this._animationClasses.uncheckedToChecked;if(e==l.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case l.Unchecked:return e===l.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case l.Checked:return e===l.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case l.Indeterminate:return e===l.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(t){let e=this._inputElement;e&&(e.nativeElement.indeterminate=t)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(t){t.target&&this._labelElement.nativeElement.contains(t.target)&&t.stopPropagation()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-checkbox"]],viewQuery:function(e,i){if(e&1&&H(ie,5)(ne,5),e&2){let r;F(r=R())&&(i._inputElement=r.first),F(r=R())&&(i._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(e,i){e&2&&(rt("id",i.id),f("tabindex",null)("aria-label",null)("aria-labelledby",null),st(i.color?"mat-"+i.color:"mat-accent"),k("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",x],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",x],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",x],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?void 0:dt(t)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",x],checked:[2,"checked","checked",x],disabled:[2,"disabled","disabled",x],indeterminate:[2,"indeterminate","indeterminate",x]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Z([{provide:ht,useExisting:J(()=>n),multi:!0},{provide:_t,useExisting:n,multi:!0}]),U],ngContentSelectors:ae,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(e,i){if(e&1&&(P(),o(0,"div",3),d("click",function(p){return i._preventBubblingFromLabel(p)}),o(1,"div",4,0)(3,"div",5),d("click",function(){return i._onTouchTargetClick()}),c(),o(4,"input",6,1),d("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(p){return i._onInteractionEvent(p)}),c(),u(6,"div",7),o(7,"div",8),Q(),o(8,"svg",9),u(9,"path",10),c(),q(),u(10,"div",11),c(),u(11,"div",12),c(),o(12,"label",13,2),E(14),c()()),e&2){let r=X(2);b("labelPosition",i.labelPosition),s(4),k("mdc-checkbox--selected",i.checked),b("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),f("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),s(7),b("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),s(),b("for",i.inputId)}},dependencies:[zt,Xt],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),Zt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=C({imports:[ce,I]})}return n})();var Kt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=C({imports:[I]})}return n})();var $t=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=C({imports:[Ot,Rt,Kt,I,Ut]})}return n})();function re(n,a){n&1&&(o(0,"div",3)(1,"div",11),u(2,"div",12),o(3,"div",13),m(4,"Loading todos\u2026"),c()()())}function se(n,a){if(n&1&&(o(0,"div",21),m(1),c()),n&2){let t=g().$implicit;s(),w(t.description)}}function me(n,a){if(n&1){let t=ct();o(0,"li",15)(1,"div",16),d("click",function(){let i=T(t).$implicit,r=g(2);return D(r.toggleDescription(i.id))}),o(2,"div",17)(3,"div",18)(4,"button",19),d("click",function(i){let r=T(t).$implicit;return g(2).toggleDescription(r.id),D(i.stopPropagation())}),o(5,"mat-icon"),m(6),c()(),o(7,"div",20),m(8),c()()(),v(9,se,2,1,"div",21),c(),o(10,"div",22)(11,"button",23),d("click",function(i){let r=T(t).$implicit;return g(2).updateTodoCompleted(r),D(i.stopPropagation())}),o(12,"mat-icon"),m(13),c()(),o(14,"button",24),d("click",function(i){let r=T(t).$implicit;return g(2).deleteTodo(r.id),D(i.stopPropagation())}),o(15,"mat-icon"),m(16,"delete"),c()()()()}if(n&2){let t=a.$implicit,e=g(2);k("done",t.completed),s(4),f("aria-expanded",!!e.expanded_sig()[t.id])("title",e.expanded_sig()[t.id]?"Collapse":"Expand"),s(2),w(e.expanded_sig()[t.id]?"expand_less":"expand_more"),s(2),w(t.name),s(),y(e.expanded_sig()[t.id]?9:-1),s(2),f("aria-label",t.completed)("title",t.completed?"Undone":"Completed"),s(2),w(t.completed?"check_box":"check_box_outline_blank")}}function le(n,a){if(n&1&&(o(0,"ul",4),at(1,me,17,10,"li",14,nt),c()),n&2){let t=g();s(),ot(t.todos_sig())}}function de(n,a){n&1&&(o(0,"p",5),m(1,"Your todo list is empty."),c())}function he(n,a){n&1&&(o(0,"mat-error"),m(1," Name is required. "),c())}function pe(n,a){n&1&&(o(0,"mat-error"),m(1," Description is required. "),c())}var Wt=class n{constructor(a){this.todosService=a}fb=h(ft);form;todos_sig=M([]);loading_sig=M(!0);expanded_sig=M({});_snackBar=h(Bt);dialog=h(Vt);ngOnInit(){this.loadTodos();let a=localStorage.getItem("todoDraft"),t=a?JSON.parse(a):null;this.form=this.fb.group({name:this.fb.control(t?.name||"",{validators:[S.required,S.maxLength(100)]}),description:this.fb.control(t?.description||"",{validators:[S.required,S.maxLength(500)]})}),this.form.valueChanges.pipe(Y(300)).subscribe(e=>{localStorage.setItem("todoDraft",JSON.stringify(e))})}loadTodos(){this.loading_sig.set(!0),this.todosService.findAllTodos().subscribe({next:a=>{this.todos_sig.set(a),this.expanded_sig.set({}),this.loading_sig.set(!1)},error:a=>{this.loading_sig.set(!1),console.error("Failed to load todos",a);let e=a&&(a.status===0||a.status===503||a.status===504)?"Failed to load todos. Is the backend sleeping maybe?":"Failed to load todos";this._snackBar.open(e,"Close",{panelClass:["snackbar-error"],duration:12500})}})}toggleDescription(a){let t=this.expanded_sig(),e=W({},t);e[a]=!e[a],this.expanded_sig.set(e)}addTodo(){if(this.form.invalid)return;let{name:a,description:t}=this.form.value;this.form.reset();let e=Date.now(),i={id:e,name:a,description:t,completed:!1,createdAt:e.toString()};this.todos_sig.update(r=>[...r,i]),this.todosService.createTodo({name:a,description:t,completed:!1}).subscribe({next:r=>{this.todos_sig.update(p=>p.map(z=>z.id===e?r:z)),localStorage.removeItem("todoDraft")},error:r=>{console.error("Failed to create todo",r),this.todos_sig.update(p=>p.filter(z=>z.id!==e))}})}updateTodoCompleted(a){this.todosService.updateTodoCompleted(a.id,!a.completed).subscribe({next:t=>{t&&this.todos_sig.update(e=>e.map(i=>i.id===t.id?t:i))},error:t=>console.error("Failed to update todo",t)})}deleteTodo(a){let t=this.todos_sig().find(e=>e.id===a);this.dialog.open(V,{data:{itemName:t?.name||"this todo"}}).afterClosed().subscribe(e=>{e&&this.todosService.deleteTodo(a).subscribe({next:()=>{this.todos_sig.update(i=>i.filter(r=>r.id!=a))},error:i=>console.error("Failed to delete todo",i)})})}static \u0275fac=function(t){return new(t||n)(L(Ht))};static \u0275cmp=_({type:n,selectors:[["app-todos-component"]],decls:21,vars:6,consts:[[1,"max-w-3xl","mx-auto","p-6","rounded-lg"],["id","todolist",1,"p-6"],[1,"text-2xl","font-semibold","mb-4","text-center"],[1,"loader-wrapper"],[1,"space-y-2"],[1,"emptylist","text-gray-500","italic"],[1,"form","mt-6",3,"ngSubmit","formGroup"],[1,"full-width"],["matInput","","formControlName","name","placeholder","Enter name",3,"keydown.enter"],["matInput","","formControlName","description","placeholder","Enter description","rows","4"],["mat-raised-button","","color","primary","type","submit",1,"full-width",3,"disabled"],["role","status","aria-live","polite",1,"loader"],["aria-hidden","true",1,"spinner"],[1,"loader-label"],[1,"flex","items-center","justify-between","p-2","border","rounded",3,"done"],[1,"flex","items-center","justify-between","p-2","border","rounded"],[1,"label","w-full",3,"click"],[1,"label-row","flex","items-center","justify-between"],[1,"flex","items-center","gap-2"],["type","button",1,"expand-btn","btn-picto",3,"click"],[1,"text-lg","font-bold"],[1,"text-sm","todo-desc","mt-2"],[1,"actions","flex","gap-2"],["type","button",1,"btn-picto",3,"click"],["type","button","aria-label","Delete","title","Delete",1,"btn-picto",3,"click"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"main",1)(2,"h2",2),m(3,"\u{1F4DD} Todo List"),c(),v(4,re,5,0,"div",3),v(5,le,3,0,"ul",4)(6,de,2,0,"p",5),o(7,"form",6),d("ngSubmit",function(){return e.addTodo()}),o(8,"mat-form-field",7)(9,"mat-label"),m(10,"Name"),c(),o(11,"input",8),d("keydown.enter",function(){return e.addTodo()}),c(),v(12,he,2,0,"mat-error"),c(),o(13,"mat-form-field",7)(14,"mat-label"),m(15,"Description"),c(),o(16,"textarea",9),m(17,"        "),c(),v(18,pe,2,0,"mat-error"),c(),o(19,"button",10),m(20," Add Todo "),c()()()()),t&2&&(s(4),y(e.loading_sig()?4:-1),s(),y(e.todos_sig().length>0?5:e.loading_sig()?-1:6),s(2),b("formGroup",e.form),s(5),y(e.form.controls.name.touched&&e.form.controls.name.invalid?12:-1),s(6),y(e.form.controls.description.touched&&e.form.controls.description.invalid?18:-1),s(),b("disabled",e.form.invalid))},dependencies:[vt,ut,pt,bt,gt,Et,Pt,Dt,Lt,At,St,Zt,j,B,Mt,Ct,$t,yt,xt,kt,N],styles:['[_nghost-%COMP%]{--color-primary: #FF6666;--color-primary-hover: #FF5E5E;--color-text-on-primary: #FFF;--color-white: #FFF;--color-white-muted: rgba(255, 255, 255, .3);--color-overlay: rgba(255, 255, 255, .1);--color-shadow: rgba(100, 100, 100, .1);--color-focus-ring: rgba(0, 0, 0, .1);--container-max-width: 500px;--space-xl: 4rem;--space-lg: 3rem;--space-md: 2rem;--space-sm: 1.3rem;--space-xs: .5rem;--input-height: 3rem;--ease-fast: .2s ease-out;--ease-fast-inout: .2s ease-in-out}#todolist[_ngcontent-%COMP%]{margin:var(--space-xl) auto;padding:var(--space-md) var(--space-lg) var(--space-lg);max-width:var(--container-max-width);background:var(--color-primary);color:var(--color-text-on-primary);box-shadow:-20px -20px 0 0 var(--color-shadow)}#todolist[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:400;font-size:2.6rem;letter-spacing:.05em;border-bottom:1px solid var(--color-white-muted)}#todolist[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:.8rem;margin:.2rem 0 .7rem 3px}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:2.6rem;list-style:none}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;margin:0 -3rem 4px;padding:1.1rem 3rem;justify-content:space-between;align-items:center;background:var(--color-overlay);border-width:0}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{flex-shrink:0;padding-left:.7em}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:relative;transition:opacity var(--ease-fast)}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]{color:#f3f3f3}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{opacity:.6}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn-picto[_ngcontent-%COMP%]{border:none;background:none;-webkit-appearance:none;cursor:pointer;color:var(--color-text-on-primary)}#todolist[_ngcontent-%COMP%]   .emptylist[_ngcontent-%COMP%]{margin-top:2.6rem;text-align:center;letter-spacing:.05em;font-style:italic;opacity:.8}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;gap:16px;max-width:var(--container-max-width)}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{min-width:100%;margin-bottom:var(--space-xs);font-size:1.3rem}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex-grow:1;border:none;font-size:initial;height:var(--input-height)}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 var(--space-sm);border:1px solid var(--color-white-muted);background:var(--color-primary);color:var(--color-white);text-transform:uppercase;font-weight:700;margin-left:5px;cursor:pointer;transition:background var(--ease-fast);height:var(--input-height);border-radius:0;box-shadow:none}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--color-primary-hover)}.togglebutton-wrapper[_ngcontent-%COMP%]{margin-top:1em}.togglebutton-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.togglebutton-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;left:-9999px}.togglebutton-wrapper[_ngcontent-%COMP%]   .togglebutton-label[_ngcontent-%COMP%]{font-size:.8rem;letter-spacing:.1em}.togglebutton-wrapper[_ngcontent-%COMP%]   .tooglebutton-box[_ngcontent-%COMP%]{position:relative;display:block;margin-left:.6em;width:38px;height:22px;background:var(--color-white);border-radius:999px;cursor:pointer}.togglebutton-wrapper[_ngcontent-%COMP%]   .tooglebutton-box[_ngcontent-%COMP%]:before{content:"";position:absolute;top:2px;left:2px;display:block;width:18px;height:18px;border-radius:50%;background:var(--color-primary);opacity:.7;transition:all var(--ease-fast-inout)}.togglebutton-wrapper.togglebutton-focus[_ngcontent-%COMP%]   .tooglebutton-box[_ngcontent-%COMP%]{box-shadow:0 0 0 3px var(--color-focus-ring)}.togglebutton-wrapper.togglebutton-checked[_ngcontent-%COMP%]   .tooglebutton-box[_ngcontent-%COMP%]:before{left:calc(100% - 20px);opacity:1}html.dark-mode[_nghost-%COMP%]   #todolist[_ngcontent-%COMP%], html.dark-mode   [_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]{background:#163f3f}html.dark-mode[_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], html.dark-mode   [_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#163f3f}html.dark-mode[_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, html.dark-mode   [_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#123737}.loader-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1.5rem}.loader[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;color:var(--color-white)}.spinner[_ngcontent-%COMP%]{width:28px;height:28px;border:4px solid rgba(255,255,255,.18);border-top-color:var(--color-white);border-radius:50%;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.loader-label[_ngcontent-%COMP%]{font-size:.95rem;opacity:.95}.label-row[_ngcontent-%COMP%]{width:100%}.expand-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:6px;background:transparent;color:var(--color-text-on-primary)}.todo-desc[_ngcontent-%COMP%]{color:#ffffffe6}.label[_ngcontent-%COMP%]{cursor:pointer}'],changeDetection:0})};export{Wt as TodosComponent};
