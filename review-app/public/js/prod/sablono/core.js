// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__14145__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__14144 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14144,0,null);var body = cljs.core.nthnext(vec__14144,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14145 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14145__delegate.call(this,args);};
G__14145.cljs$lang$maxFixedArity = 0;
G__14145.cljs$lang$applyTo = (function (arglist__14146){
var args = cljs.core.seq(arglist__14146);
return G__14145__delegate(args);
});
G__14145.cljs$core$IFn$_invoke$arity$variadic = G__14145__delegate;
return G__14145;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4198__auto__ = (function iter__14151(s__14152){return (new cljs.core.LazySeq(null,(function (){var s__14152__$1 = s__14152;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14152__$1);if(temp__4126__auto__)
{var s__14152__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14152__$2))
{var c__4196__auto__ = cljs.core.chunk_first(s__14152__$2);var size__4197__auto__ = cljs.core.count(c__4196__auto__);var b__14154 = cljs.core.chunk_buffer(size__4197__auto__);if((function (){var i__14153 = 0;while(true){
if((i__14153 < size__4197__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4196__auto__,i__14153);cljs.core.chunk_append(b__14154,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__14155 = (i__14153 + 1);
i__14153 = G__14155;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14154),iter__14151(cljs.core.chunk_rest(s__14152__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14154),null);
}
} else
{var args = cljs.core.first(s__14152__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__14151(cljs.core.rest(s__14152__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4198__auto__ = (function iter__14160(s__14161){return (new cljs.core.LazySeq(null,(function (){var s__14161__$1 = s__14161;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14161__$1);if(temp__4126__auto__)
{var s__14161__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14161__$2))
{var c__4196__auto__ = cljs.core.chunk_first(s__14161__$2);var size__4197__auto__ = cljs.core.count(c__4196__auto__);var b__14163 = cljs.core.chunk_buffer(size__4197__auto__);if((function (){var i__14162 = 0;while(true){
if((i__14162 < size__4197__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4196__auto__,i__14162);cljs.core.chunk_append(b__14163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$41,"text/css",cljs.core.constant$keyword$42,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$43,"stylesheet"], null)], null));
{
var G__14164 = (i__14162 + 1);
i__14162 = G__14164;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14163),iter__14160(cljs.core.chunk_rest(s__14161__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14163),null);
}
} else
{var style = cljs.core.first(s__14161__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$41,"text/css",cljs.core.constant$keyword$42,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$43,"stylesheet"], null)], null),iter__14160(cljs.core.rest(s__14161__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__14165){
var styles = cljs.core.seq(arglist__14165);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to14166 = (function() { 
var link_to14166__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to14166 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to14166__delegate.call(this,url,content);};
link_to14166.cljs$lang$maxFixedArity = 1;
link_to14166.cljs$lang$applyTo = (function (arglist__14167){
var url = cljs.core.first(arglist__14167);
var content = cljs.core.rest(arglist__14167);
return link_to14166__delegate(url,content);
});
link_to14166.cljs$core$IFn$_invoke$arity$variadic = link_to14166__delegate;
return link_to14166;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14166);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to14168 = (function() { 
var mail_to14168__delegate = function (e_mail,p__14169){var vec__14171 = p__14169;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14171,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3481__auto__ = content;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to14168 = function (e_mail,var_args){
var p__14169 = null;if (arguments.length > 1) {
  p__14169 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to14168__delegate.call(this,e_mail,p__14169);};
mail_to14168.cljs$lang$maxFixedArity = 1;
mail_to14168.cljs$lang$applyTo = (function (arglist__14172){
var e_mail = cljs.core.first(arglist__14172);
var p__14169 = cljs.core.rest(arglist__14172);
return mail_to14168__delegate(e_mail,p__14169);
});
mail_to14168.cljs$core$IFn$_invoke$arity$variadic = mail_to14168__delegate;
return mail_to14168;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14168);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list14173 = (function unordered_list14173(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45,(function (){var iter__4198__auto__ = (function iter__14178(s__14179){return (new cljs.core.LazySeq(null,(function (){var s__14179__$1 = s__14179;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14179__$1);if(temp__4126__auto__)
{var s__14179__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14179__$2))
{var c__4196__auto__ = cljs.core.chunk_first(s__14179__$2);var size__4197__auto__ = cljs.core.count(c__4196__auto__);var b__14181 = cljs.core.chunk_buffer(size__4197__auto__);if((function (){var i__14180 = 0;while(true){
if((i__14180 < size__4197__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4196__auto__,i__14180);cljs.core.chunk_append(b__14181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,x], null));
{
var G__14182 = (i__14180 + 1);
i__14180 = G__14182;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14181),iter__14178(cljs.core.chunk_rest(s__14179__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14181),null);
}
} else
{var x = cljs.core.first(s__14179__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,x], null),iter__14178(cljs.core.rest(s__14179__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14173);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list14183 = (function ordered_list14183(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$47,(function (){var iter__4198__auto__ = (function iter__14188(s__14189){return (new cljs.core.LazySeq(null,(function (){var s__14189__$1 = s__14189;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14189__$1);if(temp__4126__auto__)
{var s__14189__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14189__$2))
{var c__4196__auto__ = cljs.core.chunk_first(s__14189__$2);var size__4197__auto__ = cljs.core.count(c__4196__auto__);var b__14191 = cljs.core.chunk_buffer(size__4197__auto__);if((function (){var i__14190 = 0;while(true){
if((i__14190 < size__4197__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4196__auto__,i__14190);cljs.core.chunk_append(b__14191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,x], null));
{
var G__14192 = (i__14190 + 1);
i__14190 = G__14192;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14191),iter__14188(cljs.core.chunk_rest(s__14189__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14191),null);
}
} else
{var x = cljs.core.first(s__14189__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,x], null),iter__14188(cljs.core.rest(s__14189__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14183);
/**
* Create an image element.
*/
sablono.core.image14193 = (function() {
var image14193 = null;
var image14193__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image14193__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$50,alt], null)], null);
});
image14193 = function(src,alt){
switch(arguments.length){
case 1:
return image14193__1.call(this,src);
case 2:
return image14193__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image14193.cljs$core$IFn$_invoke$arity$1 = image14193__1;
image14193.cljs$core$IFn$_invoke$arity$2 = image14193__2;
return image14193;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14193);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14194_SHARP_,p2__14195_SHARP_){return [cljs.core.str(p1__14194_SHARP_),cljs.core.str("["),cljs.core.str(p2__14195_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14196_SHARP_,p2__14197_SHARP_){return [cljs.core.str(p1__14196_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14197_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$39,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$41,type,cljs.core.constant$keyword$51,sablono.core.make_name(name),cljs.core.constant$keyword$37,sablono.core.make_id(name),cljs.core.constant$keyword$11,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field14198 = (function() {
var color_field14198 = null;
var color_field14198__1 = (function (name__4941__auto__){return color_field14198.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var color_field14198__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__4941__auto__,value__4942__auto__);
});
color_field14198 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return color_field14198__1.call(this,name__4941__auto__);
case 2:
return color_field14198__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field14198.cljs$core$IFn$_invoke$arity$1 = color_field14198__1;
color_field14198.cljs$core$IFn$_invoke$arity$2 = color_field14198__2;
return color_field14198;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14198);
/**
* Creates a date input field.
*/
sablono.core.date_field14199 = (function() {
var date_field14199 = null;
var date_field14199__1 = (function (name__4941__auto__){return date_field14199.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var date_field14199__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__4941__auto__,value__4942__auto__);
});
date_field14199 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return date_field14199__1.call(this,name__4941__auto__);
case 2:
return date_field14199__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field14199.cljs$core$IFn$_invoke$arity$1 = date_field14199__1;
date_field14199.cljs$core$IFn$_invoke$arity$2 = date_field14199__2;
return date_field14199;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14199);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field14200 = (function() {
var datetime_field14200 = null;
var datetime_field14200__1 = (function (name__4941__auto__){return datetime_field14200.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var datetime_field14200__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__4941__auto__,value__4942__auto__);
});
datetime_field14200 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return datetime_field14200__1.call(this,name__4941__auto__);
case 2:
return datetime_field14200__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field14200.cljs$core$IFn$_invoke$arity$1 = datetime_field14200__1;
datetime_field14200.cljs$core$IFn$_invoke$arity$2 = datetime_field14200__2;
return datetime_field14200;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14200);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field14201 = (function() {
var datetime_local_field14201 = null;
var datetime_local_field14201__1 = (function (name__4941__auto__){return datetime_local_field14201.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var datetime_local_field14201__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__4941__auto__,value__4942__auto__);
});
datetime_local_field14201 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return datetime_local_field14201__1.call(this,name__4941__auto__);
case 2:
return datetime_local_field14201__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field14201.cljs$core$IFn$_invoke$arity$1 = datetime_local_field14201__1;
datetime_local_field14201.cljs$core$IFn$_invoke$arity$2 = datetime_local_field14201__2;
return datetime_local_field14201;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14201);
/**
* Creates a email input field.
*/
sablono.core.email_field14202 = (function() {
var email_field14202 = null;
var email_field14202__1 = (function (name__4941__auto__){return email_field14202.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var email_field14202__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__4941__auto__,value__4942__auto__);
});
email_field14202 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return email_field14202__1.call(this,name__4941__auto__);
case 2:
return email_field14202__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field14202.cljs$core$IFn$_invoke$arity$1 = email_field14202__1;
email_field14202.cljs$core$IFn$_invoke$arity$2 = email_field14202__2;
return email_field14202;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14202);
/**
* Creates a file input field.
*/
sablono.core.file_field14203 = (function() {
var file_field14203 = null;
var file_field14203__1 = (function (name__4941__auto__){return file_field14203.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var file_field14203__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__4941__auto__,value__4942__auto__);
});
file_field14203 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return file_field14203__1.call(this,name__4941__auto__);
case 2:
return file_field14203__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field14203.cljs$core$IFn$_invoke$arity$1 = file_field14203__1;
file_field14203.cljs$core$IFn$_invoke$arity$2 = file_field14203__2;
return file_field14203;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14203);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field14204 = (function() {
var hidden_field14204 = null;
var hidden_field14204__1 = (function (name__4941__auto__){return hidden_field14204.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var hidden_field14204__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__4941__auto__,value__4942__auto__);
});
hidden_field14204 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return hidden_field14204__1.call(this,name__4941__auto__);
case 2:
return hidden_field14204__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field14204.cljs$core$IFn$_invoke$arity$1 = hidden_field14204__1;
hidden_field14204.cljs$core$IFn$_invoke$arity$2 = hidden_field14204__2;
return hidden_field14204;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14204);
/**
* Creates a month input field.
*/
sablono.core.month_field14205 = (function() {
var month_field14205 = null;
var month_field14205__1 = (function (name__4941__auto__){return month_field14205.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var month_field14205__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__4941__auto__,value__4942__auto__);
});
month_field14205 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return month_field14205__1.call(this,name__4941__auto__);
case 2:
return month_field14205__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field14205.cljs$core$IFn$_invoke$arity$1 = month_field14205__1;
month_field14205.cljs$core$IFn$_invoke$arity$2 = month_field14205__2;
return month_field14205;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14205);
/**
* Creates a number input field.
*/
sablono.core.number_field14206 = (function() {
var number_field14206 = null;
var number_field14206__1 = (function (name__4941__auto__){return number_field14206.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var number_field14206__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__4941__auto__,value__4942__auto__);
});
number_field14206 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return number_field14206__1.call(this,name__4941__auto__);
case 2:
return number_field14206__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field14206.cljs$core$IFn$_invoke$arity$1 = number_field14206__1;
number_field14206.cljs$core$IFn$_invoke$arity$2 = number_field14206__2;
return number_field14206;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14206);
/**
* Creates a password input field.
*/
sablono.core.password_field14207 = (function() {
var password_field14207 = null;
var password_field14207__1 = (function (name__4941__auto__){return password_field14207.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var password_field14207__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__4941__auto__,value__4942__auto__);
});
password_field14207 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return password_field14207__1.call(this,name__4941__auto__);
case 2:
return password_field14207__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field14207.cljs$core$IFn$_invoke$arity$1 = password_field14207__1;
password_field14207.cljs$core$IFn$_invoke$arity$2 = password_field14207__2;
return password_field14207;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14207);
/**
* Creates a range input field.
*/
sablono.core.range_field14208 = (function() {
var range_field14208 = null;
var range_field14208__1 = (function (name__4941__auto__){return range_field14208.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var range_field14208__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__4941__auto__,value__4942__auto__);
});
range_field14208 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return range_field14208__1.call(this,name__4941__auto__);
case 2:
return range_field14208__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field14208.cljs$core$IFn$_invoke$arity$1 = range_field14208__1;
range_field14208.cljs$core$IFn$_invoke$arity$2 = range_field14208__2;
return range_field14208;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field14208);
/**
* Creates a search input field.
*/
sablono.core.search_field14209 = (function() {
var search_field14209 = null;
var search_field14209__1 = (function (name__4941__auto__){return search_field14209.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var search_field14209__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__4941__auto__,value__4942__auto__);
});
search_field14209 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return search_field14209__1.call(this,name__4941__auto__);
case 2:
return search_field14209__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field14209.cljs$core$IFn$_invoke$arity$1 = search_field14209__1;
search_field14209.cljs$core$IFn$_invoke$arity$2 = search_field14209__2;
return search_field14209;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field14209);
/**
* Creates a tel input field.
*/
sablono.core.tel_field14210 = (function() {
var tel_field14210 = null;
var tel_field14210__1 = (function (name__4941__auto__){return tel_field14210.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var tel_field14210__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__4941__auto__,value__4942__auto__);
});
tel_field14210 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return tel_field14210__1.call(this,name__4941__auto__);
case 2:
return tel_field14210__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field14210.cljs$core$IFn$_invoke$arity$1 = tel_field14210__1;
tel_field14210.cljs$core$IFn$_invoke$arity$2 = tel_field14210__2;
return tel_field14210;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field14210);
/**
* Creates a text input field.
*/
sablono.core.text_field14211 = (function() {
var text_field14211 = null;
var text_field14211__1 = (function (name__4941__auto__){return text_field14211.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var text_field14211__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__4941__auto__,value__4942__auto__);
});
text_field14211 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return text_field14211__1.call(this,name__4941__auto__);
case 2:
return text_field14211__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field14211.cljs$core$IFn$_invoke$arity$1 = text_field14211__1;
text_field14211.cljs$core$IFn$_invoke$arity$2 = text_field14211__2;
return text_field14211;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14211);
/**
* Creates a time input field.
*/
sablono.core.time_field14212 = (function() {
var time_field14212 = null;
var time_field14212__1 = (function (name__4941__auto__){return time_field14212.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var time_field14212__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__4941__auto__,value__4942__auto__);
});
time_field14212 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return time_field14212__1.call(this,name__4941__auto__);
case 2:
return time_field14212__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field14212.cljs$core$IFn$_invoke$arity$1 = time_field14212__1;
time_field14212.cljs$core$IFn$_invoke$arity$2 = time_field14212__2;
return time_field14212;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field14212);
/**
* Creates a url input field.
*/
sablono.core.url_field14213 = (function() {
var url_field14213 = null;
var url_field14213__1 = (function (name__4941__auto__){return url_field14213.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var url_field14213__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__4941__auto__,value__4942__auto__);
});
url_field14213 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return url_field14213__1.call(this,name__4941__auto__);
case 2:
return url_field14213__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field14213.cljs$core$IFn$_invoke$arity$1 = url_field14213__1;
url_field14213.cljs$core$IFn$_invoke$arity$2 = url_field14213__2;
return url_field14213;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field14213);
/**
* Creates a week input field.
*/
sablono.core.week_field14214 = (function() {
var week_field14214 = null;
var week_field14214__1 = (function (name__4941__auto__){return week_field14214.cljs$core$IFn$_invoke$arity$2(name__4941__auto__,null);
});
var week_field14214__2 = (function (name__4941__auto__,value__4942__auto__){return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__4941__auto__,value__4942__auto__);
});
week_field14214 = function(name__4941__auto__,value__4942__auto__){
switch(arguments.length){
case 1:
return week_field14214__1.call(this,name__4941__auto__);
case 2:
return week_field14214__2.call(this,name__4941__auto__,value__4942__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field14214.cljs$core$IFn$_invoke$arity$1 = week_field14214__1;
week_field14214.cljs$core$IFn$_invoke$arity$2 = week_field14214__2;
return week_field14214;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field14214);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box14215 = (function() {
var check_box14215 = null;
var check_box14215__1 = (function (name){return check_box14215.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box14215__2 = (function (name,checked_QMARK_){return check_box14215.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box14215__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$39,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$41,"checkbox",cljs.core.constant$keyword$51,sablono.core.make_name(name),cljs.core.constant$keyword$37,sablono.core.make_id(name),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$52,checked_QMARK_], null)], null);
});
check_box14215 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box14215__1.call(this,name);
case 2:
return check_box14215__2.call(this,name,checked_QMARK_);
case 3:
return check_box14215__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box14215.cljs$core$IFn$_invoke$arity$1 = check_box14215__1;
check_box14215.cljs$core$IFn$_invoke$arity$2 = check_box14215__2;
check_box14215.cljs$core$IFn$_invoke$arity$3 = check_box14215__3;
return check_box14215;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box14215);
/**
* Creates a radio button.
*/
sablono.core.radio_button14216 = (function() {
var radio_button14216 = null;
var radio_button14216__1 = (function (group){return radio_button14216.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button14216__2 = (function (group,checked_QMARK_){return radio_button14216.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button14216__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$39,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$41,"radio",cljs.core.constant$keyword$51,sablono.core.make_name(group),cljs.core.constant$keyword$37,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$52,checked_QMARK_], null)], null);
});
radio_button14216 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button14216__1.call(this,group);
case 2:
return radio_button14216__2.call(this,group,checked_QMARK_);
case 3:
return radio_button14216__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button14216.cljs$core$IFn$_invoke$arity$1 = radio_button14216__1;
radio_button14216.cljs$core$IFn$_invoke$arity$2 = radio_button14216__2;
radio_button14216.cljs$core$IFn$_invoke$arity$3 = radio_button14216__3;
return radio_button14216;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button14216);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options14217 = (function() {
var select_options14217 = null;
var select_options14217__1 = (function (coll){return select_options14217.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options14217__2 = (function (coll,selected){var iter__4198__auto__ = (function iter__14226(s__14227){return (new cljs.core.LazySeq(null,(function (){var s__14227__$1 = s__14227;while(true){
var temp__4126__auto__ = cljs.core.seq(s__14227__$1);if(temp__4126__auto__)
{var s__14227__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__14227__$2))
{var c__4196__auto__ = cljs.core.chunk_first(s__14227__$2);var size__4197__auto__ = cljs.core.count(c__4196__auto__);var b__14229 = cljs.core.chunk_buffer(size__4197__auto__);if((function (){var i__14228 = 0;while(true){
if((i__14228 < size__4197__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4196__auto__,i__14228);cljs.core.chunk_append(b__14229,((cljs.core.sequential_QMARK_(x))?(function (){var vec__14232 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14232,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14232,1,null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14232,2,null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$54,text], null),select_options14217.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$56,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$57,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$56,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__14234 = (i__14228 + 1);
i__14228 = G__14234;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14229),iter__14226(cljs.core.chunk_rest(s__14227__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14229),null);
}
} else
{var x = cljs.core.first(s__14227__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__14233 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,1,null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,2,null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$54,text], null),select_options14217.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$56,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$57,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$56,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__14226(cljs.core.rest(s__14227__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__(coll);
});
select_options14217 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options14217__1.call(this,coll);
case 2:
return select_options14217__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options14217.cljs$core$IFn$_invoke$arity$1 = select_options14217__1;
select_options14217.cljs$core$IFn$_invoke$arity$2 = select_options14217__2;
return select_options14217;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options14217);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down14235 = (function() {
var drop_down14235 = null;
var drop_down14235__2 = (function (name,options){return drop_down14235.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down14235__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$51,sablono.core.make_name(name),cljs.core.constant$keyword$37,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down14235 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down14235__2.call(this,name,options);
case 3:
return drop_down14235__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down14235.cljs$core$IFn$_invoke$arity$2 = drop_down14235__2;
drop_down14235.cljs$core$IFn$_invoke$arity$3 = drop_down14235__3;
return drop_down14235;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down14235);
/**
* Creates a text area element.
*/
sablono.core.text_area14236 = (function() {
var text_area14236 = null;
var text_area14236__1 = (function (name){return text_area14236.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area14236__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,sablono.core.make_name(name),cljs.core.constant$keyword$37,sablono.core.make_id(name),cljs.core.constant$keyword$11,value], null)], null);
});
text_area14236 = function(name,value){
switch(arguments.length){
case 1:
return text_area14236__1.call(this,name);
case 2:
return text_area14236__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area14236.cljs$core$IFn$_invoke$arity$1 = text_area14236__1;
text_area14236.cljs$core$IFn$_invoke$arity$2 = text_area14236__2;
return text_area14236;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area14236);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label14237 = (function label14237(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$54,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label14237);
/**
* Creates a submit button.
*/
sablono.core.submit_button14238 = (function submit_button14238(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$39,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$41,"submit",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button14238);
/**
* Creates a form reset button.
*/
sablono.core.reset_button14239 = (function reset_button14239(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$39,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$41,"reset",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button14239);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to14240 = (function() { 
var form_to14240__delegate = function (p__14241,body){var vec__14243 = p__14241;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14243,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14243,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$60,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$62,method_str,cljs.core.constant$keyword$63,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$62,"POST",cljs.core.constant$keyword$63,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to14240 = function (p__14241,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to14240__delegate.call(this,p__14241,body);};
form_to14240.cljs$lang$maxFixedArity = 1;
form_to14240.cljs$lang$applyTo = (function (arglist__14244){
var p__14241 = cljs.core.first(arglist__14244);
var body = cljs.core.rest(arglist__14244);
return form_to14240__delegate(p__14241,body);
});
form_to14240.cljs$core$IFn$_invoke$arity$variadic = form_to14240__delegate;
return form_to14240;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to14240);
