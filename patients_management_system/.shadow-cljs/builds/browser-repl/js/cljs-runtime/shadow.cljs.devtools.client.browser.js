goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37586 = arguments.length;
var i__4737__auto___37587 = (0);
while(true){
if((i__4737__auto___37587 < len__4736__auto___37586)){
args__4742__auto__.push((arguments[i__4737__auto___37587]));

var G__37588 = (i__4737__auto___37587 + (1));
i__4737__auto___37587 = G__37588;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37412){
var G__37414 = cljs.core.first(seq37412);
var seq37412__$1 = cljs.core.next(seq37412);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37414,seq37412__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37426 = cljs.core.seq(sources);
var chunk__37427 = null;
var count__37428 = (0);
var i__37429 = (0);
while(true){
if((i__37429 < count__37428)){
var map__37448 = chunk__37427.cljs$core$IIndexed$_nth$arity$2(null,i__37429);
var map__37448__$1 = (((((!((map__37448 == null))))?(((((map__37448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37448):map__37448);
var src = map__37448__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37448__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37448__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37448__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37448__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37450){var e_37589 = e37450;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37589);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37589.message)].join('')));
}

var G__37590 = seq__37426;
var G__37591 = chunk__37427;
var G__37592 = count__37428;
var G__37593 = (i__37429 + (1));
seq__37426 = G__37590;
chunk__37427 = G__37591;
count__37428 = G__37592;
i__37429 = G__37593;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37426);
if(temp__5735__auto__){
var seq__37426__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37426__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37426__$1);
var G__37594 = cljs.core.chunk_rest(seq__37426__$1);
var G__37595 = c__4556__auto__;
var G__37596 = cljs.core.count(c__4556__auto__);
var G__37597 = (0);
seq__37426 = G__37594;
chunk__37427 = G__37595;
count__37428 = G__37596;
i__37429 = G__37597;
continue;
} else {
var map__37451 = cljs.core.first(seq__37426__$1);
var map__37451__$1 = (((((!((map__37451 == null))))?(((((map__37451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37451):map__37451);
var src = map__37451__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37451__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37451__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37451__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37451__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37453){var e_37598 = e37453;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37598);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37598.message)].join('')));
}

var G__37599 = cljs.core.next(seq__37426__$1);
var G__37600 = null;
var G__37601 = (0);
var G__37602 = (0);
seq__37426 = G__37599;
chunk__37427 = G__37600;
count__37428 = G__37601;
i__37429 = G__37602;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37454 = cljs.core.seq(js_requires);
var chunk__37455 = null;
var count__37456 = (0);
var i__37457 = (0);
while(true){
if((i__37457 < count__37456)){
var js_ns = chunk__37455.cljs$core$IIndexed$_nth$arity$2(null,i__37457);
var require_str_37603 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37603);


var G__37604 = seq__37454;
var G__37605 = chunk__37455;
var G__37606 = count__37456;
var G__37607 = (i__37457 + (1));
seq__37454 = G__37604;
chunk__37455 = G__37605;
count__37456 = G__37606;
i__37457 = G__37607;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37454);
if(temp__5735__auto__){
var seq__37454__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37454__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37454__$1);
var G__37608 = cljs.core.chunk_rest(seq__37454__$1);
var G__37609 = c__4556__auto__;
var G__37610 = cljs.core.count(c__4556__auto__);
var G__37611 = (0);
seq__37454 = G__37608;
chunk__37455 = G__37609;
count__37456 = G__37610;
i__37457 = G__37611;
continue;
} else {
var js_ns = cljs.core.first(seq__37454__$1);
var require_str_37612 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37612);


var G__37613 = cljs.core.next(seq__37454__$1);
var G__37614 = null;
var G__37615 = (0);
var G__37616 = (0);
seq__37454 = G__37613;
chunk__37455 = G__37614;
count__37456 = G__37615;
i__37457 = G__37616;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37463){
var map__37464 = p__37463;
var map__37464__$1 = (((((!((map__37464 == null))))?(((((map__37464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37464):map__37464);
var msg = map__37464__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37464__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37464__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467(s__37468){
return (new cljs.core.LazySeq(null,(function (){
var s__37468__$1 = s__37468;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37468__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37473 = cljs.core.first(xs__6292__auto__);
var map__37473__$1 = (((((!((map__37473 == null))))?(((((map__37473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37473):map__37473);
var src = map__37473__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37473__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37473__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37468__$1,map__37473,map__37473__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37464,map__37464__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467_$_iter__37469(s__37470){
return (new cljs.core.LazySeq(null,((function (s__37468__$1,map__37473,map__37473__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37464,map__37464__$1,msg,info,reload_info){
return (function (){
var s__37470__$1 = s__37470;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37470__$1);
if(temp__5735__auto____$1){
var s__37470__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37470__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37470__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37472 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37471 = (0);
while(true){
if((i__37471 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37471);
cljs.core.chunk_append(b__37472,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37617 = (i__37471 + (1));
i__37471 = G__37617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37472),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467_$_iter__37469(cljs.core.chunk_rest(s__37470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37472),null);
}
} else {
var warning = cljs.core.first(s__37470__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467_$_iter__37469(cljs.core.rest(s__37470__$2)));
}
} else {
return null;
}
break;
}
});})(s__37468__$1,map__37473,map__37473__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37464,map__37464__$1,msg,info,reload_info))
,null,null));
});})(s__37468__$1,map__37473,map__37473__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37464,map__37464__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467(cljs.core.rest(s__37468__$1)));
} else {
var G__37618 = cljs.core.rest(s__37468__$1);
s__37468__$1 = G__37618;
continue;
}
} else {
var G__37619 = cljs.core.rest(s__37468__$1);
s__37468__$1 = G__37619;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37475_37620 = cljs.core.seq(warnings);
var chunk__37476_37621 = null;
var count__37477_37622 = (0);
var i__37478_37623 = (0);
while(true){
if((i__37478_37623 < count__37477_37622)){
var map__37483_37624 = chunk__37476_37621.cljs$core$IIndexed$_nth$arity$2(null,i__37478_37623);
var map__37483_37625__$1 = (((((!((map__37483_37624 == null))))?(((((map__37483_37624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37483_37624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37483_37624):map__37483_37624);
var w_37626 = map__37483_37625__$1;
var msg_37627__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483_37625__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483_37625__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483_37625__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483_37625__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37630)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37628),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37629),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37627__$1)].join(''));


var G__37631 = seq__37475_37620;
var G__37632 = chunk__37476_37621;
var G__37633 = count__37477_37622;
var G__37634 = (i__37478_37623 + (1));
seq__37475_37620 = G__37631;
chunk__37476_37621 = G__37632;
count__37477_37622 = G__37633;
i__37478_37623 = G__37634;
continue;
} else {
var temp__5735__auto___37635 = cljs.core.seq(seq__37475_37620);
if(temp__5735__auto___37635){
var seq__37475_37636__$1 = temp__5735__auto___37635;
if(cljs.core.chunked_seq_QMARK_(seq__37475_37636__$1)){
var c__4556__auto___37637 = cljs.core.chunk_first(seq__37475_37636__$1);
var G__37638 = cljs.core.chunk_rest(seq__37475_37636__$1);
var G__37639 = c__4556__auto___37637;
var G__37640 = cljs.core.count(c__4556__auto___37637);
var G__37641 = (0);
seq__37475_37620 = G__37638;
chunk__37476_37621 = G__37639;
count__37477_37622 = G__37640;
i__37478_37623 = G__37641;
continue;
} else {
var map__37485_37642 = cljs.core.first(seq__37475_37636__$1);
var map__37485_37643__$1 = (((((!((map__37485_37642 == null))))?(((((map__37485_37642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37485_37642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37485_37642):map__37485_37642);
var w_37644 = map__37485_37643__$1;
var msg_37645__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485_37643__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485_37643__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485_37643__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485_37643__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37648)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37646),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37647),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37645__$1)].join(''));


var G__37649 = cljs.core.next(seq__37475_37636__$1);
var G__37650 = null;
var G__37651 = (0);
var G__37652 = (0);
seq__37475_37620 = G__37649;
chunk__37476_37621 = G__37650;
count__37477_37622 = G__37651;
i__37478_37623 = G__37652;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37462_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37462_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37489){
var map__37490 = p__37489;
var map__37490__$1 = (((((!((map__37490 == null))))?(((((map__37490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37490):map__37490);
var msg = map__37490__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37492 = cljs.core.seq(updates);
var chunk__37494 = null;
var count__37495 = (0);
var i__37496 = (0);
while(true){
if((i__37496 < count__37495)){
var path = chunk__37494.cljs$core$IIndexed$_nth$arity$2(null,i__37496);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37526_37653 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37530_37654 = null;
var count__37531_37655 = (0);
var i__37532_37656 = (0);
while(true){
if((i__37532_37656 < count__37531_37655)){
var node_37657 = chunk__37530_37654.cljs$core$IIndexed$_nth$arity$2(null,i__37532_37656);
if(cljs.core.not(node_37657.shadow$old)){
var path_match_37658 = shadow.cljs.devtools.client.browser.match_paths(node_37657.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37658)){
var new_link_37659 = (function (){var G__37538 = node_37657.cloneNode(true);
G__37538.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37658),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37538;
})();
(node_37657.shadow$old = true);

(new_link_37659.onload = ((function (seq__37526_37653,chunk__37530_37654,count__37531_37655,i__37532_37656,seq__37492,chunk__37494,count__37495,i__37496,new_link_37659,path_match_37658,node_37657,path,map__37490,map__37490__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37657);
});})(seq__37526_37653,chunk__37530_37654,count__37531_37655,i__37532_37656,seq__37492,chunk__37494,count__37495,i__37496,new_link_37659,path_match_37658,node_37657,path,map__37490,map__37490__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37658], 0));

goog.dom.insertSiblingAfter(new_link_37659,node_37657);


var G__37660 = seq__37526_37653;
var G__37661 = chunk__37530_37654;
var G__37662 = count__37531_37655;
var G__37663 = (i__37532_37656 + (1));
seq__37526_37653 = G__37660;
chunk__37530_37654 = G__37661;
count__37531_37655 = G__37662;
i__37532_37656 = G__37663;
continue;
} else {
var G__37664 = seq__37526_37653;
var G__37665 = chunk__37530_37654;
var G__37666 = count__37531_37655;
var G__37667 = (i__37532_37656 + (1));
seq__37526_37653 = G__37664;
chunk__37530_37654 = G__37665;
count__37531_37655 = G__37666;
i__37532_37656 = G__37667;
continue;
}
} else {
var G__37668 = seq__37526_37653;
var G__37669 = chunk__37530_37654;
var G__37670 = count__37531_37655;
var G__37671 = (i__37532_37656 + (1));
seq__37526_37653 = G__37668;
chunk__37530_37654 = G__37669;
count__37531_37655 = G__37670;
i__37532_37656 = G__37671;
continue;
}
} else {
var temp__5735__auto___37672 = cljs.core.seq(seq__37526_37653);
if(temp__5735__auto___37672){
var seq__37526_37673__$1 = temp__5735__auto___37672;
if(cljs.core.chunked_seq_QMARK_(seq__37526_37673__$1)){
var c__4556__auto___37674 = cljs.core.chunk_first(seq__37526_37673__$1);
var G__37675 = cljs.core.chunk_rest(seq__37526_37673__$1);
var G__37676 = c__4556__auto___37674;
var G__37677 = cljs.core.count(c__4556__auto___37674);
var G__37678 = (0);
seq__37526_37653 = G__37675;
chunk__37530_37654 = G__37676;
count__37531_37655 = G__37677;
i__37532_37656 = G__37678;
continue;
} else {
var node_37679 = cljs.core.first(seq__37526_37673__$1);
if(cljs.core.not(node_37679.shadow$old)){
var path_match_37680 = shadow.cljs.devtools.client.browser.match_paths(node_37679.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37680)){
var new_link_37681 = (function (){var G__37539 = node_37679.cloneNode(true);
G__37539.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37680),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37539;
})();
(node_37679.shadow$old = true);

(new_link_37681.onload = ((function (seq__37526_37653,chunk__37530_37654,count__37531_37655,i__37532_37656,seq__37492,chunk__37494,count__37495,i__37496,new_link_37681,path_match_37680,node_37679,seq__37526_37673__$1,temp__5735__auto___37672,path,map__37490,map__37490__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37679);
});})(seq__37526_37653,chunk__37530_37654,count__37531_37655,i__37532_37656,seq__37492,chunk__37494,count__37495,i__37496,new_link_37681,path_match_37680,node_37679,seq__37526_37673__$1,temp__5735__auto___37672,path,map__37490,map__37490__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37680], 0));

goog.dom.insertSiblingAfter(new_link_37681,node_37679);


var G__37682 = cljs.core.next(seq__37526_37673__$1);
var G__37683 = null;
var G__37684 = (0);
var G__37685 = (0);
seq__37526_37653 = G__37682;
chunk__37530_37654 = G__37683;
count__37531_37655 = G__37684;
i__37532_37656 = G__37685;
continue;
} else {
var G__37686 = cljs.core.next(seq__37526_37673__$1);
var G__37687 = null;
var G__37688 = (0);
var G__37689 = (0);
seq__37526_37653 = G__37686;
chunk__37530_37654 = G__37687;
count__37531_37655 = G__37688;
i__37532_37656 = G__37689;
continue;
}
} else {
var G__37690 = cljs.core.next(seq__37526_37673__$1);
var G__37691 = null;
var G__37692 = (0);
var G__37693 = (0);
seq__37526_37653 = G__37690;
chunk__37530_37654 = G__37691;
count__37531_37655 = G__37692;
i__37532_37656 = G__37693;
continue;
}
}
} else {
}
}
break;
}


var G__37694 = seq__37492;
var G__37695 = chunk__37494;
var G__37696 = count__37495;
var G__37697 = (i__37496 + (1));
seq__37492 = G__37694;
chunk__37494 = G__37695;
count__37495 = G__37696;
i__37496 = G__37697;
continue;
} else {
var G__37698 = seq__37492;
var G__37699 = chunk__37494;
var G__37700 = count__37495;
var G__37701 = (i__37496 + (1));
seq__37492 = G__37698;
chunk__37494 = G__37699;
count__37495 = G__37700;
i__37496 = G__37701;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37492);
if(temp__5735__auto__){
var seq__37492__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37492__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37492__$1);
var G__37702 = cljs.core.chunk_rest(seq__37492__$1);
var G__37703 = c__4556__auto__;
var G__37704 = cljs.core.count(c__4556__auto__);
var G__37705 = (0);
seq__37492 = G__37702;
chunk__37494 = G__37703;
count__37495 = G__37704;
i__37496 = G__37705;
continue;
} else {
var path = cljs.core.first(seq__37492__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37540_37706 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37544_37707 = null;
var count__37545_37708 = (0);
var i__37546_37709 = (0);
while(true){
if((i__37546_37709 < count__37545_37708)){
var node_37710 = chunk__37544_37707.cljs$core$IIndexed$_nth$arity$2(null,i__37546_37709);
if(cljs.core.not(node_37710.shadow$old)){
var path_match_37711 = shadow.cljs.devtools.client.browser.match_paths(node_37710.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37711)){
var new_link_37712 = (function (){var G__37552 = node_37710.cloneNode(true);
G__37552.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37711),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37552;
})();
(node_37710.shadow$old = true);

(new_link_37712.onload = ((function (seq__37540_37706,chunk__37544_37707,count__37545_37708,i__37546_37709,seq__37492,chunk__37494,count__37495,i__37496,new_link_37712,path_match_37711,node_37710,path,seq__37492__$1,temp__5735__auto__,map__37490,map__37490__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37710);
});})(seq__37540_37706,chunk__37544_37707,count__37545_37708,i__37546_37709,seq__37492,chunk__37494,count__37495,i__37496,new_link_37712,path_match_37711,node_37710,path,seq__37492__$1,temp__5735__auto__,map__37490,map__37490__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37711], 0));

goog.dom.insertSiblingAfter(new_link_37712,node_37710);


var G__37713 = seq__37540_37706;
var G__37714 = chunk__37544_37707;
var G__37715 = count__37545_37708;
var G__37716 = (i__37546_37709 + (1));
seq__37540_37706 = G__37713;
chunk__37544_37707 = G__37714;
count__37545_37708 = G__37715;
i__37546_37709 = G__37716;
continue;
} else {
var G__37717 = seq__37540_37706;
var G__37718 = chunk__37544_37707;
var G__37719 = count__37545_37708;
var G__37720 = (i__37546_37709 + (1));
seq__37540_37706 = G__37717;
chunk__37544_37707 = G__37718;
count__37545_37708 = G__37719;
i__37546_37709 = G__37720;
continue;
}
} else {
var G__37721 = seq__37540_37706;
var G__37722 = chunk__37544_37707;
var G__37723 = count__37545_37708;
var G__37724 = (i__37546_37709 + (1));
seq__37540_37706 = G__37721;
chunk__37544_37707 = G__37722;
count__37545_37708 = G__37723;
i__37546_37709 = G__37724;
continue;
}
} else {
var temp__5735__auto___37725__$1 = cljs.core.seq(seq__37540_37706);
if(temp__5735__auto___37725__$1){
var seq__37540_37726__$1 = temp__5735__auto___37725__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37540_37726__$1)){
var c__4556__auto___37727 = cljs.core.chunk_first(seq__37540_37726__$1);
var G__37728 = cljs.core.chunk_rest(seq__37540_37726__$1);
var G__37729 = c__4556__auto___37727;
var G__37730 = cljs.core.count(c__4556__auto___37727);
var G__37731 = (0);
seq__37540_37706 = G__37728;
chunk__37544_37707 = G__37729;
count__37545_37708 = G__37730;
i__37546_37709 = G__37731;
continue;
} else {
var node_37732 = cljs.core.first(seq__37540_37726__$1);
if(cljs.core.not(node_37732.shadow$old)){
var path_match_37733 = shadow.cljs.devtools.client.browser.match_paths(node_37732.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37733)){
var new_link_37734 = (function (){var G__37553 = node_37732.cloneNode(true);
G__37553.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37733),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37553;
})();
(node_37732.shadow$old = true);

(new_link_37734.onload = ((function (seq__37540_37706,chunk__37544_37707,count__37545_37708,i__37546_37709,seq__37492,chunk__37494,count__37495,i__37496,new_link_37734,path_match_37733,node_37732,seq__37540_37726__$1,temp__5735__auto___37725__$1,path,seq__37492__$1,temp__5735__auto__,map__37490,map__37490__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37732);
});})(seq__37540_37706,chunk__37544_37707,count__37545_37708,i__37546_37709,seq__37492,chunk__37494,count__37495,i__37496,new_link_37734,path_match_37733,node_37732,seq__37540_37726__$1,temp__5735__auto___37725__$1,path,seq__37492__$1,temp__5735__auto__,map__37490,map__37490__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37733], 0));

goog.dom.insertSiblingAfter(new_link_37734,node_37732);


var G__37735 = cljs.core.next(seq__37540_37726__$1);
var G__37736 = null;
var G__37737 = (0);
var G__37738 = (0);
seq__37540_37706 = G__37735;
chunk__37544_37707 = G__37736;
count__37545_37708 = G__37737;
i__37546_37709 = G__37738;
continue;
} else {
var G__37739 = cljs.core.next(seq__37540_37726__$1);
var G__37740 = null;
var G__37741 = (0);
var G__37742 = (0);
seq__37540_37706 = G__37739;
chunk__37544_37707 = G__37740;
count__37545_37708 = G__37741;
i__37546_37709 = G__37742;
continue;
}
} else {
var G__37743 = cljs.core.next(seq__37540_37726__$1);
var G__37744 = null;
var G__37745 = (0);
var G__37746 = (0);
seq__37540_37706 = G__37743;
chunk__37544_37707 = G__37744;
count__37545_37708 = G__37745;
i__37546_37709 = G__37746;
continue;
}
}
} else {
}
}
break;
}


var G__37747 = cljs.core.next(seq__37492__$1);
var G__37748 = null;
var G__37749 = (0);
var G__37750 = (0);
seq__37492 = G__37747;
chunk__37494 = G__37748;
count__37495 = G__37749;
i__37496 = G__37750;
continue;
} else {
var G__37751 = cljs.core.next(seq__37492__$1);
var G__37752 = null;
var G__37753 = (0);
var G__37754 = (0);
seq__37492 = G__37751;
chunk__37494 = G__37752;
count__37495 = G__37753;
i__37496 = G__37754;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37554){
var map__37555 = p__37554;
var map__37555__$1 = (((((!((map__37555 == null))))?(((((map__37555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37555):map__37555);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37557){
var map__37558 = p__37557;
var map__37558__$1 = (((((!((map__37558 == null))))?(((((map__37558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37558):map__37558);
var _ = map__37558__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37558__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37560,done,error){
var map__37561 = p__37560;
var map__37561__$1 = (((((!((map__37561 == null))))?(((((map__37561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37561):map__37561);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37561__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37563,done,error){
var map__37564 = p__37563;
var map__37564__$1 = (((((!((map__37564 == null))))?(((((map__37564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37564):map__37564);
var msg = map__37564__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37566){
var map__37567 = p__37566;
var map__37567__$1 = (((((!((map__37567 == null))))?(((((map__37567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37567):map__37567);
var src = map__37567__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37569 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37569) : done.call(null,G__37569));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37570){
var map__37571 = p__37570;
var map__37571__$1 = (((((!((map__37571 == null))))?(((((map__37571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37571):map__37571);
var msg__$1 = map__37571__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37571__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37573){var ex = e37573;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37574){
var map__37575 = p__37574;
var map__37575__$1 = (((((!((map__37575 == null))))?(((((map__37575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37575):map__37575);
var env = map__37575__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37577){
var map__37578 = p__37577;
var map__37578__$1 = (((((!((map__37578 == null))))?(((((map__37578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37578):map__37578);
var msg = map__37578__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37578__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37580){
var map__37581 = p__37580;
var map__37581__$1 = (((((!((map__37581 == null))))?(((((map__37581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37581):map__37581);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37581__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37581__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37583){
var map__37584 = p__37583;
var map__37584__$1 = (((((!((map__37584 == null))))?(((((map__37584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37584):map__37584);
var svc = map__37584__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
