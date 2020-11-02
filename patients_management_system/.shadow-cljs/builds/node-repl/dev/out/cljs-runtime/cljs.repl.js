goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31464){
var map__31465 = p__31464;
var map__31465__$1 = (((((!((map__31465 == null))))?(((((map__31465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31465):map__31465);
var m = map__31465__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31465__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31465__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31467_31689 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31468_31690 = null;
var count__31469_31691 = (0);
var i__31470_31692 = (0);
while(true){
if((i__31470_31692 < count__31469_31691)){
var f_31693 = chunk__31468_31690.cljs$core$IIndexed$_nth$arity$2(null,i__31470_31692);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31693], 0));


var G__31694 = seq__31467_31689;
var G__31695 = chunk__31468_31690;
var G__31696 = count__31469_31691;
var G__31697 = (i__31470_31692 + (1));
seq__31467_31689 = G__31694;
chunk__31468_31690 = G__31695;
count__31469_31691 = G__31696;
i__31470_31692 = G__31697;
continue;
} else {
var temp__5735__auto___31698 = cljs.core.seq(seq__31467_31689);
if(temp__5735__auto___31698){
var seq__31467_31699__$1 = temp__5735__auto___31698;
if(cljs.core.chunked_seq_QMARK_(seq__31467_31699__$1)){
var c__4556__auto___31700 = cljs.core.chunk_first(seq__31467_31699__$1);
var G__31701 = cljs.core.chunk_rest(seq__31467_31699__$1);
var G__31702 = c__4556__auto___31700;
var G__31703 = cljs.core.count(c__4556__auto___31700);
var G__31704 = (0);
seq__31467_31689 = G__31701;
chunk__31468_31690 = G__31702;
count__31469_31691 = G__31703;
i__31470_31692 = G__31704;
continue;
} else {
var f_31705 = cljs.core.first(seq__31467_31699__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31705], 0));


var G__31706 = cljs.core.next(seq__31467_31699__$1);
var G__31707 = null;
var G__31708 = (0);
var G__31709 = (0);
seq__31467_31689 = G__31706;
chunk__31468_31690 = G__31707;
count__31469_31691 = G__31708;
i__31470_31692 = G__31709;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31710 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31710], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31710)))?cljs.core.second(arglists_31710):arglists_31710)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31474_31712 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31475_31713 = null;
var count__31476_31714 = (0);
var i__31477_31715 = (0);
while(true){
if((i__31477_31715 < count__31476_31714)){
var vec__31491_31716 = chunk__31475_31713.cljs$core$IIndexed$_nth$arity$2(null,i__31477_31715);
var name_31717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31491_31716,(0),null);
var map__31494_31718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31491_31716,(1),null);
var map__31494_31719__$1 = (((((!((map__31494_31718 == null))))?(((((map__31494_31718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31494_31718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31494_31718):map__31494_31718);
var doc_31720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494_31719__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31494_31719__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31717], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31721], 0));

if(cljs.core.truth_(doc_31720)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31720], 0));
} else {
}


var G__31722 = seq__31474_31712;
var G__31723 = chunk__31475_31713;
var G__31724 = count__31476_31714;
var G__31725 = (i__31477_31715 + (1));
seq__31474_31712 = G__31722;
chunk__31475_31713 = G__31723;
count__31476_31714 = G__31724;
i__31477_31715 = G__31725;
continue;
} else {
var temp__5735__auto___31726 = cljs.core.seq(seq__31474_31712);
if(temp__5735__auto___31726){
var seq__31474_31727__$1 = temp__5735__auto___31726;
if(cljs.core.chunked_seq_QMARK_(seq__31474_31727__$1)){
var c__4556__auto___31728 = cljs.core.chunk_first(seq__31474_31727__$1);
var G__31729 = cljs.core.chunk_rest(seq__31474_31727__$1);
var G__31730 = c__4556__auto___31728;
var G__31731 = cljs.core.count(c__4556__auto___31728);
var G__31732 = (0);
seq__31474_31712 = G__31729;
chunk__31475_31713 = G__31730;
count__31476_31714 = G__31731;
i__31477_31715 = G__31732;
continue;
} else {
var vec__31497_31733 = cljs.core.first(seq__31474_31727__$1);
var name_31734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31497_31733,(0),null);
var map__31500_31735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31497_31733,(1),null);
var map__31500_31736__$1 = (((((!((map__31500_31735 == null))))?(((((map__31500_31735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31500_31735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31500_31735):map__31500_31735);
var doc_31737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31500_31736__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31500_31736__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31734], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31738], 0));

if(cljs.core.truth_(doc_31737)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31737], 0));
} else {
}


var G__31740 = cljs.core.next(seq__31474_31727__$1);
var G__31741 = null;
var G__31742 = (0);
var G__31743 = (0);
seq__31474_31712 = G__31740;
chunk__31475_31713 = G__31741;
count__31476_31714 = G__31742;
i__31477_31715 = G__31743;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31502 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31503 = null;
var count__31504 = (0);
var i__31505 = (0);
while(true){
if((i__31505 < count__31504)){
var role = chunk__31503.cljs$core$IIndexed$_nth$arity$2(null,i__31505);
var temp__5735__auto___31744__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31744__$1)){
var spec_31745 = temp__5735__auto___31744__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31745)], 0));
} else {
}


