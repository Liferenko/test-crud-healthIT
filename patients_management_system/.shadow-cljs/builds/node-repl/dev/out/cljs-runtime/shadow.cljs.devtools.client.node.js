goog.provide('shadow.cljs.devtools.client.node');
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__29856){
var map__29858 = p__29856;
var map__29858__$1 = (((((!((map__29858 == null))))?(((((map__29858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29858):map__29858);
var msg = map__29858__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__29861){
var map__29862 = p__29861;
var map__29862__$1 = (((((!((map__29862 == null))))?(((((map__29862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29862):map__29862);
var msg = map__29862__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29862__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29862__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29866 = info;
var map__29866__$1 = (((((!((map__29866 == null))))?(((((map__29866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29866):map__29866);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29866__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29866__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29866__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29871){
var map__29872 = p__29871;
var map__29872__$1 = (((((!((map__29872 == null))))?(((((map__29872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29872):map__29872);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29872__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__29874){
var map__29875 = p__29874;
var map__29875__$1 = (((((!((map__29875 == null))))?(((((map__29875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29875):map__29875);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__29885 = cljs.core.seq(files_to_require);
var chunk__29886 = null;
var count__29887 = (0);
var i__29888 = (0);
while(true){
if((i__29888 < count__29887)){
var src = chunk__29886.cljs$core$IIndexed$_nth$arity$2(null,i__29888);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29986 = seq__29885;
var G__29987 = chunk__29886;
var G__29988 = count__29887;
var G__29989 = (i__29888 + (1));
seq__29885 = G__29986;
chunk__29886 = G__29987;
count__29887 = G__29988;
i__29888 = G__29989;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29885);
if(temp__5735__auto__){
var seq__29885__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29885__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29885__$1);
var G__29990 = cljs.core.chunk_rest(seq__29885__$1);
var G__29991 = c__4556__auto__;
var G__29992 = cljs.core.count(c__4556__auto__);
var G__29993 = (0);
seq__29885 = G__29990;
chunk__29886 = G__29991;
count__29887 = G__29992;
i__29888 = G__29993;
continue;
} else {
var src = cljs.core.first(seq__29885__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29994 = cljs.core.next(seq__29885__$1);
var G__29995 = null;
var G__29996 = (0);
var G__29997 = (0);
seq__29885 = G__29994;
chunk__29886 = G__29995;
count__29887 = G__29996;
i__29888 = G__29997;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__29894,msg){
var map__29895 = p__29894;
var map__29895__$1 = (((((!((map__29895 == null))))?(((((map__29895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29895):map__29895);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29895__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__29901){
var map__29903 = p__29901;
var map__29903__$1 = (((((!((map__29903 == null))))?(((((map__29903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29903):map__29903);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29903__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29903__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__29908,done,error){
var map__29909 = p__29908;
var map__29909__$1 = (((((!((map__29909 == null))))?(((((map__29909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29909):map__29909);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29909__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__29912_30000 = cljs.core.seq(repl_sources);
var chunk__29914_30001 = null;
var count__29915_30002 = (0);
var i__29916_30003 = (0);
while(true){
if((i__29916_30003 < count__29915_30002)){
var map__29924_30004 = chunk__29914_30001.cljs$core$IIndexed$_nth$arity$2(null,i__29916_30003);
var map__29924_30005__$1 = (((((!((map__29924_30004 == null))))?(((((map__29924_30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29924_30004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29924_30004):map__29924_30004);
var src_30006 = map__29924_30005__$1;
var output_name_30007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29924_30005__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30007)))){
shadow.cljs.devtools.client.node.closure_import(output_name_30007);


var G__30009 = seq__29912_30000;
var G__30010 = chunk__29914_30001;
var G__30011 = count__29915_30002;
var G__30012 = (i__29916_30003 + (1));
seq__29912_30000 = G__30009;
chunk__29914_30001 = G__30010;
count__29915_30002 = G__30011;
i__29916_30003 = G__30012;
continue;
} else {
var G__30013 = seq__29912_30000;
var G__30014 = chunk__29914_30001;
var G__30015 = count__29915_30002;
var G__30016 = (i__29916_30003 + (1));
seq__29912_30000 = G__30013;
chunk__29914_30001 = G__30014;
count__29915_30002 = G__30015;
i__29916_30003 = G__30016;
continue;
}
} else {
var temp__5735__auto___30017 = cljs.core.seq(seq__29912_30000);
if(temp__5735__auto___30017){
var seq__29912_30018__$1 = temp__5735__auto___30017;
if(cljs.core.chunked_seq_QMARK_(seq__29912_30018__$1)){
var c__4556__auto___30019 = cljs.core.chunk_first(seq__29912_30018__$1);
var G__30020 = cljs.core.chunk_rest(seq__29912_30018__$1);
var G__30021 = c__4556__auto___30019;
var G__30022 = cljs.core.count(c__4556__auto___30019);
var G__30023 = (0);
seq__29912_30000 = G__30020;
chunk__29914_30001 = G__30021;
count__29915_30002 = G__30022;
i__29916_30003 = G__30023;
continue;
} else {
var map__29927_30024 = cljs.core.first(seq__29912_30018__$1);
var map__29927_30025__$1 = (((((!((map__29927_30024 == null))))?(((((map__29927_30024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29927_30024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29927_30024):map__29927_30024);
var src_30026 = map__29927_30025__$1;
var output_name_30027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29927_30025__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30027)))){
shadow.cljs.devtools.client.node.closure_import(output_name_30027);


var G__30028 = cljs.core.next(seq__29912_30018__$1);
var G__30029 = null;
var G__30030 = (0);
var G__30031 = (0);
seq__29912_30000 = G__30028;
chunk__29914_30001 = G__30029;
count__29915_30002 = G__30030;
i__29916_30003 = G__30031;
continue;
} else {
var G__30032 = cljs.core.next(seq__29912_30018__$1);
var G__30033 = null;
var G__30034 = (0);
var G__30035 = (0);
seq__29912_30000 = G__30032;
chunk__29914_30001 = G__30033;
count__29915_30002 = G__30034;
i__29916_30003 = G__30035;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e29911){var e = e29911;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__29930,done,error){
var map__29931 = p__29930;
var map__29931__$1 = (((((!((map__29931 == null))))?(((((map__29931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29931):map__29931);
var msg = map__29931__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29931__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29931__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__29937_30036 = cljs.core.seq(sources);
var chunk__29938_30037 = null;
var count__29939_30038 = (0);
var i__29940_30039 = (0);
while(true){
if((i__29940_30039 < count__29939_30038)){
var map__29946_30042 = chunk__29938_30037.cljs$core$IIndexed$_nth$arity$2(null,i__29940_30039);
var map__29946_30043__$1 = (((((!((map__29946_30042 == null))))?(((((map__29946_30042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29946_30042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29946_30042):map__29946_30042);
var src_30044 = map__29946_30043__$1;
var provides_30045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29946_30043__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_30046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29946_30043__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30046)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_30045);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_30046);
} else {
}


var G__30047 = seq__29937_30036;
var G__30048 = chunk__29938_30037;
var G__30049 = count__29939_30038;
var G__30050 = (i__29940_30039 + (1));
seq__29937_30036 = G__30047;
chunk__29938_30037 = G__30048;
count__29939_30038 = G__30049;
i__29940_30039 = G__30050;
continue;
} else {
var temp__5735__auto___30052 = cljs.core.seq(seq__29937_30036);
if(temp__5735__auto___30052){
var seq__29937_30053__$1 = temp__5735__auto___30052;
if(cljs.core.chunked_seq_QMARK_(seq__29937_30053__$1)){
var c__4556__auto___30054 = cljs.core.chunk_first(seq__29937_30053__$1);
var G__30055 = cljs.core.chunk_rest(seq__29937_30053__$1);
var G__30056 = c__4556__auto___30054;
var G__30057 = cljs.core.count(c__4556__auto___30054);
var G__30058 = (0);
seq__29937_30036 = G__30055;
chunk__29938_30037 = G__30056;
count__29939_30038 = G__30057;
i__29940_30039 = G__30058;
continue;
} else {
var map__29951_30059 = cljs.core.first(seq__29937_30053__$1);
var map__29951_30060__$1 = (((((!((map__29951_30059 == null))))?(((((map__29951_30059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29951_30059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29951_30059):map__29951_30059);
var src_30061 = map__29951_30060__$1;
var provides_30062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29951_30060__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_30063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29951_30060__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30063)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_30062);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_30063);
} else {
}


var G__30065 = cljs.core.next(seq__29937_30053__$1);
var G__30066 = null;
var G__30067 = (0);
var G__30068 = (0);
seq__29937_30036 = G__30065;
chunk__29938_30037 = G__30066;
count__29939_30038 = G__30067;
i__29940_30039 = G__30068;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e29935){var e = e29935;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__29953){
var map__29954 = p__29953;
var map__29954__$1 = (((((!((map__29954 == null))))?(((((map__29954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29954):map__29954);
var env = map__29954__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29954__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__29968){
var map__29969 = p__29968;
var map__29969__$1 = (((((!((map__29969 == null))))?(((((map__29969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29969):map__29969);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29969__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29969__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__29971){
var map__29972 = p__29971;
var map__29972__$1 = (((((!((map__29972 == null))))?(((((map__29972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29972):map__29972);
var svc = map__29972__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29972__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
