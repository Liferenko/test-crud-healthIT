goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38539){
var map__38541 = p__38539;
var map__38541__$1 = (((((!((map__38541 == null))))?(((((map__38541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38541):map__38541);
var m = map__38541__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38541__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38545_38764 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38546_38765 = null;
var count__38547_38766 = (0);
var i__38548_38767 = (0);
while(true){
if((i__38548_38767 < count__38547_38766)){
var f_38768 = chunk__38546_38765.cljs$core$IIndexed$_nth$arity$2(null,i__38548_38767);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38768], 0));


var G__38769 = seq__38545_38764;
var G__38770 = chunk__38546_38765;
var G__38771 = count__38547_38766;
var G__38772 = (i__38548_38767 + (1));
seq__38545_38764 = G__38769;
chunk__38546_38765 = G__38770;
count__38547_38766 = G__38771;
i__38548_38767 = G__38772;
continue;
} else {
var temp__5735__auto___38773 = cljs.core.seq(seq__38545_38764);
if(temp__5735__auto___38773){
var seq__38545_38774__$1 = temp__5735__auto___38773;
if(cljs.core.chunked_seq_QMARK_(seq__38545_38774__$1)){
var c__4556__auto___38775 = cljs.core.chunk_first(seq__38545_38774__$1);
var G__38776 = cljs.core.chunk_rest(seq__38545_38774__$1);
var G__38777 = c__4556__auto___38775;
var G__38778 = cljs.core.count(c__4556__auto___38775);
var G__38779 = (0);
seq__38545_38764 = G__38776;
chunk__38546_38765 = G__38777;
count__38547_38766 = G__38778;
i__38548_38767 = G__38779;
continue;
} else {
var f_38780 = cljs.core.first(seq__38545_38774__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38780], 0));


var G__38781 = cljs.core.next(seq__38545_38774__$1);
var G__38782 = null;
var G__38783 = (0);
var G__38784 = (0);
seq__38545_38764 = G__38781;
chunk__38546_38765 = G__38782;
count__38547_38766 = G__38783;
i__38548_38767 = G__38784;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38785 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38785], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38785)))?cljs.core.second(arglists_38785):arglists_38785)], 0));
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
var seq__38553_38787 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38554_38788 = null;
var count__38555_38789 = (0);
var i__38556_38790 = (0);
while(true){
if((i__38556_38790 < count__38555_38789)){
var vec__38569_38791 = chunk__38554_38788.cljs$core$IIndexed$_nth$arity$2(null,i__38556_38790);
var name_38792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38569_38791,(0),null);
var map__38572_38793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38569_38791,(1),null);
var map__38572_38794__$1 = (((((!((map__38572_38793 == null))))?(((((map__38572_38793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38572_38793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38572_38793):map__38572_38793);
var doc_38795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38572_38794__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38572_38794__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38792], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38796], 0));

if(cljs.core.truth_(doc_38795)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38795], 0));
} else {
}


var G__38797 = seq__38553_38787;
var G__38798 = chunk__38554_38788;
var G__38799 = count__38555_38789;
var G__38800 = (i__38556_38790 + (1));
seq__38553_38787 = G__38797;
chunk__38554_38788 = G__38798;
count__38555_38789 = G__38799;
i__38556_38790 = G__38800;
continue;
} else {
var temp__5735__auto___38801 = cljs.core.seq(seq__38553_38787);
if(temp__5735__auto___38801){
var seq__38553_38802__$1 = temp__5735__auto___38801;
if(cljs.core.chunked_seq_QMARK_(seq__38553_38802__$1)){
var c__4556__auto___38803 = cljs.core.chunk_first(seq__38553_38802__$1);
var G__38804 = cljs.core.chunk_rest(seq__38553_38802__$1);
var G__38805 = c__4556__auto___38803;
var G__38806 = cljs.core.count(c__4556__auto___38803);
var G__38807 = (0);
seq__38553_38787 = G__38804;
chunk__38554_38788 = G__38805;
count__38555_38789 = G__38806;
i__38556_38790 = G__38807;
continue;
} else {
var vec__38575_38808 = cljs.core.first(seq__38553_38802__$1);
var name_38809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38575_38808,(0),null);
var map__38578_38810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38575_38808,(1),null);
var map__38578_38811__$1 = (((((!((map__38578_38810 == null))))?(((((map__38578_38810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38578_38810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38578_38810):map__38578_38810);
var doc_38812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38578_38811__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38578_38811__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38809], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38813], 0));

if(cljs.core.truth_(doc_38812)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38812], 0));
} else {
}


var G__38814 = cljs.core.next(seq__38553_38802__$1);
var G__38815 = null;
var G__38816 = (0);
var G__38817 = (0);
seq__38553_38787 = G__38814;
chunk__38554_38788 = G__38815;
count__38555_38789 = G__38816;
i__38556_38790 = G__38817;
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

var seq__38582 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38583 = null;
var count__38584 = (0);
var i__38585 = (0);
while(true){
if((i__38585 < count__38584)){
var role = chunk__38583.cljs$core$IIndexed$_nth$arity$2(null,i__38585);
var temp__5735__auto___38818__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38818__$1)){
var spec_38819 = temp__5735__auto___38818__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38819)], 0));
} else {
}


