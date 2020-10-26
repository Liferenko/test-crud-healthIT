goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33256 = arguments.length;
switch (G__33256) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33259 = (function (f,blockable,meta33260){
this.f = f;
this.blockable = blockable;
this.meta33260 = meta33260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33261,meta33260__$1){
var self__ = this;
var _33261__$1 = this;
return (new cljs.core.async.t_cljs$core$async33259(self__.f,self__.blockable,meta33260__$1));
}));

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33261){
var self__ = this;
var _33261__$1 = this;
return self__.meta33260;
}));

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33260","meta33260",1606032625,null)], null);
}));

(cljs.core.async.t_cljs$core$async33259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33259");

(cljs.core.async.t_cljs$core$async33259.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33259.
 */
cljs.core.async.__GT_t_cljs$core$async33259 = (function cljs$core$async$__GT_t_cljs$core$async33259(f__$1,blockable__$1,meta33260){
return (new cljs.core.async.t_cljs$core$async33259(f__$1,blockable__$1,meta33260));
});

}

return (new cljs.core.async.t_cljs$core$async33259(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33290 = arguments.length;
switch (G__33290) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33321 = arguments.length;
switch (G__33321) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33323 = arguments.length;
switch (G__33323) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35373 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35373) : fn1.call(null,val_35373));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35373) : fn1.call(null,val_35373));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33330 = arguments.length;
switch (G__33330) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___35377 = n;
var x_35378 = (0);
while(true){
if((x_35378 < n__4613__auto___35377)){
(a[x_35378] = x_35378);

var G__35379 = (x_35378 + (1));
x_35378 = G__35379;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33342 = (function (flag,meta33343){
this.flag = flag;
this.meta33343 = meta33343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33344,meta33343__$1){
var self__ = this;
var _33344__$1 = this;
return (new cljs.core.async.t_cljs$core$async33342(self__.flag,meta33343__$1));
}));

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33344){
var self__ = this;
var _33344__$1 = this;
return self__.meta33343;
}));

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33343","meta33343",263228819,null)], null);
}));

(cljs.core.async.t_cljs$core$async33342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33342");

(cljs.core.async.t_cljs$core$async33342.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33342.
 */
cljs.core.async.__GT_t_cljs$core$async33342 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33342(flag__$1,meta33343){
return (new cljs.core.async.t_cljs$core$async33342(flag__$1,meta33343));
});

}

return (new cljs.core.async.t_cljs$core$async33342(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33352 = (function (flag,cb,meta33353){
this.flag = flag;
this.cb = cb;
this.meta33353 = meta33353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33354,meta33353__$1){
var self__ = this;
var _33354__$1 = this;
return (new cljs.core.async.t_cljs$core$async33352(self__.flag,self__.cb,meta33353__$1));
}));

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33354){
var self__ = this;
var _33354__$1 = this;
return self__.meta33353;
}));

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33353","meta33353",-241501213,null)], null);
}));

(cljs.core.async.t_cljs$core$async33352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33352");

(cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33352.
 */
cljs.core.async.__GT_t_cljs$core$async33352 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33352(flag__$1,cb__$1,meta33353){
return (new cljs.core.async.t_cljs$core$async33352(flag__$1,cb__$1,meta33353));
});

}

