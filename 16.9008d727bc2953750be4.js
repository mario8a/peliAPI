(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0CBe":function(l,n,u){"use strict";u.d(n,"a",function(){return o});var t=u("AytR").a.imgPath,o=function(){function l(){}return l.prototype.transform=function(l,n){return void 0===n&&(n="w500"),l?t+"/"+n+l:"./assets/no-image-banner.jpg"},l}()},"8cDG":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),e=u("I0/6"),i=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),c=u("Ip0R"),b=u("0CBe"),s=u("gIcY"),p=u("mrSG"),f=u("sUQ5"),h=u("tFeF"),d=function(){function l(l,n){this.movieSerice=l,this.modalCtrl=n,this.textoBuscar="",this.buscando=!1,this.peliculas=[],this.ideas=["spiderman","avengers","Se\xf1or de los anillis","Dori"]}return l.prototype.buscar=function(l){var n=this,u=l.detail.value;if(0===u.length)return this.buscando=!1,void(this.peliculas=[]);this.buscando=!0,this.movieSerice.buscarPeliculas(u).subscribe(function(l){console.log(l),n.peliculas=l.results,n.buscando=!1})},l.prototype.detalle=function(l){return p.b(this,void 0,void 0,function(){return p.e(this,function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:h.a,componentProps:{id:l}})];case 1:return n.sent().present(),[2]}})})},l}(),g=t.mb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,7,"ion-grid",[],null,null,null,r.O,r.l)),t.nb(1,49152,null,0,a.x,[t.h,t.k],null,null),(l()(),t.ob(2,0,null,0,5,"ion-row",[],null,null,null,r.W,r.t)),t.nb(3,49152,null,0,a.fb,[t.h,t.k],null,null),(l()(),t.ob(4,0,null,0,3,"ion-col",[["text-center",""]],null,null,null,r.L,r.i)),t.nb(5,49152,null,0,a.q,[t.h,t.k],null,null),(l()(),t.ob(6,0,null,0,1,"ion-spinner",[["name","crescent"]],null,null,null,r.ab,r.x)),t.nb(7,49152,null,0,a.ob,[t.h,t.k],{name:[0,"name"]},null)],function(l,n){l(n,7,0,"crescent")},null)}function v(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,4,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==(l.component.textoBuscar=l.context.$implicit)&&t),t},r.R,r.o)),t.nb(1,49152,null,0,a.E,[t.h,t.k],null,null),(l()(),t.ob(2,0,null,0,2,"ion-label",[["color","primary"]],null,null,null,r.S,r.p)),t.nb(3,49152,null,0,a.K,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.Db(4,0,["",""]))],function(l,n){l(n,3,0,"primary")},function(l,n){l(n,4,0,n.context.$implicit)})}function k(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,8,"ion-list",[],null,null,null,r.U,r.q)),t.nb(1,49152,null,0,a.L,[t.h,t.k],null,null),(l()(),t.ob(2,0,null,0,4,"ion-list-header",[],null,null,null,r.T,r.r)),t.nb(3,49152,null,0,a.M,[t.h,t.k],null,null),(l()(),t.ob(4,0,null,0,2,"ion-label",[],null,null,null,r.S,r.p)),t.nb(5,49152,null,0,a.K,[t.h,t.k],null,null),(l()(),t.Db(-1,0,["ideas"])),(l()(),t.fb(16777216,null,0,1,null,v)),t.nb(8,278528,null,0,c.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,8,0,n.component.ideas)},null)}function y(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,14,"ion-col",[["size","6"]],null,null,null,r.L,r.i)),t.nb(1,49152,null,0,a.q,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.ob(2,0,null,0,12,"ion-card",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.detalle(l.context.$implicit.id)&&t),t},r.J,r.d)),t.nb(3,49152,null,0,a.j,[t.h,t.k],null,null),(l()(),t.ob(4,0,null,0,1,"img",[],[[8,"src",4]],null,null,null,null)),t.zb(5,1),(l()(),t.ob(6,0,null,0,4,"ion-card-header",[],null,null,null,r.H,r.f)),t.nb(7,49152,null,0,a.l,[t.h,t.k],null,null),(l()(),t.ob(8,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.I,r.g)),t.nb(9,49152,null,0,a.m,[t.h,t.k],null,null),(l()(),t.Db(10,0,["",""])),(l()(),t.ob(11,0,null,0,3,"ion-card-content",[],null,null,null,r.G,r.e)),t.nb(12,49152,null,0,a.k,[t.h,t.k],null,null),(l()(),t.ob(13,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Db(14,null,["",""]))],function(l,n){l(n,1,0,"6")},function(l,n){var u=t.Eb(n,4,0,l(n,5,0,t.xb(n.parent,0),n.context.$implicit.poster_path));l(n,4,0,u),l(n,10,0,n.context.$implicit.release_date),l(n,14,0,n.context.$implicit.title)})}function x(l){return t.Fb(0,[t.yb(0,b.a,[]),(l()(),t.ob(1,0,null,null,6,"ion-header",[],null,null,null,r.P,r.m)),t.nb(2,49152,null,0,a.y,[t.h,t.k],null,null),(l()(),t.ob(3,0,null,0,4,"ion-toolbar",[],null,null,null,r.fb,r.C)),t.nb(4,49152,null,0,a.yb,[t.h,t.k],null,null),(l()(),t.ob(5,0,null,0,2,"ion-title",[],null,null,null,r.eb,r.B)),t.nb(6,49152,null,0,a.wb,[t.h,t.k],null,null),(l()(),t.Db(-1,0,[" Buscar pelicula "])),(l()(),t.ob(8,0,null,null,5,"ion-toolbar",[],null,null,null,r.fb,r.C)),t.nb(9,49152,null,0,a.yb,[t.h,t.k],null,null),(l()(),t.ob(10,0,null,0,3,"ion-searchbar",[["animated",""],["debounce","700"],["placeholder","Buscar pelicula"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.xb(l,13)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==t.xb(l,13)._handleInputEvent(u.target.value)&&o),"ionChange"===n&&(o=!1!==e.buscar(u)&&o),o},r.X,r.u)),t.Ab(5120,null,s.b,function(l){return[l]},[a.Gb]),t.nb(12,49152,null,0,a.gb,[t.h,t.k],{animated:[0,"animated"],debounce:[1,"debounce"],placeholder:[2,"placeholder"],value:[3,"value"]},null),t.nb(13,16384,null,0,a.Gb,[t.k],null,null),(l()(),t.ob(14,0,null,null,11,"ion-content",[],null,null,null,r.M,r.j)),t.nb(15,49152,null,0,a.r,[t.h,t.k],null,null),(l()(),t.fb(16777216,null,0,1,null,m)),t.nb(17,16384,null,0,c.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,k)),t.nb(19,16384,null,0,c.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(20,0,null,0,5,"ion-grid",[["fixed",""]],null,null,null,r.O,r.l)),t.nb(21,49152,null,0,a.x,[t.h,t.k],{fixed:[0,"fixed"]},null),(l()(),t.ob(22,0,null,0,3,"ion-row",[],null,null,null,r.W,r.t)),t.nb(23,49152,null,0,a.fb,[t.h,t.k],null,null),(l()(),t.fb(16777216,null,0,1,null,y)),t.nb(25,278528,null,0,c.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,12,0,"","700","Buscar pelicula",u.textoBuscar),l(n,17,0,u.buscando),l(n,19,0,0===u.peliculas.length),l(n,21,0,""),l(n,25,0,u.peliculas)},null)}function F(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,1,"app-tab2",[],null,null,null,x,g)),t.nb(1,49152,null,0,d,[f.a,a.Cb],null,null)],null,null)}var w=t.kb("app-tab2",d,F,{},{},[]),C=u("iTUp"),D=u("j1ZV"),I=u("ZYCi");u.d(n,"Tab2PageModuleNgFactory",function(){return _});var _=t.lb(o,[],function(l){return t.ub([t.vb(512,t.j,t.ab,[[8,[e.a,i.a,w]],[3,t.j],t.x]),t.vb(4608,c.k,c.j,[t.u,[2,c.r]]),t.vb(4608,a.a,a.a,[t.z,t.g]),t.vb(4608,a.Cb,a.Cb,[a.a,t.j,t.q,c.c]),t.vb(4608,a.Fb,a.Fb,[a.a,t.j,t.q,c.c]),t.vb(4608,s.d,s.d,[]),t.vb(1073742336,c.b,c.b,[]),t.vb(1073742336,a.Ab,a.Ab,[]),t.vb(1073742336,s.c,s.c,[]),t.vb(1073742336,s.a,s.a,[]),t.vb(1073742336,C.a,C.a,[]),t.vb(1073742336,D.a,D.a,[]),t.vb(1073742336,I.n,I.n,[[2,I.t],[2,I.m]]),t.vb(1073742336,o,o,[]),t.vb(1024,I.k,function(){return[[{path:"",component:d}]]},[])])})},"I0/6":function(l,n,u){"use strict";var t=u("CcnG"),o=u("oBZk"),e=u("ZZ/e"),i=u("Ip0R"),r=u("0CBe"),a=u("tFeF"),c=u("sUQ5"),b=u("wie5");u.d(n,"a",function(){return x});var s=t.mb({encapsulation:0,styles:[[".poster-detalle-sobre[_ngcontent-%COMP%]{position:relative;top:-75px;left:-10px;margin-bottom:-75px}.titulo[_ngcontent-%COMP%]{width:100%;position:absolute;color:#fff;background-color:red;padding:5px 5px 40px;background:linear-gradient(to bottom,rgba(0,0,0,.65) 0,rgba(0,0,0,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000', GradientType=0)}.titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:absolute;top:28px;left:5px}.card-actor[_ngcontent-%COMP%]{height:210px}.actor-name[_ngcontent-%COMP%]{position:relative;top:15px}"]],data:{}});function p(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,1,"img",[],[[8,"src",4]],null,null,null,null)),t.zb(1,1)],null,function(l,n){var u=n.component,o=t.Eb(n,0,0,l(n,1,0,t.xb(n.parent,0),u.pelicula.backdrop_path));l(n,0,0,o)})}function f(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,1,"img",[],[[8,"src",4]],null,null,null,null)),t.zb(1,1)],null,function(l,n){var u=n.component,o=t.Eb(n,0,0,l(n,1,0,t.xb(n.parent,0),u.pelicula.poster_path));l(n,0,0,o)})}function h(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,2,"ion-label",[["color","primary"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==(l.component.oculto=5e3)&&t),t},o.S,o.p)),t.nb(1,49152,null,0,e.K,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.Db(-1,0,["Leer mas!"]))],function(l,n){l(n,1,0,"primary")},null)}function d(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,4,"ion-chip",[["color","primary"]],null,null,null,o.K,o.h)),t.nb(1,49152,null,0,e.p,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.ob(2,0,null,0,2,"ion-label",[],null,null,null,o.S,o.p)),t.nb(3,49152,null,0,e.K,[t.h,t.k],null,null),(l()(),t.Db(4,0,[" "," "]))],function(l,n){l(n,1,0,"primary")},function(l,n){l(n,4,0,n.context.$implicit.name)})}function g(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,0,"img",[["src","/assets/no-avatar.jpg"]],null,null,null,null,null))],null,null)}function m(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,1,"img",[],[[8,"src",4]],null,null,null,null)),t.zb(1,1)],null,function(l,n){var u=t.Eb(n,0,0,l(n,1,0,t.xb(n.parent.parent,0),n.parent.context.$implicit.profile_path));l(n,0,0,u)})}function v(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,10,"ion-slide",[],null,null,null,o.Y,o.v)),t.nb(1,49152,null,0,e.mb,[t.h,t.k],null,null),(l()(),t.ob(2,0,null,0,8,"ion-card",[["class","card-actor"]],null,null,null,o.J,o.d)),t.nb(3,49152,null,0,e.j,[t.h,t.k],null,null),(l()(),t.fb(16777216,null,0,1,null,g)),t.nb(5,16384,null,0,i.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,m)),t.nb(7,16384,null,0,i.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(8,0,null,0,2,"ion-label",[["class","actor-name"]],null,null,null,o.S,o.p)),t.nb(9,49152,null,0,e.K,[t.h,t.k],null,null),(l()(),t.Db(10,0,["",""]))],function(l,n){l(n,5,0,!n.context.$implicit.profile_path),l(n,7,0,n.context.$implicit.profile_path)},function(l,n){l(n,10,0,n.context.$implicit.name)})}function k(l){return t.Fb(0,[t.yb(0,r.a,[]),(l()(),t.ob(1,0,null,null,70,"ion-content",[],null,null,null,o.M,o.j)),t.nb(2,49152,null,0,e.r,[t.h,t.k],null,null),(l()(),t.ob(3,0,null,0,3,"ion-label",[["class","titulo"]],null,null,null,o.S,o.p)),t.nb(4,49152,null,0,e.K,[t.h,t.k],null,null),(l()(),t.ob(5,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),t.Db(6,null,["",""])),(l()(),t.fb(16777216,null,0,1,null,p)),t.nb(8,16384,null,0,i.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(9,0,null,0,31,"ion-grid",[],null,null,null,o.O,o.l)),t.nb(10,49152,null,0,e.x,[t.h,t.k],null,null),(l()(),t.ob(11,0,null,0,29,"ion-row",[],null,null,null,o.W,o.t)),t.nb(12,49152,null,0,e.fb,[t.h,t.k],null,null),(l()(),t.ob(13,0,null,0,5,"ion-col",[["class","poster-detalle-sobre"],["size","4"]],null,null,null,o.L,o.i)),t.nb(14,49152,null,0,e.q,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.ob(15,0,null,0,3,"ion-card",[["class","poster"]],null,null,null,o.J,o.d)),t.nb(16,49152,null,0,e.j,[t.h,t.k],null,null),(l()(),t.fb(16777216,null,0,1,null,f)),t.nb(18,16384,null,0,i.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(19,0,null,0,21,"ion-col",[],null,null,null,o.L,o.i)),t.nb(20,49152,null,0,e.q,[t.h,t.k],null,null),(l()(),t.ob(21,0,null,0,9,"ion-item",[],null,null,null,o.R,o.o)),t.nb(22,49152,null,0,e.E,[t.h,t.k],null,null),(l()(),t.ob(23,0,null,0,1,"ion-icon",[["color","primary"],["name","thumbs-up"],["slot","start"]],null,null,null,o.Q,o.n)),t.nb(24,49152,null,0,e.z,[t.h,t.k],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.ob(25,0,null,0,2,"ion-label",[],null,null,null,o.S,o.p)),t.nb(26,49152,null,0,e.K,[t.h,t.k],null,null),(l()(),t.Db(-1,0,["Rating"])),(l()(),t.ob(28,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,o.V,o.s)),t.nb(29,49152,null,0,e.U,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.Db(30,0,["",""])),(l()(),t.ob(31,0,null,0,9,"ion-item",[],null,null,null,o.R,o.o)),t.nb(32,49152,null,0,e.E,[t.h,t.k],null,null),(l()(),t.ob(33,0,null,0,1,"ion-icon",[["color","primary"],["name","contacts"],["slot","start"]],null,null,null,o.Q,o.n)),t.nb(34,49152,null,0,e.z,[t.h,t.k],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.ob(35,0,null,0,2,"ion-label",[],null,null,null,o.S,o.p)),t.nb(36,49152,null,0,e.K,[t.h,t.k],null,null),(l()(),t.Db(-1,0,["Votos"])),(l()(),t.ob(38,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,o.V,o.s)),t.nb(39,49152,null,0,e.U,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.Db(40,0,["",""])),(l()(),t.ob(41,0,null,0,17,"ion-grid",[["fixed",""]],null,null,null,o.O,o.l)),t.nb(42,49152,null,0,e.x,[t.h,t.k],{fixed:[0,"fixed"]},null),(l()(),t.ob(43,0,null,0,9,"ion-row",[],null,null,null,o.W,o.t)),t.nb(44,49152,null,0,e.fb,[t.h,t.k],null,null),(l()(),t.ob(45,0,null,0,7,"ion-col",[["size","12"]],null,null,null,o.L,o.i)),t.nb(46,49152,null,0,e.q,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.ob(47,0,null,0,3,"ion-label",[],null,null,null,o.S,o.p)),t.nb(48,49152,null,0,e.K,[t.h,t.k],null,null),(l()(),t.Db(49,0,["","..."])),t.yb(0,i.n,[]),(l()(),t.fb(16777216,null,0,1,null,h)),t.nb(52,16384,null,0,i.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(53,0,null,0,5,"ion-row",[],null,null,null,o.W,o.t)),t.nb(54,49152,null,0,e.fb,[t.h,t.k],null,null),(l()(),t.ob(55,0,null,0,3,"ion-col",[["size","12"]],null,null,null,o.L,o.i)),t.nb(56,49152,null,0,e.q,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.fb(16777216,null,0,1,null,d)),t.nb(58,278528,null,0,i.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ob(59,0,null,0,8,"ion-grid",[["fixed",""]],null,null,null,o.O,o.l)),t.nb(60,49152,null,0,e.x,[t.h,t.k],{fixed:[0,"fixed"]},null),(l()(),t.ob(61,0,null,0,6,"ion-row",[],null,null,null,o.W,o.t)),t.nb(62,49152,null,0,e.fb,[t.h,t.k],null,null),(l()(),t.ob(63,0,null,0,4,"ion-col",[],null,null,null,o.L,o.i)),t.nb(64,49152,null,0,e.q,[t.h,t.k],null,null),(l()(),t.ob(65,0,null,0,2,"ion-label",[],null,null,null,o.S,o.p)),t.nb(66,49152,null,0,e.K,[t.h,t.k],null,null),(l()(),t.Db(-1,0,["Actores"])),(l()(),t.ob(68,0,null,0,3,"ion-slides",[],null,null,null,o.Z,o.w)),t.nb(69,49152,null,0,e.nb,[t.h,t.k],{options:[0,"options"]},null),(l()(),t.fb(16777216,null,0,1,null,v)),t.nb(71,278528,null,0,i.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ob(72,0,null,null,21,"ion-footer",[["no-border",""]],null,null,null,o.N,o.k)),t.nb(73,49152,null,0,e.w,[t.h,t.k],null,null),(l()(),t.ob(74,0,null,0,19,"ion-toolbar",[],null,null,null,o.fb,o.C)),t.nb(75,49152,null,0,e.yb,[t.h,t.k],null,null),(l()(),t.ob(76,0,null,0,8,"ion-buttons",[["slot","start"]],null,null,null,o.F,o.c)),t.nb(77,49152,null,0,e.i,[t.h,t.k],null,null),(l()(),t.ob(78,0,null,0,6,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.regresar()&&t),t},o.E,o.b)),t.nb(79,49152,null,0,e.h,[t.h,t.k],null,null),(l()(),t.ob(80,0,null,0,1,"ion-icon",[["name","arrow-round-back"],["slot","start"]],null,null,null,o.Q,o.n)),t.nb(81,49152,null,0,e.z,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.ob(82,0,null,0,2,"ion-label",[],null,null,null,o.S,o.p)),t.nb(83,49152,null,0,e.K,[t.h,t.k],null,null),(l()(),t.Db(-1,0,["Regresar"])),(l()(),t.ob(85,0,null,0,8,"ion-buttons",[["slot","end"]],null,null,null,o.F,o.c)),t.nb(86,49152,null,0,e.i,[t.h,t.k],null,null),(l()(),t.ob(87,0,null,0,6,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.favorito()&&t),t},o.E,o.b)),t.nb(88,49152,null,0,e.h,[t.h,t.k],null,null),(l()(),t.ob(89,0,null,0,2,"ion-label",[],null,null,null,o.S,o.p)),t.nb(90,49152,null,0,e.K,[t.h,t.k],null,null),(l()(),t.Db(-1,0,["Favorito"])),(l()(),t.ob(92,0,null,0,1,"ion-icon",[["slot","end"]],null,null,null,o.Q,o.n)),t.nb(93,49152,null,0,e.z,[t.h,t.k],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,8,0,u.pelicula.backdrop_path),l(n,14,0,"4"),l(n,18,0,u.pelicula.poster_path),l(n,24,0,"primary","thumbs-up"),l(n,29,0,"primary"),l(n,34,0,"primary","contacts"),l(n,39,0,"primary"),l(n,42,0,""),l(n,46,0,"12"),l(n,52,0,5e3!==u.oculto),l(n,56,0,"12"),l(n,58,0,u.pelicula.genres),l(n,60,0,""),l(n,69,0,u.slideOptActores),l(n,71,0,u.actores),l(n,81,0,"arrow-round-back"),l(n,93,0,u.estrella)},function(l,n){var u=n.component;l(n,6,0,u.pelicula.title),l(n,30,0,u.pelicula.vote_average),l(n,40,0,u.pelicula.vote_count),l(n,49,0,t.Eb(n,49,0,t.xb(n,50).transform(u.pelicula.overview,0,u.oculto)))})}function y(l){return t.Fb(0,[(l()(),t.ob(0,0,null,null,1,"app-detalle",[],null,null,null,k,s)),t.nb(1,114688,null,0,a.a,[c.a,e.Cb,b.a],null,null)],function(l,n){l(n,1,0)},null)}var x=t.kb("app-detalle",a.a,y,{id:"id"},{},[])},iTUp:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){return function(){}}()},j1ZV:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){return function(){}}()},sUQ5:function(l,n,u){"use strict";u.d(n,"a",function(){return a});var t=u("AytR"),o=u("CcnG"),e=u("t/Na"),i=t.a.url,r=t.a.apiKey,a=function(){function l(l){this.http=l,this.popularesPage=0,this.generos=[]}return l.prototype.ejecutarQuery=function(l){return l=i+l,this.http.get(l+="&api_key="+r+"&language=es&include_image_language=es")},l.prototype.getPopulares=function(){return this.popularesPage++,this.ejecutarQuery("/discover/movie?sort_by=popularity.desc&page="+this.popularesPage)},l.prototype.buscarPeliculas=function(l){return this.ejecutarQuery("/search/movie?query="+l)},l.prototype.getFeature=function(){var l,n=new Date,u=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),t=n.getMonth()+1;l=t<10?"0"+t:t;var o=n.getFullYear()+"-"+l+"-01",e=n.getFullYear()+"-"+l+"-"+u;return this.ejecutarQuery("/discover/movie?primary_release_date.gte="+o+"&primary_release_date.lte="+e)},l.prototype.getPeliculaDetalle=function(l){return this.ejecutarQuery("/movie/"+l+"?a=1")},l.prototype.getActoresPelicula=function(l){return this.ejecutarQuery("/movie/"+l+"/credits?a=1")},l.prototype.cargarGeneros=function(){var l=this;return new Promise(function(n){l.ejecutarQuery("/genre/movie/list?a=1").subscribe(function(u){l.generos=u.genres,console.log(l.generos),n(l.generos)})})},l.ngInjectableDef=o.R({factory:function(){return new l(o.V(e.c))},token:l,providedIn:"root"}),l}()},tFeF:function(l,n,u){"use strict";u.d(n,"a",function(){return t}),u("sUQ5"),u("ZZ/e"),u("wie5");var t=function(){function l(l,n,u){this.movieService=l,this.modalCtrl=n,this.dataLocal=u,this.pelicula={},this.actores=[],this.oculto=150,this.estrella="star-outline",this.slideOptActores={slidesPerView:3.3,freeMode:!0,spaceBetween:-5}}return l.prototype.ngOnInit=function(){var l=this;this.dataLocal.existePelicula(this.id).then(function(n){return l.estrella=n?"star":"star-outline"}),this.movieService.getPeliculaDetalle(this.id).subscribe(function(n){console.log(n),l.pelicula=n}),this.movieService.getActoresPelicula(this.id).subscribe(function(n){console.log(n),l.actores=n.cast})},l.prototype.regresar=function(){this.modalCtrl.dismiss()},l.prototype.favorito=function(){var l=this.dataLocal.guardarPelicula(this.pelicula);this.estrella=l?"star":"star-outline"},l}()},wie5:function(l,n,u){"use strict";u.d(n,"a",function(){return r});var t=u("mrSG"),o=u("ZZ/e"),e=u("CcnG"),i=u("iw74"),r=function(){function l(l,n){this.storage=l,this.toastCtrl=n,this.peliculas=[],this.cargarFavoritos()}return l.prototype.presentToast=function(l){return t.b(this,void 0,void 0,function(){return t.e(this,function(n){switch(n.label){case 0:return[4,this.toastCtrl.create({message:l,duration:1500})];case 1:return n.sent().present(),[2]}})})},l.prototype.guardarPelicula=function(l){for(var n=!1,u="",t=0,o=this.peliculas;t<o.length;t++)if(o[t].id===l.id){n=!0;break}return n?(this.peliculas=this.peliculas.filter(function(n){return n.id!==l.id}),u="removido de favoritos"):(this.peliculas.push(l),u="Agregada a favoritos"),this.presentToast(u),this.storage.set("peliculas",this.peliculas),!n},l.prototype.cargarFavoritos=function(){return t.b(this,void 0,void 0,function(){var l;return t.e(this,function(n){switch(n.label){case 0:return[4,this.storage.get("peliculas")];case 1:return l=n.sent(),this.peliculas=l||[],[2,this.peliculas]}})})},l.prototype.existePelicula=function(l){return t.b(this,void 0,void 0,function(){return t.e(this,function(n){switch(n.label){case 0:return[4,this.cargarFavoritos()];case 1:return n.sent(),[2,!!this.peliculas.find(function(n){return n.id===l})]}})})},l.ngInjectableDef=e.R({factory:function(){return new l(e.V(i.b),e.V(o.Hb))},token:l,providedIn:"root"}),l}()}}]);