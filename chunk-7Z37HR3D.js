import{a as Qe}from"./chunk-H2VHPC4C.js";import{a as ce,b as re,c as se,d as J,e as le,f as de,h as me,j as he,k as pe,m as _e,n as be,o as ge,p as fe,q as ke,r as Me,s as Te,t as Oe,u as Ae,v as Ie,w as Le}from"./chunk-2PEAOV4Z.js";import{a as Se,b as Pt,c as Pe,d as Fe,e as et,f as it,g as ht,h as Re,i as ze,j as Be,k as pt,l as je,m as _t,n as He}from"./chunk-XJVRDMLW.js";import{C as tt,D as Ne,E as Ve,G as Ge,H as bt,I as gt,a as ue,c as Et,d as T,e as dt,g as xe,h as St,j as ve,m as ye,n as we,o as Ce,q as De,r as mt,s as E}from"./chunk-EJW4EIDJ.js";import"./chunk-IBE4CIUP.js";import{a as Ee}from"./chunk-ECVLEYYD.js";import{s as oe}from"./chunk-NKYB6JD3.js";import{Bb as ee,C as Qt,Cb as $,D as S,Fb as _,Gb as X,Hb as Z,Ib as K,Kb as Y,Lb as j,M as ot,Mb as N,Oa as h,Qb as At,S as qt,Sb as g,T as P,Ta as $t,Tb as ie,U as u,Ua as Xt,Ub as m,Vb as st,W as f,Wa as Zt,Wb as It,X as Ut,Xa as Q,Y as c,a as y,ac as Lt,b as Gt,ba as Dt,bb as b,ca as Mt,cb as k,da as Tt,db as z,ea as Ot,fa as w,fb as Kt,ga as Wt,gb as L,h as D,hb as q,j as Ct,ja as I,ka as ct,nc as ne,oa as F,ob as x,pb as U,qb as W,ra as rt,rb as Yt,rc as lt,sa as H,sb as Jt,tb as te,tc as M,ua as R,ub as C,uc as ae,v as at,vb as r,wb as s,x as Ht,xb as B,y as G}from"./chunk-GED6OV75.js";function ci(n,a){}var O=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Rt=(()=>{class n extends Fe{_elementRef=c(R);_focusTrapFactory=c(Ce);_config;_interactivityChecker=c(we);_ngZone=c(ct);_focusMonitor=c(ve);_renderer=c(Zt);_changeDetectorRef=c(lt);_injector=c(w);_platform=c(xe);_document=c(Wt);_portalOutlet;_focusTrapped=new D;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(O,{optional:!0})||new O,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),d(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",i),d=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(t){this._isDestroyed||$t(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let i=dt(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=dt();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=dt()))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(e&1&&Y(et,7),e&2){let o;j(o=N())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){e&2&&x("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[L],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){e&1&&q(0,ci,0,0,"ng-template",0)},dependencies:[et],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),nt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new D;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!mt(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this._canClose(a)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(a,t,this.componentInstance))}},ri=new f("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=c(w);return()=>ht(n)}}),si=new f("DialogData"),li=new f("DefaultDialogConfig");function di(n){let a=F(n),t=new I;return{valueSignal:a,get value(){return a()},change:t,ngOnDestroy(){t.complete()}}}var zt=(()=>{class n{_injector=c(w);_defaultOptions=c(li,{optional:!0});_parentDialog=c(n,{optional:!0,skipSelf:!0});_overlayContainer=c(ze);_idGenerator=c(E);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;_ariaHiddenElements=new Map;_scrollStrategy=c(ri);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=at(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ot(void 0)));constructor(){}open(t,e){let i=this._defaultOptions||new O;e=y(y({},i),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),d=je(this._injector,o),l=new nt(d,e),v=this._attachContainer(d,l,e);if(l.containerInstance=v,!this.openDialogs.length){let wt=this._overlayContainer.getContainerElement();v._focusTrapped?v._focusTrapped.pipe(S(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(wt)}):this._hideNonDialogContentFromAssistiveTechnology(wt)}return this._attachDialogContent(t,l,v,e),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){Ft(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){Ft(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Ft(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Re({positionStrategy:t.positionStrategy||pt().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let o=i.injector||i.viewContainerRef?.injector,d=[{provide:O,useValue:i},{provide:nt,useValue:e},{provide:Be,useValue:t}],l;i.container?typeof i.container=="function"?l=i.container:(l=i.container.type,d.push(...i.container.providers(i))):l=Rt;let v=new Pt(l,i.viewContainerRef,w.create({parent:o||this._injector,providers:d}));return t.attach(v).instance}_attachDialogContent(t,e,i,o){if(t instanceof Xt){let d=this._createInjector(o,e,i,void 0),l={$implicit:o.data,dialogRef:e};o.templateContext&&(l=y(y({},l),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new Pe(t,null,l,d))}else{let d=this._createInjector(o,e,i,this._injector),l=i.attachComponentPortal(new Pt(t,o.viewContainerRef,d));e.componentRef=l,e.componentInstance=l.instance}}_createInjector(t,e,i,o){let d=t.injector||t.viewContainerRef?.injector,l=[{provide:si,useValue:t.data},{provide:nt,useValue:e}];return t.providers&&(typeof t.providers=="function"?l.push(...t.providers(e,t,i)):l.push(...t.providers)),t.direction&&(!d||!d.get(Et,null,{optional:!0}))&&l.push({provide:Et,useValue:di(t.direction)}),w.create({parent:d||o,providers:l})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,d)=>{o?d.setAttribute("aria-hidden",o):d.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let o=e[i];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ft(n,a){let t=n.length;for(;t--;)a(n[t])}var Ue=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=k({type:n});static \u0275inj=u({providers:[zt],imports:[_t,it,De,it]})}return n})();function mi(n,a){}var ft=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Bt="mdc-dialog--open",We="mdc-dialog--opening",$e="mdc-dialog--closing",hi=150,pi=75,_i=(()=>{class n extends Rt{_animationStateChanged=new I;_animationsEnabled=!tt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Ze(this._config.enterAnimationDuration)??hi:0;_exitAnimationDuration=this._animationsEnabled?Ze(this._config.exitAnimationDuration)??pi:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Xe,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(We,Bt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Bt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Bt),this._animationsEnabled?(this._hostElement.style.setProperty(Xe,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add($e)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(We,$e)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(i){return(t||(t=H(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){e&2&&($("id",i._config.id),x("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),g("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[L],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(r(0,"div",0)(1,"div",1),q(2,mi,0,0,"ng-template",2),s()())},dependencies:[et],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),Xe="--mat-dialog-transition-duration";function Ze(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?St(n.substring(0,n.length-2)):n.endsWith("s")?St(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var ut=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(ut||{}),V=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ct(1);_beforeClosed=new Ct(1);_result;_closeFallbackTimeout;_state=ut.OPEN;_closeInteractionType;constructor(a,t,e){this._ref=a,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(G(i=>i.state==="opened"),S(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(G(i=>i.state==="closed"),S(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ht(this.backdropClick(),this.keydownEvents().pipe(G(i=>i.keyCode===27&&!this.disableClose&&!mt(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),bi(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(G(e=>e.state==="closing"),S(1)).subscribe(e=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=ut.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=ut.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function bi(n,a,t){return n._closeInteractionType=a,n.close(t)}var jt=new f("MatMdcDialogData"),gi=new f("mat-mdc-dialog-default-options"),ui=new f("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(w);return()=>ht(n)}}),kt=(()=>{class n{_defaultOptions=c(gi,{optional:!0});_scrollStrategy=c(ui);_parentDialog=c(n,{optional:!0,skipSelf:!0});_idGenerator=c(E);_injector=c(w);_dialog=c(zt);_animationsDisabled=tt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;dialogConfigClass=ft;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=at(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ot(void 0)));constructor(){this._dialogRefConstructor=V,this._dialogContainerType=_i,this._dialogDataToken=jt}open(t,e){let i;e=y(y({},this._defaultOptions||new ft),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,Gt(y({},e),{positionStrategy:pt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:O,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(d,l,v)=>(i=new this._dialogRefConstructor(d,e,v),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:v},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let d=this.openDialogs.indexOf(i);d>-1&&(this.openDialogs.splice(d,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ke=(()=>{class n{_dialogRef=c(V,{optional:!0});_elementRef=c(R);_dialog=c(kt);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=fi(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=z({type:n})}return n})(),Ye=(()=>{class n extends Ke{id=c(E).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=H(n)))(i||n)}})();static \u0275dir=z({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,i){e&2&&$("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[L]})}return n})(),Je=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=z({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Kt([Se])]})}return n})(),ti=(()=>{class n extends Ke{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=H(n)))(i||n)}})();static \u0275dir=z({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,i){e&2&&g("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[L]})}return n})();function fi(n,a){let t=n.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}var xt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=k({type:n});static \u0275inj=u({providers:[kt],imports:[Ue,_t,it,T]})}return n})();var vt=class n{constructor(a,t){this.dialogRef=a;this.data=t}onCancel(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static \u0275fac=function(t){return new(t||n)(Q(V),Q(jt))};static \u0275cmp=b({type:n,selectors:[["app-confirm-delete-dialog"]],decls:13,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,e){t&1&&(r(0,"h2",0),m(1,"Confirm Deletion"),s(),r(2,"div",1)(3,"p"),m(4," Are you sure you want to delete "),r(5,"strong"),m(6),s(),m(7,"? "),s()(),r(8,"div",2)(9,"button",3),_("click",function(){return e.onCancel()}),m(10,"Cancel"),s(),r(11,"button",4),_("click",function(){return e.onConfirm()}),m(12,"Delete"),s()()),t&2&&(h(6),st(e.data.itemName))},dependencies:[xt,Ye,ti,Je,gt,bt],styles:[".mat-dialog-content[_ngcontent-%COMP%]{font-size:1.1rem}"]})};var yi=["mat-internal-form-field",""],wi=["*"],ei=(()=>{class n{labelPosition="after";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(e,i){e&2&&g("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:yi,ngContentSelectors:wi,decls:1,vars:0,template:function(e,i){e&1&&(Z(),K(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var Ci=["input"],Di=["label"],Mi=["*"],Nt={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Ti=new f("mat-checkbox-default-options",{providedIn:"root",factory:()=>Nt}),p=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(p||{}),Vt=class{source;checked},Oi=(()=>{class n{_elementRef=c(R);_changeDetectorRef=c(lt);_ngZone=c(ct);_animationsDisabled=tt();_options=c(Ti,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(t){let e=new Vt;return e.source=this,e.checked=t,e}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new I;indeterminateChange=new I;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=p.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){c(ue).load(Ve);let t=c(new ne("tabindex"),{optional:!0});this._options=this._options||Nt,this.color=this._options.color||Nt.color,this.tabIndex=t==null?0:parseInt(t)||0,this.id=this._uniqueId=c(E).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(t){t.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(t){t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(t){t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(t){let e=t!=this._indeterminate();this._indeterminate.set(t),e&&(t?this._transitionCheckState(p.Indeterminate):this._transitionCheckState(this.checked?p.Checked:p.Unchecked),this.indeterminateChange.emit(t)),this._syncIndeterminate(t)}_indeterminate=F(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorChangeFn=t}_transitionCheckState(t){let e=this._currentCheckState,i=this._getAnimationTargetElement();if(!(e===t||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(e,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let t=this._options?.clickAction;!this.disabled&&t!=="noop"?(this.indeterminate&&t!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?p.Checked:p.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&t==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(t){t.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(t,e){if(this._animationsDisabled)return"";switch(t){case p.Init:if(e===p.Checked)return this._animationClasses.uncheckedToChecked;if(e==p.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case p.Unchecked:return e===p.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case p.Checked:return e===p.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case p.Indeterminate:return e===p.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(t){let e=this._inputElement;e&&(e.nativeElement.indeterminate=t)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(t){t.target&&this._labelElement.nativeElement.contains(t.target)&&t.stopPropagation()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["mat-checkbox"]],viewQuery:function(e,i){if(e&1&&Y(Ci,5)(Di,5),e&2){let o;j(o=N())&&(i._inputElement=o.first),j(o=N())&&(i._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(e,i){e&2&&($("id",i.id),x("tabindex",null)("aria-label",null)("aria-labelledby",null),ie(i.color?"mat-"+i.color:"mat-accent"),g("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",M],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",M],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",M],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?void 0:ae(t)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",M],checked:[2,"checked","checked",M],disabled:[2,"disabled","disabled",M],indeterminate:[2,"indeterminate","indeterminate",M]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Lt([{provide:ce,useExisting:qt(()=>n),multi:!0},{provide:se,useExisting:n,multi:!0}]),rt],ngContentSelectors:Mi,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(e,i){if(e&1&&(Z(),r(0,"div",3),_("click",function(d){return i._preventBubblingFromLabel(d)}),r(1,"div",4,0)(3,"div",5),_("click",function(){return i._onTouchTargetClick()}),s(),r(4,"input",6,1),_("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(d){return i._onInteractionEvent(d)}),s(),B(6,"div",7),r(7,"div",8),Tt(),r(8,"svg",9),B(9,"path",10),s(),Ot(),B(10,"div",11),s(),B(11,"div",12),s(),r(12,"label",13,2),K(14),s()()),e&2){let o=At(2);C("labelPosition",i.labelPosition),h(4),g("mdc-checkbox--selected",i.checked),C("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),x("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),h(7),C("matRippleTrigger",o)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),h(),C("for",i.inputId)}},dependencies:[Ne,ei],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})(),ii=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=k({type:n});static \u0275inj=u({imports:[Oi,T]})}return n})();var ni=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=k({type:n});static \u0275inj=u({imports:[T]})}return n})();var ai=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=k({type:n});static \u0275inj=u({imports:[ye,Ge,ni,T,Qe]})}return n})();var yt=class n{constructor(a){this.http=a}API_URL=`${Ee.API_URL}/todos`;findAllTodos(){return this.http.get(`${this.API_URL}`)}getTodoById(a){return this.http.get(`${this.API_URL}/${a}`)}createTodo(a){return this.http.post(`${this.API_URL}`,a)}updateTodoCompleted(a,t){return this.http.put(`${this.API_URL}/${a}/completed`,{completed:t})}deleteTodo(a){return this.http.delete(`${this.API_URL}/${a}`)}static \u0275fac=function(t){return new(t||n)(Ut(oe))};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})};function Ii(n,a){if(n&1){let t=ee();r(0,"li",11)(1,"div",12)(2,"div",13),m(3),s(),r(4,"div",14),m(5),s()(),r(6,"div",15)(7,"button",16),_("click",function(){let i=Dt(t).$implicit,o=X(2);return Mt(o.updateTodoCompleted(i))}),r(8,"mat-icon"),m(9),s()(),r(10,"button",17),_("click",function(){let i=Dt(t).$implicit,o=X(2);return Mt(o.deleteTodo(i.id))}),r(11,"mat-icon"),m(12,"delete"),s()()()()}if(n&2){let t=a.$implicit;g("done",t.completed),h(3),It(" ",t.name," "),h(2),It(" ",t.description," "),h(2),x("aria-label",t.completed)("title",t.completed?"Undone":"Completed"),h(2),st(t.completed?"check_box":"check_box_outline_blank")}}function Li(n,a){if(n&1&&(r(0,"ul",3),Jt(1,Ii,13,7,"li",10,Yt),s()),n&2){let t=X();h(),te(t.todos_sig())}}function Ei(n,a){n&1&&(r(0,"p",4),m(1,"Your todo list is empty."),s())}function Si(n,a){n&1&&(r(0,"mat-error"),m(1," Name is required. "),s())}function Pi(n,a){n&1&&(r(0,"mat-error"),m(1," Description is required. "),s())}var oi=class n{constructor(a){this.todosService=a}fb=c(_e);form;todos_sig=F([]);_snackBar=c(He);dialog=c(kt);ngOnInit(){this.loadTodos();let a=localStorage.getItem("todoDraft"),t=a?JSON.parse(a):null;this.form=this.fb.group({name:this.fb.control(t?.name||"",{validators:[J.required,J.maxLength(100)]}),description:this.fb.control(t?.description||"",{validators:[J.required,J.maxLength(500)]})}),this.form.valueChanges.pipe(Qt(300)).subscribe(e=>{localStorage.setItem("todoDraft",JSON.stringify(e))})}loadTodos(){this.todosService.findAllTodos().subscribe({next:a=>{this.todos_sig.set(a)},error:a=>{console.error("Failed to load todos",a),this._snackBar.open("Failed to load todos","Close",{panelClass:["snackbar-error"],duration:12500})}})}addTodo(){if(this.form.invalid)return;let{name:a,description:t}=this.form.value;this.form.reset();let e=Date.now(),i={id:e,name:a,description:t,completed:!1,createdAt:e.toString()};this.todos_sig.update(o=>[...o,i]),this.todosService.createTodo({name:a,description:t,completed:!1}).subscribe({next:o=>{this.todos_sig.update(d=>d.map(l=>l.id===e?o:l)),localStorage.removeItem("todoDraft")},error:o=>{console.error("Failed to create todo",o),this.todos_sig.update(d=>d.filter(l=>l.id!==e))}})}updateTodoCompleted(a){this.todosService.updateTodoCompleted(a.id,!a.completed).subscribe({next:t=>{t&&this.todos_sig.update(e=>e.map(i=>i.id===t.id?t:i))},error:t=>console.error("Failed to update todo",t)})}deleteTodo(a){let t=this.todos_sig().find(e=>e.id===a);this.dialog.open(vt,{data:{itemName:t?.name||"this todo"}}).afterClosed().subscribe(e=>{e&&this.todosService.deleteTodo(a).subscribe({next:()=>{this.todos_sig.update(i=>i.filter(o=>o.id!=a))},error:i=>console.error("Failed to delete todo",i)})})}static \u0275fac=function(t){return new(t||n)(Q(yt))};static \u0275cmp=b({type:n,selectors:[["app-todos-component"]],decls:20,vars:5,consts:[[1,"max-w-3xl","mx-auto","p-6","rounded-lg"],["id","todolist",1,"p-6"],[1,"text-2xl","font-semibold","mb-4","text-center"],[1,"space-y-2"],[1,"emptylist","text-gray-500","italic"],[1,"form","mt-6",3,"ngSubmit","formGroup"],[1,"full-width"],["matInput","","formControlName","name","placeholder","Enter name",3,"keydown.enter"],["matInput","","formControlName","description","placeholder","Enter description","rows","4"],["mat-raised-button","","color","primary","type","submit",1,"full-width",3,"disabled"],[1,"flex","items-center","justify-between","p-2","border","rounded",3,"done"],[1,"flex","items-center","justify-between","p-2","border","rounded"],[1,"label"],[1,"text-lg","font-bold"],[1,"text-sm"],[1,"actions","flex","gap-2"],["type","button",1,"btn-picto",3,"click"],["type","button","aria-label","Delete","title","Delete",1,"btn-picto",3,"click"]],template:function(t,e){t&1&&(r(0,"div",0)(1,"main",1)(2,"h2",2),m(3,"\u{1F4DD} Todo List"),s(),U(4,Li,3,0,"ul",3)(5,Ei,2,0,"p",4),r(6,"form",5),_("ngSubmit",function(){return e.addTodo()}),r(7,"mat-form-field",6)(8,"mat-label"),m(9,"Name"),s(),r(10,"input",7),_("keydown.enter",function(){return e.addTodo()}),s(),U(11,Si,2,0,"mat-error"),s(),r(12,"mat-form-field",6)(13,"mat-label"),m(14,"Description"),s(),r(15,"textarea",8),m(16,"        "),s(),U(17,Pi,2,0,"mat-error"),s(),r(18,"button",9),m(19," Add Todo "),s()()()()),t&2&&(h(4),W(e.todos_sig().length>0?4:5),h(2),C("formGroup",e.form),h(5),W(e.form.controls.name.touched&&e.form.controls.name.invalid?11:-1),h(6),W(e.form.controls.description.touched&&e.form.controls.description.invalid?17:-1),h(),C("disabled",e.form.invalid))},dependencies:[be,me,re,le,de,Ae,Oe,Me,Te,Le,Ie,ii,gt,bt,ke,fe,ai,ge,pe,he,xt],styles:['[_nghost-%COMP%]{--color-primary: #FF6666;--color-primary-hover: #FF5E5E;--color-text-on-primary: #FFF;--color-white: #FFF;--color-white-muted: rgba(255, 255, 255, .3);--color-overlay: rgba(255, 255, 255, .1);--color-shadow: rgba(100, 100, 100, .1);--color-focus-ring: rgba(0, 0, 0, .1);--container-max-width: 500px;--space-xl: 4rem;--space-lg: 3rem;--space-md: 2rem;--space-sm: 1.3rem;--space-xs: .5rem;--input-height: 3rem;--ease-fast: .2s ease-out;--ease-fast-inout: .2s ease-in-out}#todolist[_ngcontent-%COMP%]{margin:var(--space-xl) auto;padding:var(--space-md) var(--space-lg) var(--space-lg);max-width:var(--container-max-width);background:var(--color-primary);color:var(--color-text-on-primary);box-shadow:-20px -20px 0 0 var(--color-shadow)}#todolist[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:400;font-size:2.6rem;letter-spacing:.05em;border-bottom:1px solid var(--color-white-muted)}#todolist[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:.8rem;margin:.2rem 0 .7rem 3px}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:2.6rem;list-style:none}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;margin:0 -3rem 4px;padding:1.1rem 3rem;justify-content:space-between;align-items:center;background:var(--color-overlay);border-width:0}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{flex-shrink:0;padding-left:.7em}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:relative;transition:opacity var(--ease-fast)}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]{color:#f3f3f3}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{opacity:.6}#todolist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn-picto[_ngcontent-%COMP%]{border:none;background:none;-webkit-appearance:none;cursor:pointer;color:var(--color-text-on-primary)}#todolist[_ngcontent-%COMP%]   .emptylist[_ngcontent-%COMP%]{margin-top:2.6rem;text-align:center;letter-spacing:.05em;font-style:italic;opacity:.8}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column;gap:16px;max-width:var(--container-max-width)}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{min-width:100%;margin-bottom:var(--space-xs);font-size:1.3rem}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex-grow:1;border:none;font-size:initial;height:var(--input-height)}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 var(--space-sm);border:1px solid var(--color-white-muted);background:var(--color-primary);color:var(--color-white);text-transform:uppercase;font-weight:700;margin-left:5px;cursor:pointer;transition:background var(--ease-fast);height:var(--input-height);border-radius:0;box-shadow:none}#todolist[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--color-primary-hover)}.togglebutton-wrapper[_ngcontent-%COMP%]{margin-top:1em}.togglebutton-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.togglebutton-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;left:-9999px}.togglebutton-wrapper[_ngcontent-%COMP%]   .togglebutton-label[_ngcontent-%COMP%]{font-size:.8rem;letter-spacing:.1em}.togglebutton-wrapper[_ngcontent-%COMP%]   .tooglebutton-box[_ngcontent-%COMP%]{position:relative;display:block;margin-left:.6em;width:38px;height:22px;background:var(--color-white);border-radius:999px;cursor:pointer}.togglebutton-wrapper[_ngcontent-%COMP%]   .tooglebutton-box[_ngcontent-%COMP%]:before{content:"";position:absolute;top:2px;left:2px;display:block;width:18px;height:18px;border-radius:50%;background:var(--color-primary);opacity:.7;transition:all var(--ease-fast-inout)}.togglebutton-wrapper.togglebutton-focus[_ngcontent-%COMP%]   .tooglebutton-box[_ngcontent-%COMP%]{box-shadow:0 0 0 3px var(--color-focus-ring)}.togglebutton-wrapper.togglebutton-checked[_ngcontent-%COMP%]   .tooglebutton-box[_ngcontent-%COMP%]:before{left:calc(100% - 20px);opacity:1}html.dark-mode[_nghost-%COMP%]   #todolist[_ngcontent-%COMP%], html.dark-mode   [_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]{background:#163f3f}html.dark-mode[_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], html.dark-mode   [_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#163f3f}html.dark-mode[_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, html.dark-mode   [_nghost-%COMP%]   #todolist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#123737}'],changeDetection:0})};export{oi as TodosComponent};
