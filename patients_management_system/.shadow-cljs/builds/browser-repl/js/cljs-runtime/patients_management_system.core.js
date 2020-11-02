goog.provide('patients_management_system.core');
patients_management_system.core.handler = (function patients_management_system$core$handler(response){
return console.log(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(response));
});
patients_management_system.core.error_handler = (function patients_management_system$core$error_handler(p__28367){
var map__28368 = p__28367;
var map__28368__$1 = (((((!((map__28368 == null))))?(((((map__28368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28368):map__28368);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28368__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28368__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
patients_management_system.core.get_patients = (function patients_management_system$core$get_patients(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3001/patients",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),patients_management_system.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),patients_management_system.core.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});
patients_management_system.core.get_patient = (function patients_management_system$core$get_patient(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3001/patients/:id",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),patients_management_system.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),patients_management_system.core.error_handler], null)], 0));
});
patients_management_system.core.add_patient_BANG_ = (function patients_management_system$core$add_patient_BANG_(){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3001/patients",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),patients_management_system.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),patients_management_system.core.error_handler], null)], 0));
});
patients_management_system.core.update_patient_BANG_ = (function patients_management_system$core$update_patient_BANG_(patient_id){
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(["http://localhost:3001/patients/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),patients_management_system.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),patients_management_system.core.error_handler], null)], 0));
});
patients_management_system.core.remove_patient_BANG_ = (function patients_management_system$core$remove_patient_BANG_(patient_id){
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(["http://localhost:3001/patients/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),patients_management_system.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),patients_management_system.core.error_handler], null)], 0));
});
patients_management_system.core.patients = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
patients_management_system.core.formInput = (function patients_management_system$core$formInput(input_type,atomValue,placeholder,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-group-text","input.input-group-text",-1714133343),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),input_type,new cljs.core.Keyword(null,"value","value",305978217),atomValue,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.reset_BANG_(value,event.target.value);
})], null)], null)], null);
});
patients_management_system.core.patient_form = (function patients_management_system$core$patient_form(){
var fullName = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var gender = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var birthDate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var address = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var policyNumber = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.card-title","h4.card-title",-1410483383),"New patient's data"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (event){
event.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(patients_management_system.core.patients,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fullName","fullName",-202600044),cljs.core.deref(fullName),new cljs.core.Keyword(null,"gender","gender",-733930727),cljs.core.deref(gender),new cljs.core.Keyword(null,"birthDate","birthDate",-495062262),cljs.core.deref(birthDate),new cljs.core.Keyword(null,"address","address",559499426),cljs.core.deref(address),new cljs.core.Keyword(null,"policyNumber","policyNumber",-2065270941),cljs.core.deref(policyNumber),new cljs.core.Keyword(null,"verified","verified",1807036606),true], null));

cljs.core.reset_BANG_(fullName,"");

return cljs.core.reset_BANG_(address,"");
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.formInput,"text",cljs.core.deref(fullName),"Full name",fullName], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.formInput,"text",cljs.core.deref(gender),"Select gender",gender], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.formInput,"date",cljs.core.deref(birthDate),"Birth date",birthDate], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.formInput,"text",cljs.core.deref(address),"Address",address], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.formInput,"number",cljs.core.deref(policyNumber),"Enter incurance policy number",policyNumber], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Add new patient"], null)], null)], null)], null);
});
});
patients_management_system.core.header = (function patients_management_system$core$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to Tiny Cliniq!"], null)], null)], null)], null);
});
patients_management_system.core.patient_data = (function patients_management_system$core$patient_data(patient){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item.list-group-item-action","li.list-group-item.list-group-item-action",1813688725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(new cljs.core.Keyword(null,"verified","verified",1807036606).cljs$core$IFn$_invoke$arity$1(patient))?"green":"red")], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.Keyword(null,"fullName","fullName",-202600044).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.Keyword(null,"birthDate","birthDate",-495062262).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.Keyword(null,"policyNumber","policyNumber",-2065270941).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.dropdown","div.col.dropdown",640813014),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dropdownMenuButton.btn.btn-light.btn-sm.dropdown-toggle","button#dropdownMenuButton.btn.btn-light.btn-sm.dropdown-toggle",-477953646),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"true",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),"...",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-menu","div.dropdown-menu",-1884774306),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-item","span.dropdown-item",352679660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (patient__$1){
return patients_management_system.core.remove_patient_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient__$1));
})], null),"Remove patient"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-item","span.dropdown-item",352679660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (patient__$1){
return patients_management_system.core.update_patient_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient__$1));
})], null),"Edit patient"], null)], null)], null)], null)], null)], null);
});
patients_management_system.core.content = (function patients_management_system$core$content(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.container-fluid","div.row.container-fluid",1897500862),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12.col-md-7","div.col-sm-12.col-md-7",-544143165),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"List of patients"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function patients_management_system$core$content_$_iter__28393(s__28394){
return (new cljs.core.LazySeq(null,(function (){
var s__28394__$1 = s__28394;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28394__$1);
if(temp__5735__auto__){
var s__28394__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28394__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28394__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28399 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28398 = (0);
while(true){
if((i__28398 < size__4528__auto__)){
var patient = cljs.core._nth(c__4527__auto__,i__28398);
cljs.core.chunk_append(b__28399,patients_management_system.core.patient_data(patient));

var G__28404 = (i__28398 + (1));
i__28398 = G__28404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28399),patients_management_system$core$content_$_iter__28393(cljs.core.chunk_rest(s__28394__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28399),null);
}
} else {
var patient = cljs.core.first(s__28394__$2);
return cljs.core.cons(patients_management_system.core.patient_data(patient),patients_management_system$core$content_$_iter__28393(cljs.core.rest(s__28394__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(patients_management_system.core.patients));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12.col-md-4","div.col-sm-12.col-md-4",-3924278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Add a new patient's info below:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.patient_form], null)], null)], null);
});
patients_management_system.core.footer = (function patients_management_system$core$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),"(c) All right reserved | Tiny Cliniq, 2020"], null)], null)], null)], null);
});
patients_management_system.core.home_page = (function patients_management_system$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.content], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.footer], null)], null);
});
patients_management_system.core.mount_root = (function patients_management_system$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients_management_system.core.home_page], null),document.getElementById("app"));
});
patients_management_system.core.init_BANG_ = (function patients_management_system$core$init_BANG_(){
patients_management_system.core.get_patients();

return patients_management_system.core.mount_root();
});
goog.exportSymbol('patients_management_system.core.init_BANG_', patients_management_system.core.init_BANG_);

//# sourceMappingURL=patients_management_system.core.js.map
