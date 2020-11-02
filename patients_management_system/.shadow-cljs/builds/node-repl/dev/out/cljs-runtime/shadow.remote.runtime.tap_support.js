goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__29403,p__29404){
var map__29409 = p__29403;
var map__29409__$1 = (((((!((map__29409 == null))))?(((((map__29409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29409):map__29409);
var svc = map__29409__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29409__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29409__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29409__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29410 = p__29404;
var map__29410__$1 = (((((!((map__29410 == null))))?(((((map__29410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29410):map__29410);
var msg = map__29410__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29410__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29410__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29410__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29410__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__29444,p__29445){
var map__29446 = p__29444;
var map__29446__$1 = (((((!((map__29446 == null))))?(((((map__29446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29446):map__29446);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29446__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__29448 = p__29445;
var map__29448__$1 = (((((!((map__29448 == null))))?(((((map__29448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29448):map__29448);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29448__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__29458,p__29459){
var map__29460 = p__29458;
var map__29460__$1 = (((((!((map__29460 == null))))?(((((map__29460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29460):map__29460);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29460__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29460__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29461 = p__29459;
var map__29461__$1 = (((((!((map__29461 == null))))?(((((map__29461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29461):map__29461);
var msg = map__29461__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29461__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__29484,tid){
var map__29485 = p__29484;
var map__29485__$1 = (((((!((map__29485 == null))))?(((((map__29485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29485):map__29485);
var svc = map__29485__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29485__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__29501 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__29502 = null;
var count__29503 = (0);
var i__29504 = (0);
while(true){
if((i__29504 < count__29503)){
var vec__29512 = chunk__29502.cljs$core$IIndexed$_nth$arity$2(null,i__29504);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29512,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29512,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__29536 = seq__29501;
var G__29537 = chunk__29502;
var G__29538 = count__29503;
var G__29539 = (i__29504 + (1));
seq__29501 = G__29536;
chunk__29502 = G__29537;
count__29503 = G__29538;
i__29504 = G__29539;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29501);
if(temp__5735__auto__){
var seq__29501__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29501__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29501__$1);
var G__29541 = cljs.core.chunk_rest(seq__29501__$1);
var G__29542 = c__4556__auto__;
var G__29543 = cljs.core.count(c__4556__auto__);
var G__29544 = (0);
seq__29501 = G__29541;
chunk__29502 = G__29542;
count__29503 = G__29543;
i__29504 = G__29544;
continue;
} else {
var vec__29525 = cljs.core.first(seq__29501__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29525,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29525,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__29546 = cljs.core.next(seq__29501__$1);
var G__29547 = null;
var G__29548 = (0);
var G__29549 = (0);
seq__29501 = G__29546;
chunk__29502 = G__29547;
count__29503 = G__29548;
i__29504 = G__29549;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__29495_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__29495_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__29496_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__29496_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__29497_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__29497_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__29498_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__29498_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__29528){
var map__29529 = p__29528;
var map__29529__$1 = (((((!((map__29529 == null))))?(((((map__29529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29529):map__29529);
var svc = map__29529__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29529__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29529__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
