// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11386 = (function (f,fn_handler,meta11387){
this.f = f;
this.fn_handler = fn_handler;
this.meta11387 = meta11387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11386.cljs$lang$type = true;
cljs.core.async.t11386.cljs$lang$ctorStr = "cljs.core.async/t11386";
cljs.core.async.t11386.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11386");
});
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11388){var self__ = this;
var _11388__$1 = this;return self__.meta11387;
});
cljs.core.async.t11386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11388,meta11387__$1){var self__ = this;
var _11388__$1 = this;return (new cljs.core.async.t11386(self__.f,self__.fn_handler,meta11387__$1));
});
cljs.core.async.__GT_t11386 = (function __GT_t11386(f__$1,fn_handler__$1,meta11387){return (new cljs.core.async.t11386(f__$1,fn_handler__$1,meta11387));
});
}
return (new cljs.core.async.t11386(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11390 = buff;if(G__11390)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__11390.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11390.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__11390);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__11390);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_11391 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11391) : fn1.call(null,val_11391));
} else
{cljs.core.async.impl.dispatch.run(((function (val_11391,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11391) : fn1.call(null,val_11391));
});})(val_11391,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref(ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref(retb);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___11392 = n;var x_11393 = 0;while(true){
if((x_11393 < n__4329__auto___11392))
{(a[x_11393] = 0);
{
var G__11394 = (x_11393 + 1);
x_11393 = G__11394;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11395 = (i + 1);
i = G__11395;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t11399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11399 = (function (flag,alt_flag,meta11400){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11400 = meta11400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11399.cljs$lang$type = true;
cljs.core.async.t11399.cljs$lang$ctorStr = "cljs.core.async/t11399";
cljs.core.async.t11399.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11399");
});})(flag))
;
cljs.core.async.t11399.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t11399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11401){var self__ = this;
var _11401__$1 = this;return self__.meta11400;
});})(flag))
;
cljs.core.async.t11399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11401,meta11400__$1){var self__ = this;
var _11401__$1 = this;return (new cljs.core.async.t11399(self__.flag,self__.alt_flag,meta11400__$1));
});})(flag))
;
cljs.core.async.__GT_t11399 = ((function (flag){
return (function __GT_t11399(flag__$1,alt_flag__$1,meta11400){return (new cljs.core.async.t11399(flag__$1,alt_flag__$1,meta11400));
});})(flag))
;
}
return (new cljs.core.async.t11399(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11405 = (function (cb,flag,alt_handler,meta11406){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11406 = meta11406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11405.cljs$lang$type = true;
cljs.core.async.t11405.cljs$lang$ctorStr = "cljs.core.async/t11405";
cljs.core.async.t11405.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11405");
});
cljs.core.async.t11405.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t11405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t11405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11407){var self__ = this;
var _11407__$1 = this;return self__.meta11406;
});
cljs.core.async.t11405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11407,meta11406__$1){var self__ = this;
var _11407__$1 = this;return (new cljs.core.async.t11405(self__.cb,self__.flag,self__.alt_handler,meta11406__$1));
});
cljs.core.async.__GT_t11405 = (function __GT_t11405(cb__$1,flag__$1,alt_handler__$1,meta11406){return (new cljs.core.async.t11405(cb__$1,flag__$1,alt_handler__$1,meta11406));
});
}
return (new cljs.core.async.t11405(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11408_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11408_SHARP_,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11408_SHARP_,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11409_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11409_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11409_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3481__auto__ = wport;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11410 = (i + 1);
i = G__11410;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3481__auto__ = ret;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3469__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3469__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11411){var map__11413 = p__11411;var map__11413__$1 = ((cljs.core.seq_QMARK_(map__11413))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11413):map__11413);var opts = map__11413__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11411 = null;if (arguments.length > 1) {
  p__11411 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11411);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11414){
var ports = cljs.core.first(arglist__11414);
var p__11411 = cljs.core.rest(arglist__11414);
return alts_BANG___delegate(ports,p__11411);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11422 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11422 = (function (ch,f,map_LT_,meta11423){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11423 = meta11423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11422.cljs$lang$type = true;
cljs.core.async.t11422.cljs$lang$ctorStr = "cljs.core.async/t11422";
cljs.core.async.t11422.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11422");
});
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t11425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11425 = (function (fn1,_,meta11423,ch,f,map_LT_,meta11426){
this.fn1 = fn1;
this._ = _;
this.meta11423 = meta11423;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11426 = meta11426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11425.cljs$lang$type = true;
cljs.core.async.t11425.cljs$lang$ctorStr = "cljs.core.async/t11425";
cljs.core.async.t11425.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11425");
});})(___$1))
;
cljs.core.async.t11425.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t11425.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t11425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11415_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__11415_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11415_SHARP_) : self__.f.call(null,p1__11415_SHARP_)))) : f1.call(null,(((p1__11415_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11415_SHARP_) : self__.f.call(null,p1__11415_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11427){var self__ = this;
var _11427__$1 = this;return self__.meta11426;
});})(___$1))
;
cljs.core.async.t11425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11427,meta11426__$1){var self__ = this;
var _11427__$1 = this;return (new cljs.core.async.t11425(self__.fn1,self__._,self__.meta11423,self__.ch,self__.f,self__.map_LT_,meta11426__$1));
});})(___$1))
;
cljs.core.async.__GT_t11425 = ((function (___$1){
return (function __GT_t11425(fn1__$1,___$2,meta11423__$1,ch__$2,f__$2,map_LT___$2,meta11426){return (new cljs.core.async.t11425(fn1__$1,___$2,meta11423__$1,ch__$2,f__$2,map_LT___$2,meta11426));
});})(___$1))
;
}
return (new cljs.core.async.t11425(fn1,___$1,self__.meta11423,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3469__auto__ = ret;if(cljs.core.truth_(and__3469__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3469__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t11422.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t11422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11424){var self__ = this;
var _11424__$1 = this;return self__.meta11423;
});
cljs.core.async.t11422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11424,meta11423__$1){var self__ = this;
var _11424__$1 = this;return (new cljs.core.async.t11422(self__.ch,self__.f,self__.map_LT_,meta11423__$1));
});
cljs.core.async.__GT_t11422 = (function __GT_t11422(ch__$1,f__$1,map_LT___$1,meta11423){return (new cljs.core.async.t11422(ch__$1,f__$1,map_LT___$1,meta11423));
});
}
return (new cljs.core.async.t11422(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11431 = (function (ch,f,map_GT_,meta11432){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11432 = meta11432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11431.cljs$lang$type = true;
cljs.core.async.t11431.cljs$lang$ctorStr = "cljs.core.async/t11431";
cljs.core.async.t11431.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11431");
});
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t11431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11433){var self__ = this;
var _11433__$1 = this;return self__.meta11432;
});
cljs.core.async.t11431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11433,meta11432__$1){var self__ = this;
var _11433__$1 = this;return (new cljs.core.async.t11431(self__.ch,self__.f,self__.map_GT_,meta11432__$1));
});
cljs.core.async.__GT_t11431 = (function __GT_t11431(ch__$1,f__$1,map_GT___$1,meta11432){return (new cljs.core.async.t11431(ch__$1,f__$1,map_GT___$1,meta11432));
});
}
return (new cljs.core.async.t11431(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11437 = (function (ch,p,filter_GT_,meta11438){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11438 = meta11438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11437.cljs$lang$type = true;
cljs.core.async.t11437.cljs$lang$ctorStr = "cljs.core.async/t11437";
cljs.core.async.t11437.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t11437");
});
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t11437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t11437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11439){var self__ = this;
var _11439__$1 = this;return self__.meta11438;
});
cljs.core.async.t11437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11439,meta11438__$1){var self__ = this;
var _11439__$1 = this;return (new cljs.core.async.t11437(self__.ch,self__.p,self__.filter_GT_,meta11438__$1));
});
cljs.core.async.__GT_t11437 = (function __GT_t11437(ch__$1,p__$1,filter_GT___$1,meta11438){return (new cljs.core.async.t11437(ch__$1,p__$1,filter_GT___$1,meta11438));
});
}
return (new cljs.core.async.t11437(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6772__auto___11522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___11522,out){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___11522,out){
return (function (state_11501){var state_val_11502 = (state_11501[1]);if((state_val_11502 === 7))
{var inst_11497 = (state_11501[2]);var state_11501__$1 = state_11501;var statearr_11503_11523 = state_11501__$1;(statearr_11503_11523[2] = inst_11497);
(statearr_11503_11523[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11502 === 1))
{var state_11501__$1 = state_11501;var statearr_11504_11524 = state_11501__$1;(statearr_11504_11524[2] = null);
(statearr_11504_11524[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11502 === 4))
{var inst_11483 = (state_11501[7]);var inst_11483__$1 = (state_11501[2]);var inst_11484 = (inst_11483__$1 == null);var state_11501__$1 = (function (){var statearr_11505 = state_11501;(statearr_11505[7] = inst_11483__$1);
return statearr_11505;
})();if(cljs.core.truth_(inst_11484))
{var statearr_11506_11525 = state_11501__$1;(statearr_11506_11525[1] = 5);
} else
{var statearr_11507_11526 = state_11501__$1;(statearr_11507_11526[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11502 === 6))
{var inst_11483 = (state_11501[7]);var inst_11488 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11483) : p.call(null,inst_11483));var state_11501__$1 = state_11501;if(cljs.core.truth_(inst_11488))
{var statearr_11508_11527 = state_11501__$1;(statearr_11508_11527[1] = 8);
} else
{var statearr_11509_11528 = state_11501__$1;(statearr_11509_11528[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11502 === 3))
{var inst_11499 = (state_11501[2]);var state_11501__$1 = state_11501;return cljs.core.async.impl.ioc_helpers.return_chan(state_11501__$1,inst_11499);
} else
{if((state_val_11502 === 2))
{var state_11501__$1 = state_11501;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11501__$1,4,ch);
} else
{if((state_val_11502 === 11))
{var inst_11491 = (state_11501[2]);var state_11501__$1 = state_11501;var statearr_11510_11529 = state_11501__$1;(statearr_11510_11529[2] = inst_11491);
(statearr_11510_11529[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11502 === 9))
{var state_11501__$1 = state_11501;var statearr_11511_11530 = state_11501__$1;(statearr_11511_11530[2] = null);
(statearr_11511_11530[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11502 === 5))
{var inst_11486 = cljs.core.async.close_BANG_(out);var state_11501__$1 = state_11501;var statearr_11512_11531 = state_11501__$1;(statearr_11512_11531[2] = inst_11486);
(statearr_11512_11531[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11502 === 10))
{var inst_11494 = (state_11501[2]);var state_11501__$1 = (function (){var statearr_11513 = state_11501;(statearr_11513[8] = inst_11494);
return statearr_11513;
})();var statearr_11514_11532 = state_11501__$1;(statearr_11514_11532[2] = null);
(statearr_11514_11532[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11502 === 8))
{var inst_11483 = (state_11501[7]);var state_11501__$1 = state_11501;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11501__$1,11,out,inst_11483);
} else
{return null;
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
});})(c__6772__auto___11522,out))
;return ((function (switch__6708__auto__,c__6772__auto___11522,out){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_11518 = [null,null,null,null,null,null,null,null,null];(statearr_11518[0] = state_machine__6709__auto__);
(statearr_11518[1] = 1);
return statearr_11518;
});
var state_machine__6709__auto____1 = (function (state_11501){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_11501);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e11519){if((e11519 instanceof Object))
{var ex__6712__auto__ = e11519;var statearr_11520_11533 = state_11501;(statearr_11520_11533[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11501);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__11534 = state_11501;
state_11501 = G__11534;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_11501){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_11501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___11522,out))
})();var state__6774__auto__ = (function (){var statearr_11521 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_11521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___11522);
return statearr_11521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___11522,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto__){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto__){
return (function (state_11700){var state_val_11701 = (state_11700[1]);if((state_val_11701 === 7))
{var inst_11696 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11702_11743 = state_11700__$1;(statearr_11702_11743[2] = inst_11696);
(statearr_11702_11743[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 20))
{var inst_11666 = (state_11700[7]);var inst_11677 = (state_11700[2]);var inst_11678 = cljs.core.next(inst_11666);var inst_11652 = inst_11678;var inst_11653 = null;var inst_11654 = 0;var inst_11655 = 0;var state_11700__$1 = (function (){var statearr_11703 = state_11700;(statearr_11703[8] = inst_11652);
(statearr_11703[9] = inst_11654);
(statearr_11703[10] = inst_11655);
(statearr_11703[11] = inst_11677);
(statearr_11703[12] = inst_11653);
return statearr_11703;
})();var statearr_11704_11744 = state_11700__$1;(statearr_11704_11744[2] = null);
(statearr_11704_11744[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 1))
{var state_11700__$1 = state_11700;var statearr_11705_11745 = state_11700__$1;(statearr_11705_11745[2] = null);
(statearr_11705_11745[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 4))
{var inst_11641 = (state_11700[13]);var inst_11641__$1 = (state_11700[2]);var inst_11642 = (inst_11641__$1 == null);var state_11700__$1 = (function (){var statearr_11706 = state_11700;(statearr_11706[13] = inst_11641__$1);
return statearr_11706;
})();if(cljs.core.truth_(inst_11642))
{var statearr_11707_11746 = state_11700__$1;(statearr_11707_11746[1] = 5);
} else
{var statearr_11708_11747 = state_11700__$1;(statearr_11708_11747[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 15))
{var state_11700__$1 = state_11700;var statearr_11712_11748 = state_11700__$1;(statearr_11712_11748[2] = null);
(statearr_11712_11748[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 21))
{var state_11700__$1 = state_11700;var statearr_11713_11749 = state_11700__$1;(statearr_11713_11749[2] = null);
(statearr_11713_11749[1] = 23);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 13))
{var inst_11652 = (state_11700[8]);var inst_11654 = (state_11700[9]);var inst_11655 = (state_11700[10]);var inst_11653 = (state_11700[12]);var inst_11662 = (state_11700[2]);var inst_11663 = (inst_11655 + 1);var tmp11709 = inst_11652;var tmp11710 = inst_11654;var tmp11711 = inst_11653;var inst_11652__$1 = tmp11709;var inst_11653__$1 = tmp11711;var inst_11654__$1 = tmp11710;var inst_11655__$1 = inst_11663;var state_11700__$1 = (function (){var statearr_11714 = state_11700;(statearr_11714[14] = inst_11662);
(statearr_11714[8] = inst_11652__$1);
(statearr_11714[9] = inst_11654__$1);
(statearr_11714[10] = inst_11655__$1);
(statearr_11714[12] = inst_11653__$1);
return statearr_11714;
})();var statearr_11715_11750 = state_11700__$1;(statearr_11715_11750[2] = null);
(statearr_11715_11750[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 22))
{var state_11700__$1 = state_11700;var statearr_11716_11751 = state_11700__$1;(statearr_11716_11751[2] = null);
(statearr_11716_11751[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 6))
{var inst_11641 = (state_11700[13]);var inst_11650 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11641) : f.call(null,inst_11641));var inst_11651 = cljs.core.seq(inst_11650);var inst_11652 = inst_11651;var inst_11653 = null;var inst_11654 = 0;var inst_11655 = 0;var state_11700__$1 = (function (){var statearr_11717 = state_11700;(statearr_11717[8] = inst_11652);
(statearr_11717[9] = inst_11654);
(statearr_11717[10] = inst_11655);
(statearr_11717[12] = inst_11653);
return statearr_11717;
})();var statearr_11718_11752 = state_11700__$1;(statearr_11718_11752[2] = null);
(statearr_11718_11752[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 17))
{var inst_11666 = (state_11700[7]);var inst_11670 = cljs.core.chunk_first(inst_11666);var inst_11671 = cljs.core.chunk_rest(inst_11666);var inst_11672 = cljs.core.count(inst_11670);var inst_11652 = inst_11671;var inst_11653 = inst_11670;var inst_11654 = inst_11672;var inst_11655 = 0;var state_11700__$1 = (function (){var statearr_11719 = state_11700;(statearr_11719[8] = inst_11652);
(statearr_11719[9] = inst_11654);
(statearr_11719[10] = inst_11655);
(statearr_11719[12] = inst_11653);
return statearr_11719;
})();var statearr_11720_11753 = state_11700__$1;(statearr_11720_11753[2] = null);
(statearr_11720_11753[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 3))
{var inst_11698 = (state_11700[2]);var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.return_chan(state_11700__$1,inst_11698);
} else
{if((state_val_11701 === 12))
{var inst_11686 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11721_11754 = state_11700__$1;(statearr_11721_11754[2] = inst_11686);
(statearr_11721_11754[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 2))
{var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11700__$1,4,in$);
} else
{if((state_val_11701 === 23))
{var inst_11694 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11722_11755 = state_11700__$1;(statearr_11722_11755[2] = inst_11694);
(statearr_11722_11755[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 19))
{var inst_11681 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11723_11756 = state_11700__$1;(statearr_11723_11756[2] = inst_11681);
(statearr_11723_11756[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 11))
{var inst_11652 = (state_11700[8]);var inst_11666 = (state_11700[7]);var inst_11666__$1 = cljs.core.seq(inst_11652);var state_11700__$1 = (function (){var statearr_11724 = state_11700;(statearr_11724[7] = inst_11666__$1);
return statearr_11724;
})();if(inst_11666__$1)
{var statearr_11725_11757 = state_11700__$1;(statearr_11725_11757[1] = 14);
} else
{var statearr_11726_11758 = state_11700__$1;(statearr_11726_11758[1] = 15);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 9))
{var inst_11688 = (state_11700[2]);var inst_11689 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_11700__$1 = (function (){var statearr_11727 = state_11700;(statearr_11727[15] = inst_11688);
return statearr_11727;
})();if(cljs.core.truth_(inst_11689))
{var statearr_11728_11759 = state_11700__$1;(statearr_11728_11759[1] = 21);
} else
{var statearr_11729_11760 = state_11700__$1;(statearr_11729_11760[1] = 22);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 5))
{var inst_11644 = cljs.core.async.close_BANG_(out);var state_11700__$1 = state_11700;var statearr_11730_11761 = state_11700__$1;(statearr_11730_11761[2] = inst_11644);
(statearr_11730_11761[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 14))
{var inst_11666 = (state_11700[7]);var inst_11668 = cljs.core.chunked_seq_QMARK_(inst_11666);var state_11700__$1 = state_11700;if(inst_11668)
{var statearr_11731_11762 = state_11700__$1;(statearr_11731_11762[1] = 17);
} else
{var statearr_11732_11763 = state_11700__$1;(statearr_11732_11763[1] = 18);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 16))
{var inst_11684 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11733_11764 = state_11700__$1;(statearr_11733_11764[2] = inst_11684);
(statearr_11733_11764[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11701 === 10))
{var inst_11655 = (state_11700[10]);var inst_11653 = (state_11700[12]);var inst_11660 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11653,inst_11655);var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11700__$1,13,out,inst_11660);
} else
{if((state_val_11701 === 18))
{var inst_11666 = (state_11700[7]);var inst_11675 = cljs.core.first(inst_11666);var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11700__$1,20,out,inst_11675);
} else
{if((state_val_11701 === 8))
{var inst_11654 = (state_11700[9]);var inst_11655 = (state_11700[10]);var inst_11657 = (inst_11655 < inst_11654);var inst_11658 = inst_11657;var state_11700__$1 = state_11700;if(cljs.core.truth_(inst_11658))
{var statearr_11734_11765 = state_11700__$1;(statearr_11734_11765[1] = 10);
} else
{var statearr_11735_11766 = state_11700__$1;(statearr_11735_11766[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto__))
;return ((function (switch__6708__auto__,c__6772__auto__){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_11739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11739[0] = state_machine__6709__auto__);
(statearr_11739[1] = 1);
return statearr_11739;
});
var state_machine__6709__auto____1 = (function (state_11700){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_11700);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e11740){if((e11740 instanceof Object))
{var ex__6712__auto__ = e11740;var statearr_11741_11767 = state_11700;(statearr_11741_11767[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11700);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__11768 = state_11700;
state_11700 = G__11768;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_11700){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_11700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto__))
})();var state__6774__auto__ = (function (){var statearr_11742 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_11742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto__);
return statearr_11742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto__))
);
return c__6772__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6772__auto___11863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___11863){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___11863){
return (function (state_11839){var state_val_11840 = (state_11839[1]);if((state_val_11840 === 7))
{var inst_11835 = (state_11839[2]);var state_11839__$1 = state_11839;var statearr_11841_11864 = state_11839__$1;(statearr_11841_11864[2] = inst_11835);
(statearr_11841_11864[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 1))
{var state_11839__$1 = state_11839;var statearr_11842_11865 = state_11839__$1;(statearr_11842_11865[2] = null);
(statearr_11842_11865[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 4))
{var inst_11818 = (state_11839[7]);var inst_11818__$1 = (state_11839[2]);var inst_11819 = (inst_11818__$1 == null);var state_11839__$1 = (function (){var statearr_11843 = state_11839;(statearr_11843[7] = inst_11818__$1);
return statearr_11843;
})();if(cljs.core.truth_(inst_11819))
{var statearr_11844_11866 = state_11839__$1;(statearr_11844_11866[1] = 5);
} else
{var statearr_11845_11867 = state_11839__$1;(statearr_11845_11867[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 13))
{var state_11839__$1 = state_11839;var statearr_11846_11868 = state_11839__$1;(statearr_11846_11868[2] = null);
(statearr_11846_11868[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 6))
{var inst_11818 = (state_11839[7]);var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11839__$1,11,to,inst_11818);
} else
{if((state_val_11840 === 3))
{var inst_11837 = (state_11839[2]);var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.return_chan(state_11839__$1,inst_11837);
} else
{if((state_val_11840 === 12))
{var state_11839__$1 = state_11839;var statearr_11847_11869 = state_11839__$1;(statearr_11847_11869[2] = null);
(statearr_11847_11869[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 2))
{var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11839__$1,4,from);
} else
{if((state_val_11840 === 11))
{var inst_11828 = (state_11839[2]);var state_11839__$1 = state_11839;if(cljs.core.truth_(inst_11828))
{var statearr_11848_11870 = state_11839__$1;(statearr_11848_11870[1] = 12);
} else
{var statearr_11849_11871 = state_11839__$1;(statearr_11849_11871[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 9))
{var state_11839__$1 = state_11839;var statearr_11850_11872 = state_11839__$1;(statearr_11850_11872[2] = null);
(statearr_11850_11872[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 5))
{var state_11839__$1 = state_11839;if(cljs.core.truth_(close_QMARK_))
{var statearr_11851_11873 = state_11839__$1;(statearr_11851_11873[1] = 8);
} else
{var statearr_11852_11874 = state_11839__$1;(statearr_11852_11874[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 14))
{var inst_11833 = (state_11839[2]);var state_11839__$1 = state_11839;var statearr_11853_11875 = state_11839__$1;(statearr_11853_11875[2] = inst_11833);
(statearr_11853_11875[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 10))
{var inst_11825 = (state_11839[2]);var state_11839__$1 = state_11839;var statearr_11854_11876 = state_11839__$1;(statearr_11854_11876[2] = inst_11825);
(statearr_11854_11876[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11840 === 8))
{var inst_11822 = cljs.core.async.close_BANG_(to);var state_11839__$1 = state_11839;var statearr_11855_11877 = state_11839__$1;(statearr_11855_11877[2] = inst_11822);
(statearr_11855_11877[1] = 10);
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___11863))
;return ((function (switch__6708__auto__,c__6772__auto___11863){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_11859 = [null,null,null,null,null,null,null,null];(statearr_11859[0] = state_machine__6709__auto__);
(statearr_11859[1] = 1);
return statearr_11859;
});
var state_machine__6709__auto____1 = (function (state_11839){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_11839);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e11860){if((e11860 instanceof Object))
{var ex__6712__auto__ = e11860;var statearr_11861_11878 = state_11839;(statearr_11861_11878[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11839);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__11879 = state_11839;
state_11839 = G__11879;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_11839){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_11839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___11863))
})();var state__6774__auto__ = (function (){var statearr_11862 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_11862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___11863);
return statearr_11862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___11863))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6772__auto___11980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___11980,tc,fc){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___11980,tc,fc){
return (function (state_11955){var state_val_11956 = (state_11955[1]);if((state_val_11956 === 7))
{var inst_11951 = (state_11955[2]);var state_11955__$1 = state_11955;var statearr_11957_11981 = state_11955__$1;(statearr_11957_11981[2] = inst_11951);
(statearr_11957_11981[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 1))
{var state_11955__$1 = state_11955;var statearr_11958_11982 = state_11955__$1;(statearr_11958_11982[2] = null);
(statearr_11958_11982[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 4))
{var inst_11932 = (state_11955[7]);var inst_11932__$1 = (state_11955[2]);var inst_11933 = (inst_11932__$1 == null);var state_11955__$1 = (function (){var statearr_11959 = state_11955;(statearr_11959[7] = inst_11932__$1);
return statearr_11959;
})();if(cljs.core.truth_(inst_11933))
{var statearr_11960_11983 = state_11955__$1;(statearr_11960_11983[1] = 5);
} else
{var statearr_11961_11984 = state_11955__$1;(statearr_11961_11984[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 13))
{var state_11955__$1 = state_11955;var statearr_11962_11985 = state_11955__$1;(statearr_11962_11985[2] = null);
(statearr_11962_11985[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 6))
{var inst_11932 = (state_11955[7]);var inst_11938 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11932) : p.call(null,inst_11932));var state_11955__$1 = state_11955;if(cljs.core.truth_(inst_11938))
{var statearr_11963_11986 = state_11955__$1;(statearr_11963_11986[1] = 9);
} else
{var statearr_11964_11987 = state_11955__$1;(statearr_11964_11987[1] = 10);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 3))
{var inst_11953 = (state_11955[2]);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.return_chan(state_11955__$1,inst_11953);
} else
{if((state_val_11956 === 12))
{var state_11955__$1 = state_11955;var statearr_11965_11988 = state_11955__$1;(statearr_11965_11988[2] = null);
(statearr_11965_11988[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 2))
{var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11955__$1,4,ch);
} else
{if((state_val_11956 === 11))
{var inst_11932 = (state_11955[7]);var inst_11942 = (state_11955[2]);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11955__$1,8,inst_11942,inst_11932);
} else
{if((state_val_11956 === 9))
{var state_11955__$1 = state_11955;var statearr_11966_11989 = state_11955__$1;(statearr_11966_11989[2] = tc);
(statearr_11966_11989[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 5))
{var inst_11935 = cljs.core.async.close_BANG_(tc);var inst_11936 = cljs.core.async.close_BANG_(fc);var state_11955__$1 = (function (){var statearr_11967 = state_11955;(statearr_11967[8] = inst_11935);
return statearr_11967;
})();var statearr_11968_11990 = state_11955__$1;(statearr_11968_11990[2] = inst_11936);
(statearr_11968_11990[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 14))
{var inst_11949 = (state_11955[2]);var state_11955__$1 = state_11955;var statearr_11969_11991 = state_11955__$1;(statearr_11969_11991[2] = inst_11949);
(statearr_11969_11991[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 10))
{var state_11955__$1 = state_11955;var statearr_11970_11992 = state_11955__$1;(statearr_11970_11992[2] = fc);
(statearr_11970_11992[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11956 === 8))
{var inst_11944 = (state_11955[2]);var state_11955__$1 = state_11955;if(cljs.core.truth_(inst_11944))
{var statearr_11971_11993 = state_11955__$1;(statearr_11971_11993[1] = 12);
} else
{var statearr_11972_11994 = state_11955__$1;(statearr_11972_11994[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___11980,tc,fc))
;return ((function (switch__6708__auto__,c__6772__auto___11980,tc,fc){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_11976 = [null,null,null,null,null,null,null,null,null];(statearr_11976[0] = state_machine__6709__auto__);
(statearr_11976[1] = 1);
return statearr_11976;
});
var state_machine__6709__auto____1 = (function (state_11955){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_11955);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e11977){if((e11977 instanceof Object))
{var ex__6712__auto__ = e11977;var statearr_11978_11995 = state_11955;(statearr_11978_11995[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11955);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__11996 = state_11955;
state_11955 = G__11996;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_11955){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_11955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___11980,tc,fc))
})();var state__6774__auto__ = (function (){var statearr_11979 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_11979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___11980);
return statearr_11979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___11980,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto__){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto__){
return (function (state_12043){var state_val_12044 = (state_12043[1]);if((state_val_12044 === 7))
{var inst_12039 = (state_12043[2]);var state_12043__$1 = state_12043;var statearr_12045_12061 = state_12043__$1;(statearr_12045_12061[2] = inst_12039);
(statearr_12045_12061[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12044 === 6))
{var inst_12032 = (state_12043[7]);var inst_12029 = (state_12043[8]);var inst_12036 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12029,inst_12032) : f.call(null,inst_12029,inst_12032));var inst_12029__$1 = inst_12036;var state_12043__$1 = (function (){var statearr_12046 = state_12043;(statearr_12046[8] = inst_12029__$1);
return statearr_12046;
})();var statearr_12047_12062 = state_12043__$1;(statearr_12047_12062[2] = null);
(statearr_12047_12062[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12044 === 5))
{var inst_12029 = (state_12043[8]);var state_12043__$1 = state_12043;var statearr_12048_12063 = state_12043__$1;(statearr_12048_12063[2] = inst_12029);
(statearr_12048_12063[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12044 === 4))
{var inst_12032 = (state_12043[7]);var inst_12032__$1 = (state_12043[2]);var inst_12033 = (inst_12032__$1 == null);var state_12043__$1 = (function (){var statearr_12049 = state_12043;(statearr_12049[7] = inst_12032__$1);
return statearr_12049;
})();if(cljs.core.truth_(inst_12033))
{var statearr_12050_12064 = state_12043__$1;(statearr_12050_12064[1] = 5);
} else
{var statearr_12051_12065 = state_12043__$1;(statearr_12051_12065[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12044 === 3))
{var inst_12041 = (state_12043[2]);var state_12043__$1 = state_12043;return cljs.core.async.impl.ioc_helpers.return_chan(state_12043__$1,inst_12041);
} else
{if((state_val_12044 === 2))
{var state_12043__$1 = state_12043;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12043__$1,4,ch);
} else
{if((state_val_12044 === 1))
{var inst_12029 = init;var state_12043__$1 = (function (){var statearr_12052 = state_12043;(statearr_12052[8] = inst_12029);
return statearr_12052;
})();var statearr_12053_12066 = state_12043__$1;(statearr_12053_12066[2] = null);
(statearr_12053_12066[1] = 2);
return cljs.core.constant$keyword$17;
} else
{return null;
}
}
}
}
}
}
}
});})(c__6772__auto__))
;return ((function (switch__6708__auto__,c__6772__auto__){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_12057 = [null,null,null,null,null,null,null,null,null];(statearr_12057[0] = state_machine__6709__auto__);
(statearr_12057[1] = 1);
return statearr_12057;
});
var state_machine__6709__auto____1 = (function (state_12043){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_12043);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e12058){if((e12058 instanceof Object))
{var ex__6712__auto__ = e12058;var statearr_12059_12067 = state_12043;(statearr_12059_12067[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12043);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e12058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__12068 = state_12043;
state_12043 = G__12068;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_12043){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_12043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto__))
})();var state__6774__auto__ = (function (){var statearr_12060 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_12060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto__);
return statearr_12060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto__))
);
return c__6772__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto__){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto__){
return (function (state_12142){var state_val_12143 = (state_12142[1]);if((state_val_12143 === 7))
{var inst_12124 = (state_12142[2]);var state_12142__$1 = state_12142;var statearr_12144_12167 = state_12142__$1;(statearr_12144_12167[2] = inst_12124);
(statearr_12144_12167[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 1))
{var inst_12118 = cljs.core.seq(coll);var inst_12119 = inst_12118;var state_12142__$1 = (function (){var statearr_12145 = state_12142;(statearr_12145[7] = inst_12119);
return statearr_12145;
})();var statearr_12146_12168 = state_12142__$1;(statearr_12146_12168[2] = null);
(statearr_12146_12168[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 4))
{var inst_12119 = (state_12142[7]);var inst_12122 = cljs.core.first(inst_12119);var state_12142__$1 = state_12142;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12142__$1,7,ch,inst_12122);
} else
{if((state_val_12143 === 13))
{var inst_12136 = (state_12142[2]);var state_12142__$1 = state_12142;var statearr_12147_12169 = state_12142__$1;(statearr_12147_12169[2] = inst_12136);
(statearr_12147_12169[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 6))
{var inst_12127 = (state_12142[2]);var state_12142__$1 = state_12142;if(cljs.core.truth_(inst_12127))
{var statearr_12148_12170 = state_12142__$1;(statearr_12148_12170[1] = 8);
} else
{var statearr_12149_12171 = state_12142__$1;(statearr_12149_12171[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 3))
{var inst_12140 = (state_12142[2]);var state_12142__$1 = state_12142;return cljs.core.async.impl.ioc_helpers.return_chan(state_12142__$1,inst_12140);
} else
{if((state_val_12143 === 12))
{var state_12142__$1 = state_12142;var statearr_12150_12172 = state_12142__$1;(statearr_12150_12172[2] = null);
(statearr_12150_12172[1] = 13);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 2))
{var inst_12119 = (state_12142[7]);var state_12142__$1 = state_12142;if(cljs.core.truth_(inst_12119))
{var statearr_12151_12173 = state_12142__$1;(statearr_12151_12173[1] = 4);
} else
{var statearr_12152_12174 = state_12142__$1;(statearr_12152_12174[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 11))
{var inst_12133 = cljs.core.async.close_BANG_(ch);var state_12142__$1 = state_12142;var statearr_12153_12175 = state_12142__$1;(statearr_12153_12175[2] = inst_12133);
(statearr_12153_12175[1] = 13);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 9))
{var state_12142__$1 = state_12142;if(cljs.core.truth_(close_QMARK_))
{var statearr_12154_12176 = state_12142__$1;(statearr_12154_12176[1] = 11);
} else
{var statearr_12155_12177 = state_12142__$1;(statearr_12155_12177[1] = 12);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 5))
{var inst_12119 = (state_12142[7]);var state_12142__$1 = state_12142;var statearr_12156_12178 = state_12142__$1;(statearr_12156_12178[2] = inst_12119);
(statearr_12156_12178[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 10))
{var inst_12138 = (state_12142[2]);var state_12142__$1 = state_12142;var statearr_12157_12179 = state_12142__$1;(statearr_12157_12179[2] = inst_12138);
(statearr_12157_12179[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12143 === 8))
{var inst_12119 = (state_12142[7]);var inst_12129 = cljs.core.next(inst_12119);var inst_12119__$1 = inst_12129;var state_12142__$1 = (function (){var statearr_12158 = state_12142;(statearr_12158[7] = inst_12119__$1);
return statearr_12158;
})();var statearr_12159_12180 = state_12142__$1;(statearr_12159_12180[2] = null);
(statearr_12159_12180[1] = 2);
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto__))
;return ((function (switch__6708__auto__,c__6772__auto__){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_12163 = [null,null,null,null,null,null,null,null];(statearr_12163[0] = state_machine__6709__auto__);
(statearr_12163[1] = 1);
return statearr_12163;
});
var state_machine__6709__auto____1 = (function (state_12142){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_12142);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e12164){if((e12164 instanceof Object))
{var ex__6712__auto__ = e12164;var statearr_12165_12181 = state_12142;(statearr_12165_12181[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12142);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e12164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__12182 = state_12142;
state_12142 = G__12182;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_12142){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_12142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto__))
})();var state__6774__auto__ = (function (){var statearr_12166 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_12166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto__);
return statearr_12166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto__))
);
return c__6772__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12184 = {};return obj12184;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3469__auto__ = _;if(and__3469__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4108__auto__ = (((_ == null))?null:_);return (function (){var or__3481__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12186 = {};return obj12186;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12408 = (function (cs,ch,mult,meta12409){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12409 = meta12409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12408.cljs$lang$type = true;
cljs.core.async.t12408.cljs$lang$ctorStr = "cljs.core.async/t12408";
cljs.core.async.t12408.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t12408");
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12408.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12410){var self__ = this;
var _12410__$1 = this;return self__.meta12409;
});})(cs))
;
cljs.core.async.t12408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12410,meta12409__$1){var self__ = this;
var _12410__$1 = this;return (new cljs.core.async.t12408(self__.cs,self__.ch,self__.mult,meta12409__$1));
});})(cs))
;
cljs.core.async.__GT_t12408 = ((function (cs){
return (function __GT_t12408(cs__$1,ch__$1,mult__$1,meta12409){return (new cljs.core.async.t12408(cs__$1,ch__$1,mult__$1,meta12409));
});})(cs))
;
}
return (new cljs.core.async.t12408(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6772__auto___12629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___12629,cs,m,dchan,dctr,done){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___12629,cs,m,dchan,dctr,done){
return (function (state_12541){var state_val_12542 = (state_12541[1]);if((state_val_12542 === 7))
{var inst_12537 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12543_12630 = state_12541__$1;(statearr_12543_12630[2] = inst_12537);
(statearr_12543_12630[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 20))
{var inst_12442 = (state_12541[7]);var inst_12452 = cljs.core.first(inst_12442);var inst_12453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12452,0,null);var inst_12454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12452,1,null);var state_12541__$1 = (function (){var statearr_12544 = state_12541;(statearr_12544[8] = inst_12453);
return statearr_12544;
})();if(cljs.core.truth_(inst_12454))
{var statearr_12545_12631 = state_12541__$1;(statearr_12545_12631[1] = 22);
} else
{var statearr_12546_12632 = state_12541__$1;(statearr_12546_12632[1] = 23);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 27))
{var inst_12489 = (state_12541[9]);var inst_12482 = (state_12541[10]);var inst_12413 = (state_12541[11]);var inst_12484 = (state_12541[12]);var inst_12489__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12482,inst_12484);var inst_12490 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12489__$1,inst_12413,done);var state_12541__$1 = (function (){var statearr_12547 = state_12541;(statearr_12547[9] = inst_12489__$1);
return statearr_12547;
})();if(cljs.core.truth_(inst_12490))
{var statearr_12548_12633 = state_12541__$1;(statearr_12548_12633[1] = 30);
} else
{var statearr_12549_12634 = state_12541__$1;(statearr_12549_12634[1] = 31);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 1))
{var state_12541__$1 = state_12541;var statearr_12550_12635 = state_12541__$1;(statearr_12550_12635[2] = null);
(statearr_12550_12635[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 24))
{var inst_12442 = (state_12541[7]);var inst_12459 = (state_12541[2]);var inst_12460 = cljs.core.next(inst_12442);var inst_12422 = inst_12460;var inst_12423 = null;var inst_12424 = 0;var inst_12425 = 0;var state_12541__$1 = (function (){var statearr_12551 = state_12541;(statearr_12551[13] = inst_12425);
(statearr_12551[14] = inst_12423);
(statearr_12551[15] = inst_12459);
(statearr_12551[16] = inst_12424);
(statearr_12551[17] = inst_12422);
return statearr_12551;
})();var statearr_12552_12636 = state_12541__$1;(statearr_12552_12636[2] = null);
(statearr_12552_12636[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 39))
{var state_12541__$1 = state_12541;var statearr_12556_12637 = state_12541__$1;(statearr_12556_12637[2] = null);
(statearr_12556_12637[1] = 41);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 4))
{var inst_12413 = (state_12541[11]);var inst_12413__$1 = (state_12541[2]);var inst_12414 = (inst_12413__$1 == null);var state_12541__$1 = (function (){var statearr_12557 = state_12541;(statearr_12557[11] = inst_12413__$1);
return statearr_12557;
})();if(cljs.core.truth_(inst_12414))
{var statearr_12558_12638 = state_12541__$1;(statearr_12558_12638[1] = 5);
} else
{var statearr_12559_12639 = state_12541__$1;(statearr_12559_12639[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 15))
{var inst_12425 = (state_12541[13]);var inst_12423 = (state_12541[14]);var inst_12424 = (state_12541[16]);var inst_12422 = (state_12541[17]);var inst_12438 = (state_12541[2]);var inst_12439 = (inst_12425 + 1);var tmp12553 = inst_12423;var tmp12554 = inst_12424;var tmp12555 = inst_12422;var inst_12422__$1 = tmp12555;var inst_12423__$1 = tmp12553;var inst_12424__$1 = tmp12554;var inst_12425__$1 = inst_12439;var state_12541__$1 = (function (){var statearr_12560 = state_12541;(statearr_12560[13] = inst_12425__$1);
(statearr_12560[14] = inst_12423__$1);
(statearr_12560[16] = inst_12424__$1);
(statearr_12560[18] = inst_12438);
(statearr_12560[17] = inst_12422__$1);
return statearr_12560;
})();var statearr_12561_12640 = state_12541__$1;(statearr_12561_12640[2] = null);
(statearr_12561_12640[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 21))
{var inst_12463 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12565_12641 = state_12541__$1;(statearr_12565_12641[2] = inst_12463);
(statearr_12565_12641[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 31))
{var inst_12489 = (state_12541[9]);var inst_12493 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_12494 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12489);var state_12541__$1 = (function (){var statearr_12566 = state_12541;(statearr_12566[19] = inst_12493);
return statearr_12566;
})();var statearr_12567_12642 = state_12541__$1;(statearr_12567_12642[2] = inst_12494);
(statearr_12567_12642[1] = 32);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 32))
{var inst_12482 = (state_12541[10]);var inst_12484 = (state_12541[12]);var inst_12481 = (state_12541[20]);var inst_12483 = (state_12541[21]);var inst_12496 = (state_12541[2]);var inst_12497 = (inst_12484 + 1);var tmp12562 = inst_12482;var tmp12563 = inst_12481;var tmp12564 = inst_12483;var inst_12481__$1 = tmp12563;var inst_12482__$1 = tmp12562;var inst_12483__$1 = tmp12564;var inst_12484__$1 = inst_12497;var state_12541__$1 = (function (){var statearr_12568 = state_12541;(statearr_12568[10] = inst_12482__$1);
(statearr_12568[22] = inst_12496);
(statearr_12568[12] = inst_12484__$1);
(statearr_12568[20] = inst_12481__$1);
(statearr_12568[21] = inst_12483__$1);
return statearr_12568;
})();var statearr_12569_12643 = state_12541__$1;(statearr_12569_12643[2] = null);
(statearr_12569_12643[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 40))
{var inst_12509 = (state_12541[23]);var inst_12513 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_12514 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12509);var state_12541__$1 = (function (){var statearr_12570 = state_12541;(statearr_12570[24] = inst_12513);
return statearr_12570;
})();var statearr_12571_12644 = state_12541__$1;(statearr_12571_12644[2] = inst_12514);
(statearr_12571_12644[1] = 41);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 33))
{var inst_12500 = (state_12541[25]);var inst_12502 = cljs.core.chunked_seq_QMARK_(inst_12500);var state_12541__$1 = state_12541;if(inst_12502)
{var statearr_12572_12645 = state_12541__$1;(statearr_12572_12645[1] = 36);
} else
{var statearr_12573_12646 = state_12541__$1;(statearr_12573_12646[1] = 37);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 13))
{var inst_12432 = (state_12541[26]);var inst_12435 = cljs.core.async.close_BANG_(inst_12432);var state_12541__$1 = state_12541;var statearr_12574_12647 = state_12541__$1;(statearr_12574_12647[2] = inst_12435);
(statearr_12574_12647[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 22))
{var inst_12453 = (state_12541[8]);var inst_12456 = cljs.core.async.close_BANG_(inst_12453);var state_12541__$1 = state_12541;var statearr_12575_12648 = state_12541__$1;(statearr_12575_12648[2] = inst_12456);
(statearr_12575_12648[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 36))
{var inst_12500 = (state_12541[25]);var inst_12504 = cljs.core.chunk_first(inst_12500);var inst_12505 = cljs.core.chunk_rest(inst_12500);var inst_12506 = cljs.core.count(inst_12504);var inst_12481 = inst_12505;var inst_12482 = inst_12504;var inst_12483 = inst_12506;var inst_12484 = 0;var state_12541__$1 = (function (){var statearr_12576 = state_12541;(statearr_12576[10] = inst_12482);
(statearr_12576[12] = inst_12484);
(statearr_12576[20] = inst_12481);
(statearr_12576[21] = inst_12483);
return statearr_12576;
})();var statearr_12577_12649 = state_12541__$1;(statearr_12577_12649[2] = null);
(statearr_12577_12649[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 41))
{var inst_12500 = (state_12541[25]);var inst_12516 = (state_12541[2]);var inst_12517 = cljs.core.next(inst_12500);var inst_12481 = inst_12517;var inst_12482 = null;var inst_12483 = 0;var inst_12484 = 0;var state_12541__$1 = (function (){var statearr_12578 = state_12541;(statearr_12578[10] = inst_12482);
(statearr_12578[27] = inst_12516);
(statearr_12578[12] = inst_12484);
(statearr_12578[20] = inst_12481);
(statearr_12578[21] = inst_12483);
return statearr_12578;
})();var statearr_12579_12650 = state_12541__$1;(statearr_12579_12650[2] = null);
(statearr_12579_12650[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 43))
{var state_12541__$1 = state_12541;var statearr_12580_12651 = state_12541__$1;(statearr_12580_12651[2] = null);
(statearr_12580_12651[1] = 44);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 29))
{var inst_12525 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12581_12652 = state_12541__$1;(statearr_12581_12652[2] = inst_12525);
(statearr_12581_12652[1] = 26);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 44))
{var inst_12534 = (state_12541[2]);var state_12541__$1 = (function (){var statearr_12582 = state_12541;(statearr_12582[28] = inst_12534);
return statearr_12582;
})();var statearr_12583_12653 = state_12541__$1;(statearr_12583_12653[2] = null);
(statearr_12583_12653[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 6))
{var inst_12473 = (state_12541[29]);var inst_12472 = cljs.core.deref(cs);var inst_12473__$1 = cljs.core.keys(inst_12472);var inst_12474 = cljs.core.count(inst_12473__$1);var inst_12475 = cljs.core.reset_BANG_(dctr,inst_12474);var inst_12480 = cljs.core.seq(inst_12473__$1);var inst_12481 = inst_12480;var inst_12482 = null;var inst_12483 = 0;var inst_12484 = 0;var state_12541__$1 = (function (){var statearr_12584 = state_12541;(statearr_12584[30] = inst_12475);
(statearr_12584[10] = inst_12482);
(statearr_12584[12] = inst_12484);
(statearr_12584[29] = inst_12473__$1);
(statearr_12584[20] = inst_12481);
(statearr_12584[21] = inst_12483);
return statearr_12584;
})();var statearr_12585_12654 = state_12541__$1;(statearr_12585_12654[2] = null);
(statearr_12585_12654[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 28))
{var inst_12500 = (state_12541[25]);var inst_12481 = (state_12541[20]);var inst_12500__$1 = cljs.core.seq(inst_12481);var state_12541__$1 = (function (){var statearr_12586 = state_12541;(statearr_12586[25] = inst_12500__$1);
return statearr_12586;
})();if(inst_12500__$1)
{var statearr_12587_12655 = state_12541__$1;(statearr_12587_12655[1] = 33);
} else
{var statearr_12588_12656 = state_12541__$1;(statearr_12588_12656[1] = 34);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 25))
{var inst_12484 = (state_12541[12]);var inst_12483 = (state_12541[21]);var inst_12486 = (inst_12484 < inst_12483);var inst_12487 = inst_12486;var state_12541__$1 = state_12541;if(cljs.core.truth_(inst_12487))
{var statearr_12589_12657 = state_12541__$1;(statearr_12589_12657[1] = 27);
} else
{var statearr_12590_12658 = state_12541__$1;(statearr_12590_12658[1] = 28);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 34))
{var state_12541__$1 = state_12541;var statearr_12591_12659 = state_12541__$1;(statearr_12591_12659[2] = null);
(statearr_12591_12659[1] = 35);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 17))
{var state_12541__$1 = state_12541;var statearr_12592_12660 = state_12541__$1;(statearr_12592_12660[2] = null);
(statearr_12592_12660[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 3))
{var inst_12539 = (state_12541[2]);var state_12541__$1 = state_12541;return cljs.core.async.impl.ioc_helpers.return_chan(state_12541__$1,inst_12539);
} else
{if((state_val_12542 === 12))
{var inst_12468 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12593_12661 = state_12541__$1;(statearr_12593_12661[2] = inst_12468);
(statearr_12593_12661[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 2))
{var state_12541__$1 = state_12541;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12541__$1,4,ch);
} else
{if((state_val_12542 === 23))
{var state_12541__$1 = state_12541;var statearr_12594_12662 = state_12541__$1;(statearr_12594_12662[2] = null);
(statearr_12594_12662[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 35))
{var inst_12523 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12595_12663 = state_12541__$1;(statearr_12595_12663[2] = inst_12523);
(statearr_12595_12663[1] = 29);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 19))
{var inst_12442 = (state_12541[7]);var inst_12446 = cljs.core.chunk_first(inst_12442);var inst_12447 = cljs.core.chunk_rest(inst_12442);var inst_12448 = cljs.core.count(inst_12446);var inst_12422 = inst_12447;var inst_12423 = inst_12446;var inst_12424 = inst_12448;var inst_12425 = 0;var state_12541__$1 = (function (){var statearr_12596 = state_12541;(statearr_12596[13] = inst_12425);
(statearr_12596[14] = inst_12423);
(statearr_12596[16] = inst_12424);
(statearr_12596[17] = inst_12422);
return statearr_12596;
})();var statearr_12597_12664 = state_12541__$1;(statearr_12597_12664[2] = null);
(statearr_12597_12664[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 11))
{var inst_12442 = (state_12541[7]);var inst_12422 = (state_12541[17]);var inst_12442__$1 = cljs.core.seq(inst_12422);var state_12541__$1 = (function (){var statearr_12598 = state_12541;(statearr_12598[7] = inst_12442__$1);
return statearr_12598;
})();if(inst_12442__$1)
{var statearr_12599_12665 = state_12541__$1;(statearr_12599_12665[1] = 16);
} else
{var statearr_12600_12666 = state_12541__$1;(statearr_12600_12666[1] = 17);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 9))
{var inst_12470 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12601_12667 = state_12541__$1;(statearr_12601_12667[2] = inst_12470);
(statearr_12601_12667[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 5))
{var inst_12420 = cljs.core.deref(cs);var inst_12421 = cljs.core.seq(inst_12420);var inst_12422 = inst_12421;var inst_12423 = null;var inst_12424 = 0;var inst_12425 = 0;var state_12541__$1 = (function (){var statearr_12602 = state_12541;(statearr_12602[13] = inst_12425);
(statearr_12602[14] = inst_12423);
(statearr_12602[16] = inst_12424);
(statearr_12602[17] = inst_12422);
return statearr_12602;
})();var statearr_12603_12668 = state_12541__$1;(statearr_12603_12668[2] = null);
(statearr_12603_12668[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 14))
{var state_12541__$1 = state_12541;var statearr_12604_12669 = state_12541__$1;(statearr_12604_12669[2] = null);
(statearr_12604_12669[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 45))
{var inst_12531 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12605_12670 = state_12541__$1;(statearr_12605_12670[2] = inst_12531);
(statearr_12605_12670[1] = 44);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 26))
{var inst_12473 = (state_12541[29]);var inst_12527 = (state_12541[2]);var inst_12528 = cljs.core.seq(inst_12473);var state_12541__$1 = (function (){var statearr_12606 = state_12541;(statearr_12606[31] = inst_12527);
return statearr_12606;
})();if(inst_12528)
{var statearr_12607_12671 = state_12541__$1;(statearr_12607_12671[1] = 42);
} else
{var statearr_12608_12672 = state_12541__$1;(statearr_12608_12672[1] = 43);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 16))
{var inst_12442 = (state_12541[7]);var inst_12444 = cljs.core.chunked_seq_QMARK_(inst_12442);var state_12541__$1 = state_12541;if(inst_12444)
{var statearr_12609_12673 = state_12541__$1;(statearr_12609_12673[1] = 19);
} else
{var statearr_12610_12674 = state_12541__$1;(statearr_12610_12674[1] = 20);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 38))
{var inst_12520 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12611_12675 = state_12541__$1;(statearr_12611_12675[2] = inst_12520);
(statearr_12611_12675[1] = 35);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 30))
{var state_12541__$1 = state_12541;var statearr_12612_12676 = state_12541__$1;(statearr_12612_12676[2] = null);
(statearr_12612_12676[1] = 32);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 10))
{var inst_12425 = (state_12541[13]);var inst_12423 = (state_12541[14]);var inst_12431 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12423,inst_12425);var inst_12432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12431,0,null);var inst_12433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12431,1,null);var state_12541__$1 = (function (){var statearr_12613 = state_12541;(statearr_12613[26] = inst_12432);
return statearr_12613;
})();if(cljs.core.truth_(inst_12433))
{var statearr_12614_12677 = state_12541__$1;(statearr_12614_12677[1] = 13);
} else
{var statearr_12615_12678 = state_12541__$1;(statearr_12615_12678[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 18))
{var inst_12466 = (state_12541[2]);var state_12541__$1 = state_12541;var statearr_12616_12679 = state_12541__$1;(statearr_12616_12679[2] = inst_12466);
(statearr_12616_12679[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 42))
{var state_12541__$1 = state_12541;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12541__$1,45,dchan);
} else
{if((state_val_12542 === 37))
{var inst_12500 = (state_12541[25]);var inst_12413 = (state_12541[11]);var inst_12509 = (state_12541[23]);var inst_12509__$1 = cljs.core.first(inst_12500);var inst_12510 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12509__$1,inst_12413,done);var state_12541__$1 = (function (){var statearr_12617 = state_12541;(statearr_12617[23] = inst_12509__$1);
return statearr_12617;
})();if(cljs.core.truth_(inst_12510))
{var statearr_12618_12680 = state_12541__$1;(statearr_12618_12680[1] = 39);
} else
{var statearr_12619_12681 = state_12541__$1;(statearr_12619_12681[1] = 40);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12542 === 8))
{var inst_12425 = (state_12541[13]);var inst_12424 = (state_12541[16]);var inst_12427 = (inst_12425 < inst_12424);var inst_12428 = inst_12427;var state_12541__$1 = state_12541;if(cljs.core.truth_(inst_12428))
{var statearr_12620_12682 = state_12541__$1;(statearr_12620_12682[1] = 10);
} else
{var statearr_12621_12683 = state_12541__$1;(statearr_12621_12683[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___12629,cs,m,dchan,dctr,done))
;return ((function (switch__6708__auto__,c__6772__auto___12629,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_12625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12625[0] = state_machine__6709__auto__);
(statearr_12625[1] = 1);
return statearr_12625;
});
var state_machine__6709__auto____1 = (function (state_12541){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_12541);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e12626){if((e12626 instanceof Object))
{var ex__6712__auto__ = e12626;var statearr_12627_12684 = state_12541;(statearr_12627_12684[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12541);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e12626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__12685 = state_12541;
state_12541 = G__12685;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_12541){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_12541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___12629,cs,m,dchan,dctr,done))
})();var state__6774__auto__ = (function (){var statearr_12628 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_12628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___12629);
return statearr_12628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___12629,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj12687 = {};return obj12687;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$25,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$26);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$25);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$26,chs);var pauses = pick(cljs.core.constant$keyword$24,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,solos,cljs.core.constant$keyword$28,pick(cljs.core.constant$keyword$25,chs),cljs.core.constant$keyword$29,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$24)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12807 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12807 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12808){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12808 = meta12808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12807.cljs$lang$type = true;
cljs.core.async.t12807.cljs$lang$ctorStr = "cljs.core.async/t12807";
cljs.core.async.t12807.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t12807");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12809){var self__ = this;
var _12809__$1 = this;return self__.meta12808;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12809,meta12808__$1){var self__ = this;
var _12809__$1 = this;return (new cljs.core.async.t12807(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12808__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12807 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12807(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12808){return (new cljs.core.async.t12807(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12808));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12807(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6772__auto___12926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___12926,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___12926,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12879){var state_val_12880 = (state_12879[1]);if((state_val_12880 === 7))
{var inst_12823 = (state_12879[7]);var inst_12828 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12823);var state_12879__$1 = state_12879;var statearr_12881_12927 = state_12879__$1;(statearr_12881_12927[2] = inst_12828);
(statearr_12881_12927[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 20))
{var inst_12838 = (state_12879[8]);var state_12879__$1 = state_12879;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12879__$1,23,out,inst_12838);
} else
{if((state_val_12880 === 1))
{var inst_12813 = (state_12879[9]);var inst_12813__$1 = calc_state();var inst_12814 = cljs.core.seq_QMARK_(inst_12813__$1);var state_12879__$1 = (function (){var statearr_12882 = state_12879;(statearr_12882[9] = inst_12813__$1);
return statearr_12882;
})();if(inst_12814)
{var statearr_12883_12928 = state_12879__$1;(statearr_12883_12928[1] = 2);
} else
{var statearr_12884_12929 = state_12879__$1;(statearr_12884_12929[1] = 3);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 24))
{var inst_12831 = (state_12879[10]);var inst_12823 = inst_12831;var state_12879__$1 = (function (){var statearr_12885 = state_12879;(statearr_12885[7] = inst_12823);
return statearr_12885;
})();var statearr_12886_12930 = state_12879__$1;(statearr_12886_12930[2] = null);
(statearr_12886_12930[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 4))
{var inst_12813 = (state_12879[9]);var inst_12819 = (state_12879[2]);var inst_12820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12819,cljs.core.constant$keyword$29);var inst_12821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12819,cljs.core.constant$keyword$28);var inst_12822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12819,cljs.core.constant$keyword$27);var inst_12823 = inst_12813;var state_12879__$1 = (function (){var statearr_12887 = state_12879;(statearr_12887[7] = inst_12823);
(statearr_12887[11] = inst_12820);
(statearr_12887[12] = inst_12821);
(statearr_12887[13] = inst_12822);
return statearr_12887;
})();var statearr_12888_12931 = state_12879__$1;(statearr_12888_12931[2] = null);
(statearr_12888_12931[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 15))
{var state_12879__$1 = state_12879;var statearr_12889_12932 = state_12879__$1;(statearr_12889_12932[2] = null);
(statearr_12889_12932[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 21))
{var inst_12831 = (state_12879[10]);var inst_12823 = inst_12831;var state_12879__$1 = (function (){var statearr_12890 = state_12879;(statearr_12890[7] = inst_12823);
return statearr_12890;
})();var statearr_12891_12933 = state_12879__$1;(statearr_12891_12933[2] = null);
(statearr_12891_12933[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 13))
{var inst_12875 = (state_12879[2]);var state_12879__$1 = state_12879;var statearr_12892_12934 = state_12879__$1;(statearr_12892_12934[2] = inst_12875);
(statearr_12892_12934[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 22))
{var inst_12873 = (state_12879[2]);var state_12879__$1 = state_12879;var statearr_12893_12935 = state_12879__$1;(statearr_12893_12935[2] = inst_12873);
(statearr_12893_12935[1] = 13);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 6))
{var inst_12877 = (state_12879[2]);var state_12879__$1 = state_12879;return cljs.core.async.impl.ioc_helpers.return_chan(state_12879__$1,inst_12877);
} else
{if((state_val_12880 === 25))
{var state_12879__$1 = state_12879;var statearr_12894_12936 = state_12879__$1;(statearr_12894_12936[2] = null);
(statearr_12894_12936[1] = 26);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 17))
{var inst_12853 = (state_12879[14]);var state_12879__$1 = state_12879;var statearr_12895_12937 = state_12879__$1;(statearr_12895_12937[2] = inst_12853);
(statearr_12895_12937[1] = 19);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 3))
{var inst_12813 = (state_12879[9]);var state_12879__$1 = state_12879;var statearr_12896_12938 = state_12879__$1;(statearr_12896_12938[2] = inst_12813);
(statearr_12896_12938[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 12))
{var inst_12839 = (state_12879[15]);var inst_12834 = (state_12879[16]);var inst_12853 = (state_12879[14]);var inst_12853__$1 = (inst_12834.cljs$core$IFn$_invoke$arity$1 ? inst_12834.cljs$core$IFn$_invoke$arity$1(inst_12839) : inst_12834.call(null,inst_12839));var state_12879__$1 = (function (){var statearr_12897 = state_12879;(statearr_12897[14] = inst_12853__$1);
return statearr_12897;
})();if(cljs.core.truth_(inst_12853__$1))
{var statearr_12898_12939 = state_12879__$1;(statearr_12898_12939[1] = 17);
} else
{var statearr_12899_12940 = state_12879__$1;(statearr_12899_12940[1] = 18);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 2))
{var inst_12813 = (state_12879[9]);var inst_12816 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12813);var state_12879__$1 = state_12879;var statearr_12900_12941 = state_12879__$1;(statearr_12900_12941[2] = inst_12816);
(statearr_12900_12941[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 23))
{var inst_12864 = (state_12879[2]);var state_12879__$1 = state_12879;if(cljs.core.truth_(inst_12864))
{var statearr_12901_12942 = state_12879__$1;(statearr_12901_12942[1] = 24);
} else
{var statearr_12902_12943 = state_12879__$1;(statearr_12902_12943[1] = 25);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 19))
{var inst_12861 = (state_12879[2]);var state_12879__$1 = state_12879;if(cljs.core.truth_(inst_12861))
{var statearr_12903_12944 = state_12879__$1;(statearr_12903_12944[1] = 20);
} else
{var statearr_12904_12945 = state_12879__$1;(statearr_12904_12945[1] = 21);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 11))
{var inst_12838 = (state_12879[8]);var inst_12844 = (inst_12838 == null);var state_12879__$1 = state_12879;if(cljs.core.truth_(inst_12844))
{var statearr_12905_12946 = state_12879__$1;(statearr_12905_12946[1] = 14);
} else
{var statearr_12906_12947 = state_12879__$1;(statearr_12906_12947[1] = 15);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 9))
{var inst_12831 = (state_12879[10]);var inst_12831__$1 = (state_12879[2]);var inst_12832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12831__$1,cljs.core.constant$keyword$29);var inst_12833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12831__$1,cljs.core.constant$keyword$28);var inst_12834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12831__$1,cljs.core.constant$keyword$27);var state_12879__$1 = (function (){var statearr_12907 = state_12879;(statearr_12907[16] = inst_12834);
(statearr_12907[10] = inst_12831__$1);
(statearr_12907[17] = inst_12833);
return statearr_12907;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_12879__$1,10,inst_12832);
} else
{if((state_val_12880 === 5))
{var inst_12823 = (state_12879[7]);var inst_12826 = cljs.core.seq_QMARK_(inst_12823);var state_12879__$1 = state_12879;if(inst_12826)
{var statearr_12908_12948 = state_12879__$1;(statearr_12908_12948[1] = 7);
} else
{var statearr_12909_12949 = state_12879__$1;(statearr_12909_12949[1] = 8);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 14))
{var inst_12839 = (state_12879[15]);var inst_12846 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12839);var state_12879__$1 = state_12879;var statearr_12910_12950 = state_12879__$1;(statearr_12910_12950[2] = inst_12846);
(statearr_12910_12950[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 26))
{var inst_12869 = (state_12879[2]);var state_12879__$1 = state_12879;var statearr_12911_12951 = state_12879__$1;(statearr_12911_12951[2] = inst_12869);
(statearr_12911_12951[1] = 22);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 16))
{var inst_12849 = (state_12879[2]);var inst_12850 = calc_state();var inst_12823 = inst_12850;var state_12879__$1 = (function (){var statearr_12912 = state_12879;(statearr_12912[7] = inst_12823);
(statearr_12912[18] = inst_12849);
return statearr_12912;
})();var statearr_12913_12952 = state_12879__$1;(statearr_12913_12952[2] = null);
(statearr_12913_12952[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 10))
{var inst_12839 = (state_12879[15]);var inst_12838 = (state_12879[8]);var inst_12837 = (state_12879[2]);var inst_12838__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12837,0,null);var inst_12839__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12837,1,null);var inst_12840 = (inst_12838__$1 == null);var inst_12841 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12839__$1,change);var inst_12842 = (inst_12840) || (inst_12841);var state_12879__$1 = (function (){var statearr_12914 = state_12879;(statearr_12914[15] = inst_12839__$1);
(statearr_12914[8] = inst_12838__$1);
return statearr_12914;
})();if(cljs.core.truth_(inst_12842))
{var statearr_12915_12953 = state_12879__$1;(statearr_12915_12953[1] = 11);
} else
{var statearr_12916_12954 = state_12879__$1;(statearr_12916_12954[1] = 12);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 18))
{var inst_12839 = (state_12879[15]);var inst_12834 = (state_12879[16]);var inst_12833 = (state_12879[17]);var inst_12856 = cljs.core.empty_QMARK_(inst_12834);var inst_12857 = (inst_12833.cljs$core$IFn$_invoke$arity$1 ? inst_12833.cljs$core$IFn$_invoke$arity$1(inst_12839) : inst_12833.call(null,inst_12839));var inst_12858 = cljs.core.not(inst_12857);var inst_12859 = (inst_12856) && (inst_12858);var state_12879__$1 = state_12879;var statearr_12917_12955 = state_12879__$1;(statearr_12917_12955[2] = inst_12859);
(statearr_12917_12955[1] = 19);
return cljs.core.constant$keyword$17;
} else
{if((state_val_12880 === 8))
{var inst_12823 = (state_12879[7]);var state_12879__$1 = state_12879;var statearr_12918_12956 = state_12879__$1;(statearr_12918_12956[2] = inst_12823);
(statearr_12918_12956[1] = 9);
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___12926,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6708__auto__,c__6772__auto___12926,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_12922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12922[0] = state_machine__6709__auto__);
(statearr_12922[1] = 1);
return statearr_12922;
});
var state_machine__6709__auto____1 = (function (state_12879){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_12879);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e12923){if((e12923 instanceof Object))
{var ex__6712__auto__ = e12923;var statearr_12924_12957 = state_12879;(statearr_12924_12957[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12879);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e12923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__12958 = state_12879;
state_12879 = G__12958;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_12879){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_12879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___12926,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6774__auto__ = (function (){var statearr_12925 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_12925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___12926);
return statearr_12925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___12926,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj12960 = {};return obj12960;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3481__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3481__auto__,mults){
return (function (p1__12961_SHARP_){if(cljs.core.truth_((p1__12961_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12961_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12961_SHARP_.call(null,topic))))
{return p1__12961_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12961_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13084 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13085){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13085 = meta13085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13084.cljs$lang$type = true;
cljs.core.async.t13084.cljs$lang$ctorStr = "cljs.core.async/t13084";
cljs.core.async.t13084.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"cljs.core.async/t13084");
});})(mults,ensure_mult))
;
cljs.core.async.t13084.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13084.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13084.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13084.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13086){var self__ = this;
var _13086__$1 = this;return self__.meta13085;
});})(mults,ensure_mult))
;
cljs.core.async.t13084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13086,meta13085__$1){var self__ = this;
var _13086__$1 = this;return (new cljs.core.async.t13084(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13085__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13084 = ((function (mults,ensure_mult){
return (function __GT_t13084(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13085){return (new cljs.core.async.t13084(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13085));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13084(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6772__auto___13206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___13206,mults,ensure_mult,p){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___13206,mults,ensure_mult,p){
return (function (state_13158){var state_val_13159 = (state_13158[1]);if((state_val_13159 === 7))
{var inst_13154 = (state_13158[2]);var state_13158__$1 = state_13158;var statearr_13160_13207 = state_13158__$1;(statearr_13160_13207[2] = inst_13154);
(statearr_13160_13207[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 20))
{var state_13158__$1 = state_13158;var statearr_13161_13208 = state_13158__$1;(statearr_13161_13208[2] = null);
(statearr_13161_13208[1] = 21);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 1))
{var state_13158__$1 = state_13158;var statearr_13162_13209 = state_13158__$1;(statearr_13162_13209[2] = null);
(statearr_13162_13209[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 24))
{var inst_13137 = (state_13158[7]);var inst_13146 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13137);var state_13158__$1 = state_13158;var statearr_13163_13210 = state_13158__$1;(statearr_13163_13210[2] = inst_13146);
(statearr_13163_13210[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 4))
{var inst_13089 = (state_13158[8]);var inst_13089__$1 = (state_13158[2]);var inst_13090 = (inst_13089__$1 == null);var state_13158__$1 = (function (){var statearr_13164 = state_13158;(statearr_13164[8] = inst_13089__$1);
return statearr_13164;
})();if(cljs.core.truth_(inst_13090))
{var statearr_13165_13211 = state_13158__$1;(statearr_13165_13211[1] = 5);
} else
{var statearr_13166_13212 = state_13158__$1;(statearr_13166_13212[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 15))
{var inst_13131 = (state_13158[2]);var state_13158__$1 = state_13158;var statearr_13167_13213 = state_13158__$1;(statearr_13167_13213[2] = inst_13131);
(statearr_13167_13213[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 21))
{var inst_13151 = (state_13158[2]);var state_13158__$1 = (function (){var statearr_13168 = state_13158;(statearr_13168[9] = inst_13151);
return statearr_13168;
})();var statearr_13169_13214 = state_13158__$1;(statearr_13169_13214[2] = null);
(statearr_13169_13214[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 13))
{var inst_13113 = (state_13158[10]);var inst_13115 = cljs.core.chunked_seq_QMARK_(inst_13113);var state_13158__$1 = state_13158;if(inst_13115)
{var statearr_13170_13215 = state_13158__$1;(statearr_13170_13215[1] = 16);
} else
{var statearr_13171_13216 = state_13158__$1;(statearr_13171_13216[1] = 17);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 22))
{var inst_13143 = (state_13158[2]);var state_13158__$1 = state_13158;if(cljs.core.truth_(inst_13143))
{var statearr_13172_13217 = state_13158__$1;(statearr_13172_13217[1] = 23);
} else
{var statearr_13173_13218 = state_13158__$1;(statearr_13173_13218[1] = 24);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 6))
{var inst_13139 = (state_13158[11]);var inst_13089 = (state_13158[8]);var inst_13137 = (state_13158[7]);var inst_13137__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13089) : topic_fn.call(null,inst_13089));var inst_13138 = cljs.core.deref(mults);var inst_13139__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13138,inst_13137__$1);var state_13158__$1 = (function (){var statearr_13174 = state_13158;(statearr_13174[11] = inst_13139__$1);
(statearr_13174[7] = inst_13137__$1);
return statearr_13174;
})();if(cljs.core.truth_(inst_13139__$1))
{var statearr_13175_13219 = state_13158__$1;(statearr_13175_13219[1] = 19);
} else
{var statearr_13176_13220 = state_13158__$1;(statearr_13176_13220[1] = 20);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 25))
{var inst_13148 = (state_13158[2]);var state_13158__$1 = state_13158;var statearr_13177_13221 = state_13158__$1;(statearr_13177_13221[2] = inst_13148);
(statearr_13177_13221[1] = 21);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 17))
{var inst_13113 = (state_13158[10]);var inst_13122 = cljs.core.first(inst_13113);var inst_13123 = cljs.core.async.muxch_STAR_(inst_13122);var inst_13124 = cljs.core.async.close_BANG_(inst_13123);var inst_13125 = cljs.core.next(inst_13113);var inst_13099 = inst_13125;var inst_13100 = null;var inst_13101 = 0;var inst_13102 = 0;var state_13158__$1 = (function (){var statearr_13178 = state_13158;(statearr_13178[12] = inst_13101);
(statearr_13178[13] = inst_13099);
(statearr_13178[14] = inst_13100);
(statearr_13178[15] = inst_13102);
(statearr_13178[16] = inst_13124);
return statearr_13178;
})();var statearr_13179_13222 = state_13158__$1;(statearr_13179_13222[2] = null);
(statearr_13179_13222[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 3))
{var inst_13156 = (state_13158[2]);var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.return_chan(state_13158__$1,inst_13156);
} else
{if((state_val_13159 === 12))
{var inst_13133 = (state_13158[2]);var state_13158__$1 = state_13158;var statearr_13180_13223 = state_13158__$1;(statearr_13180_13223[2] = inst_13133);
(statearr_13180_13223[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 2))
{var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13158__$1,4,ch);
} else
{if((state_val_13159 === 23))
{var state_13158__$1 = state_13158;var statearr_13181_13224 = state_13158__$1;(statearr_13181_13224[2] = null);
(statearr_13181_13224[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 19))
{var inst_13139 = (state_13158[11]);var inst_13089 = (state_13158[8]);var inst_13141 = cljs.core.async.muxch_STAR_(inst_13139);var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13158__$1,22,inst_13141,inst_13089);
} else
{if((state_val_13159 === 11))
{var inst_13113 = (state_13158[10]);var inst_13099 = (state_13158[13]);var inst_13113__$1 = cljs.core.seq(inst_13099);var state_13158__$1 = (function (){var statearr_13182 = state_13158;(statearr_13182[10] = inst_13113__$1);
return statearr_13182;
})();if(inst_13113__$1)
{var statearr_13183_13225 = state_13158__$1;(statearr_13183_13225[1] = 13);
} else
{var statearr_13184_13226 = state_13158__$1;(statearr_13184_13226[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 9))
{var inst_13135 = (state_13158[2]);var state_13158__$1 = state_13158;var statearr_13185_13227 = state_13158__$1;(statearr_13185_13227[2] = inst_13135);
(statearr_13185_13227[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 5))
{var inst_13096 = cljs.core.deref(mults);var inst_13097 = cljs.core.vals(inst_13096);var inst_13098 = cljs.core.seq(inst_13097);var inst_13099 = inst_13098;var inst_13100 = null;var inst_13101 = 0;var inst_13102 = 0;var state_13158__$1 = (function (){var statearr_13186 = state_13158;(statearr_13186[12] = inst_13101);
(statearr_13186[13] = inst_13099);
(statearr_13186[14] = inst_13100);
(statearr_13186[15] = inst_13102);
return statearr_13186;
})();var statearr_13187_13228 = state_13158__$1;(statearr_13187_13228[2] = null);
(statearr_13187_13228[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 14))
{var state_13158__$1 = state_13158;var statearr_13191_13229 = state_13158__$1;(statearr_13191_13229[2] = null);
(statearr_13191_13229[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 16))
{var inst_13113 = (state_13158[10]);var inst_13117 = cljs.core.chunk_first(inst_13113);var inst_13118 = cljs.core.chunk_rest(inst_13113);var inst_13119 = cljs.core.count(inst_13117);var inst_13099 = inst_13118;var inst_13100 = inst_13117;var inst_13101 = inst_13119;var inst_13102 = 0;var state_13158__$1 = (function (){var statearr_13192 = state_13158;(statearr_13192[12] = inst_13101);
(statearr_13192[13] = inst_13099);
(statearr_13192[14] = inst_13100);
(statearr_13192[15] = inst_13102);
return statearr_13192;
})();var statearr_13193_13230 = state_13158__$1;(statearr_13193_13230[2] = null);
(statearr_13193_13230[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 10))
{var inst_13101 = (state_13158[12]);var inst_13099 = (state_13158[13]);var inst_13100 = (state_13158[14]);var inst_13102 = (state_13158[15]);var inst_13107 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13100,inst_13102);var inst_13108 = cljs.core.async.muxch_STAR_(inst_13107);var inst_13109 = cljs.core.async.close_BANG_(inst_13108);var inst_13110 = (inst_13102 + 1);var tmp13188 = inst_13101;var tmp13189 = inst_13099;var tmp13190 = inst_13100;var inst_13099__$1 = tmp13189;var inst_13100__$1 = tmp13190;var inst_13101__$1 = tmp13188;var inst_13102__$1 = inst_13110;var state_13158__$1 = (function (){var statearr_13194 = state_13158;(statearr_13194[17] = inst_13109);
(statearr_13194[12] = inst_13101__$1);
(statearr_13194[13] = inst_13099__$1);
(statearr_13194[14] = inst_13100__$1);
(statearr_13194[15] = inst_13102__$1);
return statearr_13194;
})();var statearr_13195_13231 = state_13158__$1;(statearr_13195_13231[2] = null);
(statearr_13195_13231[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 18))
{var inst_13128 = (state_13158[2]);var state_13158__$1 = state_13158;var statearr_13196_13232 = state_13158__$1;(statearr_13196_13232[2] = inst_13128);
(statearr_13196_13232[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13159 === 8))
{var inst_13101 = (state_13158[12]);var inst_13102 = (state_13158[15]);var inst_13104 = (inst_13102 < inst_13101);var inst_13105 = inst_13104;var state_13158__$1 = state_13158;if(cljs.core.truth_(inst_13105))
{var statearr_13197_13233 = state_13158__$1;(statearr_13197_13233[1] = 10);
} else
{var statearr_13198_13234 = state_13158__$1;(statearr_13198_13234[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___13206,mults,ensure_mult,p))
;return ((function (switch__6708__auto__,c__6772__auto___13206,mults,ensure_mult,p){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_13202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13202[0] = state_machine__6709__auto__);
(statearr_13202[1] = 1);
return statearr_13202;
});
var state_machine__6709__auto____1 = (function (state_13158){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_13158);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e13203){if((e13203 instanceof Object))
{var ex__6712__auto__ = e13203;var statearr_13204_13235 = state_13158;(statearr_13204_13235[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13158);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e13203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__13236 = state_13158;
state_13158 = G__13236;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_13158){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_13158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___13206,mults,ensure_mult,p))
})();var state__6774__auto__ = (function (){var statearr_13205 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_13205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___13206);
return statearr_13205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___13206,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6772__auto___13373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___13373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___13373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13343){var state_val_13344 = (state_13343[1]);if((state_val_13344 === 7))
{var state_13343__$1 = state_13343;var statearr_13345_13374 = state_13343__$1;(statearr_13345_13374[2] = null);
(statearr_13345_13374[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 1))
{var state_13343__$1 = state_13343;var statearr_13346_13375 = state_13343__$1;(statearr_13346_13375[2] = null);
(statearr_13346_13375[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 4))
{var inst_13307 = (state_13343[7]);var inst_13309 = (inst_13307 < cnt);var state_13343__$1 = state_13343;if(cljs.core.truth_(inst_13309))
{var statearr_13347_13376 = state_13343__$1;(statearr_13347_13376[1] = 6);
} else
{var statearr_13348_13377 = state_13343__$1;(statearr_13348_13377[1] = 7);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 15))
{var inst_13339 = (state_13343[2]);var state_13343__$1 = state_13343;var statearr_13349_13378 = state_13343__$1;(statearr_13349_13378[2] = inst_13339);
(statearr_13349_13378[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 13))
{var inst_13332 = cljs.core.async.close_BANG_(out);var state_13343__$1 = state_13343;var statearr_13350_13379 = state_13343__$1;(statearr_13350_13379[2] = inst_13332);
(statearr_13350_13379[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 6))
{var state_13343__$1 = state_13343;var statearr_13351_13380 = state_13343__$1;(statearr_13351_13380[2] = null);
(statearr_13351_13380[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 3))
{var inst_13341 = (state_13343[2]);var state_13343__$1 = state_13343;return cljs.core.async.impl.ioc_helpers.return_chan(state_13343__$1,inst_13341);
} else
{if((state_val_13344 === 12))
{var inst_13329 = (state_13343[8]);var inst_13329__$1 = (state_13343[2]);var inst_13330 = cljs.core.some(cljs.core.nil_QMARK_,inst_13329__$1);var state_13343__$1 = (function (){var statearr_13352 = state_13343;(statearr_13352[8] = inst_13329__$1);
return statearr_13352;
})();if(cljs.core.truth_(inst_13330))
{var statearr_13353_13381 = state_13343__$1;(statearr_13353_13381[1] = 13);
} else
{var statearr_13354_13382 = state_13343__$1;(statearr_13354_13382[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 2))
{var inst_13306 = cljs.core.reset_BANG_(dctr,cnt);var inst_13307 = 0;var state_13343__$1 = (function (){var statearr_13355 = state_13343;(statearr_13355[7] = inst_13307);
(statearr_13355[9] = inst_13306);
return statearr_13355;
})();var statearr_13356_13383 = state_13343__$1;(statearr_13356_13383[2] = null);
(statearr_13356_13383[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 11))
{var inst_13307 = (state_13343[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13343,10,Object,null,9);var inst_13316 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13307) : chs__$1.call(null,inst_13307));var inst_13317 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13307) : done.call(null,inst_13307));var inst_13318 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13316,inst_13317);var state_13343__$1 = state_13343;var statearr_13357_13384 = state_13343__$1;(statearr_13357_13384[2] = inst_13318);
cljs.core.async.impl.ioc_helpers.process_exception(state_13343__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 9))
{var inst_13307 = (state_13343[7]);var inst_13320 = (state_13343[2]);var inst_13321 = (inst_13307 + 1);var inst_13307__$1 = inst_13321;var state_13343__$1 = (function (){var statearr_13358 = state_13343;(statearr_13358[10] = inst_13320);
(statearr_13358[7] = inst_13307__$1);
return statearr_13358;
})();var statearr_13359_13385 = state_13343__$1;(statearr_13359_13385[2] = null);
(statearr_13359_13385[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 5))
{var inst_13327 = (state_13343[2]);var state_13343__$1 = (function (){var statearr_13360 = state_13343;(statearr_13360[11] = inst_13327);
return statearr_13360;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13343__$1,12,dchan);
} else
{if((state_val_13344 === 14))
{var inst_13329 = (state_13343[8]);var inst_13334 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13329);var state_13343__$1 = state_13343;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13343__$1,16,out,inst_13334);
} else
{if((state_val_13344 === 16))
{var inst_13336 = (state_13343[2]);var state_13343__$1 = (function (){var statearr_13361 = state_13343;(statearr_13361[12] = inst_13336);
return statearr_13361;
})();var statearr_13362_13386 = state_13343__$1;(statearr_13362_13386[2] = null);
(statearr_13362_13386[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 10))
{var inst_13311 = (state_13343[2]);var inst_13312 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_13343__$1 = (function (){var statearr_13363 = state_13343;(statearr_13363[13] = inst_13311);
return statearr_13363;
})();var statearr_13364_13387 = state_13343__$1;(statearr_13364_13387[2] = inst_13312);
cljs.core.async.impl.ioc_helpers.process_exception(state_13343__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13344 === 8))
{var inst_13325 = (state_13343[2]);var state_13343__$1 = state_13343;var statearr_13365_13388 = state_13343__$1;(statearr_13365_13388[2] = inst_13325);
(statearr_13365_13388[1] = 5);
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___13373,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6708__auto__,c__6772__auto___13373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_13369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13369[0] = state_machine__6709__auto__);
(statearr_13369[1] = 1);
return statearr_13369;
});
var state_machine__6709__auto____1 = (function (state_13343){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_13343);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e13370){if((e13370 instanceof Object))
{var ex__6712__auto__ = e13370;var statearr_13371_13389 = state_13343;(statearr_13371_13389[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13343);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e13370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__13390 = state_13343;
state_13343 = G__13390;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_13343){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_13343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___13373,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6774__auto__ = (function (){var statearr_13372 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_13372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___13373);
return statearr_13372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___13373,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6772__auto___13498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___13498,out){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___13498,out){
return (function (state_13474){var state_val_13475 = (state_13474[1]);if((state_val_13475 === 7))
{var inst_13454 = (state_13474[7]);var inst_13453 = (state_13474[8]);var inst_13453__$1 = (state_13474[2]);var inst_13454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13453__$1,0,null);var inst_13455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13453__$1,1,null);var inst_13456 = (inst_13454__$1 == null);var state_13474__$1 = (function (){var statearr_13476 = state_13474;(statearr_13476[7] = inst_13454__$1);
(statearr_13476[9] = inst_13455);
(statearr_13476[8] = inst_13453__$1);
return statearr_13476;
})();if(cljs.core.truth_(inst_13456))
{var statearr_13477_13499 = state_13474__$1;(statearr_13477_13499[1] = 8);
} else
{var statearr_13478_13500 = state_13474__$1;(statearr_13478_13500[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13475 === 1))
{var inst_13445 = cljs.core.vec(chs);var inst_13446 = inst_13445;var state_13474__$1 = (function (){var statearr_13479 = state_13474;(statearr_13479[10] = inst_13446);
return statearr_13479;
})();var statearr_13480_13501 = state_13474__$1;(statearr_13480_13501[2] = null);
(statearr_13480_13501[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13475 === 4))
{var inst_13446 = (state_13474[10]);var state_13474__$1 = state_13474;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_13474__$1,7,inst_13446);
} else
{if((state_val_13475 === 6))
{var inst_13470 = (state_13474[2]);var state_13474__$1 = state_13474;var statearr_13481_13502 = state_13474__$1;(statearr_13481_13502[2] = inst_13470);
(statearr_13481_13502[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13475 === 3))
{var inst_13472 = (state_13474[2]);var state_13474__$1 = state_13474;return cljs.core.async.impl.ioc_helpers.return_chan(state_13474__$1,inst_13472);
} else
{if((state_val_13475 === 2))
{var inst_13446 = (state_13474[10]);var inst_13448 = cljs.core.count(inst_13446);var inst_13449 = (inst_13448 > 0);var state_13474__$1 = state_13474;if(cljs.core.truth_(inst_13449))
{var statearr_13483_13503 = state_13474__$1;(statearr_13483_13503[1] = 4);
} else
{var statearr_13484_13504 = state_13474__$1;(statearr_13484_13504[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13475 === 11))
{var inst_13446 = (state_13474[10]);var inst_13463 = (state_13474[2]);var tmp13482 = inst_13446;var inst_13446__$1 = tmp13482;var state_13474__$1 = (function (){var statearr_13485 = state_13474;(statearr_13485[11] = inst_13463);
(statearr_13485[10] = inst_13446__$1);
return statearr_13485;
})();var statearr_13486_13505 = state_13474__$1;(statearr_13486_13505[2] = null);
(statearr_13486_13505[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13475 === 9))
{var inst_13454 = (state_13474[7]);var state_13474__$1 = state_13474;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13474__$1,11,out,inst_13454);
} else
{if((state_val_13475 === 5))
{var inst_13468 = cljs.core.async.close_BANG_(out);var state_13474__$1 = state_13474;var statearr_13487_13506 = state_13474__$1;(statearr_13487_13506[2] = inst_13468);
(statearr_13487_13506[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13475 === 10))
{var inst_13466 = (state_13474[2]);var state_13474__$1 = state_13474;var statearr_13488_13507 = state_13474__$1;(statearr_13488_13507[2] = inst_13466);
(statearr_13488_13507[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13475 === 8))
{var inst_13454 = (state_13474[7]);var inst_13455 = (state_13474[9]);var inst_13453 = (state_13474[8]);var inst_13446 = (state_13474[10]);var inst_13458 = (function (){var c = inst_13455;var v = inst_13454;var vec__13451 = inst_13453;var cs = inst_13446;return ((function (c,v,vec__13451,cs,inst_13454,inst_13455,inst_13453,inst_13446,state_val_13475,c__6772__auto___13498,out){
return (function (p1__13391_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13391_SHARP_);
});
;})(c,v,vec__13451,cs,inst_13454,inst_13455,inst_13453,inst_13446,state_val_13475,c__6772__auto___13498,out))
})();var inst_13459 = cljs.core.filterv(inst_13458,inst_13446);var inst_13446__$1 = inst_13459;var state_13474__$1 = (function (){var statearr_13489 = state_13474;(statearr_13489[10] = inst_13446__$1);
return statearr_13489;
})();var statearr_13490_13508 = state_13474__$1;(statearr_13490_13508[2] = null);
(statearr_13490_13508[1] = 2);
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___13498,out))
;return ((function (switch__6708__auto__,c__6772__auto___13498,out){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_13494 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13494[0] = state_machine__6709__auto__);
(statearr_13494[1] = 1);
return statearr_13494;
});
var state_machine__6709__auto____1 = (function (state_13474){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_13474);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e13495){if((e13495 instanceof Object))
{var ex__6712__auto__ = e13495;var statearr_13496_13509 = state_13474;(statearr_13496_13509[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13474);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e13495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__13510 = state_13474;
state_13474 = G__13510;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_13474){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_13474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___13498,out))
})();var state__6774__auto__ = (function (){var statearr_13497 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_13497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___13498);
return statearr_13497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___13498,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6772__auto___13603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___13603,out){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___13603,out){
return (function (state_13580){var state_val_13581 = (state_13580[1]);if((state_val_13581 === 7))
{var inst_13562 = (state_13580[7]);var inst_13562__$1 = (state_13580[2]);var inst_13563 = (inst_13562__$1 == null);var inst_13564 = cljs.core.not(inst_13563);var state_13580__$1 = (function (){var statearr_13582 = state_13580;(statearr_13582[7] = inst_13562__$1);
return statearr_13582;
})();if(inst_13564)
{var statearr_13583_13604 = state_13580__$1;(statearr_13583_13604[1] = 8);
} else
{var statearr_13584_13605 = state_13580__$1;(statearr_13584_13605[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13581 === 1))
{var inst_13557 = 0;var state_13580__$1 = (function (){var statearr_13585 = state_13580;(statearr_13585[8] = inst_13557);
return statearr_13585;
})();var statearr_13586_13606 = state_13580__$1;(statearr_13586_13606[2] = null);
(statearr_13586_13606[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13581 === 4))
{var state_13580__$1 = state_13580;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13580__$1,7,ch);
} else
{if((state_val_13581 === 6))
{var inst_13575 = (state_13580[2]);var state_13580__$1 = state_13580;var statearr_13587_13607 = state_13580__$1;(statearr_13587_13607[2] = inst_13575);
(statearr_13587_13607[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13581 === 3))
{var inst_13577 = (state_13580[2]);var inst_13578 = cljs.core.async.close_BANG_(out);var state_13580__$1 = (function (){var statearr_13588 = state_13580;(statearr_13588[9] = inst_13577);
return statearr_13588;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_13580__$1,inst_13578);
} else
{if((state_val_13581 === 2))
{var inst_13557 = (state_13580[8]);var inst_13559 = (inst_13557 < n);var state_13580__$1 = state_13580;if(cljs.core.truth_(inst_13559))
{var statearr_13589_13608 = state_13580__$1;(statearr_13589_13608[1] = 4);
} else
{var statearr_13590_13609 = state_13580__$1;(statearr_13590_13609[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13581 === 11))
{var inst_13557 = (state_13580[8]);var inst_13567 = (state_13580[2]);var inst_13568 = (inst_13557 + 1);var inst_13557__$1 = inst_13568;var state_13580__$1 = (function (){var statearr_13591 = state_13580;(statearr_13591[10] = inst_13567);
(statearr_13591[8] = inst_13557__$1);
return statearr_13591;
})();var statearr_13592_13610 = state_13580__$1;(statearr_13592_13610[2] = null);
(statearr_13592_13610[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13581 === 9))
{var state_13580__$1 = state_13580;var statearr_13593_13611 = state_13580__$1;(statearr_13593_13611[2] = null);
(statearr_13593_13611[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13581 === 5))
{var state_13580__$1 = state_13580;var statearr_13594_13612 = state_13580__$1;(statearr_13594_13612[2] = null);
(statearr_13594_13612[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13581 === 10))
{var inst_13572 = (state_13580[2]);var state_13580__$1 = state_13580;var statearr_13595_13613 = state_13580__$1;(statearr_13595_13613[2] = inst_13572);
(statearr_13595_13613[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13581 === 8))
{var inst_13562 = (state_13580[7]);var state_13580__$1 = state_13580;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13580__$1,11,out,inst_13562);
} else
{return null;
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
});})(c__6772__auto___13603,out))
;return ((function (switch__6708__auto__,c__6772__auto___13603,out){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_13599 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13599[0] = state_machine__6709__auto__);
(statearr_13599[1] = 1);
return statearr_13599;
});
var state_machine__6709__auto____1 = (function (state_13580){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_13580);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e13600){if((e13600 instanceof Object))
{var ex__6712__auto__ = e13600;var statearr_13601_13614 = state_13580;(statearr_13601_13614[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13580);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e13600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__13615 = state_13580;
state_13580 = G__13615;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_13580){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_13580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___13603,out))
})();var state__6774__auto__ = (function (){var statearr_13602 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_13602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___13603);
return statearr_13602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___13603,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6772__auto___13712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___13712,out){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___13712,out){
return (function (state_13687){var state_val_13688 = (state_13687[1]);if((state_val_13688 === 7))
{var inst_13682 = (state_13687[2]);var state_13687__$1 = state_13687;var statearr_13689_13713 = state_13687__$1;(statearr_13689_13713[2] = inst_13682);
(statearr_13689_13713[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13688 === 1))
{var inst_13664 = null;var state_13687__$1 = (function (){var statearr_13690 = state_13687;(statearr_13690[7] = inst_13664);
return statearr_13690;
})();var statearr_13691_13714 = state_13687__$1;(statearr_13691_13714[2] = null);
(statearr_13691_13714[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13688 === 4))
{var inst_13667 = (state_13687[8]);var inst_13667__$1 = (state_13687[2]);var inst_13668 = (inst_13667__$1 == null);var inst_13669 = cljs.core.not(inst_13668);var state_13687__$1 = (function (){var statearr_13692 = state_13687;(statearr_13692[8] = inst_13667__$1);
return statearr_13692;
})();if(inst_13669)
{var statearr_13693_13715 = state_13687__$1;(statearr_13693_13715[1] = 5);
} else
{var statearr_13694_13716 = state_13687__$1;(statearr_13694_13716[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13688 === 6))
{var state_13687__$1 = state_13687;var statearr_13695_13717 = state_13687__$1;(statearr_13695_13717[2] = null);
(statearr_13695_13717[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13688 === 3))
{var inst_13684 = (state_13687[2]);var inst_13685 = cljs.core.async.close_BANG_(out);var state_13687__$1 = (function (){var statearr_13696 = state_13687;(statearr_13696[9] = inst_13684);
return statearr_13696;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_13687__$1,inst_13685);
} else
{if((state_val_13688 === 2))
{var state_13687__$1 = state_13687;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13687__$1,4,ch);
} else
{if((state_val_13688 === 11))
{var inst_13667 = (state_13687[8]);var inst_13676 = (state_13687[2]);var inst_13664 = inst_13667;var state_13687__$1 = (function (){var statearr_13697 = state_13687;(statearr_13697[7] = inst_13664);
(statearr_13697[10] = inst_13676);
return statearr_13697;
})();var statearr_13698_13718 = state_13687__$1;(statearr_13698_13718[2] = null);
(statearr_13698_13718[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13688 === 9))
{var inst_13667 = (state_13687[8]);var state_13687__$1 = state_13687;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13687__$1,11,out,inst_13667);
} else
{if((state_val_13688 === 5))
{var inst_13667 = (state_13687[8]);var inst_13664 = (state_13687[7]);var inst_13671 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13667,inst_13664);var state_13687__$1 = state_13687;if(inst_13671)
{var statearr_13700_13719 = state_13687__$1;(statearr_13700_13719[1] = 8);
} else
{var statearr_13701_13720 = state_13687__$1;(statearr_13701_13720[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13688 === 10))
{var inst_13679 = (state_13687[2]);var state_13687__$1 = state_13687;var statearr_13702_13721 = state_13687__$1;(statearr_13702_13721[2] = inst_13679);
(statearr_13702_13721[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13688 === 8))
{var inst_13664 = (state_13687[7]);var tmp13699 = inst_13664;var inst_13664__$1 = tmp13699;var state_13687__$1 = (function (){var statearr_13703 = state_13687;(statearr_13703[7] = inst_13664__$1);
return statearr_13703;
})();var statearr_13704_13722 = state_13687__$1;(statearr_13704_13722[2] = null);
(statearr_13704_13722[1] = 2);
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___13712,out))
;return ((function (switch__6708__auto__,c__6772__auto___13712,out){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_13708 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13708[0] = state_machine__6709__auto__);
(statearr_13708[1] = 1);
return statearr_13708;
});
var state_machine__6709__auto____1 = (function (state_13687){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_13687);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e13709){if((e13709 instanceof Object))
{var ex__6712__auto__ = e13709;var statearr_13710_13723 = state_13687;(statearr_13710_13723[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13687);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e13709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__13724 = state_13687;
state_13687 = G__13724;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_13687){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_13687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___13712,out))
})();var state__6774__auto__ = (function (){var statearr_13711 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_13711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___13712);
return statearr_13711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___13712,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6772__auto___13859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___13859,out){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___13859,out){
return (function (state_13829){var state_val_13830 = (state_13829[1]);if((state_val_13830 === 7))
{var inst_13825 = (state_13829[2]);var state_13829__$1 = state_13829;var statearr_13831_13860 = state_13829__$1;(statearr_13831_13860[2] = inst_13825);
(statearr_13831_13860[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 1))
{var inst_13792 = (new Array(n));var inst_13793 = inst_13792;var inst_13794 = 0;var state_13829__$1 = (function (){var statearr_13832 = state_13829;(statearr_13832[7] = inst_13794);
(statearr_13832[8] = inst_13793);
return statearr_13832;
})();var statearr_13833_13861 = state_13829__$1;(statearr_13833_13861[2] = null);
(statearr_13833_13861[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 4))
{var inst_13797 = (state_13829[9]);var inst_13797__$1 = (state_13829[2]);var inst_13798 = (inst_13797__$1 == null);var inst_13799 = cljs.core.not(inst_13798);var state_13829__$1 = (function (){var statearr_13834 = state_13829;(statearr_13834[9] = inst_13797__$1);
return statearr_13834;
})();if(inst_13799)
{var statearr_13835_13862 = state_13829__$1;(statearr_13835_13862[1] = 5);
} else
{var statearr_13836_13863 = state_13829__$1;(statearr_13836_13863[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 15))
{var inst_13819 = (state_13829[2]);var state_13829__$1 = state_13829;var statearr_13837_13864 = state_13829__$1;(statearr_13837_13864[2] = inst_13819);
(statearr_13837_13864[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 13))
{var state_13829__$1 = state_13829;var statearr_13838_13865 = state_13829__$1;(statearr_13838_13865[2] = null);
(statearr_13838_13865[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 6))
{var inst_13794 = (state_13829[7]);var inst_13815 = (inst_13794 > 0);var state_13829__$1 = state_13829;if(cljs.core.truth_(inst_13815))
{var statearr_13839_13866 = state_13829__$1;(statearr_13839_13866[1] = 12);
} else
{var statearr_13840_13867 = state_13829__$1;(statearr_13840_13867[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 3))
{var inst_13827 = (state_13829[2]);var state_13829__$1 = state_13829;return cljs.core.async.impl.ioc_helpers.return_chan(state_13829__$1,inst_13827);
} else
{if((state_val_13830 === 12))
{var inst_13793 = (state_13829[8]);var inst_13817 = cljs.core.vec(inst_13793);var state_13829__$1 = state_13829;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13829__$1,15,out,inst_13817);
} else
{if((state_val_13830 === 2))
{var state_13829__$1 = state_13829;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13829__$1,4,ch);
} else
{if((state_val_13830 === 11))
{var inst_13809 = (state_13829[2]);var inst_13810 = (new Array(n));var inst_13793 = inst_13810;var inst_13794 = 0;var state_13829__$1 = (function (){var statearr_13841 = state_13829;(statearr_13841[7] = inst_13794);
(statearr_13841[8] = inst_13793);
(statearr_13841[10] = inst_13809);
return statearr_13841;
})();var statearr_13842_13868 = state_13829__$1;(statearr_13842_13868[2] = null);
(statearr_13842_13868[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 9))
{var inst_13793 = (state_13829[8]);var inst_13807 = cljs.core.vec(inst_13793);var state_13829__$1 = state_13829;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13829__$1,11,out,inst_13807);
} else
{if((state_val_13830 === 5))
{var inst_13797 = (state_13829[9]);var inst_13794 = (state_13829[7]);var inst_13802 = (state_13829[11]);var inst_13793 = (state_13829[8]);var inst_13801 = (inst_13793[inst_13794] = inst_13797);var inst_13802__$1 = (inst_13794 + 1);var inst_13803 = (inst_13802__$1 < n);var state_13829__$1 = (function (){var statearr_13843 = state_13829;(statearr_13843[12] = inst_13801);
(statearr_13843[11] = inst_13802__$1);
return statearr_13843;
})();if(cljs.core.truth_(inst_13803))
{var statearr_13844_13869 = state_13829__$1;(statearr_13844_13869[1] = 8);
} else
{var statearr_13845_13870 = state_13829__$1;(statearr_13845_13870[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 14))
{var inst_13822 = (state_13829[2]);var inst_13823 = cljs.core.async.close_BANG_(out);var state_13829__$1 = (function (){var statearr_13847 = state_13829;(statearr_13847[13] = inst_13822);
return statearr_13847;
})();var statearr_13848_13871 = state_13829__$1;(statearr_13848_13871[2] = inst_13823);
(statearr_13848_13871[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 10))
{var inst_13813 = (state_13829[2]);var state_13829__$1 = state_13829;var statearr_13849_13872 = state_13829__$1;(statearr_13849_13872[2] = inst_13813);
(statearr_13849_13872[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13830 === 8))
{var inst_13802 = (state_13829[11]);var inst_13793 = (state_13829[8]);var tmp13846 = inst_13793;var inst_13793__$1 = tmp13846;var inst_13794 = inst_13802;var state_13829__$1 = (function (){var statearr_13850 = state_13829;(statearr_13850[7] = inst_13794);
(statearr_13850[8] = inst_13793__$1);
return statearr_13850;
})();var statearr_13851_13873 = state_13829__$1;(statearr_13851_13873[2] = null);
(statearr_13851_13873[1] = 2);
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___13859,out))
;return ((function (switch__6708__auto__,c__6772__auto___13859,out){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_13855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13855[0] = state_machine__6709__auto__);
(statearr_13855[1] = 1);
return statearr_13855;
});
var state_machine__6709__auto____1 = (function (state_13829){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_13829);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e13856){if((e13856 instanceof Object))
{var ex__6712__auto__ = e13856;var statearr_13857_13874 = state_13829;(statearr_13857_13874[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13829);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e13856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__13875 = state_13829;
state_13829 = G__13875;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_13829){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_13829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___13859,out))
})();var state__6774__auto__ = (function (){var statearr_13858 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_13858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___13859);
return statearr_13858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___13859,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6772__auto___14018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto___14018,out){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto___14018,out){
return (function (state_13988){var state_val_13989 = (state_13988[1]);if((state_val_13989 === 7))
{var inst_13984 = (state_13988[2]);var state_13988__$1 = state_13988;var statearr_13990_14019 = state_13988__$1;(statearr_13990_14019[2] = inst_13984);
(statearr_13990_14019[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 1))
{var inst_13947 = [];var inst_13948 = inst_13947;var inst_13949 = cljs.core.constant$keyword$30;var state_13988__$1 = (function (){var statearr_13991 = state_13988;(statearr_13991[7] = inst_13949);
(statearr_13991[8] = inst_13948);
return statearr_13991;
})();var statearr_13992_14020 = state_13988__$1;(statearr_13992_14020[2] = null);
(statearr_13992_14020[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 4))
{var inst_13952 = (state_13988[9]);var inst_13952__$1 = (state_13988[2]);var inst_13953 = (inst_13952__$1 == null);var inst_13954 = cljs.core.not(inst_13953);var state_13988__$1 = (function (){var statearr_13993 = state_13988;(statearr_13993[9] = inst_13952__$1);
return statearr_13993;
})();if(inst_13954)
{var statearr_13994_14021 = state_13988__$1;(statearr_13994_14021[1] = 5);
} else
{var statearr_13995_14022 = state_13988__$1;(statearr_13995_14022[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 15))
{var inst_13978 = (state_13988[2]);var state_13988__$1 = state_13988;var statearr_13996_14023 = state_13988__$1;(statearr_13996_14023[2] = inst_13978);
(statearr_13996_14023[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 13))
{var state_13988__$1 = state_13988;var statearr_13997_14024 = state_13988__$1;(statearr_13997_14024[2] = null);
(statearr_13997_14024[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 6))
{var inst_13948 = (state_13988[8]);var inst_13973 = inst_13948.length;var inst_13974 = (inst_13973 > 0);var state_13988__$1 = state_13988;if(cljs.core.truth_(inst_13974))
{var statearr_13998_14025 = state_13988__$1;(statearr_13998_14025[1] = 12);
} else
{var statearr_13999_14026 = state_13988__$1;(statearr_13999_14026[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 3))
{var inst_13986 = (state_13988[2]);var state_13988__$1 = state_13988;return cljs.core.async.impl.ioc_helpers.return_chan(state_13988__$1,inst_13986);
} else
{if((state_val_13989 === 12))
{var inst_13948 = (state_13988[8]);var inst_13976 = cljs.core.vec(inst_13948);var state_13988__$1 = state_13988;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13988__$1,15,out,inst_13976);
} else
{if((state_val_13989 === 2))
{var state_13988__$1 = state_13988;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13988__$1,4,ch);
} else
{if((state_val_13989 === 11))
{var inst_13952 = (state_13988[9]);var inst_13956 = (state_13988[10]);var inst_13966 = (state_13988[2]);var inst_13967 = [];var inst_13968 = inst_13967.push(inst_13952);var inst_13948 = inst_13967;var inst_13949 = inst_13956;var state_13988__$1 = (function (){var statearr_14000 = state_13988;(statearr_14000[11] = inst_13966);
(statearr_14000[7] = inst_13949);
(statearr_14000[8] = inst_13948);
(statearr_14000[12] = inst_13968);
return statearr_14000;
})();var statearr_14001_14027 = state_13988__$1;(statearr_14001_14027[2] = null);
(statearr_14001_14027[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 9))
{var inst_13948 = (state_13988[8]);var inst_13964 = cljs.core.vec(inst_13948);var state_13988__$1 = state_13988;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13988__$1,11,out,inst_13964);
} else
{if((state_val_13989 === 5))
{var inst_13952 = (state_13988[9]);var inst_13956 = (state_13988[10]);var inst_13949 = (state_13988[7]);var inst_13956__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13952) : f.call(null,inst_13952));var inst_13957 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13956__$1,inst_13949);var inst_13958 = cljs.core.keyword_identical_QMARK_(inst_13949,cljs.core.constant$keyword$30);var inst_13959 = (inst_13957) || (inst_13958);var state_13988__$1 = (function (){var statearr_14002 = state_13988;(statearr_14002[10] = inst_13956__$1);
return statearr_14002;
})();if(cljs.core.truth_(inst_13959))
{var statearr_14003_14028 = state_13988__$1;(statearr_14003_14028[1] = 8);
} else
{var statearr_14004_14029 = state_13988__$1;(statearr_14004_14029[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 14))
{var inst_13981 = (state_13988[2]);var inst_13982 = cljs.core.async.close_BANG_(out);var state_13988__$1 = (function (){var statearr_14006 = state_13988;(statearr_14006[13] = inst_13981);
return statearr_14006;
})();var statearr_14007_14030 = state_13988__$1;(statearr_14007_14030[2] = inst_13982);
(statearr_14007_14030[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 10))
{var inst_13971 = (state_13988[2]);var state_13988__$1 = state_13988;var statearr_14008_14031 = state_13988__$1;(statearr_14008_14031[2] = inst_13971);
(statearr_14008_14031[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13989 === 8))
{var inst_13952 = (state_13988[9]);var inst_13956 = (state_13988[10]);var inst_13948 = (state_13988[8]);var inst_13961 = inst_13948.push(inst_13952);var tmp14005 = inst_13948;var inst_13948__$1 = tmp14005;var inst_13949 = inst_13956;var state_13988__$1 = (function (){var statearr_14009 = state_13988;(statearr_14009[7] = inst_13949);
(statearr_14009[8] = inst_13948__$1);
(statearr_14009[14] = inst_13961);
return statearr_14009;
})();var statearr_14010_14032 = state_13988__$1;(statearr_14010_14032[2] = null);
(statearr_14010_14032[1] = 2);
return cljs.core.constant$keyword$17;
} else
{return null;
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
});})(c__6772__auto___14018,out))
;return ((function (switch__6708__auto__,c__6772__auto___14018,out){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_14014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14014[0] = state_machine__6709__auto__);
(statearr_14014[1] = 1);
return statearr_14014;
});
var state_machine__6709__auto____1 = (function (state_13988){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_13988);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e14015){if((e14015 instanceof Object))
{var ex__6712__auto__ = e14015;var statearr_14016_14033 = state_13988;(statearr_14016_14033[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13988);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e14015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__14034 = state_13988;
state_13988 = G__14034;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_13988){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_13988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto___14018,out))
})();var state__6774__auto__ = (function (){var statearr_14017 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_14017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto___14018);
return statearr_14017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto___14018,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