var G__38820 = seq__38582;
var G__38821 = chunk__38583;
var G__38822 = count__38584;
var G__38823 = (i__38585 + (1));
seq__38582 = G__38820;
chunk__38583 = G__38821;
count__38584 = G__38822;
i__38585 = G__38823;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38582);
if(temp__5735__auto____$1){
var seq__38582__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38582__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38582__$1);
var G__38824 = cljs.core.chunk_rest(seq__38582__$1);
var G__38825 = c__4556__auto__;
var G__38826 = cljs.core.count(c__4556__auto__);
var G__38827 = (0);
seq__38582 = G__38824;
chunk__38583 = G__38825;
count__38584 = G__38826;
i__38585 = G__38827;
continue;
} else {
var role = cljs.core.first(seq__38582__$1);
var temp__5735__auto___38828__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38828__$2)){
var spec_38829 = temp__5735__auto___38828__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38829)], 0));
} else {
}


var G__38830 = cljs.core.next(seq__38582__$1);
var G__38831 = null;
var G__38832 = (0);
var G__38833 = (0);
seq__38582 = G__38830;
chunk__38583 = G__38831;
count__38584 = G__38832;
i__38585 = G__38833;
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
var G__38835 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38836 = cljs.core.ex_cause(t);
via = G__38835;
t = G__38836;
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
var map__38657 = datafied_throwable;
var map__38657__$1 = (((((!((map__38657 == null))))?(((((map__38657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38657):map__38657);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38657__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38657__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38657__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38658 = cljs.core.last(via);
var map__38658__$1 = (((((!((map__38658 == null))))?(((((map__38658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38658):map__38658);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38659 = data;
var map__38659__$1 = (((((!((map__38659 == null))))?(((((map__38659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38659):map__38659);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38659__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38659__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38659__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38660 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38660__$1 = (((((!((map__38660 == null))))?(((((map__38660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38660):map__38660);
var top_data = map__38660__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38660__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38691 = phase;
var G__38691__$1 = (((G__38691 instanceof cljs.core.Keyword))?G__38691.fqn:null);
switch (G__38691__$1) {
case "read-source":
var map__38693 = data;
var map__38693__$1 = (((((!((map__38693 == null))))?(((((map__38693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38693):map__38693);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38693__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38693__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38695 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38695__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38695,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38695);
var G__38695__$2 = (cljs.core.truth_((function (){var fexpr__38697 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38697.cljs$core$IFn$_invoke$arity$1 ? fexpr__38697.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38697.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38695__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38695__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38695__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38695__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38698 = top_data;
var G__38698__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38698,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38698);
var G__38698__$2 = (cljs.core.truth_((function (){var fexpr__38699 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38699.cljs$core$IFn$_invoke$arity$1 ? fexpr__38699.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38699.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38698__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38698__$1);
var G__38698__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38698__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38698__$2);
var G__38698__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38698__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38698__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38698__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38698__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38700 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(3),null);
var G__38703 = top_data;
var G__38703__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38703,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38703);
var G__38703__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38703__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38703__$1);
var G__38703__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38703__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38703__$2);
var G__38703__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38703__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38703__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38703__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38703__$4;
}

break;
case "execution":
var vec__38705 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38705,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38705,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38705,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38705,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38649_SHARP_){
var or__4126__auto__ = (p1__38649_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38710 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38710.cljs$core$IFn$_invoke$arity$1 ? fexpr__38710.cljs$core$IFn$_invoke$arity$1(p1__38649_SHARP_) : fexpr__38710.call(null,p1__38649_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38711 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38711__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38711,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38711);
var G__38711__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38711__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38711__$1);
var G__38711__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38711__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38711__$2);
var G__38711__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38711__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38711__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38711__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38711__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38691__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38716){
var map__38717 = p__38716;
var map__38717__$1 = (((((!((map__38717 == null))))?(((((map__38717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38717):map__38717);
var triage_data = map__38717__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__38719 = phase;
var G__38719__$1 = (((G__38719 instanceof cljs.core.Keyword))?G__38719.fqn:null);
switch (G__38719__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38720 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38721 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38722 = loc;
var G__38723 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38724_38844 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38725_38845 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38726_38846 = true;
var _STAR_print_fn_STAR__temp_val__38727_38847 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38726_38846);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38727_38847);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38713_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38713_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38725_38845);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38724_38844);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38720,G__38721,G__38722,G__38723) : format.call(null,G__38720,G__38721,G__38722,G__38723));

break;
case "macroexpansion":
var G__38732 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38733 = cause_type;
var G__38734 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38735 = loc;
var G__38736 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38732,G__38733,G__38734,G__38735,G__38736) : format.call(null,G__38732,G__38733,G__38734,G__38735,G__38736));

break;
case "compile-syntax-check":
var G__38737 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38738 = cause_type;
var G__38739 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38740 = loc;
var G__38741 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38737,G__38738,G__38739,G__38740,G__38741) : format.call(null,G__38737,G__38738,G__38739,G__38740,G__38741));

break;
case "compilation":
var G__38742 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38743 = cause_type;
var G__38744 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38745 = loc;
var G__38746 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38742,G__38743,G__38744,G__38745,G__38746) : format.call(null,G__38742,G__38743,G__38744,G__38745,G__38746));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38751 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38752 = symbol;
var G__38753 = loc;
var G__38754 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38755_38848 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38756_38849 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38757_38850 = true;
var _STAR_print_fn_STAR__temp_val__38758_38851 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38757_38850);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38758_38851);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38715_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38715_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38756_38849);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38755_38848);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38751,G__38752,G__38753,G__38754) : format.call(null,G__38751,G__38752,G__38753,G__38754));
} else {
var G__38759 = "Execution error%s at %s(%s).\n%s\n";
var G__38760 = cause_type;
var G__38761 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38762 = loc;
var G__38763 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38759,G__38760,G__38761,G__38762,G__38763) : format.call(null,G__38759,G__38760,G__38761,G__38762,G__38763));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38719__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
