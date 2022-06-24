"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[35],{8035:(H,v,c)=>{c.r(v),c.d(v,{CheckoutModule:()=>D});var l=c(6895),p=c(1926),e=c(1571);function C(r,s){if(1&r&&(e.TgZ(0,"button",5),e._uU(1,"View your order"),e.qZA()),2&r){const t=e.oxw();e.MGl("routerLink","/orders/",null==t.order?null:t.order.id,"")}}function y(r,s){1&r&&(e.TgZ(0,"button",6),e._uU(1,"View your orders"),e.qZA())}let Z=(()=>{class r{constructor(t){this.router=t,this.order={};const o=this.router.getCurrentNavigation(),n=o&&o.extras&&o.extras.state;n&&(this.order=n)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-success"]],decls:9,vars:2,consts:[[1,"container","mt-5"],[1,"fas","fa-check-circle","fa-5x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/orders","class","btn btn-outline-success",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/orders",1,"btn","btn-outline-success"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"i",1),e.qZA(),e.TgZ(3,"h2"),e._uU(4,"Thank you.You order is confirmed"),e.qZA(),e.TgZ(5,"p",2),e._uU(6,"Your order shoipped yet, but this is to be expected as we are not a real store"),e.qZA(),e.YNc(7,C,2,1,"button",3),e.YNc(8,y,2,0,"button",4),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf",o.order),e.xp6(1),e.Q6J("ngIf",!o.order))},dependencies:[l.O5,p.rH]}),r})();var i=c(4006),k=c(9479),m=c(122),x=c(9281),u=c(479);function _(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"li",4)(1,"button",5),e.NdJ("click",function(){const a=e.CHM(t).index,d=e.oxw();return e.KtG(d.onClick(a))}),e._uU(2),e.qZA()()}if(2&r){const t=s.$implicit,o=s.index,n=e.oxw();e.xp6(1),e.ekj("active",n.selectedIndex===o),e.xp6(1),e.hij(" ",t.label," ")}}let F=(()=>{class r extends u.B8{constructor(){super(...arguments),this.linearModeSelected=!1}ngOnInit(){this.linear=this.linearModeSelected}onClick(t){this.selectedIndex=t}}return r.\u0275fac=function(){let s;return function(o){return(s||(s=e.n5z(r)))(o||r)}}(),r.\u0275cmp=e.Xpm({type:r,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[e._Bn([{provide:u.B8,useExisting:r}]),e.qOj],decls:5,vars:2,consts:[[1,"container"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],[1,"nav-item"],[1,"nav-link","py-3","text-uppercase","font-weight-bold","btn-block",2,"padding","1.20em",3,"click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"ul",1),e.YNc(2,_,3,3,"li",2),e.qZA(),e.TgZ(3,"div"),e.GkF(4,3),e.qZA()()),2&t){let n;e.xp6(2),e.Q6J("ngForOf",o.steps),e.xp6(2),e.Q6J("ngTemplateOutlet",null!==(n=null==o.selected?null:o.selected.content)&&void 0!==n?n:null)}},dependencies:[l.sg,l.tP],styles:["button.nav-link[_ngcontent-%COMP%]{background:#e9ecef;border-radius:0;border:none}button.nav-link[_ngcontent-%COMP%]:focus{outline:none}button.nav-link.active[_ngcontent-%COMP%]:hover{color:#fff}button.nav-link[_ngcontent-%COMP%]:active{outline:none}button.nav-link.active[_ngcontent-%COMP%]:focus{outline:none}button.nav-link[_ngcontent-%COMP%]:disabled:not(.active){color:#333}"]}),r})();var h=c(7185),g=c(4015);let T=(()=>{class r{constructor(t,o){this.accountService=t,this.toastr=o}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm.get("addressForm")?.value).subscribe({next:t=>{this.toastr.success("Address saved"),this.checkoutForm.get("addressForm")?.reset(t)},error:t=>{this.toastr.error(t.message)}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(k.B),e.Y36(h._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:26,vars:9,consts:[[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-success","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["routerLink","/basket/",1,"btn","btn-outline-primary"],[1,"fas","fa-arrow-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fas","fa-arrow-right"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Shipping address"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return o.saveUserAddress()}),e._uU(5," Save as default address "),e.qZA()(),e.TgZ(6,"div",3)(7,"div",4),e._UZ(8,"app-text-input",5),e.qZA(),e.TgZ(9,"div",4),e._UZ(10,"app-text-input",6),e.qZA(),e.TgZ(11,"div",4),e._UZ(12,"app-text-input",7),e.qZA(),e.TgZ(13,"div",4),e._UZ(14,"app-text-input",8),e.qZA(),e.TgZ(15,"div",4),e._UZ(16,"app-text-input",9),e.qZA(),e.TgZ(17,"div",4),e._UZ(18,"app-text-input",10),e.qZA()()(),e.TgZ(19,"div",11)(20,"button",12),e._UZ(21,"i",13),e._uU(22," Back to Basket "),e.qZA(),e.TgZ(23,"button",14),e._uU(24," Go to Delivery "),e._UZ(25,"i",15),e.qZA()()),2&t){let n,a;e.Q6J("formGroup",o.checkoutForm),e.xp6(4),e.Q6J("disabled",!(null!=(n=o.checkoutForm.get("addressForm"))&&n.valid&&null!=(n=o.checkoutForm.get("addressForm"))&&n.dirty)),e.xp6(4),e.Q6J("label","First Name"),e.xp6(2),e.Q6J("label","Last Name"),e.xp6(2),e.Q6J("label","Street"),e.xp6(2),e.Q6J("label","City"),e.xp6(2),e.Q6J("label","State"),e.xp6(2),e.Q6J("label","ZipCode"),e.xp6(5),e.Q6J("disabled",null==(a=o.checkoutForm.get("addressForm"))?null:a.invalid)}},dependencies:[p.rH,i.JJ,i.JL,i.sg,i.u,i.x0,g.t,u.st]}),r})();var S=c(4004),A=c(2340),U=c(529);let b=(()=>{class r{constructor(t){this.http=t,this.baseUrl=A.N.apiUrl}createOrder(t){return this.http.post(this.baseUrl+"orders",t)}getDeliveryMethod(){return this.http.get(this.baseUrl+"orders/deliveryMethods").pipe((0,S.U)(t=>t.sort((o,n)=>n.price-o.price)))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(U.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function N(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"div",9)(1,"input",10),e.NdJ("click",function(){const a=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.setShippingPrice(a))}),e.qZA(),e.TgZ(2,"label",11)(3,"strong"),e._uU(4),e.ALo(5,"currency"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"span",12),e._uU(8),e.qZA()()()}if(2&r){const t=s.$implicit;e.xp6(1),e.s9C("id",t.id),e.s9C("value",t.id),e.xp6(1),e.s9C("for",t.id),e.xp6(2),e.AsE("",t.shortName," - ",e.lcZ(5,6,t.price),""),e.xp6(4),e.Oqu(t.description)}}let J=(()=>{class r{constructor(t,o){this.checkoutService=t,this.basketService=o,this.deliveryMethods=[]}ngOnInit(){this.checkoutService.getDeliveryMethod().subscribe({next:t=>this.deliveryMethods=t,error:t=>console.log(t)})}setShippingPrice(t){this.basketService.setShippingPrice(t)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(b),e.Y36(m.v))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:12,vars:2,consts:[[1,"mt-4",3,"formGroup"],[1,"mb-3"],["formGroupName","deliveryForm",1,"row","ms-5"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fas","fa-arrow-left"],["cdkStepperNext","",1,"btn","btn-primary"],[1,"fas","fa-arrow-right"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"custom-control-input",3,"id","value","click"],[1,"custom-control-label",3,"for"],[1,"label-description"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Choose your delivery mothod"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,N,9,8,"div",3),e.qZA()(),e.TgZ(5,"div",4)(6,"button",5),e._UZ(7,"i",6),e._uU(8," Back to Address "),e.qZA(),e.TgZ(9,"button",7),e._uU(10," Go to Review "),e._UZ(11,"i",8),e.qZA()()),2&t&&(e.Q6J("formGroup",o.checkoutForm),e.xp6(4),e.Q6J("ngForOf",o.deliveryMethods))},dependencies:[l.sg,i.Fj,i._,i.JJ,i.JL,i.sg,i.u,i.x0,u.st,u.po,l.H9]}),r})();var M=c(3449);let P=(()=>{class r{constructor(t,o){this.basketService=t,this.toastr=o}ngOnInit(){this.basket$=this.basketService.basket$}createPaymentIntent(){return this.basketService.createPaymentIntent().subscribe({next:()=>{this.toastr.success("Payment intent created"),this.appStepper.next()},error:t=>{console.log(t),this.toastr.error(t.message)}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.v),e.Y36(h._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:10,vars:4,consts:[[1,"container","mt-4"],[3,"isBasket","items"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fas","fa-arrow-left"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-arrow-right"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-basket-summary",1),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"div",2)(4,"button",3),e._UZ(5,"i",4),e._uU(6," Back to Delivery "),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.createPaymentIntent()}),e._uU(8," Go to Payment "),e._UZ(9,"i",6),e.qZA()()),2&t){let n;e.xp6(1),e.Q6J("isBasket",!1)("items",null==(n=e.lcZ(2,2,o.basket$))?null:n.items)}},dependencies:[u.po,M.b,l.Ov]}),r})();var f=c(5861),E=c(6805);const I=["cardNumber"],O=["cardExpiry"],Q=["cardCvc"];function q(r,s){if(1&r&&(e.ynx(0),e.TgZ(1,"span",18),e._uU(2),e.qZA(),e.BQk()),2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.cardErrors)}}function G(r,s){1&r&&e._UZ(0,"i",19)}let V=(()=>{class r{constructor(t,o,n,a){this.basketService=t,this.checkoutService=o,this.toastr=n,this.router=a,this.loading=!1,this.cardHandler=this.onChange.bind(this),this.cardNumberValid=!1,this.cardExpiryValid=!1,this.cardCvcValid=!1}ngAfterViewInit(){this.stripe=Stripe("pk_test_51HgMIsDINKKez9i6TlUBPF7GNwy3ztZVjnlSXn0Kl8vXRq7PqQ0jd00ne6hlyAsE0ZX0UVPUGIvBFKaC3EsZbEho0003KxxGAY");const t=this.stripe.elements();this.cardNumber=t.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement.nativeElement),this.cardNumber.addEventListener("change",this.cardHandler),this.cardExpiry=t.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement.nativeElement),this.cardExpiry.addEventListener("change",this.cardHandler),this.cardCvc=t.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement.nativeElement),this.cardExpiry.addEventListener("change",this.cardHandler)}ngOnDestroy(){this.cardNumber.destroy(),this.cardCvc.destroy(),this.cardExpiry.destroy()}onChange(t){switch(this.cardErrors=t.error?t.error.message:null,t.elementType){case"cardNumber":this.cardNumberValid=t.complete;break;case"cardExpiry":this.cardExpiryValid=t.complete;break;case"cardCvc":this.cardCvcValid=t.complete}}submitOrder(){var t=this;return(0,f.Z)(function*(){t.loading=!0;const o=t.basketService.getCurrentBasketValue();try{if(o){const n=yield t.createOrder(o),a=yield t.confirmPaymentWithStripe(o);if(a.paymentIntent){t.basketService.deleteBasket(o);const d={state:n};yield t.router.navigate(["checkout/success"],d)}else t.toastr.error(a.error.message);t.loading=!1}}catch(n){console.log(n),t.loading=!1}})()}confirmPaymentWithStripe(t){var o=this;return(0,f.Z)(function*(){return o.stripe.confirmCardPayment(t.clientSecret,{payment_method:{card:o.cardNumber,billing_details:{name:o.checkoutForm?.get("paymentForm")?.get("nameOnCard")?.value}}})})()}createOrder(t){var o=this;return(0,f.Z)(function*(){const n=o.getOrderToCreate(t);return yield function w(r,s){const t="object"==typeof s;return new Promise((o,n)=>{let d,a=!1;r.subscribe({next:j=>{d=j,a=!0},error:n,complete:()=>{a?o(d):t?o(s.defaultValue):n(new E.K)}})})}(o.checkoutService.createOrder(n))})()}getOrderToCreate(t){return{basketId:t.id,deliveryMethodId:+this.checkoutForm?.get("deliveryForm")?.get("deliveryMethod")?.value,shipToAddress:this.checkoutForm?.get("addressForm")?.value}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.v),e.Y36(b),e.Y36(h._W),e.Y36(p.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-payment"]],viewQuery:function(t,o){if(1&t&&(e.Gf(I,7),e.Gf(O,7),e.Gf(Q,7)),2&t){let n;e.iGM(n=e.CRH())&&(o.cardNumberElement=n.first),e.iGM(n=e.CRH())&&(o.cardExpiryElement=n.first),e.iGM(n=e.CRH())&&(o.cardCvcElement=n.first)}},inputs:{checkoutForm:"checkoutForm"},decls:22,vars:5,consts:[[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12"],["formControlName","nameOnCard",3,"label"],[1,"form-group","col-6"],["id","cardNumber",1,"form-control","py-3"],["cardNumber",""],[4,"ngIf"],[1,"form-group","col-3"],[1,"form-control","py-3"],["cardExpiry",""],["cardCvc",""],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fas","fa-arrow-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fas","fa-arrow-right"],["class","fas fa-spinner fa-spin",4,"ngIf"],[1,"text-danger"],[1,"fas","fa-spinner","fa-spin"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-text-input",3),e.qZA(),e.TgZ(4,"div",4),e._UZ(5,"div",5,6),e.YNc(7,q,3,1,"ng-container",7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"div",9,10),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"div",9,11),e.qZA()()(),e.TgZ(14,"div",12)(15,"button",13),e._UZ(16,"i",14),e._uU(17," Back to Review "),e.qZA(),e.TgZ(18,"button",15),e.NdJ("click",function(){return o.submitOrder()}),e._uU(19," Submit Order "),e._UZ(20,"i",16),e.YNc(21,G,1,0,"i",17),e.qZA()()),2&t){let n;e.Q6J("formGroup",o.checkoutForm),e.xp6(3),e.Q6J("label","Name on card"),e.xp6(4),e.Q6J("ngIf",o.cardErrors),e.xp6(11),e.Q6J("disabled",o.loading||(null==(n=o.checkoutForm.get("paymentForm"))?null:n.invalid)||!o.cardNumberValid||!o.cardExpiryValid||!o.cardCvcValid),e.xp6(3),e.Q6J("ngIf",o.loading)}},dependencies:[l.O5,i.JJ,i.JL,i.sg,i.u,i.x0,g.t,u.po]}),r})();function Y(r,s){if(1&r&&e._UZ(0,"app-order-totals",11),2&r){const t=s.ngIf;e.Q6J("shippingPrice",t.shipping)("subtotal",t.subtotal)("total",t.total)}}const B=[{path:"",component:(()=>{class r{constructor(t,o,n){this.fb=t,this.accountService=o,this.basketService=n}ngOnInit(){this.createCheckoutForm(),this.getAddressFromValues(),this.getDeliveryMethodValue(),this.basketTotalPrice$=this.basketService.basketTotalPrice$}createCheckoutForm(){this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:[null,i.kI.required],lastName:[null,i.kI.required],street:[null,i.kI.required],city:[null,i.kI.required],state:[null,i.kI.required],zipCode:[null,i.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:[null,i.kI.required]}),paymentForm:this.fb.group({nameOnCard:[null,i.kI.required]})})}getAddressFromValues(){this.accountService.getUserAddress().subscribe({next:t=>{t&&this.checkoutForm?.get("addressForm")?.patchValue(t)},error:t=>console.log(t)})}getDeliveryMethodValue(){const t=this.basketService.getCurrentBasketValue();t?.deliveryMethodId&&this.checkoutForm?.get("deliveryForm")?.get("deliveryMethod")?.patchValue(t?.deliveryMethodId?.toString())}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(i.QS),e.Y36(k.B),e.Y36(m.v))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout"]],decls:16,vars:14,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-8"],[3,"linearModeSelected"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],[3,"label"],[3,"appStepper"],[1,"col-4"],[3,"shippingPrice","subtotal","total",4,"ngIf"],[3,"shippingPrice","subtotal","total"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-stepper",3,4)(5,"cdk-step",5),e._UZ(6,"app-checkout-address",6),e.qZA(),e.TgZ(7,"cdk-step",5),e._UZ(8,"app-checkout-delivery",6),e.qZA(),e.TgZ(9,"cdk-step",7),e._UZ(10,"app-checkout-review",8),e.qZA(),e.TgZ(11,"cdk-step",7),e._UZ(12,"app-checkout-payment",6),e.qZA()()(),e.TgZ(13,"div",9),e.YNc(14,Y,1,3,"app-order-totals",10),e.ALo(15,"async"),e.qZA()()()),2&t){const n=e.MAs(4);e.xp6(3),e.Q6J("linearModeSelected",!0),e.xp6(2),e.Q6J("label","Address")("completed",o.checkoutForm.get("addressForm").valid),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm),e.xp6(1),e.Q6J("label","Delivery")("completed",o.checkoutForm.get("deliveryForm").valid),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm),e.xp6(1),e.Q6J("label","Review"),e.xp6(1),e.Q6J("appStepper",n),e.xp6(1),e.Q6J("label","Payment"),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm),e.xp6(2),e.Q6J("ngIf",e.lcZ(15,12,o.basketTotalPrice$))}},dependencies:[l.O5,x.S,u.be,F,T,J,P,V,l.Ov]}),r})()},{path:"success",component:Z}];let L=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[l.ez,p.Bz.forChild(B),p.Bz]}),r})();var R=c(4466);let D=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[l.ez,L,R.m]}),r})()}}]);