return (new cljs.core.async.t_cljs$core$async33352(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33356_SHARP_){
var G__33367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33356_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33367) : fret.call(null,G__33367));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33357_SHARP_){
var G__33368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33357_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33368) : fret.call(null,G__33368));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35392 = (i + (1));
i = G__35392;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35395 = arguments.length;
var i__4737__auto___35396 = (0);
while(true){
if((i__4737__auto___35396 < len__4736__auto___35395)){
args__4742__auto__.push((arguments[i__4737__auto___35396]));

var G__35397 = (i__4737__auto___35396 + (1));
i__4737__auto___35396 = G__35397;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33380){
var map__33381 = p__33380;
var map__33381__$1 = (((((!((map__33381 == null))))?(((((map__33381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33381):map__33381);
var opts = map__33381__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33375){
var G__33376 = cljs.core.first(seq33375);
var seq33375__$1 = cljs.core.next(seq33375);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33376,seq33375__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33386 = arguments.length;
switch (G__33386) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33136__auto___35407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_33415){
var state_val_33416 = (state_33415[(1)]);
if((state_val_33416 === (7))){
var inst_33411 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33418_35408 = state_33415__$1;
(statearr_33418_35408[(2)] = inst_33411);

(statearr_33418_35408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (1))){
var state_33415__$1 = state_33415;
var statearr_33419_35409 = state_33415__$1;
(statearr_33419_35409[(2)] = null);

(statearr_33419_35409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (4))){
var inst_33394 = (state_33415[(7)]);
var inst_33394__$1 = (state_33415[(2)]);
var inst_33395 = (inst_33394__$1 == null);
var state_33415__$1 = (function (){var statearr_33420 = state_33415;
(statearr_33420[(7)] = inst_33394__$1);

return statearr_33420;
})();
if(cljs.core.truth_(inst_33395)){
var statearr_33421_35410 = state_33415__$1;
(statearr_33421_35410[(1)] = (5));

} else {
var statearr_33422_35411 = state_33415__$1;
(statearr_33422_35411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (13))){
var state_33415__$1 = state_33415;
var statearr_33423_35412 = state_33415__$1;
(statearr_33423_35412[(2)] = null);

(statearr_33423_35412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (6))){
var inst_33394 = (state_33415[(7)]);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33415__$1,(11),to,inst_33394);
} else {
if((state_val_33416 === (3))){
var inst_33413 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33415__$1,inst_33413);
} else {
if((state_val_33416 === (12))){
var state_33415__$1 = state_33415;
var statearr_33424_35413 = state_33415__$1;
(statearr_33424_35413[(2)] = null);

(statearr_33424_35413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (2))){
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33415__$1,(4),from);
} else {
if((state_val_33416 === (11))){
var inst_33404 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
if(cljs.core.truth_(inst_33404)){
var statearr_33425_35414 = state_33415__$1;
(statearr_33425_35414[(1)] = (12));

} else {
var statearr_33426_35415 = state_33415__$1;
(statearr_33426_35415[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (9))){
var state_33415__$1 = state_33415;
var statearr_33427_35416 = state_33415__$1;
(statearr_33427_35416[(2)] = null);

(statearr_33427_35416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (5))){
var state_33415__$1 = state_33415;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33428_35417 = state_33415__$1;
(statearr_33428_35417[(1)] = (8));

} else {
var statearr_33429_35418 = state_33415__$1;
(statearr_33429_35418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (14))){
var inst_33409 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33430_35419 = state_33415__$1;
(statearr_33430_35419[(2)] = inst_33409);

(statearr_33430_35419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (10))){
var inst_33401 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33431_35420 = state_33415__$1;
(statearr_33431_35420[(2)] = inst_33401);

(statearr_33431_35420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (8))){
var inst_33398 = cljs.core.async.close_BANG_(to);
var state_33415__$1 = state_33415;
var statearr_33432_35421 = state_33415__$1;
(statearr_33432_35421[(2)] = inst_33398);

(statearr_33432_35421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_33438 = [null,null,null,null,null,null,null,null];
(statearr_33438[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_33438[(1)] = (1));

return statearr_33438;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_33415){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33415);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33455){var ex__32953__auto__ = e33455;
var statearr_33456_35427 = state_33415;
(statearr_33456_35427[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33415[(4)]))){
var statearr_33457_35429 = state_33415;
(statearr_33457_35429[(1)] = cljs.core.first((state_33415[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35431 = state_33415;
state_33415 = G__35431;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_33415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_33415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_33462 = f__33137__auto__();
(statearr_33462[(6)] = c__33136__auto___35407);

return statearr_33462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33484){
var vec__33485 = p__33484;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33485,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33485,(1),null);
var job = vec__33485;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33136__auto___35435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_33493){
var state_val_33494 = (state_33493[(1)]);
if((state_val_33494 === (1))){
var state_33493__$1 = state_33493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33493__$1,(2),res,v);
} else {
if((state_val_33494 === (2))){
var inst_33490 = (state_33493[(2)]);
var inst_33491 = cljs.core.async.close_BANG_(res);
var state_33493__$1 = (function (){var statearr_33495 = state_33493;
(statearr_33495[(7)] = inst_33490);

return statearr_33495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33493__$1,inst_33491);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0 = (function (){
var statearr_33496 = [null,null,null,null,null,null,null,null];
(statearr_33496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__);

(statearr_33496[(1)] = (1));

return statearr_33496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1 = (function (state_33493){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33493);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33497){var ex__32953__auto__ = e33497;
var statearr_33499_35440 = state_33493;
(statearr_33499_35440[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33493[(4)]))){
var statearr_33500_35441 = state_33493;
(statearr_33500_35441[(1)] = cljs.core.first((state_33493[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35446 = state_33493;
state_33493 = G__35446;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = function(state_33493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1.call(this,state_33493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_33501 = f__33137__auto__();
(statearr_33501[(6)] = c__33136__auto___35435);

return statearr_33501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33502){
var vec__33503 = p__33502;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503,(1),null);
var job = vec__33503;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___35448 = n;
var __35449 = (0);
while(true){
if((__35449 < n__4613__auto___35448)){
var G__33506_35450 = type;
var G__33506_35451__$1 = (((G__33506_35450 instanceof cljs.core.Keyword))?G__33506_35450.fqn:null);
switch (G__33506_35451__$1) {
case "compute":
var c__33136__auto___35453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35449,c__33136__auto___35453,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async){
return (function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = ((function (__35449,c__33136__auto___35453,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async){
return (function (state_33519){
var state_val_33520 = (state_33519[(1)]);
if((state_val_33520 === (1))){
var state_33519__$1 = state_33519;
var statearr_33521_35456 = state_33519__$1;
(statearr_33521_35456[(2)] = null);

(statearr_33521_35456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33520 === (2))){
var state_33519__$1 = state_33519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33519__$1,(4),jobs);
} else {
if((state_val_33520 === (3))){
var inst_33517 = (state_33519[(2)]);
var state_33519__$1 = state_33519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33519__$1,inst_33517);
} else {
if((state_val_33520 === (4))){
var inst_33509 = (state_33519[(2)]);
var inst_33510 = process(inst_33509);
var state_33519__$1 = state_33519;
if(cljs.core.truth_(inst_33510)){
var statearr_33522_35457 = state_33519__$1;
(statearr_33522_35457[(1)] = (5));

} else {
var statearr_33523_35458 = state_33519__$1;
(statearr_33523_35458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33520 === (5))){
var state_33519__$1 = state_33519;
var statearr_33524_35460 = state_33519__$1;
(statearr_33524_35460[(2)] = null);

(statearr_33524_35460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33520 === (6))){
var state_33519__$1 = state_33519;
var statearr_33525_35461 = state_33519__$1;
(statearr_33525_35461[(2)] = null);

(statearr_33525_35461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33520 === (7))){
var inst_33515 = (state_33519[(2)]);
var state_33519__$1 = state_33519;
var statearr_33526_35462 = state_33519__$1;
(statearr_33526_35462[(2)] = inst_33515);

(statearr_33526_35462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35449,c__33136__auto___35453,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async))
;
return ((function (__35449,switch__32949__auto__,c__33136__auto___35453,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0 = (function (){
var statearr_33527 = [null,null,null,null,null,null,null];
(statearr_33527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__);

(statearr_33527[(1)] = (1));

return statearr_33527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1 = (function (state_33519){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33519);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33528){var ex__32953__auto__ = e33528;
var statearr_33529_35464 = state_33519;
(statearr_33529_35464[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33519[(4)]))){
var statearr_33530_35466 = state_33519;
(statearr_33530_35466[(1)] = cljs.core.first((state_33519[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35467 = state_33519;
state_33519 = G__35467;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = function(state_33519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1.call(this,state_33519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__;
})()
;})(__35449,switch__32949__auto__,c__33136__auto___35453,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async))
})();
var state__33138__auto__ = (function (){var statearr_33531 = f__33137__auto__();
(statearr_33531[(6)] = c__33136__auto___35453);

return statearr_33531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
});})(__35449,c__33136__auto___35453,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async))
);


break;
case "async":
var c__33136__auto___35468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35449,c__33136__auto___35468,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async){
return (function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = ((function (__35449,c__33136__auto___35468,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async){
return (function (state_33544){
var state_val_33545 = (state_33544[(1)]);
if((state_val_33545 === (1))){
var state_33544__$1 = state_33544;
var statearr_33546_35469 = state_33544__$1;
(statearr_33546_35469[(2)] = null);

(statearr_33546_35469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (2))){
var state_33544__$1 = state_33544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33544__$1,(4),jobs);
} else {
if((state_val_33545 === (3))){
var inst_33542 = (state_33544[(2)]);
var state_33544__$1 = state_33544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33544__$1,inst_33542);
} else {
if((state_val_33545 === (4))){
var inst_33534 = (state_33544[(2)]);
var inst_33535 = async(inst_33534);
var state_33544__$1 = state_33544;
if(cljs.core.truth_(inst_33535)){
var statearr_33547_35470 = state_33544__$1;
(statearr_33547_35470[(1)] = (5));

} else {
var statearr_33548_35471 = state_33544__$1;
(statearr_33548_35471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (5))){
var state_33544__$1 = state_33544;
var statearr_33549_35472 = state_33544__$1;
(statearr_33549_35472[(2)] = null);

(statearr_33549_35472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (6))){
var state_33544__$1 = state_33544;
var statearr_33550_35473 = state_33544__$1;
(statearr_33550_35473[(2)] = null);

(statearr_33550_35473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (7))){
var inst_33540 = (state_33544[(2)]);
var state_33544__$1 = state_33544;
var statearr_33551_35475 = state_33544__$1;
(statearr_33551_35475[(2)] = inst_33540);

(statearr_33551_35475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35449,c__33136__auto___35468,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async))
;
return ((function (__35449,switch__32949__auto__,c__33136__auto___35468,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0 = (function (){
var statearr_33552 = [null,null,null,null,null,null,null];
(statearr_33552[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__);

(statearr_33552[(1)] = (1));

return statearr_33552;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1 = (function (state_33544){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33544);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33553){var ex__32953__auto__ = e33553;
var statearr_33554_35477 = state_33544;
(statearr_33554_35477[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33544[(4)]))){
var statearr_33555_35478 = state_33544;
(statearr_33555_35478[(1)] = cljs.core.first((state_33544[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35479 = state_33544;
state_33544 = G__35479;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = function(state_33544){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1.call(this,state_33544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__;
})()
;})(__35449,switch__32949__auto__,c__33136__auto___35468,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async))
})();
var state__33138__auto__ = (function (){var statearr_33556 = f__33137__auto__();
(statearr_33556[(6)] = c__33136__auto___35468);

return statearr_33556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
});})(__35449,c__33136__auto___35468,G__33506_35450,G__33506_35451__$1,n__4613__auto___35448,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33506_35451__$1)].join('')));

}

var G__35480 = (__35449 + (1));
__35449 = G__35480;
continue;
} else {
}
break;
}

var c__33136__auto___35481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_33578){
var state_val_33579 = (state_33578[(1)]);
if((state_val_33579 === (7))){
var inst_33574 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33580_35482 = state_33578__$1;
(statearr_33580_35482[(2)] = inst_33574);

(statearr_33580_35482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (1))){
var state_33578__$1 = state_33578;
var statearr_33581_35483 = state_33578__$1;
(statearr_33581_35483[(2)] = null);

(statearr_33581_35483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (4))){
var inst_33559 = (state_33578[(7)]);
var inst_33559__$1 = (state_33578[(2)]);
var inst_33560 = (inst_33559__$1 == null);
var state_33578__$1 = (function (){var statearr_33582 = state_33578;
(statearr_33582[(7)] = inst_33559__$1);

return statearr_33582;
})();
if(cljs.core.truth_(inst_33560)){
var statearr_33583_35484 = state_33578__$1;
(statearr_33583_35484[(1)] = (5));

} else {
var statearr_33584_35485 = state_33578__$1;
(statearr_33584_35485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (6))){
var inst_33564 = (state_33578[(8)]);
var inst_33559 = (state_33578[(7)]);
var inst_33564__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33566 = [inst_33559,inst_33564__$1];
var inst_33567 = (new cljs.core.PersistentVector(null,2,(5),inst_33565,inst_33566,null));
var state_33578__$1 = (function (){var statearr_33585 = state_33578;
(statearr_33585[(8)] = inst_33564__$1);

return statearr_33585;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33578__$1,(8),jobs,inst_33567);
} else {
if((state_val_33579 === (3))){
var inst_33576 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33578__$1,inst_33576);
} else {
if((state_val_33579 === (2))){
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33578__$1,(4),from);
} else {
if((state_val_33579 === (9))){
var inst_33571 = (state_33578[(2)]);
var state_33578__$1 = (function (){var statearr_33586 = state_33578;
(statearr_33586[(9)] = inst_33571);

return statearr_33586;
})();
var statearr_33587_35487 = state_33578__$1;
(statearr_33587_35487[(2)] = null);

(statearr_33587_35487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (5))){
var inst_33562 = cljs.core.async.close_BANG_(jobs);
var state_33578__$1 = state_33578;
var statearr_33588_35488 = state_33578__$1;
(statearr_33588_35488[(2)] = inst_33562);

(statearr_33588_35488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (8))){
var inst_33564 = (state_33578[(8)]);
var inst_33569 = (state_33578[(2)]);
var state_33578__$1 = (function (){var statearr_33589 = state_33578;
(statearr_33589[(10)] = inst_33569);

return statearr_33589;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33578__$1,(9),results,inst_33564);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0 = (function (){
var statearr_33590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__);

(statearr_33590[(1)] = (1));

return statearr_33590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1 = (function (state_33578){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33578);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33591){var ex__32953__auto__ = e33591;
var statearr_33592_35493 = state_33578;
(statearr_33592_35493[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33578[(4)]))){
var statearr_33593_35494 = state_33578;
(statearr_33593_35494[(1)] = cljs.core.first((state_33578[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35495 = state_33578;
state_33578 = G__35495;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = function(state_33578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1.call(this,state_33578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_33594 = f__33137__auto__();
(statearr_33594[(6)] = c__33136__auto___35481);

return statearr_33594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


var c__33136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_33632){
var state_val_33633 = (state_33632[(1)]);
if((state_val_33633 === (7))){
var inst_33628 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33634_35496 = state_33632__$1;
(statearr_33634_35496[(2)] = inst_33628);

(statearr_33634_35496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (20))){
var state_33632__$1 = state_33632;
var statearr_33635_35497 = state_33632__$1;
(statearr_33635_35497[(2)] = null);

(statearr_33635_35497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (1))){
var state_33632__$1 = state_33632;
var statearr_33636_35498 = state_33632__$1;
(statearr_33636_35498[(2)] = null);

(statearr_33636_35498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (4))){
var inst_33597 = (state_33632[(7)]);
var inst_33597__$1 = (state_33632[(2)]);
var inst_33598 = (inst_33597__$1 == null);
var state_33632__$1 = (function (){var statearr_33637 = state_33632;
(statearr_33637[(7)] = inst_33597__$1);

return statearr_33637;
})();
if(cljs.core.truth_(inst_33598)){
var statearr_33638_35499 = state_33632__$1;
(statearr_33638_35499[(1)] = (5));

} else {
var statearr_33639_35500 = state_33632__$1;
(statearr_33639_35500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (15))){
var inst_33610 = (state_33632[(8)]);
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33632__$1,(18),to,inst_33610);
} else {
if((state_val_33633 === (21))){
var inst_33623 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33640_35501 = state_33632__$1;
(statearr_33640_35501[(2)] = inst_33623);

(statearr_33640_35501[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (13))){
var inst_33625 = (state_33632[(2)]);
var state_33632__$1 = (function (){var statearr_33641 = state_33632;
(statearr_33641[(9)] = inst_33625);

return statearr_33641;
})();
var statearr_33642_35502 = state_33632__$1;
(statearr_33642_35502[(2)] = null);

(statearr_33642_35502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (6))){
var inst_33597 = (state_33632[(7)]);
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33632__$1,(11),inst_33597);
} else {
if((state_val_33633 === (17))){
var inst_33618 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
if(cljs.core.truth_(inst_33618)){
var statearr_33643_35504 = state_33632__$1;
(statearr_33643_35504[(1)] = (19));

} else {
var statearr_33644_35505 = state_33632__$1;
(statearr_33644_35505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (3))){
var inst_33630 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33632__$1,inst_33630);
} else {
if((state_val_33633 === (12))){
var inst_33607 = (state_33632[(10)]);
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33632__$1,(14),inst_33607);
} else {
if((state_val_33633 === (2))){
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33632__$1,(4),results);
} else {
if((state_val_33633 === (19))){
var state_33632__$1 = state_33632;
var statearr_33645_35507 = state_33632__$1;
(statearr_33645_35507[(2)] = null);

(statearr_33645_35507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (11))){
var inst_33607 = (state_33632[(2)]);
var state_33632__$1 = (function (){var statearr_33650 = state_33632;
(statearr_33650[(10)] = inst_33607);

return statearr_33650;
})();
var statearr_33651_35508 = state_33632__$1;
(statearr_33651_35508[(2)] = null);

(statearr_33651_35508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (9))){
var state_33632__$1 = state_33632;
var statearr_33652_35510 = state_33632__$1;
(statearr_33652_35510[(2)] = null);

(statearr_33652_35510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (5))){
var state_33632__$1 = state_33632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33653_35513 = state_33632__$1;
(statearr_33653_35513[(1)] = (8));

} else {
var statearr_33654_35514 = state_33632__$1;
(statearr_33654_35514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (14))){
var inst_33610 = (state_33632[(8)]);
var inst_33610__$1 = (state_33632[(2)]);
var inst_33611 = (inst_33610__$1 == null);
var inst_33612 = cljs.core.not(inst_33611);
var state_33632__$1 = (function (){var statearr_33655 = state_33632;
(statearr_33655[(8)] = inst_33610__$1);

return statearr_33655;
})();
if(inst_33612){
var statearr_33656_35515 = state_33632__$1;
(statearr_33656_35515[(1)] = (15));

} else {
var statearr_33657_35516 = state_33632__$1;
(statearr_33657_35516[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (16))){
var state_33632__$1 = state_33632;
var statearr_33658_35517 = state_33632__$1;
(statearr_33658_35517[(2)] = false);

(statearr_33658_35517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (10))){
var inst_33604 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33659_35522 = state_33632__$1;
(statearr_33659_35522[(2)] = inst_33604);

(statearr_33659_35522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (18))){
var inst_33615 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33660_35526 = state_33632__$1;
(statearr_33660_35526[(2)] = inst_33615);

(statearr_33660_35526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (8))){
var inst_33601 = cljs.core.async.close_BANG_(to);
var state_33632__$1 = state_33632;
var statearr_33661_35528 = state_33632__$1;
(statearr_33661_35528[(2)] = inst_33601);

(statearr_33661_35528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0 = (function (){
var statearr_33662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__);

(statearr_33662[(1)] = (1));

return statearr_33662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1 = (function (state_33632){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33632);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33663){var ex__32953__auto__ = e33663;
var statearr_33664_35534 = state_33632;
(statearr_33664_35534[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33632[(4)]))){
var statearr_33665_35538 = state_33632;
(statearr_33665_35538[(1)] = cljs.core.first((state_33632[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35539 = state_33632;
state_33632 = G__35539;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__ = function(state_33632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1.call(this,state_33632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_33666 = f__33137__auto__();
(statearr_33666[(6)] = c__33136__auto__);

return statearr_33666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));

return c__33136__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33668 = arguments.length;
switch (G__33668) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33670 = arguments.length;
switch (G__33670) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33674 = arguments.length;
switch (G__33674) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33136__auto___35560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_33700){
var state_val_33701 = (state_33700[(1)]);
if((state_val_33701 === (7))){
var inst_33696 = (state_33700[(2)]);
var state_33700__$1 = state_33700;
var statearr_33702_35564 = state_33700__$1;
(statearr_33702_35564[(2)] = inst_33696);

(statearr_33702_35564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (1))){
var state_33700__$1 = state_33700;
var statearr_33703_35565 = state_33700__$1;
(statearr_33703_35565[(2)] = null);

(statearr_33703_35565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (4))){
var inst_33677 = (state_33700[(7)]);
var inst_33677__$1 = (state_33700[(2)]);
var inst_33678 = (inst_33677__$1 == null);
var state_33700__$1 = (function (){var statearr_33704 = state_33700;
(statearr_33704[(7)] = inst_33677__$1);

return statearr_33704;
})();
if(cljs.core.truth_(inst_33678)){
var statearr_33705_35569 = state_33700__$1;
(statearr_33705_35569[(1)] = (5));

} else {
var statearr_33706_35570 = state_33700__$1;
(statearr_33706_35570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (13))){
var state_33700__$1 = state_33700;
var statearr_33707_35572 = state_33700__$1;
(statearr_33707_35572[(2)] = null);

(statearr_33707_35572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (6))){
var inst_33677 = (state_33700[(7)]);
var inst_33683 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33677) : p.call(null,inst_33677));
var state_33700__$1 = state_33700;
if(cljs.core.truth_(inst_33683)){
var statearr_33708_35574 = state_33700__$1;
(statearr_33708_35574[(1)] = (9));

} else {
var statearr_33709_35575 = state_33700__$1;
(statearr_33709_35575[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (3))){
var inst_33698 = (state_33700[(2)]);
var state_33700__$1 = state_33700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33700__$1,inst_33698);
} else {
if((state_val_33701 === (12))){
var state_33700__$1 = state_33700;
var statearr_33710_35577 = state_33700__$1;
(statearr_33710_35577[(2)] = null);

(statearr_33710_35577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (2))){
var state_33700__$1 = state_33700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33700__$1,(4),ch);
} else {
if((state_val_33701 === (11))){
var inst_33677 = (state_33700[(7)]);
var inst_33687 = (state_33700[(2)]);
var state_33700__$1 = state_33700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33700__$1,(8),inst_33687,inst_33677);
} else {
if((state_val_33701 === (9))){
var state_33700__$1 = state_33700;
var statearr_33711_35578 = state_33700__$1;
(statearr_33711_35578[(2)] = tc);

(statearr_33711_35578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (5))){
var inst_33680 = cljs.core.async.close_BANG_(tc);
var inst_33681 = cljs.core.async.close_BANG_(fc);
var state_33700__$1 = (function (){var statearr_33712 = state_33700;
(statearr_33712[(8)] = inst_33680);

return statearr_33712;
})();
var statearr_33713_35579 = state_33700__$1;
(statearr_33713_35579[(2)] = inst_33681);

(statearr_33713_35579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (14))){
var inst_33694 = (state_33700[(2)]);
var state_33700__$1 = state_33700;
var statearr_33714_35580 = state_33700__$1;
(statearr_33714_35580[(2)] = inst_33694);

(statearr_33714_35580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (10))){
var state_33700__$1 = state_33700;
var statearr_33715_35581 = state_33700__$1;
(statearr_33715_35581[(2)] = fc);

(statearr_33715_35581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33701 === (8))){
var inst_33689 = (state_33700[(2)]);
var state_33700__$1 = state_33700;
if(cljs.core.truth_(inst_33689)){
var statearr_33716_35582 = state_33700__$1;
(statearr_33716_35582[(1)] = (12));

} else {
var statearr_33717_35583 = state_33700__$1;
(statearr_33717_35583[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_33718 = [null,null,null,null,null,null,null,null,null];
(statearr_33718[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_33718[(1)] = (1));

return statearr_33718;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_33700){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33700);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33719){var ex__32953__auto__ = e33719;
var statearr_33720_35587 = state_33700;
(statearr_33720_35587[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33700[(4)]))){
var statearr_33721_35589 = state_33700;
(statearr_33721_35589[(1)] = cljs.core.first((state_33700[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35590 = state_33700;
state_33700 = G__35590;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_33700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_33700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_33724 = f__33137__auto__();
(statearr_33724[(6)] = c__33136__auto___35560);

return statearr_33724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_33748){
var state_val_33749 = (state_33748[(1)]);
if((state_val_33749 === (7))){
var inst_33744 = (state_33748[(2)]);
var state_33748__$1 = state_33748;
var statearr_33750_35591 = state_33748__$1;
(statearr_33750_35591[(2)] = inst_33744);

(statearr_33750_35591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (1))){
var inst_33727 = init;
var inst_33728 = inst_33727;
var state_33748__$1 = (function (){var statearr_33751 = state_33748;
(statearr_33751[(7)] = inst_33728);

return statearr_33751;
})();
var statearr_33752_35593 = state_33748__$1;
(statearr_33752_35593[(2)] = null);

(statearr_33752_35593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (4))){
var inst_33731 = (state_33748[(8)]);
var inst_33731__$1 = (state_33748[(2)]);
var inst_33732 = (inst_33731__$1 == null);
var state_33748__$1 = (function (){var statearr_33753 = state_33748;
(statearr_33753[(8)] = inst_33731__$1);

return statearr_33753;
})();
if(cljs.core.truth_(inst_33732)){
var statearr_33754_35594 = state_33748__$1;
(statearr_33754_35594[(1)] = (5));

} else {
var statearr_33755_35595 = state_33748__$1;
(statearr_33755_35595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (6))){
var inst_33731 = (state_33748[(8)]);
var inst_33728 = (state_33748[(7)]);
var inst_33735 = (state_33748[(9)]);
var inst_33735__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33728,inst_33731) : f.call(null,inst_33728,inst_33731));
var inst_33736 = cljs.core.reduced_QMARK_(inst_33735__$1);
var state_33748__$1 = (function (){var statearr_33756 = state_33748;
(statearr_33756[(9)] = inst_33735__$1);

return statearr_33756;
})();
if(inst_33736){
var statearr_33757_35604 = state_33748__$1;
(statearr_33757_35604[(1)] = (8));

} else {
var statearr_33758_35605 = state_33748__$1;
(statearr_33758_35605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (3))){
var inst_33746 = (state_33748[(2)]);
var state_33748__$1 = state_33748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33748__$1,inst_33746);
} else {
if((state_val_33749 === (2))){
var state_33748__$1 = state_33748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33748__$1,(4),ch);
} else {
if((state_val_33749 === (9))){
var inst_33735 = (state_33748[(9)]);
var inst_33728 = inst_33735;
var state_33748__$1 = (function (){var statearr_33759 = state_33748;
(statearr_33759[(7)] = inst_33728);

return statearr_33759;
})();
var statearr_33760_35611 = state_33748__$1;
(statearr_33760_35611[(2)] = null);

(statearr_33760_35611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (5))){
var inst_33728 = (state_33748[(7)]);
var state_33748__$1 = state_33748;
var statearr_33761_35613 = state_33748__$1;
(statearr_33761_35613[(2)] = inst_33728);

(statearr_33761_35613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (10))){
var inst_33742 = (state_33748[(2)]);
var state_33748__$1 = state_33748;
var statearr_33762_35614 = state_33748__$1;
(statearr_33762_35614[(2)] = inst_33742);

(statearr_33762_35614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (8))){
var inst_33735 = (state_33748[(9)]);
var inst_33738 = cljs.core.deref(inst_33735);
var state_33748__$1 = state_33748;
var statearr_33763_35619 = state_33748__$1;
(statearr_33763_35619[(2)] = inst_33738);

(statearr_33763_35619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32950__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32950__auto____0 = (function (){
var statearr_33764 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33764[(0)] = cljs$core$async$reduce_$_state_machine__32950__auto__);

(statearr_33764[(1)] = (1));

return statearr_33764;
});
var cljs$core$async$reduce_$_state_machine__32950__auto____1 = (function (state_33748){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33748);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33765){var ex__32953__auto__ = e33765;
var statearr_33766_35622 = state_33748;
(statearr_33766_35622[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33748[(4)]))){
var statearr_33771_35623 = state_33748;
(statearr_33771_35623[(1)] = cljs.core.first((state_33748[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35624 = state_33748;
state_33748 = G__35624;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32950__auto__ = function(state_33748){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32950__auto____1.call(this,state_33748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32950__auto____0;
cljs$core$async$reduce_$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32950__auto____1;
return cljs$core$async$reduce_$_state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_33772 = f__33137__auto__();
(statearr_33772[(6)] = c__33136__auto__);

return statearr_33772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));

return c__33136__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_33778){
var state_val_33779 = (state_33778[(1)]);
if((state_val_33779 === (1))){
var inst_33773 = cljs.core.async.reduce(f__$1,init,ch);
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33778__$1,(2),inst_33773);
} else {
if((state_val_33779 === (2))){
var inst_33775 = (state_33778[(2)]);
var inst_33776 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33775) : f__$1.call(null,inst_33775));
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33778__$1,inst_33776);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32950__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32950__auto____0 = (function (){
var statearr_33780 = [null,null,null,null,null,null,null];
(statearr_33780[(0)] = cljs$core$async$transduce_$_state_machine__32950__auto__);

(statearr_33780[(1)] = (1));

return statearr_33780;
});
var cljs$core$async$transduce_$_state_machine__32950__auto____1 = (function (state_33778){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33778);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33781){var ex__32953__auto__ = e33781;
var statearr_33782_35632 = state_33778;
(statearr_33782_35632[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33778[(4)]))){
var statearr_33783_35633 = state_33778;
(statearr_33783_35633[(1)] = cljs.core.first((state_33778[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35638 = state_33778;
state_33778 = G__35638;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32950__auto__ = function(state_33778){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32950__auto____1.call(this,state_33778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32950__auto____0;
cljs$core$async$transduce_$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32950__auto____1;
return cljs$core$async$transduce_$_state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_33784 = f__33137__auto__();
(statearr_33784[(6)] = c__33136__auto__);

return statearr_33784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));

return c__33136__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33790 = arguments.length;
switch (G__33790) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_33815){
var state_val_33816 = (state_33815[(1)]);
if((state_val_33816 === (7))){
var inst_33797 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33817_35655 = state_33815__$1;
(statearr_33817_35655[(2)] = inst_33797);

(statearr_33817_35655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (1))){
var inst_33791 = cljs.core.seq(coll);
var inst_33792 = inst_33791;
var state_33815__$1 = (function (){var statearr_33818 = state_33815;
(statearr_33818[(7)] = inst_33792);

return statearr_33818;
})();
var statearr_33819_35663 = state_33815__$1;
(statearr_33819_35663[(2)] = null);

(statearr_33819_35663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (4))){
var inst_33792 = (state_33815[(7)]);
var inst_33795 = cljs.core.first(inst_33792);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33815__$1,(7),ch,inst_33795);
} else {
if((state_val_33816 === (13))){
var inst_33809 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33820_35664 = state_33815__$1;
(statearr_33820_35664[(2)] = inst_33809);

(statearr_33820_35664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (6))){
var inst_33800 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
if(cljs.core.truth_(inst_33800)){
var statearr_33821_35665 = state_33815__$1;
(statearr_33821_35665[(1)] = (8));

} else {
var statearr_33822_35667 = state_33815__$1;
(statearr_33822_35667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (3))){
var inst_33813 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33815__$1,inst_33813);
} else {
if((state_val_33816 === (12))){
var state_33815__$1 = state_33815;
var statearr_33823_35670 = state_33815__$1;
(statearr_33823_35670[(2)] = null);

(statearr_33823_35670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (2))){
var inst_33792 = (state_33815[(7)]);
var state_33815__$1 = state_33815;
if(cljs.core.truth_(inst_33792)){
var statearr_33824_35671 = state_33815__$1;
(statearr_33824_35671[(1)] = (4));

} else {
var statearr_33825_35672 = state_33815__$1;
(statearr_33825_35672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (11))){
var inst_33806 = cljs.core.async.close_BANG_(ch);
var state_33815__$1 = state_33815;
var statearr_33826_35673 = state_33815__$1;
(statearr_33826_35673[(2)] = inst_33806);

(statearr_33826_35673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (9))){
var state_33815__$1 = state_33815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33827_35674 = state_33815__$1;
(statearr_33827_35674[(1)] = (11));

} else {
var statearr_33828_35675 = state_33815__$1;
(statearr_33828_35675[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (5))){
var inst_33792 = (state_33815[(7)]);
var state_33815__$1 = state_33815;
var statearr_33829_35676 = state_33815__$1;
(statearr_33829_35676[(2)] = inst_33792);

(statearr_33829_35676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (10))){
var inst_33811 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33830_35681 = state_33815__$1;
(statearr_33830_35681[(2)] = inst_33811);

(statearr_33830_35681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (8))){
var inst_33792 = (state_33815[(7)]);
var inst_33802 = cljs.core.next(inst_33792);
var inst_33792__$1 = inst_33802;
var state_33815__$1 = (function (){var statearr_33831 = state_33815;
(statearr_33831[(7)] = inst_33792__$1);

return statearr_33831;
})();
var statearr_33832_35683 = state_33815__$1;
(statearr_33832_35683[(2)] = null);

(statearr_33832_35683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_33833 = [null,null,null,null,null,null,null,null];
(statearr_33833[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_33833[(1)] = (1));

return statearr_33833;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_33815){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_33815);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e33834){var ex__32953__auto__ = e33834;
var statearr_33835_35684 = state_33815;
(statearr_33835_35684[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_33815[(4)]))){
var statearr_33836_35685 = state_33815;
(statearr_33836_35685[(1)] = cljs.core.first((state_33815[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35687 = state_33815;
state_33815 = G__35687;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_33815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_33815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_33837 = f__33137__auto__();
(statearr_33837[(6)] = c__33136__auto__);

return statearr_33837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));

return c__33136__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33841 = arguments.length;
switch (G__33841) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35697 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35697(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35699 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35699(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35707 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35707(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35712 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35712(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33865 = (function (ch,cs,meta33866){
this.ch = ch;
this.cs = cs;
this.meta33866 = meta33866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33867,meta33866__$1){
var self__ = this;
var _33867__$1 = this;
return (new cljs.core.async.t_cljs$core$async33865(self__.ch,self__.cs,meta33866__$1));
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33867){
var self__ = this;
var _33867__$1 = this;
return self__.meta33866;
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33865.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33866","meta33866",126319855,null)], null);
}));

(cljs.core.async.t_cljs$core$async33865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33865");

(cljs.core.async.t_cljs$core$async33865.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33865.
 */
cljs.core.async.__GT_t_cljs$core$async33865 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33865(ch__$1,cs__$1,meta33866){
return (new cljs.core.async.t_cljs$core$async33865(ch__$1,cs__$1,meta33866));
});

}

return (new cljs.core.async.t_cljs$core$async33865(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33136__auto___35719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_34000){
var state_val_34001 = (state_34000[(1)]);
if((state_val_34001 === (7))){
var inst_33996 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34002_35720 = state_34000__$1;
(statearr_34002_35720[(2)] = inst_33996);

(statearr_34002_35720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (20))){
var inst_33901 = (state_34000[(7)]);
var inst_33913 = cljs.core.first(inst_33901);
var inst_33914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33913,(0),null);
var inst_33915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33913,(1),null);
var state_34000__$1 = (function (){var statearr_34003 = state_34000;
(statearr_34003[(8)] = inst_33914);

return statearr_34003;
})();
if(cljs.core.truth_(inst_33915)){
var statearr_34004_35721 = state_34000__$1;
(statearr_34004_35721[(1)] = (22));

} else {
var statearr_34005_35722 = state_34000__$1;
(statearr_34005_35722[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (27))){
var inst_33950 = (state_34000[(9)]);
var inst_33943 = (state_34000[(10)]);
var inst_33945 = (state_34000[(11)]);
var inst_33870 = (state_34000[(12)]);
var inst_33950__$1 = cljs.core._nth(inst_33943,inst_33945);
var inst_33951 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33950__$1,inst_33870,done);
var state_34000__$1 = (function (){var statearr_34006 = state_34000;
(statearr_34006[(9)] = inst_33950__$1);

return statearr_34006;
})();
if(cljs.core.truth_(inst_33951)){
var statearr_34007_35725 = state_34000__$1;
(statearr_34007_35725[(1)] = (30));

} else {
var statearr_34008_35727 = state_34000__$1;
(statearr_34008_35727[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (1))){
var state_34000__$1 = state_34000;
var statearr_34009_35728 = state_34000__$1;
(statearr_34009_35728[(2)] = null);

(statearr_34009_35728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (24))){
var inst_33901 = (state_34000[(7)]);
var inst_33920 = (state_34000[(2)]);
var inst_33921 = cljs.core.next(inst_33901);
var inst_33879 = inst_33921;
var inst_33880 = null;
var inst_33881 = (0);
var inst_33882 = (0);
var state_34000__$1 = (function (){var statearr_34011 = state_34000;
(statearr_34011[(13)] = inst_33881);

(statearr_34011[(14)] = inst_33920);

(statearr_34011[(15)] = inst_33882);

(statearr_34011[(16)] = inst_33880);

(statearr_34011[(17)] = inst_33879);

return statearr_34011;
})();
var statearr_34012_35731 = state_34000__$1;
(statearr_34012_35731[(2)] = null);

(statearr_34012_35731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (39))){
var state_34000__$1 = state_34000;
var statearr_34016_35732 = state_34000__$1;
(statearr_34016_35732[(2)] = null);

(statearr_34016_35732[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (4))){
var inst_33870 = (state_34000[(12)]);
var inst_33870__$1 = (state_34000[(2)]);
var inst_33871 = (inst_33870__$1 == null);
var state_34000__$1 = (function (){var statearr_34017 = state_34000;
(statearr_34017[(12)] = inst_33870__$1);

return statearr_34017;
})();
if(cljs.core.truth_(inst_33871)){
var statearr_34018_35733 = state_34000__$1;
(statearr_34018_35733[(1)] = (5));

} else {
var statearr_34019_35734 = state_34000__$1;
(statearr_34019_35734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (15))){
var inst_33881 = (state_34000[(13)]);
var inst_33882 = (state_34000[(15)]);
var inst_33880 = (state_34000[(16)]);
var inst_33879 = (state_34000[(17)]);
var inst_33897 = (state_34000[(2)]);
var inst_33898 = (inst_33882 + (1));
var tmp34013 = inst_33881;
var tmp34014 = inst_33880;
var tmp34015 = inst_33879;
var inst_33879__$1 = tmp34015;
var inst_33880__$1 = tmp34014;
var inst_33881__$1 = tmp34013;
var inst_33882__$1 = inst_33898;
var state_34000__$1 = (function (){var statearr_34020 = state_34000;
(statearr_34020[(13)] = inst_33881__$1);

(statearr_34020[(15)] = inst_33882__$1);

(statearr_34020[(16)] = inst_33880__$1);

(statearr_34020[(18)] = inst_33897);

(statearr_34020[(17)] = inst_33879__$1);

return statearr_34020;
})();
var statearr_34021_35735 = state_34000__$1;
(statearr_34021_35735[(2)] = null);

(statearr_34021_35735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (21))){
var inst_33924 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34025_35736 = state_34000__$1;
(statearr_34025_35736[(2)] = inst_33924);

(statearr_34025_35736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (31))){
var inst_33950 = (state_34000[(9)]);
var inst_33954 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33950);
var state_34000__$1 = state_34000;
var statearr_34026_35738 = state_34000__$1;
(statearr_34026_35738[(2)] = inst_33954);

(statearr_34026_35738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (32))){
var inst_33942 = (state_34000[(19)]);
var inst_33944 = (state_34000[(20)]);
var inst_33943 = (state_34000[(10)]);
var inst_33945 = (state_34000[(11)]);
var inst_33956 = (state_34000[(2)]);
var inst_33957 = (inst_33945 + (1));
var tmp34022 = inst_33942;
var tmp34023 = inst_33944;
var tmp34024 = inst_33943;
var inst_33942__$1 = tmp34022;
var inst_33943__$1 = tmp34024;
var inst_33944__$1 = tmp34023;
var inst_33945__$1 = inst_33957;
var state_34000__$1 = (function (){var statearr_34027 = state_34000;
(statearr_34027[(21)] = inst_33956);

(statearr_34027[(19)] = inst_33942__$1);

(statearr_34027[(20)] = inst_33944__$1);

(statearr_34027[(10)] = inst_33943__$1);

(statearr_34027[(11)] = inst_33945__$1);

return statearr_34027;
})();
var statearr_34028_35745 = state_34000__$1;
(statearr_34028_35745[(2)] = null);

(statearr_34028_35745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (40))){
var inst_33969 = (state_34000[(22)]);
var inst_33973 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33969);
var state_34000__$1 = state_34000;
var statearr_34029_35747 = state_34000__$1;
(statearr_34029_35747[(2)] = inst_33973);

(statearr_34029_35747[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (33))){
var inst_33960 = (state_34000[(23)]);
var inst_33962 = cljs.core.chunked_seq_QMARK_(inst_33960);
var state_34000__$1 = state_34000;
if(inst_33962){
var statearr_34035_35748 = state_34000__$1;
(statearr_34035_35748[(1)] = (36));

} else {
var statearr_34037_35749 = state_34000__$1;
(statearr_34037_35749[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (13))){
var inst_33891 = (state_34000[(24)]);
var inst_33894 = cljs.core.async.close_BANG_(inst_33891);
var state_34000__$1 = state_34000;
var statearr_34045_35750 = state_34000__$1;
(statearr_34045_35750[(2)] = inst_33894);

(statearr_34045_35750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (22))){
var inst_33914 = (state_34000[(8)]);
var inst_33917 = cljs.core.async.close_BANG_(inst_33914);
var state_34000__$1 = state_34000;
var statearr_34056_35751 = state_34000__$1;
(statearr_34056_35751[(2)] = inst_33917);

(statearr_34056_35751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (36))){
var inst_33960 = (state_34000[(23)]);
var inst_33964 = cljs.core.chunk_first(inst_33960);
var inst_33965 = cljs.core.chunk_rest(inst_33960);
var inst_33966 = cljs.core.count(inst_33964);
var inst_33942 = inst_33965;
var inst_33943 = inst_33964;
var inst_33944 = inst_33966;
var inst_33945 = (0);
var state_34000__$1 = (function (){var statearr_34057 = state_34000;
(statearr_34057[(19)] = inst_33942);

(statearr_34057[(20)] = inst_33944);

(statearr_34057[(10)] = inst_33943);

(statearr_34057[(11)] = inst_33945);

return statearr_34057;
})();
var statearr_34058_35756 = state_34000__$1;
(statearr_34058_35756[(2)] = null);

(statearr_34058_35756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (41))){
var inst_33960 = (state_34000[(23)]);
var inst_33975 = (state_34000[(2)]);
var inst_33976 = cljs.core.next(inst_33960);
var inst_33942 = inst_33976;
var inst_33943 = null;
var inst_33944 = (0);
var inst_33945 = (0);
var state_34000__$1 = (function (){var statearr_34059 = state_34000;
(statearr_34059[(25)] = inst_33975);

(statearr_34059[(19)] = inst_33942);

(statearr_34059[(20)] = inst_33944);

(statearr_34059[(10)] = inst_33943);

(statearr_34059[(11)] = inst_33945);

return statearr_34059;
})();
var statearr_34060_35758 = state_34000__$1;
(statearr_34060_35758[(2)] = null);

(statearr_34060_35758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (43))){
var state_34000__$1 = state_34000;
var statearr_34061_35759 = state_34000__$1;
(statearr_34061_35759[(2)] = null);

(statearr_34061_35759[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (29))){
var inst_33984 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34062_35760 = state_34000__$1;
(statearr_34062_35760[(2)] = inst_33984);

(statearr_34062_35760[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (44))){
var inst_33993 = (state_34000[(2)]);
var state_34000__$1 = (function (){var statearr_34064 = state_34000;
(statearr_34064[(26)] = inst_33993);

return statearr_34064;
})();
var statearr_34065_35762 = state_34000__$1;
(statearr_34065_35762[(2)] = null);

(statearr_34065_35762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (6))){
var inst_33934 = (state_34000[(27)]);
var inst_33933 = cljs.core.deref(cs);
var inst_33934__$1 = cljs.core.keys(inst_33933);
var inst_33935 = cljs.core.count(inst_33934__$1);
var inst_33936 = cljs.core.reset_BANG_(dctr,inst_33935);
var inst_33941 = cljs.core.seq(inst_33934__$1);
var inst_33942 = inst_33941;
var inst_33943 = null;
var inst_33944 = (0);
var inst_33945 = (0);
var state_34000__$1 = (function (){var statearr_34066 = state_34000;
(statearr_34066[(19)] = inst_33942);

(statearr_34066[(20)] = inst_33944);

(statearr_34066[(27)] = inst_33934__$1);

(statearr_34066[(10)] = inst_33943);

(statearr_34066[(28)] = inst_33936);

(statearr_34066[(11)] = inst_33945);

return statearr_34066;
})();
var statearr_34067_35764 = state_34000__$1;
(statearr_34067_35764[(2)] = null);

(statearr_34067_35764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (28))){
var inst_33960 = (state_34000[(23)]);
var inst_33942 = (state_34000[(19)]);
var inst_33960__$1 = cljs.core.seq(inst_33942);
var state_34000__$1 = (function (){var statearr_34070 = state_34000;
(statearr_34070[(23)] = inst_33960__$1);

return statearr_34070;
})();
if(inst_33960__$1){
var statearr_34071_35766 = state_34000__$1;
(statearr_34071_35766[(1)] = (33));

} else {
var statearr_34072_35767 = state_34000__$1;
(statearr_34072_35767[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (25))){
var inst_33944 = (state_34000[(20)]);
var inst_33945 = (state_34000[(11)]);
var inst_33947 = (inst_33945 < inst_33944);
var inst_33948 = inst_33947;
var state_34000__$1 = state_34000;
if(cljs.core.truth_(inst_33948)){
var statearr_34073_35768 = state_34000__$1;
(statearr_34073_35768[(1)] = (27));

} else {
var statearr_34074_35770 = state_34000__$1;
(statearr_34074_35770[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (34))){
var state_34000__$1 = state_34000;
var statearr_34075_35773 = state_34000__$1;
(statearr_34075_35773[(2)] = null);

(statearr_34075_35773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (17))){
var state_34000__$1 = state_34000;
var statearr_34076_35774 = state_34000__$1;
(statearr_34076_35774[(2)] = null);

(statearr_34076_35774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (3))){
var inst_33998 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34000__$1,inst_33998);
} else {
if((state_val_34001 === (12))){
var inst_33929 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34077_35777 = state_34000__$1;
(statearr_34077_35777[(2)] = inst_33929);

(statearr_34077_35777[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (2))){
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34000__$1,(4),ch);
} else {
if((state_val_34001 === (23))){
var state_34000__$1 = state_34000;
var statearr_34078_35780 = state_34000__$1;
(statearr_34078_35780[(2)] = null);

(statearr_34078_35780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (35))){
var inst_33982 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34083_35781 = state_34000__$1;
(statearr_34083_35781[(2)] = inst_33982);

(statearr_34083_35781[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (19))){
var inst_33901 = (state_34000[(7)]);
var inst_33905 = cljs.core.chunk_first(inst_33901);
var inst_33906 = cljs.core.chunk_rest(inst_33901);
var inst_33907 = cljs.core.count(inst_33905);
var inst_33879 = inst_33906;
var inst_33880 = inst_33905;
var inst_33881 = inst_33907;
var inst_33882 = (0);
var state_34000__$1 = (function (){var statearr_34092 = state_34000;
(statearr_34092[(13)] = inst_33881);

(statearr_34092[(15)] = inst_33882);

(statearr_34092[(16)] = inst_33880);

(statearr_34092[(17)] = inst_33879);

return statearr_34092;
})();
var statearr_34098_35784 = state_34000__$1;
(statearr_34098_35784[(2)] = null);

(statearr_34098_35784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (11))){
var inst_33901 = (state_34000[(7)]);
var inst_33879 = (state_34000[(17)]);
var inst_33901__$1 = cljs.core.seq(inst_33879);
var state_34000__$1 = (function (){var statearr_34103 = state_34000;
(statearr_34103[(7)] = inst_33901__$1);

return statearr_34103;
})();
if(inst_33901__$1){
var statearr_34104_35785 = state_34000__$1;
(statearr_34104_35785[(1)] = (16));

} else {
var statearr_34105_35786 = state_34000__$1;
(statearr_34105_35786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (9))){
var inst_33931 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34106_35788 = state_34000__$1;
(statearr_34106_35788[(2)] = inst_33931);

(statearr_34106_35788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (5))){
var inst_33877 = cljs.core.deref(cs);
var inst_33878 = cljs.core.seq(inst_33877);
var inst_33879 = inst_33878;
var inst_33880 = null;
var inst_33881 = (0);
var inst_33882 = (0);
var state_34000__$1 = (function (){var statearr_34107 = state_34000;
(statearr_34107[(13)] = inst_33881);

(statearr_34107[(15)] = inst_33882);

(statearr_34107[(16)] = inst_33880);

(statearr_34107[(17)] = inst_33879);

return statearr_34107;
})();
var statearr_34108_35789 = state_34000__$1;
(statearr_34108_35789[(2)] = null);

(statearr_34108_35789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (14))){
var state_34000__$1 = state_34000;
var statearr_34114_35790 = state_34000__$1;
(statearr_34114_35790[(2)] = null);

(statearr_34114_35790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (45))){
var inst_33990 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34121_35791 = state_34000__$1;
(statearr_34121_35791[(2)] = inst_33990);

(statearr_34121_35791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (26))){
var inst_33934 = (state_34000[(27)]);
var inst_33986 = (state_34000[(2)]);
var inst_33987 = cljs.core.seq(inst_33934);
var state_34000__$1 = (function (){var statearr_34132 = state_34000;
(statearr_34132[(29)] = inst_33986);

return statearr_34132;
})();
if(inst_33987){
var statearr_34133_35792 = state_34000__$1;
(statearr_34133_35792[(1)] = (42));

} else {
var statearr_34134_35793 = state_34000__$1;
(statearr_34134_35793[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (16))){
var inst_33901 = (state_34000[(7)]);
var inst_33903 = cljs.core.chunked_seq_QMARK_(inst_33901);
var state_34000__$1 = state_34000;
if(inst_33903){
var statearr_34135_35795 = state_34000__$1;
(statearr_34135_35795[(1)] = (19));

} else {
var statearr_34136_35797 = state_34000__$1;
(statearr_34136_35797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (38))){
var inst_33979 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34141_35799 = state_34000__$1;
(statearr_34141_35799[(2)] = inst_33979);

(statearr_34141_35799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (30))){
var state_34000__$1 = state_34000;
var statearr_34148_35800 = state_34000__$1;
(statearr_34148_35800[(2)] = null);

(statearr_34148_35800[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (10))){
var inst_33882 = (state_34000[(15)]);
var inst_33880 = (state_34000[(16)]);
var inst_33890 = cljs.core._nth(inst_33880,inst_33882);
var inst_33891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33890,(0),null);
var inst_33892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33890,(1),null);
var state_34000__$1 = (function (){var statearr_34160 = state_34000;
(statearr_34160[(24)] = inst_33891);

return statearr_34160;
})();
if(cljs.core.truth_(inst_33892)){
var statearr_34161_35805 = state_34000__$1;
(statearr_34161_35805[(1)] = (13));

} else {
var statearr_34162_35806 = state_34000__$1;
(statearr_34162_35806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (18))){
var inst_33927 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34163_35807 = state_34000__$1;
(statearr_34163_35807[(2)] = inst_33927);

(statearr_34163_35807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (42))){
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34000__$1,(45),dchan);
} else {
if((state_val_34001 === (37))){
var inst_33960 = (state_34000[(23)]);
var inst_33969 = (state_34000[(22)]);
var inst_33870 = (state_34000[(12)]);
var inst_33969__$1 = cljs.core.first(inst_33960);
var inst_33970 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33969__$1,inst_33870,done);
var state_34000__$1 = (function (){var statearr_34164 = state_34000;
(statearr_34164[(22)] = inst_33969__$1);

return statearr_34164;
})();
if(cljs.core.truth_(inst_33970)){
var statearr_34165_35813 = state_34000__$1;
(statearr_34165_35813[(1)] = (39));

} else {
var statearr_34166_35815 = state_34000__$1;
(statearr_34166_35815[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (8))){
var inst_33881 = (state_34000[(13)]);
var inst_33882 = (state_34000[(15)]);
var inst_33884 = (inst_33882 < inst_33881);
var inst_33885 = inst_33884;
var state_34000__$1 = state_34000;
if(cljs.core.truth_(inst_33885)){
var statearr_34167_35817 = state_34000__$1;
(statearr_34167_35817[(1)] = (10));

} else {
var statearr_34168_35818 = state_34000__$1;
(statearr_34168_35818[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32950__auto__ = null;
var cljs$core$async$mult_$_state_machine__32950__auto____0 = (function (){
var statearr_34169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34169[(0)] = cljs$core$async$mult_$_state_machine__32950__auto__);

(statearr_34169[(1)] = (1));

return statearr_34169;
});
var cljs$core$async$mult_$_state_machine__32950__auto____1 = (function (state_34000){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_34000);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e34171){var ex__32953__auto__ = e34171;
var statearr_34172_35819 = state_34000;
(statearr_34172_35819[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_34000[(4)]))){
var statearr_34173_35820 = state_34000;
(statearr_34173_35820[(1)] = cljs.core.first((state_34000[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35821 = state_34000;
state_34000 = G__35821;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32950__auto__ = function(state_34000){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32950__auto____1.call(this,state_34000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32950__auto____0;
cljs$core$async$mult_$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32950__auto____1;
return cljs$core$async$mult_$_state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_34174 = f__33137__auto__();
(statearr_34174[(6)] = c__33136__auto___35719);

return statearr_34174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34176 = arguments.length;
switch (G__34176) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35834 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35834(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35844 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35844(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35851 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35851(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35859 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35859(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35863 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35863(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35865 = arguments.length;
var i__4737__auto___35867 = (0);
while(true){
if((i__4737__auto___35867 < len__4736__auto___35865)){
args__4742__auto__.push((arguments[i__4737__auto___35867]));

var G__35868 = (i__4737__auto___35867 + (1));
i__4737__auto___35867 = G__35868;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34194){
var map__34195 = p__34194;
var map__34195__$1 = (((((!((map__34195 == null))))?(((((map__34195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34195):map__34195);
var opts = map__34195__$1;
var statearr_34197_35869 = state;
(statearr_34197_35869[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34198_35870 = state;
(statearr_34198_35870[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34199_35871 = state;
(statearr_34199_35871[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34190){
var G__34191 = cljs.core.first(seq34190);
var seq34190__$1 = cljs.core.next(seq34190);
var G__34192 = cljs.core.first(seq34190__$1);
var seq34190__$2 = cljs.core.next(seq34190__$1);
var G__34193 = cljs.core.first(seq34190__$2);
var seq34190__$3 = cljs.core.next(seq34190__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34191,G__34192,G__34193,seq34190__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34200 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34201){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34201 = meta34201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34202,meta34201__$1){
var self__ = this;
var _34202__$1 = this;
return (new cljs.core.async.t_cljs$core$async34200(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34201__$1));
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34202){
var self__ = this;
var _34202__$1 = this;
return self__.meta34201;
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34201","meta34201",-985685800,null)], null);
}));

(cljs.core.async.t_cljs$core$async34200.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34200");

(cljs.core.async.t_cljs$core$async34200.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34200");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34200.
 */
cljs.core.async.__GT_t_cljs$core$async34200 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34200(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34201){
return (new cljs.core.async.t_cljs$core$async34200(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34201));
});

}

return (new cljs.core.async.t_cljs$core$async34200(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33136__auto___35884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_34304){
var state_val_34305 = (state_34304[(1)]);
if((state_val_34305 === (7))){
var inst_34219 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34306_35888 = state_34304__$1;
(statearr_34306_35888[(2)] = inst_34219);

(statearr_34306_35888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (20))){
var inst_34231 = (state_34304[(7)]);
var state_34304__$1 = state_34304;
var statearr_34307_35890 = state_34304__$1;
(statearr_34307_35890[(2)] = inst_34231);

(statearr_34307_35890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (27))){
var state_34304__$1 = state_34304;
var statearr_34308_35891 = state_34304__$1;
(statearr_34308_35891[(2)] = null);

(statearr_34308_35891[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (1))){
var inst_34206 = (state_34304[(8)]);
var inst_34206__$1 = calc_state();
var inst_34208 = (inst_34206__$1 == null);
var inst_34209 = cljs.core.not(inst_34208);
var state_34304__$1 = (function (){var statearr_34309 = state_34304;
(statearr_34309[(8)] = inst_34206__$1);

return statearr_34309;
})();
if(inst_34209){
var statearr_34310_35892 = state_34304__$1;
(statearr_34310_35892[(1)] = (2));

} else {
var statearr_34311_35893 = state_34304__$1;
(statearr_34311_35893[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (24))){
var inst_34264 = (state_34304[(9)]);
var inst_34278 = (state_34304[(10)]);
var inst_34255 = (state_34304[(11)]);
var inst_34278__$1 = (inst_34255.cljs$core$IFn$_invoke$arity$1 ? inst_34255.cljs$core$IFn$_invoke$arity$1(inst_34264) : inst_34255.call(null,inst_34264));
var state_34304__$1 = (function (){var statearr_34312 = state_34304;
(statearr_34312[(10)] = inst_34278__$1);

return statearr_34312;
})();
if(cljs.core.truth_(inst_34278__$1)){
var statearr_34313_35895 = state_34304__$1;
(statearr_34313_35895[(1)] = (29));

} else {
var statearr_34314_35896 = state_34304__$1;
(statearr_34314_35896[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (4))){
var inst_34222 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34222)){
var statearr_34315_35897 = state_34304__$1;
(statearr_34315_35897[(1)] = (8));

} else {
var statearr_34316_35898 = state_34304__$1;
(statearr_34316_35898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (15))){
var inst_34249 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34249)){
var statearr_34317_35900 = state_34304__$1;
(statearr_34317_35900[(1)] = (19));

} else {
var statearr_34318_35901 = state_34304__$1;
(statearr_34318_35901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (21))){
var inst_34254 = (state_34304[(12)]);
var inst_34254__$1 = (state_34304[(2)]);
var inst_34255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34254__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34254__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34254__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34304__$1 = (function (){var statearr_34319 = state_34304;
(statearr_34319[(12)] = inst_34254__$1);

(statearr_34319[(13)] = inst_34256);

(statearr_34319[(11)] = inst_34255);

return statearr_34319;
})();
return cljs.core.async.ioc_alts_BANG_(state_34304__$1,(22),inst_34257);
} else {
if((state_val_34305 === (31))){
var inst_34286 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34286)){
var statearr_34320_35906 = state_34304__$1;
(statearr_34320_35906[(1)] = (32));

} else {
var statearr_34321_35907 = state_34304__$1;
(statearr_34321_35907[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (32))){
var inst_34263 = (state_34304[(14)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34304__$1,(35),out,inst_34263);
} else {
if((state_val_34305 === (33))){
var inst_34254 = (state_34304[(12)]);
var inst_34231 = inst_34254;
var state_34304__$1 = (function (){var statearr_34322 = state_34304;
(statearr_34322[(7)] = inst_34231);

return statearr_34322;
})();
var statearr_34323_35908 = state_34304__$1;
(statearr_34323_35908[(2)] = null);

(statearr_34323_35908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (13))){
var inst_34231 = (state_34304[(7)]);
var inst_34238 = inst_34231.cljs$lang$protocol_mask$partition0$;
var inst_34239 = (inst_34238 & (64));
var inst_34240 = inst_34231.cljs$core$ISeq$;
var inst_34241 = (cljs.core.PROTOCOL_SENTINEL === inst_34240);
var inst_34242 = ((inst_34239) || (inst_34241));
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34242)){
var statearr_34324_35909 = state_34304__$1;
(statearr_34324_35909[(1)] = (16));

} else {
var statearr_34325_35910 = state_34304__$1;
(statearr_34325_35910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (22))){
var inst_34264 = (state_34304[(9)]);
var inst_34263 = (state_34304[(14)]);
var inst_34262 = (state_34304[(2)]);
var inst_34263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34262,(0),null);
var inst_34264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34262,(1),null);
var inst_34265 = (inst_34263__$1 == null);
var inst_34266 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34264__$1,change);
var inst_34267 = ((inst_34265) || (inst_34266));
var state_34304__$1 = (function (){var statearr_34326 = state_34304;
(statearr_34326[(9)] = inst_34264__$1);

(statearr_34326[(14)] = inst_34263__$1);

return statearr_34326;
})();
if(cljs.core.truth_(inst_34267)){
var statearr_34327_35914 = state_34304__$1;
(statearr_34327_35914[(1)] = (23));

} else {
var statearr_34328_35916 = state_34304__$1;
(statearr_34328_35916[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (36))){
var inst_34254 = (state_34304[(12)]);
var inst_34231 = inst_34254;
var state_34304__$1 = (function (){var statearr_34329 = state_34304;
(statearr_34329[(7)] = inst_34231);

return statearr_34329;
})();
var statearr_34330_35921 = state_34304__$1;
(statearr_34330_35921[(2)] = null);

(statearr_34330_35921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (29))){
var inst_34278 = (state_34304[(10)]);
var state_34304__$1 = state_34304;
var statearr_34331_35922 = state_34304__$1;
(statearr_34331_35922[(2)] = inst_34278);

(statearr_34331_35922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (6))){
var state_34304__$1 = state_34304;
var statearr_34332_35923 = state_34304__$1;
(statearr_34332_35923[(2)] = false);

(statearr_34332_35923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (28))){
var inst_34274 = (state_34304[(2)]);
var inst_34275 = calc_state();
var inst_34231 = inst_34275;
var state_34304__$1 = (function (){var statearr_34333 = state_34304;
(statearr_34333[(15)] = inst_34274);

(statearr_34333[(7)] = inst_34231);

return statearr_34333;
})();
var statearr_34334_35924 = state_34304__$1;
(statearr_34334_35924[(2)] = null);

(statearr_34334_35924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (25))){
var inst_34300 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34335_35925 = state_34304__$1;
(statearr_34335_35925[(2)] = inst_34300);

(statearr_34335_35925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (34))){
var inst_34298 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34336_35926 = state_34304__$1;
(statearr_34336_35926[(2)] = inst_34298);

(statearr_34336_35926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (17))){
var state_34304__$1 = state_34304;
var statearr_34337_35927 = state_34304__$1;
(statearr_34337_35927[(2)] = false);

(statearr_34337_35927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (3))){
var state_34304__$1 = state_34304;
var statearr_34338_35931 = state_34304__$1;
(statearr_34338_35931[(2)] = false);

(statearr_34338_35931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (12))){
var inst_34302 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34304__$1,inst_34302);
} else {
if((state_val_34305 === (2))){
var inst_34206 = (state_34304[(8)]);
var inst_34211 = inst_34206.cljs$lang$protocol_mask$partition0$;
var inst_34212 = (inst_34211 & (64));
var inst_34213 = inst_34206.cljs$core$ISeq$;
var inst_34214 = (cljs.core.PROTOCOL_SENTINEL === inst_34213);
var inst_34215 = ((inst_34212) || (inst_34214));
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34215)){
var statearr_34339_35932 = state_34304__$1;
(statearr_34339_35932[(1)] = (5));

} else {
var statearr_34340_35933 = state_34304__$1;
(statearr_34340_35933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (23))){
var inst_34263 = (state_34304[(14)]);
var inst_34269 = (inst_34263 == null);
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34269)){
var statearr_34341_35934 = state_34304__$1;
(statearr_34341_35934[(1)] = (26));

} else {
var statearr_34342_35935 = state_34304__$1;
(statearr_34342_35935[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (35))){
var inst_34289 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34289)){
var statearr_34343_35936 = state_34304__$1;
(statearr_34343_35936[(1)] = (36));

} else {
var statearr_34344_35937 = state_34304__$1;
(statearr_34344_35937[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (19))){
var inst_34231 = (state_34304[(7)]);
var inst_34251 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34231);
var state_34304__$1 = state_34304;
var statearr_34345_35938 = state_34304__$1;
(statearr_34345_35938[(2)] = inst_34251);

(statearr_34345_35938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (11))){
var inst_34231 = (state_34304[(7)]);
var inst_34235 = (inst_34231 == null);
var inst_34236 = cljs.core.not(inst_34235);
var state_34304__$1 = state_34304;
if(inst_34236){
var statearr_34346_35940 = state_34304__$1;
(statearr_34346_35940[(1)] = (13));

} else {
var statearr_34347_35941 = state_34304__$1;
(statearr_34347_35941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (9))){
var inst_34206 = (state_34304[(8)]);
var state_34304__$1 = state_34304;
var statearr_34348_35942 = state_34304__$1;
(statearr_34348_35942[(2)] = inst_34206);

(statearr_34348_35942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (5))){
var state_34304__$1 = state_34304;
var statearr_34349_35943 = state_34304__$1;
(statearr_34349_35943[(2)] = true);

(statearr_34349_35943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (14))){
var state_34304__$1 = state_34304;
var statearr_34350_35944 = state_34304__$1;
(statearr_34350_35944[(2)] = false);

(statearr_34350_35944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (26))){
var inst_34264 = (state_34304[(9)]);
var inst_34271 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34264);
var state_34304__$1 = state_34304;
var statearr_34351_35945 = state_34304__$1;
(statearr_34351_35945[(2)] = inst_34271);

(statearr_34351_35945[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (16))){
var state_34304__$1 = state_34304;
var statearr_34352_35946 = state_34304__$1;
(statearr_34352_35946[(2)] = true);

(statearr_34352_35946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (38))){
var inst_34294 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34353_35947 = state_34304__$1;
(statearr_34353_35947[(2)] = inst_34294);

(statearr_34353_35947[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (30))){
var inst_34264 = (state_34304[(9)]);
var inst_34256 = (state_34304[(13)]);
var inst_34255 = (state_34304[(11)]);
var inst_34281 = cljs.core.empty_QMARK_(inst_34255);
var inst_34282 = (inst_34256.cljs$core$IFn$_invoke$arity$1 ? inst_34256.cljs$core$IFn$_invoke$arity$1(inst_34264) : inst_34256.call(null,inst_34264));
var inst_34283 = cljs.core.not(inst_34282);
var inst_34284 = ((inst_34281) && (inst_34283));
var state_34304__$1 = state_34304;
var statearr_34354_35948 = state_34304__$1;
(statearr_34354_35948[(2)] = inst_34284);

(statearr_34354_35948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (10))){
var inst_34206 = (state_34304[(8)]);
var inst_34227 = (state_34304[(2)]);
var inst_34228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34227,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34227,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34227,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34231 = inst_34206;
var state_34304__$1 = (function (){var statearr_34355 = state_34304;
(statearr_34355[(16)] = inst_34229);

(statearr_34355[(17)] = inst_34230);

(statearr_34355[(7)] = inst_34231);

(statearr_34355[(18)] = inst_34228);

return statearr_34355;
})();
var statearr_34356_35950 = state_34304__$1;
(statearr_34356_35950[(2)] = null);

(statearr_34356_35950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (18))){
var inst_34246 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34360_35951 = state_34304__$1;
(statearr_34360_35951[(2)] = inst_34246);

(statearr_34360_35951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (37))){
var state_34304__$1 = state_34304;
var statearr_34361_35952 = state_34304__$1;
(statearr_34361_35952[(2)] = null);

(statearr_34361_35952[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (8))){
var inst_34206 = (state_34304[(8)]);
var inst_34224 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34206);
var state_34304__$1 = state_34304;
var statearr_34362_35953 = state_34304__$1;
(statearr_34362_35953[(2)] = inst_34224);

(statearr_34362_35953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32950__auto__ = null;
var cljs$core$async$mix_$_state_machine__32950__auto____0 = (function (){
var statearr_34364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34364[(0)] = cljs$core$async$mix_$_state_machine__32950__auto__);

(statearr_34364[(1)] = (1));

return statearr_34364;
});
var cljs$core$async$mix_$_state_machine__32950__auto____1 = (function (state_34304){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_34304);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e34365){var ex__32953__auto__ = e34365;
var statearr_34366_35954 = state_34304;
(statearr_34366_35954[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_34304[(4)]))){
var statearr_34367_35955 = state_34304;
(statearr_34367_35955[(1)] = cljs.core.first((state_34304[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35956 = state_34304;
state_34304 = G__35956;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32950__auto__ = function(state_34304){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32950__auto____1.call(this,state_34304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32950__auto____0;
cljs$core$async$mix_$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32950__auto____1;
return cljs$core$async$mix_$_state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_34370 = f__33137__auto__();
(statearr_34370[(6)] = c__33136__auto___35884);

return statearr_34370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35957 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35957(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35963 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35963(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35964 = (function() {
var G__35965 = null;
var G__35965__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35965__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35965 = function(p,v){
switch(arguments.length){
case 1:
return G__35965__1.call(this,p);
case 2:
return G__35965__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35965.cljs$core$IFn$_invoke$arity$1 = G__35965__1;
G__35965.cljs$core$IFn$_invoke$arity$2 = G__35965__2;
return G__35965;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34377 = arguments.length;
switch (G__34377) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35964(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35964(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34381 = arguments.length;
switch (G__34381) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34379_SHARP_){
if(cljs.core.truth_((p1__34379_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34379_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34379_SHARP_.call(null,topic)))){
return p1__34379_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34379_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34382 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34382 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34383){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34383 = meta34383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34384,meta34383__$1){
var self__ = this;
var _34384__$1 = this;
return (new cljs.core.async.t_cljs$core$async34382(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34383__$1));
}));

(cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34384){
var self__ = this;
var _34384__$1 = this;
return self__.meta34383;
}));

(cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34383","meta34383",-1775608819,null)], null);
}));

(cljs.core.async.t_cljs$core$async34382.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34382");

(cljs.core.async.t_cljs$core$async34382.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34382");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34382.
 */
cljs.core.async.__GT_t_cljs$core$async34382 = (function cljs$core$async$__GT_t_cljs$core$async34382(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34383){
return (new cljs.core.async.t_cljs$core$async34382(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34383));
});

}

return (new cljs.core.async.t_cljs$core$async34382(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33136__auto___35974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_34457){
var state_val_34458 = (state_34457[(1)]);
if((state_val_34458 === (7))){
var inst_34453 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34459_35975 = state_34457__$1;
(statearr_34459_35975[(2)] = inst_34453);

(statearr_34459_35975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (20))){
var state_34457__$1 = state_34457;
var statearr_34460_35979 = state_34457__$1;
(statearr_34460_35979[(2)] = null);

(statearr_34460_35979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (1))){
var state_34457__$1 = state_34457;
var statearr_34461_35980 = state_34457__$1;
(statearr_34461_35980[(2)] = null);

(statearr_34461_35980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (24))){
var inst_34436 = (state_34457[(7)]);
var inst_34445 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34436);
var state_34457__$1 = state_34457;
var statearr_34462_35981 = state_34457__$1;
(statearr_34462_35981[(2)] = inst_34445);

(statearr_34462_35981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (4))){
var inst_34387 = (state_34457[(8)]);
var inst_34387__$1 = (state_34457[(2)]);
var inst_34388 = (inst_34387__$1 == null);
var state_34457__$1 = (function (){var statearr_34463 = state_34457;
(statearr_34463[(8)] = inst_34387__$1);

return statearr_34463;
})();
if(cljs.core.truth_(inst_34388)){
var statearr_34464_35982 = state_34457__$1;
(statearr_34464_35982[(1)] = (5));

} else {
var statearr_34465_35983 = state_34457__$1;
(statearr_34465_35983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (15))){
var inst_34430 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34466_35984 = state_34457__$1;
(statearr_34466_35984[(2)] = inst_34430);

(statearr_34466_35984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (21))){
var inst_34450 = (state_34457[(2)]);
var state_34457__$1 = (function (){var statearr_34467 = state_34457;
(statearr_34467[(9)] = inst_34450);

return statearr_34467;
})();
var statearr_34468_35985 = state_34457__$1;
(statearr_34468_35985[(2)] = null);

(statearr_34468_35985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (13))){
var inst_34411 = (state_34457[(10)]);
var inst_34413 = cljs.core.chunked_seq_QMARK_(inst_34411);
var state_34457__$1 = state_34457;
if(inst_34413){
var statearr_34469_35986 = state_34457__$1;
(statearr_34469_35986[(1)] = (16));

} else {
var statearr_34470_35987 = state_34457__$1;
(statearr_34470_35987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (22))){
var inst_34442 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
if(cljs.core.truth_(inst_34442)){
var statearr_34471_35988 = state_34457__$1;
(statearr_34471_35988[(1)] = (23));

} else {
var statearr_34472_35989 = state_34457__$1;
(statearr_34472_35989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (6))){
var inst_34438 = (state_34457[(11)]);
var inst_34387 = (state_34457[(8)]);
var inst_34436 = (state_34457[(7)]);
var inst_34436__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34387) : topic_fn.call(null,inst_34387));
var inst_34437 = cljs.core.deref(mults);
var inst_34438__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34437,inst_34436__$1);
var state_34457__$1 = (function (){var statearr_34473 = state_34457;
(statearr_34473[(11)] = inst_34438__$1);

(statearr_34473[(7)] = inst_34436__$1);

return statearr_34473;
})();
if(cljs.core.truth_(inst_34438__$1)){
var statearr_34474_35990 = state_34457__$1;
(statearr_34474_35990[(1)] = (19));

} else {
var statearr_34475_35991 = state_34457__$1;
(statearr_34475_35991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (25))){
var inst_34447 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34476_35992 = state_34457__$1;
(statearr_34476_35992[(2)] = inst_34447);

(statearr_34476_35992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (17))){
var inst_34411 = (state_34457[(10)]);
var inst_34421 = cljs.core.first(inst_34411);
var inst_34422 = cljs.core.async.muxch_STAR_(inst_34421);
var inst_34423 = cljs.core.async.close_BANG_(inst_34422);
var inst_34424 = cljs.core.next(inst_34411);
var inst_34397 = inst_34424;
var inst_34398 = null;
var inst_34399 = (0);
var inst_34400 = (0);
var state_34457__$1 = (function (){var statearr_34477 = state_34457;
(statearr_34477[(12)] = inst_34400);

(statearr_34477[(13)] = inst_34398);

(statearr_34477[(14)] = inst_34399);

(statearr_34477[(15)] = inst_34423);

(statearr_34477[(16)] = inst_34397);

return statearr_34477;
})();
var statearr_34478_35994 = state_34457__$1;
(statearr_34478_35994[(2)] = null);

(statearr_34478_35994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (3))){
var inst_34455 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34457__$1,inst_34455);
} else {
if((state_val_34458 === (12))){
var inst_34432 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34479_35995 = state_34457__$1;
(statearr_34479_35995[(2)] = inst_34432);

(statearr_34479_35995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (2))){
var state_34457__$1 = state_34457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34457__$1,(4),ch);
} else {
if((state_val_34458 === (23))){
var state_34457__$1 = state_34457;
var statearr_34480_35996 = state_34457__$1;
(statearr_34480_35996[(2)] = null);

(statearr_34480_35996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (19))){
var inst_34438 = (state_34457[(11)]);
var inst_34387 = (state_34457[(8)]);
var inst_34440 = cljs.core.async.muxch_STAR_(inst_34438);
var state_34457__$1 = state_34457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34457__$1,(22),inst_34440,inst_34387);
} else {
if((state_val_34458 === (11))){
var inst_34411 = (state_34457[(10)]);
var inst_34397 = (state_34457[(16)]);
var inst_34411__$1 = cljs.core.seq(inst_34397);
var state_34457__$1 = (function (){var statearr_34484 = state_34457;
(statearr_34484[(10)] = inst_34411__$1);

return statearr_34484;
})();
if(inst_34411__$1){
var statearr_34485_35997 = state_34457__$1;
(statearr_34485_35997[(1)] = (13));

} else {
var statearr_34486_35998 = state_34457__$1;
(statearr_34486_35998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (9))){
var inst_34434 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34488_35999 = state_34457__$1;
(statearr_34488_35999[(2)] = inst_34434);

(statearr_34488_35999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (5))){
var inst_34394 = cljs.core.deref(mults);
var inst_34395 = cljs.core.vals(inst_34394);
var inst_34396 = cljs.core.seq(inst_34395);
var inst_34397 = inst_34396;
var inst_34398 = null;
var inst_34399 = (0);
var inst_34400 = (0);
var state_34457__$1 = (function (){var statearr_34489 = state_34457;
(statearr_34489[(12)] = inst_34400);

(statearr_34489[(13)] = inst_34398);

(statearr_34489[(14)] = inst_34399);

(statearr_34489[(16)] = inst_34397);

return statearr_34489;
})();
var statearr_34490_36000 = state_34457__$1;
(statearr_34490_36000[(2)] = null);

(statearr_34490_36000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (14))){
var state_34457__$1 = state_34457;
var statearr_34495_36001 = state_34457__$1;
(statearr_34495_36001[(2)] = null);

(statearr_34495_36001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (16))){
var inst_34411 = (state_34457[(10)]);
var inst_34415 = cljs.core.chunk_first(inst_34411);
var inst_34416 = cljs.core.chunk_rest(inst_34411);
var inst_34418 = cljs.core.count(inst_34415);
var inst_34397 = inst_34416;
var inst_34398 = inst_34415;
var inst_34399 = inst_34418;
var inst_34400 = (0);
var state_34457__$1 = (function (){var statearr_34497 = state_34457;
(statearr_34497[(12)] = inst_34400);

(statearr_34497[(13)] = inst_34398);

(statearr_34497[(14)] = inst_34399);

(statearr_34497[(16)] = inst_34397);

return statearr_34497;
})();
var statearr_34498_36002 = state_34457__$1;
(statearr_34498_36002[(2)] = null);

(statearr_34498_36002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (10))){
var inst_34400 = (state_34457[(12)]);
var inst_34398 = (state_34457[(13)]);
var inst_34399 = (state_34457[(14)]);
var inst_34397 = (state_34457[(16)]);
var inst_34405 = cljs.core._nth(inst_34398,inst_34400);
var inst_34406 = cljs.core.async.muxch_STAR_(inst_34405);
var inst_34407 = cljs.core.async.close_BANG_(inst_34406);
var inst_34408 = (inst_34400 + (1));
var tmp34491 = inst_34398;
var tmp34492 = inst_34399;
var tmp34493 = inst_34397;
var inst_34397__$1 = tmp34493;
var inst_34398__$1 = tmp34491;
var inst_34399__$1 = tmp34492;
var inst_34400__$1 = inst_34408;
var state_34457__$1 = (function (){var statearr_34499 = state_34457;
(statearr_34499[(12)] = inst_34400__$1);

(statearr_34499[(13)] = inst_34398__$1);

(statearr_34499[(17)] = inst_34407);

(statearr_34499[(14)] = inst_34399__$1);

(statearr_34499[(16)] = inst_34397__$1);

return statearr_34499;
})();
var statearr_34501_36005 = state_34457__$1;
(statearr_34501_36005[(2)] = null);

(statearr_34501_36005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (18))){
var inst_34427 = (state_34457[(2)]);
var state_34457__$1 = state_34457;
var statearr_34503_36010 = state_34457__$1;
(statearr_34503_36010[(2)] = inst_34427);

(statearr_34503_36010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (8))){
var inst_34400 = (state_34457[(12)]);
var inst_34399 = (state_34457[(14)]);
var inst_34402 = (inst_34400 < inst_34399);
var inst_34403 = inst_34402;
var state_34457__$1 = state_34457;
if(cljs.core.truth_(inst_34403)){
var statearr_34505_36011 = state_34457__$1;
(statearr_34505_36011[(1)] = (10));

} else {
var statearr_34506_36013 = state_34457__$1;
(statearr_34506_36013[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_34507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34507[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_34507[(1)] = (1));

return statearr_34507;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_34457){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_34457);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e34508){var ex__32953__auto__ = e34508;
var statearr_34509_36017 = state_34457;
(statearr_34509_36017[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_34457[(4)]))){
var statearr_34510_36019 = state_34457;
(statearr_34510_36019[(1)] = cljs.core.first((state_34457[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36021 = state_34457;
state_34457 = G__36021;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_34457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_34457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_34514 = f__33137__auto__();
(statearr_34514[(6)] = c__33136__auto___35974);

return statearr_34514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34519 = arguments.length;
switch (G__34519) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34530 = arguments.length;
switch (G__34530) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34532 = arguments.length;
switch (G__34532) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33136__auto___36025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_34584){
var state_val_34585 = (state_34584[(1)]);
if((state_val_34585 === (7))){
var state_34584__$1 = state_34584;
var statearr_34588_36026 = state_34584__$1;
(statearr_34588_36026[(2)] = null);

(statearr_34588_36026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (1))){
var state_34584__$1 = state_34584;
var statearr_34589_36027 = state_34584__$1;
(statearr_34589_36027[(2)] = null);

(statearr_34589_36027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (4))){
var inst_34542 = (state_34584[(7)]);
var inst_34541 = (state_34584[(8)]);
var inst_34545 = (inst_34542 < inst_34541);
var state_34584__$1 = state_34584;
if(cljs.core.truth_(inst_34545)){
var statearr_34591_36028 = state_34584__$1;
(statearr_34591_36028[(1)] = (6));

} else {
var statearr_34593_36029 = state_34584__$1;
(statearr_34593_36029[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (15))){
var inst_34569 = (state_34584[(9)]);
var inst_34574 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34569);
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34584__$1,(17),out,inst_34574);
} else {
if((state_val_34585 === (13))){
var inst_34569 = (state_34584[(9)]);
var inst_34569__$1 = (state_34584[(2)]);
var inst_34570 = cljs.core.some(cljs.core.nil_QMARK_,inst_34569__$1);
var state_34584__$1 = (function (){var statearr_34595 = state_34584;
(statearr_34595[(9)] = inst_34569__$1);

return statearr_34595;
})();
if(cljs.core.truth_(inst_34570)){
var statearr_34596_36030 = state_34584__$1;
(statearr_34596_36030[(1)] = (14));

} else {
var statearr_34597_36031 = state_34584__$1;
(statearr_34597_36031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (6))){
var state_34584__$1 = state_34584;
var statearr_34598_36032 = state_34584__$1;
(statearr_34598_36032[(2)] = null);

(statearr_34598_36032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (17))){
var inst_34576 = (state_34584[(2)]);
var state_34584__$1 = (function (){var statearr_34600 = state_34584;
(statearr_34600[(10)] = inst_34576);

return statearr_34600;
})();
var statearr_34601_36033 = state_34584__$1;
(statearr_34601_36033[(2)] = null);

(statearr_34601_36033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (3))){
var inst_34581 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34584__$1,inst_34581);
} else {
if((state_val_34585 === (12))){
var _ = (function (){var statearr_34607 = state_34584;
(statearr_34607[(4)] = cljs.core.rest((state_34584[(4)])));

return statearr_34607;
})();
var state_34584__$1 = state_34584;
var ex34599 = (state_34584__$1[(2)]);
var statearr_34609_36034 = state_34584__$1;
(statearr_34609_36034[(5)] = ex34599);


if((ex34599 instanceof Object)){
var statearr_34610_36035 = state_34584__$1;
(statearr_34610_36035[(1)] = (11));

(statearr_34610_36035[(5)] = null);

} else {
throw ex34599;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (2))){
var inst_34540 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34541 = cnt;
var inst_34542 = (0);
var state_34584__$1 = (function (){var statearr_34612 = state_34584;
(statearr_34612[(7)] = inst_34542);

(statearr_34612[(11)] = inst_34540);

(statearr_34612[(8)] = inst_34541);

return statearr_34612;
})();
var statearr_34614_36036 = state_34584__$1;
(statearr_34614_36036[(2)] = null);

(statearr_34614_36036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (11))){
var inst_34548 = (state_34584[(2)]);
var inst_34549 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34584__$1 = (function (){var statearr_34616 = state_34584;
(statearr_34616[(12)] = inst_34548);

return statearr_34616;
})();
var statearr_34617_36037 = state_34584__$1;
(statearr_34617_36037[(2)] = inst_34549);

(statearr_34617_36037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (9))){
var inst_34542 = (state_34584[(7)]);
var _ = (function (){var statearr_34618 = state_34584;
(statearr_34618[(4)] = cljs.core.cons((12),(state_34584[(4)])));

return statearr_34618;
})();
var inst_34555 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34542) : chs__$1.call(null,inst_34542));
var inst_34556 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34542) : done.call(null,inst_34542));
var inst_34557 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34555,inst_34556);
var ___$1 = (function (){var statearr_34624 = state_34584;
(statearr_34624[(4)] = cljs.core.rest((state_34584[(4)])));

return statearr_34624;
})();
var state_34584__$1 = state_34584;
var statearr_34625_36038 = state_34584__$1;
(statearr_34625_36038[(2)] = inst_34557);

(statearr_34625_36038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (5))){
var inst_34567 = (state_34584[(2)]);
var state_34584__$1 = (function (){var statearr_34626 = state_34584;
(statearr_34626[(13)] = inst_34567);

return statearr_34626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34584__$1,(13),dchan);
} else {
if((state_val_34585 === (14))){
var inst_34572 = cljs.core.async.close_BANG_(out);
var state_34584__$1 = state_34584;
var statearr_34627_36042 = state_34584__$1;
(statearr_34627_36042[(2)] = inst_34572);

(statearr_34627_36042[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (16))){
var inst_34579 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34628_36043 = state_34584__$1;
(statearr_34628_36043[(2)] = inst_34579);

(statearr_34628_36043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (10))){
var inst_34542 = (state_34584[(7)]);
var inst_34560 = (state_34584[(2)]);
var inst_34561 = (inst_34542 + (1));
var inst_34542__$1 = inst_34561;
var state_34584__$1 = (function (){var statearr_34629 = state_34584;
(statearr_34629[(14)] = inst_34560);

(statearr_34629[(7)] = inst_34542__$1);

return statearr_34629;
})();
var statearr_34630_36051 = state_34584__$1;
(statearr_34630_36051[(2)] = null);

(statearr_34630_36051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (8))){
var inst_34565 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34631_36052 = state_34584__$1;
(statearr_34631_36052[(2)] = inst_34565);

(statearr_34631_36052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_34632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34632[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_34632[(1)] = (1));

return statearr_34632;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_34584){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_34584);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e34634){var ex__32953__auto__ = e34634;
var statearr_34636_36056 = state_34584;
(statearr_34636_36056[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_34584[(4)]))){
var statearr_34638_36057 = state_34584;
(statearr_34638_36057[(1)] = cljs.core.first((state_34584[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36061 = state_34584;
state_34584 = G__36061;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_34584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_34584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_34639 = f__33137__auto__();
(statearr_34639[(6)] = c__33136__auto___36025);

return statearr_34639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34642 = arguments.length;
switch (G__34642) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33136__auto___36066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_34682){
var state_val_34683 = (state_34682[(1)]);
if((state_val_34683 === (7))){
var inst_34657 = (state_34682[(7)]);
var inst_34656 = (state_34682[(8)]);
var inst_34656__$1 = (state_34682[(2)]);
var inst_34657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34656__$1,(0),null);
var inst_34658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34656__$1,(1),null);
var inst_34659 = (inst_34657__$1 == null);
var state_34682__$1 = (function (){var statearr_34685 = state_34682;
(statearr_34685[(7)] = inst_34657__$1);

(statearr_34685[(9)] = inst_34658);

(statearr_34685[(8)] = inst_34656__$1);

return statearr_34685;
})();
if(cljs.core.truth_(inst_34659)){
var statearr_34686_36068 = state_34682__$1;
(statearr_34686_36068[(1)] = (8));

} else {
var statearr_34687_36069 = state_34682__$1;
(statearr_34687_36069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (1))){
var inst_34646 = cljs.core.vec(chs);
var inst_34647 = inst_34646;
var state_34682__$1 = (function (){var statearr_34688 = state_34682;
(statearr_34688[(10)] = inst_34647);

return statearr_34688;
})();
var statearr_34689_36070 = state_34682__$1;
(statearr_34689_36070[(2)] = null);

(statearr_34689_36070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (4))){
var inst_34647 = (state_34682[(10)]);
var state_34682__$1 = state_34682;
return cljs.core.async.ioc_alts_BANG_(state_34682__$1,(7),inst_34647);
} else {
if((state_val_34683 === (6))){
var inst_34677 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34690_36074 = state_34682__$1;
(statearr_34690_36074[(2)] = inst_34677);

(statearr_34690_36074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (3))){
var inst_34680 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34682__$1,inst_34680);
} else {
if((state_val_34683 === (2))){
var inst_34647 = (state_34682[(10)]);
var inst_34649 = cljs.core.count(inst_34647);
var inst_34650 = (inst_34649 > (0));
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34650)){
var statearr_34699_36081 = state_34682__$1;
(statearr_34699_36081[(1)] = (4));

} else {
var statearr_34701_36082 = state_34682__$1;
(statearr_34701_36082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (11))){
var inst_34647 = (state_34682[(10)]);
var inst_34669 = (state_34682[(2)]);
var tmp34691 = inst_34647;
var inst_34647__$1 = tmp34691;
var state_34682__$1 = (function (){var statearr_34702 = state_34682;
(statearr_34702[(10)] = inst_34647__$1);

(statearr_34702[(11)] = inst_34669);

return statearr_34702;
})();
var statearr_34703_36089 = state_34682__$1;
(statearr_34703_36089[(2)] = null);

(statearr_34703_36089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (9))){
var inst_34657 = (state_34682[(7)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34682__$1,(11),out,inst_34657);
} else {
if((state_val_34683 === (5))){
var inst_34675 = cljs.core.async.close_BANG_(out);
var state_34682__$1 = state_34682;
var statearr_34706_36090 = state_34682__$1;
(statearr_34706_36090[(2)] = inst_34675);

(statearr_34706_36090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (10))){
var inst_34673 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34709_36091 = state_34682__$1;
(statearr_34709_36091[(2)] = inst_34673);

(statearr_34709_36091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (8))){
var inst_34647 = (state_34682[(10)]);
var inst_34657 = (state_34682[(7)]);
var inst_34658 = (state_34682[(9)]);
var inst_34656 = (state_34682[(8)]);
var inst_34661 = (function (){var cs = inst_34647;
var vec__34652 = inst_34656;
var v = inst_34657;
var c = inst_34658;
return (function (p1__34640_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34640_SHARP_);
});
})();
var inst_34664 = cljs.core.filterv(inst_34661,inst_34647);
var inst_34647__$1 = inst_34664;
var state_34682__$1 = (function (){var statearr_34710 = state_34682;
(statearr_34710[(10)] = inst_34647__$1);

return statearr_34710;
})();
var statearr_34711_36092 = state_34682__$1;
(statearr_34711_36092[(2)] = null);

(statearr_34711_36092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_34714 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34714[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_34714[(1)] = (1));

return statearr_34714;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_34682){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_34682);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e34715){var ex__32953__auto__ = e34715;
var statearr_34716_36093 = state_34682;
(statearr_34716_36093[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_34682[(4)]))){
var statearr_34717_36094 = state_34682;
(statearr_34717_36094[(1)] = cljs.core.first((state_34682[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36095 = state_34682;
state_34682 = G__36095;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_34718 = f__33137__auto__();
(statearr_34718[(6)] = c__33136__auto___36066);

return statearr_34718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34722 = arguments.length;
switch (G__34722) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33136__auto___36103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_34751){
var state_val_34752 = (state_34751[(1)]);
if((state_val_34752 === (7))){
var inst_34732 = (state_34751[(7)]);
var inst_34732__$1 = (state_34751[(2)]);
var inst_34733 = (inst_34732__$1 == null);
var inst_34734 = cljs.core.not(inst_34733);
var state_34751__$1 = (function (){var statearr_34760 = state_34751;
(statearr_34760[(7)] = inst_34732__$1);

return statearr_34760;
})();
if(inst_34734){
var statearr_34761_36104 = state_34751__$1;
(statearr_34761_36104[(1)] = (8));

} else {
var statearr_34762_36105 = state_34751__$1;
(statearr_34762_36105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (1))){
var inst_34727 = (0);
var state_34751__$1 = (function (){var statearr_34763 = state_34751;
(statearr_34763[(8)] = inst_34727);

return statearr_34763;
})();
var statearr_34764_36106 = state_34751__$1;
(statearr_34764_36106[(2)] = null);

(statearr_34764_36106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (4))){
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34751__$1,(7),ch);
} else {
if((state_val_34752 === (6))){
var inst_34746 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
var statearr_34785_36107 = state_34751__$1;
(statearr_34785_36107[(2)] = inst_34746);

(statearr_34785_36107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (3))){
var inst_34748 = (state_34751[(2)]);
var inst_34749 = cljs.core.async.close_BANG_(out);
var state_34751__$1 = (function (){var statearr_34786 = state_34751;
(statearr_34786[(9)] = inst_34748);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34751__$1,inst_34749);
} else {
if((state_val_34752 === (2))){
var inst_34727 = (state_34751[(8)]);
var inst_34729 = (inst_34727 < n);
var state_34751__$1 = state_34751;
if(cljs.core.truth_(inst_34729)){
var statearr_34787_36114 = state_34751__$1;
(statearr_34787_36114[(1)] = (4));

} else {
var statearr_34788_36115 = state_34751__$1;
(statearr_34788_36115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (11))){
var inst_34727 = (state_34751[(8)]);
var inst_34738 = (state_34751[(2)]);
var inst_34739 = (inst_34727 + (1));
var inst_34727__$1 = inst_34739;
var state_34751__$1 = (function (){var statearr_34789 = state_34751;
(statearr_34789[(8)] = inst_34727__$1);

(statearr_34789[(10)] = inst_34738);

return statearr_34789;
})();
var statearr_34790_36116 = state_34751__$1;
(statearr_34790_36116[(2)] = null);

(statearr_34790_36116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (9))){
var state_34751__$1 = state_34751;
var statearr_34794_36117 = state_34751__$1;
(statearr_34794_36117[(2)] = null);

(statearr_34794_36117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (5))){
var state_34751__$1 = state_34751;
var statearr_34795_36118 = state_34751__$1;
(statearr_34795_36118[(2)] = null);

(statearr_34795_36118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (10))){
var inst_34743 = (state_34751[(2)]);
var state_34751__$1 = state_34751;
var statearr_34796_36119 = state_34751__$1;
(statearr_34796_36119[(2)] = inst_34743);

(statearr_34796_36119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34752 === (8))){
var inst_34732 = (state_34751[(7)]);
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34751__$1,(11),out,inst_34732);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_34797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34797[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_34797[(1)] = (1));

return statearr_34797;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_34751){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_34751);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e34798){var ex__32953__auto__ = e34798;
var statearr_34799_36126 = state_34751;
(statearr_34799_36126[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_34751[(4)]))){
var statearr_34800_36127 = state_34751;
(statearr_34800_36127[(1)] = cljs.core.first((state_34751[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36128 = state_34751;
state_34751 = G__36128;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_34751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_34751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_34802 = f__33137__auto__();
(statearr_34802[(6)] = c__33136__auto___36103);

return statearr_34802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34804 = (function (f,ch,meta34805){
this.f = f;
this.ch = ch;
this.meta34805 = meta34805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34806,meta34805__$1){
var self__ = this;
var _34806__$1 = this;
return (new cljs.core.async.t_cljs$core$async34804(self__.f,self__.ch,meta34805__$1));
}));

(cljs.core.async.t_cljs$core$async34804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34806){
var self__ = this;
var _34806__$1 = this;
return self__.meta34805;
}));

(cljs.core.async.t_cljs$core$async34804.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34804.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34804.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34807 = (function (f,ch,meta34805,_,fn1,meta34808){
this.f = f;
this.ch = ch;
this.meta34805 = meta34805;
this._ = _;
this.fn1 = fn1;
this.meta34808 = meta34808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34809,meta34808__$1){
var self__ = this;
var _34809__$1 = this;
return (new cljs.core.async.t_cljs$core$async34807(self__.f,self__.ch,self__.meta34805,self__._,self__.fn1,meta34808__$1));
}));

(cljs.core.async.t_cljs$core$async34807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34809){
var self__ = this;
var _34809__$1 = this;
return self__.meta34808;
}));

(cljs.core.async.t_cljs$core$async34807.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34803_SHARP_){
var G__34814 = (((p1__34803_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34803_SHARP_) : self__.f.call(null,p1__34803_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34814) : f1.call(null,G__34814));
});
}));

(cljs.core.async.t_cljs$core$async34807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34805","meta34805",106005785,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34804","cljs.core.async/t_cljs$core$async34804",1238097281,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34808","meta34808",1330279882,null)], null);
}));

(cljs.core.async.t_cljs$core$async34807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34807");

(cljs.core.async.t_cljs$core$async34807.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34807.
 */
cljs.core.async.__GT_t_cljs$core$async34807 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34807(f__$1,ch__$1,meta34805__$1,___$2,fn1__$1,meta34808){
return (new cljs.core.async.t_cljs$core$async34807(f__$1,ch__$1,meta34805__$1,___$2,fn1__$1,meta34808));
});

}

return (new cljs.core.async.t_cljs$core$async34807(self__.f,self__.ch,self__.meta34805,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34841 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34841) : self__.f.call(null,G__34841));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34804.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34805","meta34805",106005785,null)], null);
}));

(cljs.core.async.t_cljs$core$async34804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34804");

(cljs.core.async.t_cljs$core$async34804.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34804.
 */
cljs.core.async.__GT_t_cljs$core$async34804 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34804(f__$1,ch__$1,meta34805){
return (new cljs.core.async.t_cljs$core$async34804(f__$1,ch__$1,meta34805));
});

}

return (new cljs.core.async.t_cljs$core$async34804(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34846 = (function (f,ch,meta34847){
this.f = f;
this.ch = ch;
this.meta34847 = meta34847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34848,meta34847__$1){
var self__ = this;
var _34848__$1 = this;
return (new cljs.core.async.t_cljs$core$async34846(self__.f,self__.ch,meta34847__$1));
}));

(cljs.core.async.t_cljs$core$async34846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34848){
var self__ = this;
var _34848__$1 = this;
return self__.meta34847;
}));

(cljs.core.async.t_cljs$core$async34846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34847","meta34847",1814776937,null)], null);
}));

(cljs.core.async.t_cljs$core$async34846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34846");

(cljs.core.async.t_cljs$core$async34846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34846.
 */
cljs.core.async.__GT_t_cljs$core$async34846 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34846(f__$1,ch__$1,meta34847){
return (new cljs.core.async.t_cljs$core$async34846(f__$1,ch__$1,meta34847));
});

}

return (new cljs.core.async.t_cljs$core$async34846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34860 = (function (p,ch,meta34861){
this.p = p;
this.ch = ch;
this.meta34861 = meta34861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34862,meta34861__$1){
var self__ = this;
var _34862__$1 = this;
return (new cljs.core.async.t_cljs$core$async34860(self__.p,self__.ch,meta34861__$1));
}));

(cljs.core.async.t_cljs$core$async34860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34862){
var self__ = this;
var _34862__$1 = this;
return self__.meta34861;
}));

(cljs.core.async.t_cljs$core$async34860.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34860.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34860.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34860.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34861","meta34861",491704080,null)], null);
}));

(cljs.core.async.t_cljs$core$async34860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34860");

(cljs.core.async.t_cljs$core$async34860.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34860.
 */
cljs.core.async.__GT_t_cljs$core$async34860 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34860(p__$1,ch__$1,meta34861){
return (new cljs.core.async.t_cljs$core$async34860(p__$1,ch__$1,meta34861));
});

}

return (new cljs.core.async.t_cljs$core$async34860(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34879 = arguments.length;
switch (G__34879) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33136__auto___36142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_34903){
var state_val_34904 = (state_34903[(1)]);
if((state_val_34904 === (7))){
var inst_34899 = (state_34903[(2)]);
var state_34903__$1 = state_34903;
var statearr_34905_36146 = state_34903__$1;
(statearr_34905_36146[(2)] = inst_34899);

(statearr_34905_36146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34904 === (1))){
var state_34903__$1 = state_34903;
var statearr_34906_36148 = state_34903__$1;
(statearr_34906_36148[(2)] = null);

(statearr_34906_36148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34904 === (4))){
var inst_34885 = (state_34903[(7)]);
var inst_34885__$1 = (state_34903[(2)]);
var inst_34886 = (inst_34885__$1 == null);
var state_34903__$1 = (function (){var statearr_34908 = state_34903;
(statearr_34908[(7)] = inst_34885__$1);

return statearr_34908;
})();
if(cljs.core.truth_(inst_34886)){
var statearr_34910_36149 = state_34903__$1;
(statearr_34910_36149[(1)] = (5));

} else {
var statearr_34912_36150 = state_34903__$1;
(statearr_34912_36150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34904 === (6))){
var inst_34885 = (state_34903[(7)]);
var inst_34890 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34885) : p.call(null,inst_34885));
var state_34903__$1 = state_34903;
if(cljs.core.truth_(inst_34890)){
var statearr_34913_36151 = state_34903__$1;
(statearr_34913_36151[(1)] = (8));

} else {
var statearr_34914_36152 = state_34903__$1;
(statearr_34914_36152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34904 === (3))){
var inst_34901 = (state_34903[(2)]);
var state_34903__$1 = state_34903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34903__$1,inst_34901);
} else {
if((state_val_34904 === (2))){
var state_34903__$1 = state_34903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34903__$1,(4),ch);
} else {
if((state_val_34904 === (11))){
var inst_34893 = (state_34903[(2)]);
var state_34903__$1 = state_34903;
var statearr_34918_36153 = state_34903__$1;
(statearr_34918_36153[(2)] = inst_34893);

(statearr_34918_36153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34904 === (9))){
var state_34903__$1 = state_34903;
var statearr_34919_36154 = state_34903__$1;
(statearr_34919_36154[(2)] = null);

(statearr_34919_36154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34904 === (5))){
var inst_34888 = cljs.core.async.close_BANG_(out);
var state_34903__$1 = state_34903;
var statearr_34920_36155 = state_34903__$1;
(statearr_34920_36155[(2)] = inst_34888);

(statearr_34920_36155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34904 === (10))){
var inst_34896 = (state_34903[(2)]);
var state_34903__$1 = (function (){var statearr_34924 = state_34903;
(statearr_34924[(8)] = inst_34896);

return statearr_34924;
})();
var statearr_34925_36156 = state_34903__$1;
(statearr_34925_36156[(2)] = null);

(statearr_34925_36156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34904 === (8))){
var inst_34885 = (state_34903[(7)]);
var state_34903__$1 = state_34903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34903__$1,(11),out,inst_34885);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_34931 = [null,null,null,null,null,null,null,null,null];
(statearr_34931[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_34931[(1)] = (1));

return statearr_34931;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_34903){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_34903);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e34932){var ex__32953__auto__ = e34932;
var statearr_34933_36158 = state_34903;
(statearr_34933_36158[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_34903[(4)]))){
var statearr_34934_36160 = state_34903;
(statearr_34934_36160[(1)] = cljs.core.first((state_34903[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36162 = state_34903;
state_34903 = G__36162;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_34903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_34903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_34935 = f__33137__auto__();
(statearr_34935[(6)] = c__33136__auto___36142);

return statearr_34935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34937 = arguments.length;
switch (G__34937) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_35002){
var state_val_35003 = (state_35002[(1)]);
if((state_val_35003 === (7))){
var inst_34998 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35007_36164 = state_35002__$1;
(statearr_35007_36164[(2)] = inst_34998);

(statearr_35007_36164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (20))){
var inst_34968 = (state_35002[(7)]);
var inst_34979 = (state_35002[(2)]);
var inst_34980 = cljs.core.next(inst_34968);
var inst_34954 = inst_34980;
var inst_34955 = null;
var inst_34956 = (0);
var inst_34957 = (0);
var state_35002__$1 = (function (){var statearr_35008 = state_35002;
(statearr_35008[(8)] = inst_34956);

(statearr_35008[(9)] = inst_34957);

(statearr_35008[(10)] = inst_34979);

(statearr_35008[(11)] = inst_34955);

(statearr_35008[(12)] = inst_34954);

return statearr_35008;
})();
var statearr_35013_36165 = state_35002__$1;
(statearr_35013_36165[(2)] = null);

(statearr_35013_36165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (1))){
var state_35002__$1 = state_35002;
var statearr_35014_36166 = state_35002__$1;
(statearr_35014_36166[(2)] = null);

(statearr_35014_36166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (4))){
var inst_34943 = (state_35002[(13)]);
var inst_34943__$1 = (state_35002[(2)]);
var inst_34944 = (inst_34943__$1 == null);
var state_35002__$1 = (function (){var statearr_35015 = state_35002;
(statearr_35015[(13)] = inst_34943__$1);

return statearr_35015;
})();
if(cljs.core.truth_(inst_34944)){
var statearr_35017_36168 = state_35002__$1;
(statearr_35017_36168[(1)] = (5));

} else {
var statearr_35018_36169 = state_35002__$1;
(statearr_35018_36169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (15))){
var state_35002__$1 = state_35002;
var statearr_35022_36170 = state_35002__$1;
(statearr_35022_36170[(2)] = null);

(statearr_35022_36170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (21))){
var state_35002__$1 = state_35002;
var statearr_35023_36172 = state_35002__$1;
(statearr_35023_36172[(2)] = null);

(statearr_35023_36172[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (13))){
var inst_34956 = (state_35002[(8)]);
var inst_34957 = (state_35002[(9)]);
var inst_34955 = (state_35002[(11)]);
var inst_34954 = (state_35002[(12)]);
var inst_34964 = (state_35002[(2)]);
var inst_34965 = (inst_34957 + (1));
var tmp35019 = inst_34956;
var tmp35020 = inst_34955;
var tmp35021 = inst_34954;
var inst_34954__$1 = tmp35021;
var inst_34955__$1 = tmp35020;
var inst_34956__$1 = tmp35019;
var inst_34957__$1 = inst_34965;
var state_35002__$1 = (function (){var statearr_35024 = state_35002;
(statearr_35024[(14)] = inst_34964);

(statearr_35024[(8)] = inst_34956__$1);

(statearr_35024[(9)] = inst_34957__$1);

(statearr_35024[(11)] = inst_34955__$1);

(statearr_35024[(12)] = inst_34954__$1);

return statearr_35024;
})();
var statearr_35027_36174 = state_35002__$1;
(statearr_35027_36174[(2)] = null);

(statearr_35027_36174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (22))){
var state_35002__$1 = state_35002;
var statearr_35029_36175 = state_35002__$1;
(statearr_35029_36175[(2)] = null);

(statearr_35029_36175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (6))){
var inst_34943 = (state_35002[(13)]);
var inst_34952 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34943) : f.call(null,inst_34943));
var inst_34953 = cljs.core.seq(inst_34952);
var inst_34954 = inst_34953;
var inst_34955 = null;
var inst_34956 = (0);
var inst_34957 = (0);
var state_35002__$1 = (function (){var statearr_35030 = state_35002;
(statearr_35030[(8)] = inst_34956);

(statearr_35030[(9)] = inst_34957);

(statearr_35030[(11)] = inst_34955);

(statearr_35030[(12)] = inst_34954);

return statearr_35030;
})();
var statearr_35031_36177 = state_35002__$1;
(statearr_35031_36177[(2)] = null);

(statearr_35031_36177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (17))){
var inst_34968 = (state_35002[(7)]);
var inst_34972 = cljs.core.chunk_first(inst_34968);
var inst_34973 = cljs.core.chunk_rest(inst_34968);
var inst_34974 = cljs.core.count(inst_34972);
var inst_34954 = inst_34973;
var inst_34955 = inst_34972;
var inst_34956 = inst_34974;
var inst_34957 = (0);
var state_35002__$1 = (function (){var statearr_35035 = state_35002;
(statearr_35035[(8)] = inst_34956);

(statearr_35035[(9)] = inst_34957);

(statearr_35035[(11)] = inst_34955);

(statearr_35035[(12)] = inst_34954);

return statearr_35035;
})();
var statearr_35036_36178 = state_35002__$1;
(statearr_35036_36178[(2)] = null);

(statearr_35036_36178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (3))){
var inst_35000 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35002__$1,inst_35000);
} else {
if((state_val_35003 === (12))){
var inst_34988 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35039_36180 = state_35002__$1;
(statearr_35039_36180[(2)] = inst_34988);

(statearr_35039_36180[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (2))){
var state_35002__$1 = state_35002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35002__$1,(4),in$);
} else {
if((state_val_35003 === (23))){
var inst_34996 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35043_36181 = state_35002__$1;
(statearr_35043_36181[(2)] = inst_34996);

(statearr_35043_36181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (19))){
var inst_34983 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35044_36183 = state_35002__$1;
(statearr_35044_36183[(2)] = inst_34983);

(statearr_35044_36183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (11))){
var inst_34954 = (state_35002[(12)]);
var inst_34968 = (state_35002[(7)]);
var inst_34968__$1 = cljs.core.seq(inst_34954);
var state_35002__$1 = (function (){var statearr_35045 = state_35002;
(statearr_35045[(7)] = inst_34968__$1);

return statearr_35045;
})();
if(inst_34968__$1){
var statearr_35046_36184 = state_35002__$1;
(statearr_35046_36184[(1)] = (14));

} else {
var statearr_35047_36185 = state_35002__$1;
(statearr_35047_36185[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (9))){
var inst_34990 = (state_35002[(2)]);
var inst_34991 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35002__$1 = (function (){var statearr_35049 = state_35002;
(statearr_35049[(15)] = inst_34990);

return statearr_35049;
})();
if(cljs.core.truth_(inst_34991)){
var statearr_35052_36186 = state_35002__$1;
(statearr_35052_36186[(1)] = (21));

} else {
var statearr_35053_36187 = state_35002__$1;
(statearr_35053_36187[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (5))){
var inst_34946 = cljs.core.async.close_BANG_(out);
var state_35002__$1 = state_35002;
var statearr_35054_36188 = state_35002__$1;
(statearr_35054_36188[(2)] = inst_34946);

(statearr_35054_36188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (14))){
var inst_34968 = (state_35002[(7)]);
var inst_34970 = cljs.core.chunked_seq_QMARK_(inst_34968);
var state_35002__$1 = state_35002;
if(inst_34970){
var statearr_35055_36189 = state_35002__$1;
(statearr_35055_36189[(1)] = (17));

} else {
var statearr_35056_36190 = state_35002__$1;
(statearr_35056_36190[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (16))){
var inst_34986 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35061_36191 = state_35002__$1;
(statearr_35061_36191[(2)] = inst_34986);

(statearr_35061_36191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (10))){
var inst_34957 = (state_35002[(9)]);
var inst_34955 = (state_35002[(11)]);
var inst_34962 = cljs.core._nth(inst_34955,inst_34957);
var state_35002__$1 = state_35002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35002__$1,(13),out,inst_34962);
} else {
if((state_val_35003 === (18))){
var inst_34968 = (state_35002[(7)]);
var inst_34977 = cljs.core.first(inst_34968);
var state_35002__$1 = state_35002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35002__$1,(20),out,inst_34977);
} else {
if((state_val_35003 === (8))){
var inst_34956 = (state_35002[(8)]);
var inst_34957 = (state_35002[(9)]);
var inst_34959 = (inst_34957 < inst_34956);
var inst_34960 = inst_34959;
var state_35002__$1 = state_35002;
if(cljs.core.truth_(inst_34960)){
var statearr_35064_36201 = state_35002__$1;
(statearr_35064_36201[(1)] = (10));

} else {
var statearr_35065_36202 = state_35002__$1;
(statearr_35065_36202[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32950__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32950__auto____0 = (function (){
var statearr_35066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35066[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32950__auto__);

(statearr_35066[(1)] = (1));

return statearr_35066;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32950__auto____1 = (function (state_35002){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_35002);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e35071){var ex__32953__auto__ = e35071;
var statearr_35073_36209 = state_35002;
(statearr_35073_36209[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_35002[(4)]))){
var statearr_35074_36210 = state_35002;
(statearr_35074_36210[(1)] = cljs.core.first((state_35002[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36211 = state_35002;
state_35002 = G__36211;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32950__auto__ = function(state_35002){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32950__auto____1.call(this,state_35002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32950__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32950__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_35076 = f__33137__auto__();
(statearr_35076[(6)] = c__33136__auto__);

return statearr_35076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));

return c__33136__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35082 = arguments.length;
switch (G__35082) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35090 = arguments.length;
switch (G__35090) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35096 = arguments.length;
switch (G__35096) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33136__auto___36229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_35124){
var state_val_35125 = (state_35124[(1)]);
if((state_val_35125 === (7))){
var inst_35119 = (state_35124[(2)]);
var state_35124__$1 = state_35124;
var statearr_35129_36234 = state_35124__$1;
(statearr_35129_36234[(2)] = inst_35119);

(statearr_35129_36234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (1))){
var inst_35101 = null;
var state_35124__$1 = (function (){var statearr_35130 = state_35124;
(statearr_35130[(7)] = inst_35101);

return statearr_35130;
})();
var statearr_35131_36239 = state_35124__$1;
(statearr_35131_36239[(2)] = null);

(statearr_35131_36239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (4))){
var inst_35104 = (state_35124[(8)]);
var inst_35104__$1 = (state_35124[(2)]);
var inst_35105 = (inst_35104__$1 == null);
var inst_35106 = cljs.core.not(inst_35105);
var state_35124__$1 = (function (){var statearr_35135 = state_35124;
(statearr_35135[(8)] = inst_35104__$1);

return statearr_35135;
})();
if(inst_35106){
var statearr_35136_36248 = state_35124__$1;
(statearr_35136_36248[(1)] = (5));

} else {
var statearr_35137_36249 = state_35124__$1;
(statearr_35137_36249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (6))){
var state_35124__$1 = state_35124;
var statearr_35138_36251 = state_35124__$1;
(statearr_35138_36251[(2)] = null);

(statearr_35138_36251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (3))){
var inst_35121 = (state_35124[(2)]);
var inst_35122 = cljs.core.async.close_BANG_(out);
var state_35124__$1 = (function (){var statearr_35142 = state_35124;
(statearr_35142[(9)] = inst_35121);

return statearr_35142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35124__$1,inst_35122);
} else {
if((state_val_35125 === (2))){
var state_35124__$1 = state_35124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35124__$1,(4),ch);
} else {
if((state_val_35125 === (11))){
var inst_35104 = (state_35124[(8)]);
var inst_35113 = (state_35124[(2)]);
var inst_35101 = inst_35104;
var state_35124__$1 = (function (){var statearr_35143 = state_35124;
(statearr_35143[(10)] = inst_35113);

(statearr_35143[(7)] = inst_35101);

return statearr_35143;
})();
var statearr_35144_36254 = state_35124__$1;
(statearr_35144_36254[(2)] = null);

(statearr_35144_36254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (9))){
var inst_35104 = (state_35124[(8)]);
var state_35124__$1 = state_35124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35124__$1,(11),out,inst_35104);
} else {
if((state_val_35125 === (5))){
var inst_35104 = (state_35124[(8)]);
var inst_35101 = (state_35124[(7)]);
var inst_35108 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35104,inst_35101);
var state_35124__$1 = state_35124;
if(inst_35108){
var statearr_35146_36256 = state_35124__$1;
(statearr_35146_36256[(1)] = (8));

} else {
var statearr_35147_36257 = state_35124__$1;
(statearr_35147_36257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (10))){
var inst_35116 = (state_35124[(2)]);
var state_35124__$1 = state_35124;
var statearr_35149_36258 = state_35124__$1;
(statearr_35149_36258[(2)] = inst_35116);

(statearr_35149_36258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (8))){
var inst_35101 = (state_35124[(7)]);
var tmp35145 = inst_35101;
var inst_35101__$1 = tmp35145;
var state_35124__$1 = (function (){var statearr_35150 = state_35124;
(statearr_35150[(7)] = inst_35101__$1);

return statearr_35150;
})();
var statearr_35151_36259 = state_35124__$1;
(statearr_35151_36259[(2)] = null);

(statearr_35151_36259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_35152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35152[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_35152[(1)] = (1));

return statearr_35152;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_35124){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_35124);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e35153){var ex__32953__auto__ = e35153;
var statearr_35154_36260 = state_35124;
(statearr_35154_36260[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_35124[(4)]))){
var statearr_35157_36261 = state_35124;
(statearr_35157_36261[(1)] = cljs.core.first((state_35124[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36262 = state_35124;
state_35124 = G__36262;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_35124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_35124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_35161 = f__33137__auto__();
(statearr_35161[(6)] = c__33136__auto___36229);

return statearr_35161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35164 = arguments.length;
switch (G__35164) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33136__auto___36265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_35208){
var state_val_35209 = (state_35208[(1)]);
if((state_val_35209 === (7))){
var inst_35204 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35215_36266 = state_35208__$1;
(statearr_35215_36266[(2)] = inst_35204);

(statearr_35215_36266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (1))){
var inst_35170 = (new Array(n));
var inst_35171 = inst_35170;
var inst_35172 = (0);
var state_35208__$1 = (function (){var statearr_35217 = state_35208;
(statearr_35217[(7)] = inst_35172);

(statearr_35217[(8)] = inst_35171);

return statearr_35217;
})();
var statearr_35218_36268 = state_35208__$1;
(statearr_35218_36268[(2)] = null);

(statearr_35218_36268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (4))){
var inst_35175 = (state_35208[(9)]);
var inst_35175__$1 = (state_35208[(2)]);
var inst_35176 = (inst_35175__$1 == null);
var inst_35177 = cljs.core.not(inst_35176);
var state_35208__$1 = (function (){var statearr_35219 = state_35208;
(statearr_35219[(9)] = inst_35175__$1);

return statearr_35219;
})();
if(inst_35177){
var statearr_35220_36273 = state_35208__$1;
(statearr_35220_36273[(1)] = (5));

} else {
var statearr_35221_36276 = state_35208__$1;
(statearr_35221_36276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (15))){
var inst_35198 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35222_36283 = state_35208__$1;
(statearr_35222_36283[(2)] = inst_35198);

(statearr_35222_36283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (13))){
var state_35208__$1 = state_35208;
var statearr_35226_36293 = state_35208__$1;
(statearr_35226_36293[(2)] = null);

(statearr_35226_36293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (6))){
var inst_35172 = (state_35208[(7)]);
var inst_35194 = (inst_35172 > (0));
var state_35208__$1 = state_35208;
if(cljs.core.truth_(inst_35194)){
var statearr_35227_36301 = state_35208__$1;
(statearr_35227_36301[(1)] = (12));

} else {
var statearr_35228_36303 = state_35208__$1;
(statearr_35228_36303[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (3))){
var inst_35206 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35208__$1,inst_35206);
} else {
if((state_val_35209 === (12))){
var inst_35171 = (state_35208[(8)]);
var inst_35196 = cljs.core.vec(inst_35171);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35208__$1,(15),out,inst_35196);
} else {
if((state_val_35209 === (2))){
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35208__$1,(4),ch);
} else {
if((state_val_35209 === (11))){
var inst_35188 = (state_35208[(2)]);
var inst_35189 = (new Array(n));
var inst_35171 = inst_35189;
var inst_35172 = (0);
var state_35208__$1 = (function (){var statearr_35237 = state_35208;
(statearr_35237[(7)] = inst_35172);

(statearr_35237[(10)] = inst_35188);

(statearr_35237[(8)] = inst_35171);

return statearr_35237;
})();
var statearr_35238_36342 = state_35208__$1;
(statearr_35238_36342[(2)] = null);

(statearr_35238_36342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (9))){
var inst_35171 = (state_35208[(8)]);
var inst_35186 = cljs.core.vec(inst_35171);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35208__$1,(11),out,inst_35186);
} else {
if((state_val_35209 === (5))){
var inst_35172 = (state_35208[(7)]);
var inst_35181 = (state_35208[(11)]);
var inst_35175 = (state_35208[(9)]);
var inst_35171 = (state_35208[(8)]);
var inst_35180 = (inst_35171[inst_35172] = inst_35175);
var inst_35181__$1 = (inst_35172 + (1));
var inst_35182 = (inst_35181__$1 < n);
var state_35208__$1 = (function (){var statearr_35242 = state_35208;
(statearr_35242[(12)] = inst_35180);

(statearr_35242[(11)] = inst_35181__$1);

return statearr_35242;
})();
if(cljs.core.truth_(inst_35182)){
var statearr_35243_36366 = state_35208__$1;
(statearr_35243_36366[(1)] = (8));

} else {
var statearr_35247_36367 = state_35208__$1;
(statearr_35247_36367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (14))){
var inst_35201 = (state_35208[(2)]);
var inst_35202 = cljs.core.async.close_BANG_(out);
var state_35208__$1 = (function (){var statearr_35249 = state_35208;
(statearr_35249[(13)] = inst_35201);

return statearr_35249;
})();
var statearr_35250_36368 = state_35208__$1;
(statearr_35250_36368[(2)] = inst_35202);

(statearr_35250_36368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (10))){
var inst_35192 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35254_36369 = state_35208__$1;
(statearr_35254_36369[(2)] = inst_35192);

(statearr_35254_36369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (8))){
var inst_35181 = (state_35208[(11)]);
var inst_35171 = (state_35208[(8)]);
var tmp35248 = inst_35171;
var inst_35171__$1 = tmp35248;
var inst_35172 = inst_35181;
var state_35208__$1 = (function (){var statearr_35255 = state_35208;
(statearr_35255[(7)] = inst_35172);

(statearr_35255[(8)] = inst_35171__$1);

return statearr_35255;
})();
var statearr_35256_36374 = state_35208__$1;
(statearr_35256_36374[(2)] = null);

(statearr_35256_36374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_35260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35260[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_35260[(1)] = (1));

return statearr_35260;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_35208){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_35208);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e35261){var ex__32953__auto__ = e35261;
var statearr_35262_36384 = state_35208;
(statearr_35262_36384[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_35208[(4)]))){
var statearr_35263_36388 = state_35208;
(statearr_35263_36388[(1)] = cljs.core.first((state_35208[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36390 = state_35208;
state_35208 = G__36390;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_35208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_35208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_35264 = f__33137__auto__();
(statearr_35264[(6)] = c__33136__auto___36265);

return statearr_35264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35269 = arguments.length;
switch (G__35269) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33136__auto___36397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33137__auto__ = (function (){var switch__32949__auto__ = (function (state_35314){
var state_val_35315 = (state_35314[(1)]);
if((state_val_35315 === (7))){
var inst_35310 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35316_36398 = state_35314__$1;
(statearr_35316_36398[(2)] = inst_35310);

(statearr_35316_36398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (1))){
var inst_35270 = [];
var inst_35271 = inst_35270;
var inst_35272 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35314__$1 = (function (){var statearr_35317 = state_35314;
(statearr_35317[(7)] = inst_35271);

(statearr_35317[(8)] = inst_35272);

return statearr_35317;
})();
var statearr_35318_36402 = state_35314__$1;
(statearr_35318_36402[(2)] = null);

(statearr_35318_36402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (4))){
var inst_35275 = (state_35314[(9)]);
var inst_35275__$1 = (state_35314[(2)]);
var inst_35276 = (inst_35275__$1 == null);
var inst_35277 = cljs.core.not(inst_35276);
var state_35314__$1 = (function (){var statearr_35319 = state_35314;
(statearr_35319[(9)] = inst_35275__$1);

return statearr_35319;
})();
if(inst_35277){
var statearr_35320_36412 = state_35314__$1;
(statearr_35320_36412[(1)] = (5));

} else {
var statearr_35321_36415 = state_35314__$1;
(statearr_35321_36415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (15))){
var inst_35304 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35322_36422 = state_35314__$1;
(statearr_35322_36422[(2)] = inst_35304);

(statearr_35322_36422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (13))){
var state_35314__$1 = state_35314;
var statearr_35323_36427 = state_35314__$1;
(statearr_35323_36427[(2)] = null);

(statearr_35323_36427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (6))){
var inst_35271 = (state_35314[(7)]);
var inst_35299 = inst_35271.length;
var inst_35300 = (inst_35299 > (0));
var state_35314__$1 = state_35314;
if(cljs.core.truth_(inst_35300)){
var statearr_35328_36436 = state_35314__$1;
(statearr_35328_36436[(1)] = (12));

} else {
var statearr_35330_36437 = state_35314__$1;
(statearr_35330_36437[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (3))){
var inst_35312 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35314__$1,inst_35312);
} else {
if((state_val_35315 === (12))){
var inst_35271 = (state_35314[(7)]);
var inst_35302 = cljs.core.vec(inst_35271);
var state_35314__$1 = state_35314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35314__$1,(15),out,inst_35302);
} else {
if((state_val_35315 === (2))){
var state_35314__$1 = state_35314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35314__$1,(4),ch);
} else {
if((state_val_35315 === (11))){
var inst_35279 = (state_35314[(10)]);
var inst_35275 = (state_35314[(9)]);
var inst_35292 = (state_35314[(2)]);
var inst_35293 = [];
var inst_35294 = inst_35293.push(inst_35275);
var inst_35271 = inst_35293;
var inst_35272 = inst_35279;
var state_35314__$1 = (function (){var statearr_35338 = state_35314;
(statearr_35338[(11)] = inst_35292);

(statearr_35338[(7)] = inst_35271);

(statearr_35338[(12)] = inst_35294);

(statearr_35338[(8)] = inst_35272);

return statearr_35338;
})();
var statearr_35339_36459 = state_35314__$1;
(statearr_35339_36459[(2)] = null);

(statearr_35339_36459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (9))){
var inst_35271 = (state_35314[(7)]);
var inst_35290 = cljs.core.vec(inst_35271);
var state_35314__$1 = state_35314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35314__$1,(11),out,inst_35290);
} else {
if((state_val_35315 === (5))){
var inst_35279 = (state_35314[(10)]);
var inst_35275 = (state_35314[(9)]);
var inst_35272 = (state_35314[(8)]);
var inst_35279__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35275) : f.call(null,inst_35275));
var inst_35280 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35279__$1,inst_35272);
var inst_35281 = cljs.core.keyword_identical_QMARK_(inst_35272,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35282 = ((inst_35280) || (inst_35281));
var state_35314__$1 = (function (){var statearr_35340 = state_35314;
(statearr_35340[(10)] = inst_35279__$1);

return statearr_35340;
})();
if(cljs.core.truth_(inst_35282)){
var statearr_35341_36464 = state_35314__$1;
(statearr_35341_36464[(1)] = (8));

} else {
var statearr_35342_36465 = state_35314__$1;
(statearr_35342_36465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (14))){
var inst_35307 = (state_35314[(2)]);
var inst_35308 = cljs.core.async.close_BANG_(out);
var state_35314__$1 = (function (){var statearr_35344 = state_35314;
(statearr_35344[(13)] = inst_35307);

return statearr_35344;
})();
var statearr_35345_36466 = state_35314__$1;
(statearr_35345_36466[(2)] = inst_35308);

(statearr_35345_36466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (10))){
var inst_35297 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35346_36467 = state_35314__$1;
(statearr_35346_36467[(2)] = inst_35297);

(statearr_35346_36467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (8))){
var inst_35279 = (state_35314[(10)]);
var inst_35271 = (state_35314[(7)]);
var inst_35275 = (state_35314[(9)]);
var inst_35287 = inst_35271.push(inst_35275);
var tmp35343 = inst_35271;
var inst_35271__$1 = tmp35343;
var inst_35272 = inst_35279;
var state_35314__$1 = (function (){var statearr_35347 = state_35314;
(statearr_35347[(14)] = inst_35287);

(statearr_35347[(7)] = inst_35271__$1);

(statearr_35347[(8)] = inst_35272);

return statearr_35347;
})();
var statearr_35348_36468 = state_35314__$1;
(statearr_35348_36468[(2)] = null);

(statearr_35348_36468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32950__auto__ = null;
var cljs$core$async$state_machine__32950__auto____0 = (function (){
var statearr_35349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35349[(0)] = cljs$core$async$state_machine__32950__auto__);

(statearr_35349[(1)] = (1));

return statearr_35349;
});
var cljs$core$async$state_machine__32950__auto____1 = (function (state_35314){
while(true){
var ret_value__32951__auto__ = (function (){try{while(true){
var result__32952__auto__ = switch__32949__auto__(state_35314);
if(cljs.core.keyword_identical_QMARK_(result__32952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32952__auto__;
}
break;
}
}catch (e35350){var ex__32953__auto__ = e35350;
var statearr_35351_36484 = state_35314;
(statearr_35351_36484[(2)] = ex__32953__auto__);


if(cljs.core.seq((state_35314[(4)]))){
var statearr_35352_36485 = state_35314;
(statearr_35352_36485[(1)] = cljs.core.first((state_35314[(4)])));

} else {
throw ex__32953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36486 = state_35314;
state_35314 = G__36486;
continue;
} else {
return ret_value__32951__auto__;
}
break;
}
});
cljs$core$async$state_machine__32950__auto__ = function(state_35314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32950__auto____1.call(this,state_35314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32950__auto____0;
cljs$core$async$state_machine__32950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32950__auto____1;
return cljs$core$async$state_machine__32950__auto__;
})()
})();
var state__33138__auto__ = (function (){var statearr_35353 = f__33137__auto__();
(statearr_35353[(6)] = c__33136__auto___36397);

return statearr_35353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33138__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