var G__31746 = seq__31502;
var G__31747 = chunk__31503;
var G__31748 = count__31504;
var G__31749 = (i__31505 + (1));
seq__31502 = G__31746;
chunk__31503 = G__31747;
count__31504 = G__31748;
i__31505 = G__31749;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31502);
if(temp__5735__auto____$1){
var seq__31502__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31502__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31502__$1);
var G__31750 = cljs.core.chunk_rest(seq__31502__$1);
var G__31751 = c__4556__auto__;
var G__31752 = cljs.core.count(c__4556__auto__);
var G__31753 = (0);
seq__31502 = G__31750;
chunk__31503 = G__31751;
count__31504 = G__31752;
i__31505 = G__31753;
continue;
} else {
var role = cljs.core.first(seq__31502__$1);
var temp__5735__auto___31754__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31754__$2)){
var spec_31755 = temp__5735__auto___31754__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31755)], 0));
} else {
}


var G__31756 = cljs.core.next(seq__31502__$1);
var G__31757 = null;
var G__31758 = (0);
var G__31759 = (0);
seq__31502 = G__31756;
chunk__31503 = G__31757;
count__31504 = G__31758;
i__31505 = G__31759;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31760 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31761 = cljs.core.ex_cause(t);
via = G__31760;
t = G__31761;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31537 = datafied_throwable;
var map__31537__$1 = (((((!((map__31537 == null))))?(((((map__31537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31537):map__31537);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31537__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31537__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31537__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31538 = cljs.core.last(via);
var map__31538__$1 = (((((!((map__31538 == null))))?(((((map__31538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31538):map__31538);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31538__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31538__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31538__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31539 = data;
var map__31539__$1 = (((((!((map__31539 == null))))?(((((map__31539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31539):map__31539);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31539__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31539__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31539__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31540 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31540__$1 = (((((!((map__31540 == null))))?(((((map__31540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31540):map__31540);
var top_data = map__31540__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31540__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31590 = phase;
var G__31590__$1 = (((G__31590 instanceof cljs.core.Keyword))?G__31590.fqn:null);
switch (G__31590__$1) {
case "read-source":
var map__31591 = data;
var map__31591__$1 = (((((!((map__31591 == null))))?(((((map__31591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31591):map__31591);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31591__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31591__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31607 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31607__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31607,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31607);
var G__31607__$2 = (cljs.core.truth_((function (){var fexpr__31608 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31608.cljs$core$IFn$_invoke$arity$1 ? fexpr__31608.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31608.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31607__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31607__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31607__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31607__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31617 = top_data;
var G__31617__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31617,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31617);
var G__31617__$2 = (cljs.core.truth_((function (){var fexpr__31618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31618.cljs$core$IFn$_invoke$arity$1 ? fexpr__31618.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31618.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31617__$1);
var G__31617__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31617__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31617__$2);
var G__31617__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31617__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31617__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31617__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31617__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31623 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31623,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31623,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31623,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31623,(3),null);
var G__31626 = top_data;
var G__31626__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31626,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31626);
var G__31626__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31626__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31626__$1);
var G__31626__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31626__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31626__$2);
var G__31626__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31626__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31626__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31626__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31626__$4;
}

break;
case "execution":
var vec__31629 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31533_SHARP_){
var or__4126__auto__ = (p1__31533_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__31633 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31633.cljs$core$IFn$_invoke$arity$1 ? fexpr__31633.cljs$core$IFn$_invoke$arity$1(p1__31533_SHARP_) : fexpr__31633.call(null,p1__31533_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31634 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31634__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31634,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31634);
var G__31634__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31634__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31634__$1);
var G__31634__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31634__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31634__$2);
var G__31634__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31634__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31634__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31634__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31634__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31590__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31640){
var map__31641 = p__31640;
var map__31641__$1 = (((((!((map__31641 == null))))?(((((map__31641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31641):map__31641);
var triage_data = map__31641__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31644 = phase;
var G__31644__$1 = (((G__31644 instanceof cljs.core.Keyword))?G__31644.fqn:null);
switch (G__31644__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31645 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31646 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31647 = loc;
var G__31648 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31649_31774 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31650_31775 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31651_31776 = true;
var _STAR_print_fn_STAR__temp_val__31652_31777 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31651_31776);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31652_31777);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31638_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31638_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31650_31775);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31649_31774);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31645,G__31646,G__31647,G__31648) : format.call(null,G__31645,G__31646,G__31647,G__31648));

break;
case "macroexpansion":
var G__31653 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31654 = cause_type;
var G__31655 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31656 = loc;
var G__31657 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31653,G__31654,G__31655,G__31656,G__31657) : format.call(null,G__31653,G__31654,G__31655,G__31656,G__31657));

break;
case "compile-syntax-check":
var G__31662 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31663 = cause_type;
var G__31664 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31665 = loc;
var G__31666 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31662,G__31663,G__31664,G__31665,G__31666) : format.call(null,G__31662,G__31663,G__31664,G__31665,G__31666));

break;
case "compilation":
var G__31667 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31668 = cause_type;
var G__31669 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31670 = loc;
var G__31671 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31667,G__31668,G__31669,G__31670,G__31671) : format.call(null,G__31667,G__31668,G__31669,G__31670,G__31671));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31672 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31673 = symbol;
var G__31674 = loc;
var G__31675 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31680_31784 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31681_31785 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31682_31786 = true;
var _STAR_print_fn_STAR__temp_val__31683_31787 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31682_31786);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31683_31787);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31639_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31639_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31681_31785);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31680_31784);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31672,G__31673,G__31674,G__31675) : format.call(null,G__31672,G__31673,G__31674,G__31675));
} else {
var G__31684 = "Execution error%s at %s(%s).\n%s\n";
var G__31685 = cause_type;
var G__31686 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31687 = loc;
var G__31688 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31684,G__31685,G__31686,G__31687,G__31688) : format.call(null,G__31684,G__31685,G__31686,G__31687,G__31688));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31644__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
