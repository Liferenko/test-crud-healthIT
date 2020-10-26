goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35155,p__35156){
var map__35158 = p__35155;
var map__35158__$1 = (((((!((map__35158 == null))))?(((((map__35158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35158):map__35158);
var svc = map__35158__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35159 = p__35156;
var map__35159__$1 = (((((!((map__35159 == null))))?(((((map__35159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35159):map__35159);
var msg = map__35159__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35159__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35165,p__35166){
var map__35167 = p__35165;
var map__35167__$1 = (((((!((map__35167 == null))))?(((((map__35167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35167):map__35167);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35167__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35168 = p__35166;
var map__35168__$1 = (((((!((map__35168 == null))))?(((((map__35168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35168):map__35168);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35168__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35210,p__35211){
var map__35212 = p__35210;
var map__35212__$1 = (((((!((map__35212 == null))))?(((((map__35212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35212):map__35212);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35213 = p__35211;
var map__35213__$1 = (((((!((map__35213 == null))))?(((((map__35213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35213):map__35213);
var msg = map__35213__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35213__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35223,tid){
var map__35224 = p__35223;
var map__35224__$1 = (((((!((map__35224 == null))))?(((((map__35224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35224):map__35224);
var svc = map__35224__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35224__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35233 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35234 = null;
var count__35235 = (0);
var i__35236 = (0);
while(true){
if((i__35236 < count__35235)){
var vec__35251 = chunk__35234.cljs$core$IIndexed$_nth$arity$2(null,i__35236);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35251,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35251,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35324 = seq__35233;
var G__35325 = chunk__35234;
var G__35326 = count__35235;
var G__35327 = (i__35236 + (1));
seq__35233 = G__35324;
chunk__35234 = G__35325;
count__35235 = G__35326;
i__35236 = G__35327;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35233);
if(temp__5735__auto__){
var seq__35233__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35233__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35233__$1);
var G__35329 = cljs.core.chunk_rest(seq__35233__$1);
var G__35331 = c__4556__auto__;
var G__35332 = cljs.core.count(c__4556__auto__);
var G__35333 = (0);
seq__35233 = G__35329;
chunk__35234 = G__35331;
count__35235 = G__35332;
i__35236 = G__35333;
continue;
} else {
var vec__35257 = cljs.core.first(seq__35233__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35257,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35257,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35334 = cljs.core.next(seq__35233__$1);
var G__35335 = null;
var G__35336 = (0);
var G__35337 = (0);
seq__35233 = G__35334;
chunk__35234 = G__35335;
count__35235 = G__35336;
i__35236 = G__35337;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35229_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35229_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35230_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35230_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35231_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35231_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35232_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35232_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35265){
var map__35266 = p__35265;
var map__35266__$1 = (((((!((map__35266 == null))))?(((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35266):map__35266);
var svc = map__35266__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
