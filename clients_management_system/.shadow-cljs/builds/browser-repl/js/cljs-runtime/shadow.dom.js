goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36157 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36157(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36159 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36159(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35400 = coll;
var G__35401 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35400,G__35401) : shadow.dom.lazy_native_coll_seq.call(null,G__35400,G__35401));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35432 = arguments.length;
switch (G__35432) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35438 = arguments.length;
switch (G__35438) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35447 = arguments.length;
switch (G__35447) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35455 = arguments.length;
switch (G__35455) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35465 = arguments.length;
switch (G__35465) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35476 = arguments.length;
switch (G__35476) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35486){if((e35486 instanceof Object)){
var e = e35486;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35486;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35489 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35490 = null;
var count__35491 = (0);
var i__35492 = (0);
while(true){
if((i__35492 < count__35491)){
var el = chunk__35490.cljs$core$IIndexed$_nth$arity$2(null,i__35492);
var handler_36192__$1 = ((function (seq__35489,chunk__35490,count__35491,i__35492,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35489,chunk__35490,count__35491,i__35492,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36192__$1);


var G__36193 = seq__35489;
var G__36194 = chunk__35490;
var G__36195 = count__35491;
var G__36196 = (i__35492 + (1));
seq__35489 = G__36193;
chunk__35490 = G__36194;
count__35491 = G__36195;
i__35492 = G__36196;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35489);
if(temp__5735__auto__){
var seq__35489__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35489__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35489__$1);
var G__36197 = cljs.core.chunk_rest(seq__35489__$1);
var G__36198 = c__4556__auto__;
var G__36199 = cljs.core.count(c__4556__auto__);
var G__36200 = (0);
seq__35489 = G__36197;
chunk__35490 = G__36198;
count__35491 = G__36199;
i__35492 = G__36200;
continue;
} else {
var el = cljs.core.first(seq__35489__$1);
var handler_36203__$1 = ((function (seq__35489,chunk__35490,count__35491,i__35492,el,seq__35489__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35489,chunk__35490,count__35491,i__35492,el,seq__35489__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36203__$1);


var G__36204 = cljs.core.next(seq__35489__$1);
var G__36205 = null;
var G__36206 = (0);
var G__36207 = (0);
seq__35489 = G__36204;
chunk__35490 = G__36205;
count__35491 = G__36206;
i__35492 = G__36207;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35506 = arguments.length;
switch (G__35506) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35518 = cljs.core.seq(events);
var chunk__35519 = null;
var count__35520 = (0);
var i__35521 = (0);
while(true){
if((i__35521 < count__35520)){
var vec__35535 = chunk__35519.cljs$core$IIndexed$_nth$arity$2(null,i__35521);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36216 = seq__35518;
var G__36217 = chunk__35519;
var G__36218 = count__35520;
var G__36219 = (i__35521 + (1));
seq__35518 = G__36216;
chunk__35519 = G__36217;
count__35520 = G__36218;
i__35521 = G__36219;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35518);
if(temp__5735__auto__){
var seq__35518__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35518__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35518__$1);
var G__36220 = cljs.core.chunk_rest(seq__35518__$1);
var G__36221 = c__4556__auto__;
var G__36222 = cljs.core.count(c__4556__auto__);
var G__36223 = (0);
seq__35518 = G__36220;
chunk__35519 = G__36221;
count__35520 = G__36222;
i__35521 = G__36223;
continue;
} else {
var vec__35542 = cljs.core.first(seq__35518__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35542,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36225 = cljs.core.next(seq__35518__$1);
var G__36226 = null;
var G__36227 = (0);
var G__36228 = (0);
seq__35518 = G__36225;
chunk__35519 = G__36226;
count__35520 = G__36227;
i__35521 = G__36228;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35546 = cljs.core.seq(styles);
var chunk__35547 = null;
var count__35548 = (0);
var i__35549 = (0);
while(true){
if((i__35549 < count__35548)){
var vec__35561 = chunk__35547.cljs$core$IIndexed$_nth$arity$2(null,i__35549);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35561,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36230 = seq__35546;
var G__36231 = chunk__35547;
var G__36232 = count__35548;
var G__36233 = (i__35549 + (1));
seq__35546 = G__36230;
chunk__35547 = G__36231;
count__35548 = G__36232;
i__35549 = G__36233;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35546);
if(temp__5735__auto__){
var seq__35546__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35546__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35546__$1);
var G__36235 = cljs.core.chunk_rest(seq__35546__$1);
var G__36236 = c__4556__auto__;
var G__36237 = cljs.core.count(c__4556__auto__);
var G__36238 = (0);
seq__35546 = G__36235;
chunk__35547 = G__36236;
count__35548 = G__36237;
i__35549 = G__36238;
continue;
} else {
var vec__35566 = cljs.core.first(seq__35546__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35566,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36240 = cljs.core.next(seq__35546__$1);
var G__36241 = null;
var G__36242 = (0);
var G__36243 = (0);
seq__35546 = G__36240;
chunk__35547 = G__36241;
count__35548 = G__36242;
i__35549 = G__36243;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35576_36245 = key;
var G__35576_36246__$1 = (((G__35576_36245 instanceof cljs.core.Keyword))?G__35576_36245.fqn:null);
switch (G__35576_36246__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36252 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_36252,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_36252,"aria-");
}
})())){
el.setAttribute(ks_36252,value);
} else {
(el[ks_36252] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35600){
var map__35602 = p__35600;
var map__35602__$1 = (((((!((map__35602 == null))))?(((((map__35602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35602):map__35602);
var props = map__35602__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35602__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35607 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35612 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35612,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35612;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35618 = arguments.length;
switch (G__35618) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35628){
var vec__35629 = p__35628;
var seq__35630 = cljs.core.seq(vec__35629);
var first__35631 = cljs.core.first(seq__35630);
var seq__35630__$1 = cljs.core.next(seq__35630);
var nn = first__35631;
var first__35631__$1 = cljs.core.first(seq__35630__$1);
var seq__35630__$2 = cljs.core.next(seq__35630__$1);
var np = first__35631__$1;
var nc = seq__35630__$2;
var node = vec__35629;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35635 = nn;
var G__35636 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35635,G__35636) : create_fn.call(null,G__35635,G__35636));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35640 = nn;
var G__35641 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35640,G__35641) : create_fn.call(null,G__35640,G__35641));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35646 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35646,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35646,(1),null);
var seq__35649_36269 = cljs.core.seq(node_children);
var chunk__35650_36270 = null;
var count__35651_36271 = (0);
var i__35652_36272 = (0);
while(true){
if((i__35652_36272 < count__35651_36271)){
var child_struct_36274 = chunk__35650_36270.cljs$core$IIndexed$_nth$arity$2(null,i__35652_36272);
var children_36277 = shadow.dom.dom_node(child_struct_36274);
if(cljs.core.seq_QMARK_(children_36277)){
var seq__35700_36278 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36277));
var chunk__35702_36279 = null;
var count__35703_36280 = (0);
var i__35704_36281 = (0);
while(true){
if((i__35704_36281 < count__35703_36280)){
var child_36284 = chunk__35702_36279.cljs$core$IIndexed$_nth$arity$2(null,i__35704_36281);
if(cljs.core.truth_(child_36284)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36284);


var G__36285 = seq__35700_36278;
var G__36286 = chunk__35702_36279;
var G__36287 = count__35703_36280;
var G__36288 = (i__35704_36281 + (1));
seq__35700_36278 = G__36285;
chunk__35702_36279 = G__36286;
count__35703_36280 = G__36287;
i__35704_36281 = G__36288;
continue;
} else {
var G__36289 = seq__35700_36278;
var G__36290 = chunk__35702_36279;
var G__36291 = count__35703_36280;
var G__36292 = (i__35704_36281 + (1));
seq__35700_36278 = G__36289;
chunk__35702_36279 = G__36290;
count__35703_36280 = G__36291;
i__35704_36281 = G__36292;
continue;
}
} else {
var temp__5735__auto___36294 = cljs.core.seq(seq__35700_36278);
if(temp__5735__auto___36294){
var seq__35700_36295__$1 = temp__5735__auto___36294;
if(cljs.core.chunked_seq_QMARK_(seq__35700_36295__$1)){
var c__4556__auto___36296 = cljs.core.chunk_first(seq__35700_36295__$1);
var G__36297 = cljs.core.chunk_rest(seq__35700_36295__$1);
var G__36298 = c__4556__auto___36296;
var G__36299 = cljs.core.count(c__4556__auto___36296);
var G__36300 = (0);
seq__35700_36278 = G__36297;
chunk__35702_36279 = G__36298;
count__35703_36280 = G__36299;
i__35704_36281 = G__36300;
continue;
} else {
var child_36302 = cljs.core.first(seq__35700_36295__$1);
if(cljs.core.truth_(child_36302)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36302);


var G__36304 = cljs.core.next(seq__35700_36295__$1);
var G__36305 = null;
var G__36306 = (0);
var G__36307 = (0);
seq__35700_36278 = G__36304;
chunk__35702_36279 = G__36305;
count__35703_36280 = G__36306;
i__35704_36281 = G__36307;
continue;
} else {
var G__36309 = cljs.core.next(seq__35700_36295__$1);
var G__36310 = null;
var G__36311 = (0);
var G__36312 = (0);
seq__35700_36278 = G__36309;
chunk__35702_36279 = G__36310;
count__35703_36280 = G__36311;
i__35704_36281 = G__36312;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36277);
}


var G__36313 = seq__35649_36269;
var G__36314 = chunk__35650_36270;
var G__36315 = count__35651_36271;
var G__36316 = (i__35652_36272 + (1));
seq__35649_36269 = G__36313;
chunk__35650_36270 = G__36314;
count__35651_36271 = G__36315;
i__35652_36272 = G__36316;
continue;
} else {
var temp__5735__auto___36317 = cljs.core.seq(seq__35649_36269);
if(temp__5735__auto___36317){
var seq__35649_36318__$1 = temp__5735__auto___36317;
if(cljs.core.chunked_seq_QMARK_(seq__35649_36318__$1)){
var c__4556__auto___36319 = cljs.core.chunk_first(seq__35649_36318__$1);
var G__36320 = cljs.core.chunk_rest(seq__35649_36318__$1);
var G__36321 = c__4556__auto___36319;
var G__36322 = cljs.core.count(c__4556__auto___36319);
var G__36323 = (0);
seq__35649_36269 = G__36320;
chunk__35650_36270 = G__36321;
count__35651_36271 = G__36322;
i__35652_36272 = G__36323;
continue;
} else {
var child_struct_36324 = cljs.core.first(seq__35649_36318__$1);
var children_36325 = shadow.dom.dom_node(child_struct_36324);
if(cljs.core.seq_QMARK_(children_36325)){
var seq__35713_36326 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36325));
var chunk__35715_36327 = null;
var count__35716_36328 = (0);
var i__35717_36329 = (0);
while(true){
if((i__35717_36329 < count__35716_36328)){
var child_36330 = chunk__35715_36327.cljs$core$IIndexed$_nth$arity$2(null,i__35717_36329);
if(cljs.core.truth_(child_36330)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36330);


var G__36333 = seq__35713_36326;
var G__36334 = chunk__35715_36327;
var G__36335 = count__35716_36328;
var G__36336 = (i__35717_36329 + (1));
seq__35713_36326 = G__36333;
chunk__35715_36327 = G__36334;
count__35716_36328 = G__36335;
i__35717_36329 = G__36336;
continue;
} else {
var G__36338 = seq__35713_36326;
var G__36339 = chunk__35715_36327;
var G__36340 = count__35716_36328;
var G__36341 = (i__35717_36329 + (1));
seq__35713_36326 = G__36338;
chunk__35715_36327 = G__36339;
count__35716_36328 = G__36340;
i__35717_36329 = G__36341;
continue;
}
} else {
var temp__5735__auto___36343__$1 = cljs.core.seq(seq__35713_36326);
if(temp__5735__auto___36343__$1){
var seq__35713_36344__$1 = temp__5735__auto___36343__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35713_36344__$1)){
var c__4556__auto___36345 = cljs.core.chunk_first(seq__35713_36344__$1);
var G__36346 = cljs.core.chunk_rest(seq__35713_36344__$1);
var G__36347 = c__4556__auto___36345;
var G__36348 = cljs.core.count(c__4556__auto___36345);
var G__36349 = (0);
seq__35713_36326 = G__36346;
chunk__35715_36327 = G__36347;
count__35716_36328 = G__36348;
i__35717_36329 = G__36349;
continue;
} else {
var child_36350 = cljs.core.first(seq__35713_36344__$1);
if(cljs.core.truth_(child_36350)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36350);


var G__36351 = cljs.core.next(seq__35713_36344__$1);
var G__36352 = null;
var G__36353 = (0);
var G__36354 = (0);
seq__35713_36326 = G__36351;
chunk__35715_36327 = G__36352;
count__35716_36328 = G__36353;
i__35717_36329 = G__36354;
continue;
} else {
var G__36356 = cljs.core.next(seq__35713_36344__$1);
var G__36357 = null;
var G__36358 = (0);
var G__36359 = (0);
seq__35713_36326 = G__36356;
chunk__35715_36327 = G__36357;
count__35716_36328 = G__36358;
i__35717_36329 = G__36359;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36325);
}


var G__36360 = cljs.core.next(seq__35649_36318__$1);
var G__36361 = null;
var G__36362 = (0);
var G__36363 = (0);
seq__35649_36269 = G__36360;
chunk__35650_36270 = G__36361;
count__35651_36271 = G__36362;
i__35652_36272 = G__36363;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35739 = cljs.core.seq(node);
var chunk__35740 = null;
var count__35741 = (0);
var i__35742 = (0);
while(true){
if((i__35742 < count__35741)){
var n = chunk__35740.cljs$core$IIndexed$_nth$arity$2(null,i__35742);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36370 = seq__35739;
var G__36371 = chunk__35740;
var G__36372 = count__35741;
var G__36373 = (i__35742 + (1));
seq__35739 = G__36370;
chunk__35740 = G__36371;
count__35741 = G__36372;
i__35742 = G__36373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35739);
if(temp__5735__auto__){
var seq__35739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35739__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35739__$1);
var G__36375 = cljs.core.chunk_rest(seq__35739__$1);
var G__36376 = c__4556__auto__;
var G__36377 = cljs.core.count(c__4556__auto__);
var G__36378 = (0);
seq__35739 = G__36375;
chunk__35740 = G__36376;
count__35741 = G__36377;
i__35742 = G__36378;
continue;
} else {
var n = cljs.core.first(seq__35739__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36379 = cljs.core.next(seq__35739__$1);
var G__36380 = null;
var G__36381 = (0);
var G__36382 = (0);
seq__35739 = G__36379;
chunk__35740 = G__36380;
count__35741 = G__36381;
i__35742 = G__36382;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35757 = arguments.length;
switch (G__35757) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35763 = arguments.length;
switch (G__35763) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35779 = arguments.length;
switch (G__35779) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36399 = arguments.length;
var i__4737__auto___36400 = (0);
while(true){
if((i__4737__auto___36400 < len__4736__auto___36399)){
args__4742__auto__.push((arguments[i__4737__auto___36400]));

var G__36401 = (i__4737__auto___36400 + (1));
i__4737__auto___36400 = G__36401;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35808_36403 = cljs.core.seq(nodes);
var chunk__35809_36404 = null;
var count__35810_36405 = (0);
var i__35811_36406 = (0);
while(true){
if((i__35811_36406 < count__35810_36405)){
var node_36407 = chunk__35809_36404.cljs$core$IIndexed$_nth$arity$2(null,i__35811_36406);
fragment.appendChild(shadow.dom._to_dom(node_36407));


var G__36408 = seq__35808_36403;
var G__36409 = chunk__35809_36404;
var G__36410 = count__35810_36405;
var G__36411 = (i__35811_36406 + (1));
seq__35808_36403 = G__36408;
chunk__35809_36404 = G__36409;
count__35810_36405 = G__36410;
i__35811_36406 = G__36411;
continue;
} else {
var temp__5735__auto___36413 = cljs.core.seq(seq__35808_36403);
if(temp__5735__auto___36413){
var seq__35808_36414__$1 = temp__5735__auto___36413;
if(cljs.core.chunked_seq_QMARK_(seq__35808_36414__$1)){
var c__4556__auto___36416 = cljs.core.chunk_first(seq__35808_36414__$1);
var G__36417 = cljs.core.chunk_rest(seq__35808_36414__$1);
var G__36418 = c__4556__auto___36416;
var G__36419 = cljs.core.count(c__4556__auto___36416);
var G__36420 = (0);
seq__35808_36403 = G__36417;
chunk__35809_36404 = G__36418;
count__35810_36405 = G__36419;
i__35811_36406 = G__36420;
continue;
} else {
var node_36421 = cljs.core.first(seq__35808_36414__$1);
fragment.appendChild(shadow.dom._to_dom(node_36421));


var G__36423 = cljs.core.next(seq__35808_36414__$1);
var G__36424 = null;
var G__36425 = (0);
var G__36426 = (0);
seq__35808_36403 = G__36423;
chunk__35809_36404 = G__36424;
count__35810_36405 = G__36425;
i__35811_36406 = G__36426;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35802){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35802));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35823_36428 = cljs.core.seq(scripts);
var chunk__35824_36429 = null;
var count__35825_36430 = (0);
var i__35826_36431 = (0);
while(true){
if((i__35826_36431 < count__35825_36430)){
var vec__35841_36438 = chunk__35824_36429.cljs$core$IIndexed$_nth$arity$2(null,i__35826_36431);
var script_tag_36439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841_36438,(0),null);
var script_body_36440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841_36438,(1),null);
eval(script_body_36440);


var G__36441 = seq__35823_36428;
var G__36442 = chunk__35824_36429;
var G__36443 = count__35825_36430;
var G__36444 = (i__35826_36431 + (1));
seq__35823_36428 = G__36441;
chunk__35824_36429 = G__36442;
count__35825_36430 = G__36443;
i__35826_36431 = G__36444;
continue;
} else {
var temp__5735__auto___36445 = cljs.core.seq(seq__35823_36428);
if(temp__5735__auto___36445){
var seq__35823_36446__$1 = temp__5735__auto___36445;
if(cljs.core.chunked_seq_QMARK_(seq__35823_36446__$1)){
var c__4556__auto___36447 = cljs.core.chunk_first(seq__35823_36446__$1);
var G__36448 = cljs.core.chunk_rest(seq__35823_36446__$1);
var G__36449 = c__4556__auto___36447;
var G__36450 = cljs.core.count(c__4556__auto___36447);
var G__36451 = (0);
seq__35823_36428 = G__36448;
chunk__35824_36429 = G__36449;
count__35825_36430 = G__36450;
i__35826_36431 = G__36451;
continue;
} else {
var vec__35848_36452 = cljs.core.first(seq__35823_36446__$1);
var script_tag_36453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35848_36452,(0),null);
var script_body_36454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35848_36452,(1),null);
eval(script_body_36454);


var G__36455 = cljs.core.next(seq__35823_36446__$1);
var G__36456 = null;
var G__36457 = (0);
var G__36458 = (0);
seq__35823_36428 = G__36455;
chunk__35824_36429 = G__36456;
count__35825_36430 = G__36457;
i__35826_36431 = G__36458;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35852){
var vec__35855 = p__35852;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35855,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35855,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35866 = arguments.length;
switch (G__35866) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35876 = cljs.core.seq(style_keys);
var chunk__35877 = null;
var count__35878 = (0);
var i__35879 = (0);
while(true){
if((i__35879 < count__35878)){
var it = chunk__35877.cljs$core$IIndexed$_nth$arity$2(null,i__35879);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36469 = seq__35876;
var G__36470 = chunk__35877;
var G__36471 = count__35878;
var G__36472 = (i__35879 + (1));
seq__35876 = G__36469;
chunk__35877 = G__36470;
count__35878 = G__36471;
i__35879 = G__36472;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35876);
if(temp__5735__auto__){
var seq__35876__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35876__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35876__$1);
var G__36473 = cljs.core.chunk_rest(seq__35876__$1);
var G__36474 = c__4556__auto__;
var G__36475 = cljs.core.count(c__4556__auto__);
var G__36476 = (0);
seq__35876 = G__36473;
chunk__35877 = G__36474;
count__35878 = G__36475;
i__35879 = G__36476;
continue;
} else {
var it = cljs.core.first(seq__35876__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36477 = cljs.core.next(seq__35876__$1);
var G__36478 = null;
var G__36479 = (0);
var G__36480 = (0);
seq__35876 = G__36477;
chunk__35877 = G__36478;
count__35878 = G__36479;
i__35879 = G__36480;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35883,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35894 = k35883;
var G__35894__$1 = (((G__35894 instanceof cljs.core.Keyword))?G__35894.fqn:null);
switch (G__35894__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35883,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35899){
var vec__35902 = p__35899;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35882){
var self__ = this;
var G__35882__$1 = this;
return (new cljs.core.RecordIter((0),G__35882__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35885,other35886){
var self__ = this;
var this35885__$1 = this;
return (((!((other35886 == null)))) && ((this35885__$1.constructor === other35886.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35885__$1.x,other35886.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35885__$1.y,other35886.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35885__$1.__extmap,other35886.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35882){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35928 = cljs.core.keyword_identical_QMARK_;
var expr__35929 = k__4388__auto__;
if(cljs.core.truth_((pred__35928.cljs$core$IFn$_invoke$arity$2 ? pred__35928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35929) : pred__35928.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35929)))){
return (new shadow.dom.Coordinate(G__35882,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35928.cljs$core$IFn$_invoke$arity$2 ? pred__35928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35929) : pred__35928.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35929)))){
return (new shadow.dom.Coordinate(self__.x,G__35882,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35882),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35882){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35882,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35889){
var extmap__4419__auto__ = (function (){var G__35949 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35889,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35889)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35949);
} else {
return G__35949;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35889),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35889),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35959,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35966 = k35959;
var G__35966__$1 = (((G__35966 instanceof cljs.core.Keyword))?G__35966.fqn:null);
switch (G__35966__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35959,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35967){
var vec__35968 = p__35967;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35968,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35968,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35958){
var self__ = this;
var G__35958__$1 = this;
return (new cljs.core.RecordIter((0),G__35958__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35960,other35961){
var self__ = this;
var this35960__$1 = this;
return (((!((other35961 == null)))) && ((this35960__$1.constructor === other35961.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35960__$1.w,other35961.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35960__$1.h,other35961.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35960__$1.__extmap,other35961.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35958){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35976 = cljs.core.keyword_identical_QMARK_;
var expr__35977 = k__4388__auto__;
if(cljs.core.truth_((pred__35976.cljs$core$IFn$_invoke$arity$2 ? pred__35976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35977) : pred__35976.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35977)))){
return (new shadow.dom.Size(G__35958,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35976.cljs$core$IFn$_invoke$arity$2 ? pred__35976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35977) : pred__35976.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35977)))){
return (new shadow.dom.Size(self__.w,G__35958,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35958),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35958){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35958,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35962){
var extmap__4419__auto__ = (function (){var G__35993 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35962,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35962)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35993);
} else {
return G__35993;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35962),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35962),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__36509 = (i + (1));
var G__36510 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36509;
ret = G__36510;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36012){
var vec__36014 = p__36012;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36014,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36014,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36020 = arguments.length;
switch (G__36020) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36515 = ps;
var G__36516 = (i + (1));
el__$1 = G__36515;
i = G__36516;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36039 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36039,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36039,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36039,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36044_36521 = cljs.core.seq(props);
var chunk__36045_36522 = null;
var count__36046_36523 = (0);
var i__36047_36524 = (0);
while(true){
if((i__36047_36524 < count__36046_36523)){
var vec__36058_36525 = chunk__36045_36522.cljs$core$IIndexed$_nth$arity$2(null,i__36047_36524);
var k_36526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058_36525,(0),null);
var v_36527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058_36525,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36526);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36526),v_36527);


var G__36528 = seq__36044_36521;
var G__36529 = chunk__36045_36522;
var G__36530 = count__36046_36523;
var G__36531 = (i__36047_36524 + (1));
seq__36044_36521 = G__36528;
chunk__36045_36522 = G__36529;
count__36046_36523 = G__36530;
i__36047_36524 = G__36531;
continue;
} else {
var temp__5735__auto___36532 = cljs.core.seq(seq__36044_36521);
if(temp__5735__auto___36532){
var seq__36044_36533__$1 = temp__5735__auto___36532;
if(cljs.core.chunked_seq_QMARK_(seq__36044_36533__$1)){
var c__4556__auto___36534 = cljs.core.chunk_first(seq__36044_36533__$1);
var G__36535 = cljs.core.chunk_rest(seq__36044_36533__$1);
var G__36536 = c__4556__auto___36534;
var G__36537 = cljs.core.count(c__4556__auto___36534);
var G__36538 = (0);
seq__36044_36521 = G__36535;
chunk__36045_36522 = G__36536;
count__36046_36523 = G__36537;
i__36047_36524 = G__36538;
continue;
} else {
var vec__36063_36539 = cljs.core.first(seq__36044_36533__$1);
var k_36540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063_36539,(0),null);
var v_36541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063_36539,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36540);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36540),v_36541);


var G__36542 = cljs.core.next(seq__36044_36533__$1);
var G__36543 = null;
var G__36544 = (0);
var G__36545 = (0);
seq__36044_36521 = G__36542;
chunk__36045_36522 = G__36543;
count__36046_36523 = G__36544;
i__36047_36524 = G__36545;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36071 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071,(1),null);
var seq__36075_36546 = cljs.core.seq(node_children);
var chunk__36077_36547 = null;
var count__36078_36548 = (0);
var i__36079_36549 = (0);
while(true){
if((i__36079_36549 < count__36078_36548)){
var child_struct_36552 = chunk__36077_36547.cljs$core$IIndexed$_nth$arity$2(null,i__36079_36549);
if((!((child_struct_36552 == null)))){
if(typeof child_struct_36552 === 'string'){
var text_36553 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36553),child_struct_36552].join(''));
} else {
var children_36554 = shadow.dom.svg_node(child_struct_36552);
if(cljs.core.seq_QMARK_(children_36554)){
var seq__36108_36555 = cljs.core.seq(children_36554);
var chunk__36110_36556 = null;
var count__36111_36557 = (0);
var i__36112_36558 = (0);
while(true){
if((i__36112_36558 < count__36111_36557)){
var child_36559 = chunk__36110_36556.cljs$core$IIndexed$_nth$arity$2(null,i__36112_36558);
if(cljs.core.truth_(child_36559)){
node.appendChild(child_36559);


var G__36560 = seq__36108_36555;
var G__36561 = chunk__36110_36556;
var G__36562 = count__36111_36557;
var G__36563 = (i__36112_36558 + (1));
seq__36108_36555 = G__36560;
chunk__36110_36556 = G__36561;
count__36111_36557 = G__36562;
i__36112_36558 = G__36563;
continue;
} else {
var G__36564 = seq__36108_36555;
var G__36565 = chunk__36110_36556;
var G__36566 = count__36111_36557;
var G__36567 = (i__36112_36558 + (1));
seq__36108_36555 = G__36564;
chunk__36110_36556 = G__36565;
count__36111_36557 = G__36566;
i__36112_36558 = G__36567;
continue;
}
} else {
var temp__5735__auto___36568 = cljs.core.seq(seq__36108_36555);
if(temp__5735__auto___36568){
var seq__36108_36569__$1 = temp__5735__auto___36568;
if(cljs.core.chunked_seq_QMARK_(seq__36108_36569__$1)){
var c__4556__auto___36570 = cljs.core.chunk_first(seq__36108_36569__$1);
var G__36571 = cljs.core.chunk_rest(seq__36108_36569__$1);
var G__36572 = c__4556__auto___36570;
var G__36573 = cljs.core.count(c__4556__auto___36570);
var G__36574 = (0);
seq__36108_36555 = G__36571;
chunk__36110_36556 = G__36572;
count__36111_36557 = G__36573;
i__36112_36558 = G__36574;
continue;
} else {
var child_36575 = cljs.core.first(seq__36108_36569__$1);
if(cljs.core.truth_(child_36575)){
node.appendChild(child_36575);


var G__36576 = cljs.core.next(seq__36108_36569__$1);
var G__36577 = null;
var G__36578 = (0);
var G__36579 = (0);
seq__36108_36555 = G__36576;
chunk__36110_36556 = G__36577;
count__36111_36557 = G__36578;
i__36112_36558 = G__36579;
continue;
} else {
var G__36580 = cljs.core.next(seq__36108_36569__$1);
var G__36581 = null;
var G__36582 = (0);
var G__36583 = (0);
seq__36108_36555 = G__36580;
chunk__36110_36556 = G__36581;
count__36111_36557 = G__36582;
i__36112_36558 = G__36583;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36554);
}
}


var G__36585 = seq__36075_36546;
var G__36586 = chunk__36077_36547;
var G__36587 = count__36078_36548;
var G__36588 = (i__36079_36549 + (1));
seq__36075_36546 = G__36585;
chunk__36077_36547 = G__36586;
count__36078_36548 = G__36587;
i__36079_36549 = G__36588;
continue;
} else {
var G__36589 = seq__36075_36546;
var G__36590 = chunk__36077_36547;
var G__36591 = count__36078_36548;
var G__36592 = (i__36079_36549 + (1));
seq__36075_36546 = G__36589;
chunk__36077_36547 = G__36590;
count__36078_36548 = G__36591;
i__36079_36549 = G__36592;
continue;
}
} else {
var temp__5735__auto___36593 = cljs.core.seq(seq__36075_36546);
if(temp__5735__auto___36593){
var seq__36075_36594__$1 = temp__5735__auto___36593;
if(cljs.core.chunked_seq_QMARK_(seq__36075_36594__$1)){
var c__4556__auto___36595 = cljs.core.chunk_first(seq__36075_36594__$1);
var G__36596 = cljs.core.chunk_rest(seq__36075_36594__$1);
var G__36597 = c__4556__auto___36595;
var G__36598 = cljs.core.count(c__4556__auto___36595);
var G__36599 = (0);
seq__36075_36546 = G__36596;
chunk__36077_36547 = G__36597;
count__36078_36548 = G__36598;
i__36079_36549 = G__36599;
continue;
} else {
var child_struct_36600 = cljs.core.first(seq__36075_36594__$1);
if((!((child_struct_36600 == null)))){
if(typeof child_struct_36600 === 'string'){
var text_36601 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36601),child_struct_36600].join(''));
} else {
var children_36602 = shadow.dom.svg_node(child_struct_36600);
if(cljs.core.seq_QMARK_(children_36602)){
var seq__36120_36603 = cljs.core.seq(children_36602);
var chunk__36122_36604 = null;
var count__36123_36605 = (0);
var i__36124_36606 = (0);
while(true){
if((i__36124_36606 < count__36123_36605)){
var child_36607 = chunk__36122_36604.cljs$core$IIndexed$_nth$arity$2(null,i__36124_36606);
if(cljs.core.truth_(child_36607)){
node.appendChild(child_36607);


var G__36608 = seq__36120_36603;
var G__36609 = chunk__36122_36604;
var G__36610 = count__36123_36605;
var G__36611 = (i__36124_36606 + (1));
seq__36120_36603 = G__36608;
chunk__36122_36604 = G__36609;
count__36123_36605 = G__36610;
i__36124_36606 = G__36611;
continue;
} else {
var G__36612 = seq__36120_36603;
var G__36613 = chunk__36122_36604;
var G__36614 = count__36123_36605;
var G__36615 = (i__36124_36606 + (1));
seq__36120_36603 = G__36612;
chunk__36122_36604 = G__36613;
count__36123_36605 = G__36614;
i__36124_36606 = G__36615;
continue;
}
} else {
var temp__5735__auto___36616__$1 = cljs.core.seq(seq__36120_36603);
if(temp__5735__auto___36616__$1){
var seq__36120_36617__$1 = temp__5735__auto___36616__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36120_36617__$1)){
var c__4556__auto___36618 = cljs.core.chunk_first(seq__36120_36617__$1);
var G__36619 = cljs.core.chunk_rest(seq__36120_36617__$1);
var G__36620 = c__4556__auto___36618;
var G__36621 = cljs.core.count(c__4556__auto___36618);
var G__36622 = (0);
seq__36120_36603 = G__36619;
chunk__36122_36604 = G__36620;
count__36123_36605 = G__36621;
i__36124_36606 = G__36622;
continue;
} else {
var child_36623 = cljs.core.first(seq__36120_36617__$1);
if(cljs.core.truth_(child_36623)){
node.appendChild(child_36623);


var G__36624 = cljs.core.next(seq__36120_36617__$1);
var G__36625 = null;
var G__36626 = (0);
var G__36627 = (0);
seq__36120_36603 = G__36624;
chunk__36122_36604 = G__36625;
count__36123_36605 = G__36626;
i__36124_36606 = G__36627;
continue;
} else {
var G__36628 = cljs.core.next(seq__36120_36617__$1);
var G__36629 = null;
var G__36630 = (0);
var G__36631 = (0);
seq__36120_36603 = G__36628;
chunk__36122_36604 = G__36629;
count__36123_36605 = G__36630;
i__36124_36606 = G__36631;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36602);
}
}


var G__36632 = cljs.core.next(seq__36075_36594__$1);
var G__36633 = null;
var G__36634 = (0);
var G__36635 = (0);
seq__36075_36546 = G__36632;
chunk__36077_36547 = G__36633;
count__36078_36548 = G__36634;
i__36079_36549 = G__36635;
continue;
} else {
var G__36637 = cljs.core.next(seq__36075_36594__$1);
var G__36638 = null;
var G__36639 = (0);
var G__36640 = (0);
seq__36075_36546 = G__36637;
chunk__36077_36547 = G__36638;
count__36078_36548 = G__36639;
i__36079_36549 = G__36640;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36642 = arguments.length;
var i__4737__auto___36643 = (0);
while(true){
if((i__4737__auto___36643 < len__4736__auto___36642)){
args__4742__auto__.push((arguments[i__4737__auto___36643]));

var G__36644 = (i__4737__auto___36643 + (1));
i__4737__auto___36643 = G__36644;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36129){
var G__36130 = cljs.core.first(seq36129);
var seq36129__$1 = cljs.core.next(seq36129);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36130,seq36129__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36132 = arguments.length;
switch (G__36132) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33136__auto___36652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_36137){
var state_val_36138 = (state_36137[(1)]);
if((state_val_36138 === (1))){
var state_36137__$1 = state_36137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36137__$1,(2),once_or_cleanup);
} else {
if((state_val_36138 === (2))){
var inst_36134 = (state_36137[(2)]);
var inst_36135 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36137__$1 = (function (){var statearr_36140 = state_36137;
(statearr_36140[(7)] = inst_36134);

return statearr_36140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36137__$1,inst_36135);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32950__auto__ = null;
var shadow$dom$state_machine__32950__auto____0 = (function (){
var statearr_36141 = [null,null,null,null,null,null,null,null];
(statearr_36141[(0)] = shadow$dom$state_machine__32950__auto__);

(statearr_36141[(1)] = (1));

return statearr_36141;
});
var shadow$dom$state_machine__32950__auto____1 = (function (state_36137){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_36137);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e36143){var ex__32953__auto__ = e36143;
var statearr_36144_36658 = state_36137;
(statearr_36144_36658[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_36137[(4)]))){
var statearr_36145_36659 = state_36137;
(statearr_36145_36659[(1)] = cljs.core.first((state_36137[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36660 = state_36137;
state_36137 = G__36660;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
shadow$dom$state_machine__32950__auto__ = function(state_36137){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32950__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32950__auto____1.call(this,state_36137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32950__auto____0;
shadow$dom$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32950__auto____1;
return shadow$dom$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_36147 = f__33137__auto__();
(statearr_36147[(6)] = c__33136__auto___36652);

return statearr_36147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
