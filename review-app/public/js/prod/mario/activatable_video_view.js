// Compiled by ClojureScript 0.0-2202
goog.provide('mario.activatable_video_view');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('mario.scroll_activate_root');
goog.require('mario.scroll_activate_root');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
mario.activatable_video_view.get_video = (function get_video(owner){try{return om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"video");
}catch (e10078){if((e10078 instanceof Object))
{var e = e10078;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10078;
} else
{return null;
}
}
}});
mario.activatable_video_view.play_video = (function() {
var play_video = null;
var play_video__1 = (function (owner){return play_video.cljs$core$IFn$_invoke$arity$2(owner,false);
});
var play_video__2 = (function (owner,should_load){try{var temp__4126__auto__ = mario.activatable_video_view.get_video(owner);if(cljs.core.truth_(temp__4126__auto__))
{var v = temp__4126__auto__;v.currentTime = 0;
if(cljs.core.truth_(should_load))
{v.load();
} else
{}
return v.play();
} else
{return null;
}
}catch (e10080){if((e10080 instanceof Object))
{var e = e10080;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10080;
} else
{return null;
}
}
}});
play_video = function(owner,should_load){
switch(arguments.length){
case 1:
return play_video__1.call(this,owner);
case 2:
return play_video__2.call(this,owner,should_load);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_video.cljs$core$IFn$_invoke$arity$1 = play_video__1;
play_video.cljs$core$IFn$_invoke$arity$2 = play_video__2;
return play_video;
})()
;
mario.activatable_video_view.get_video_attrs = (function get_video_attrs(active,video_src,width,height){var attrs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,"video",cljs.core.constant$keyword$85,video_src,cljs.core.constant$keyword$95,[cljs.core.str(video_src),cljs.core.str("-poster.png")].join('')], null);var attrs__$1 = (cljs.core.truth_(active)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.constant$keyword$96,"autoplay"):attrs);var attrs__$2 = (cljs.core.truth_((function (){var and__3469__auto__ = width;if(cljs.core.truth_(and__3469__auto__))
{return height;
} else
{return and__3469__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs__$1,cljs.core.constant$keyword$97,width,cljs.core.array_seq([cljs.core.constant$keyword$98,height], 0)):attrs__$1);return attrs__$2;
});
mario.activatable_video_view.get_video_sources = (function get_video_sources(src_root){var get_source = (function (ext){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$99,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,[cljs.core.str(src_root),cljs.core.str("."),cljs.core.str(ext)].join(''),cljs.core.constant$keyword$41,[cljs.core.str("video/"),cljs.core.str(ext)].join('')], null)], null);
});var exts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mp4","webm"], null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_source,exts);
});
mario.activatable_video_view.get_img_attrs = (function get_img_attrs(src,w,h){var attrs = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$85,src,cljs.core.constant$keyword$49,[cljs.core.str(src),cljs.core.str(".gif")].join('')], null);if(cljs.core.truth_((function (){var and__3469__auto__ = w;if(cljs.core.truth_(and__3469__auto__))
{return h;
} else
{return and__3469__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.constant$keyword$97,w,cljs.core.array_seq([cljs.core.constant$keyword$98,h], 0));
} else
{return attrs;
}
});
mario.activatable_video_view.hook = (function hook(owner){var temp__4126__auto__ = mario.activatable_video_view.get_video(owner);if(cljs.core.truth_(temp__4126__auto__))
{var v = temp__4126__auto__;return v.addEventListener("ended",((function (v,temp__4126__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$100,true);
});})(v,temp__4126__auto__))
);
} else
{return null;
}
});
mario.activatable_video_view.cmp = (function cmp(p__10081,owner){var map__10092 = p__10081;var map__10092__$1 = ((cljs.core.seq_QMARK_(map__10092))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10092):map__10092);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10092__$1,cljs.core.constant$keyword$98);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10092__$1,cljs.core.constant$keyword$97);var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10092__$1,cljs.core.constant$keyword$101);var video_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10092__$1,cljs.core.constant$keyword$102);if(typeof mario.activatable_video_view.t10093 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.activatable_video_view.t10093 = (function (video_src,active,width,height,map__10092,owner,p__10081,cmp,meta10094){
this.video_src = video_src;
this.active = active;
this.width = width;
this.height = height;
this.map__10092 = map__10092;
this.owner = owner;
this.p__10081 = p__10081;
this.cmp = cmp;
this.meta10094 = meta10094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.activatable_video_view.t10093.cljs$lang$type = true;
mario.activatable_video_view.t10093.cljs$lang$ctorStr = "mario.activatable-video-view/t10093";
mario.activatable_video_view.t10093.cljs$lang$ctorPrWriter = ((function (map__10092,map__10092__$1,height,width,active,video_src){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.activatable-video-view/t10093");
});})(map__10092,map__10092__$1,height,width,active,video_src))
;
mario.activatable_video_view.t10093.prototype.om$core$IRenderState$ = true;
mario.activatable_video_view.t10093.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10092,map__10092__$1,height,width,active,video_src){
return (function (_,p__10096){var self__ = this;
var map__10097 = p__10096;var map__10097__$1 = ((cljs.core.seq_QMARK_(map__10097))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10097):map__10097);var state = map__10097__$1;var played_once = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10097__$1,cljs.core.constant$keyword$100);var ___$1 = this;return React.DOM.div({"className": "activatable-video-view"},React.DOM.div({"className": "activatable-video-container", "ref": "container"},(cljs.core.truth_(window.mustUseGifs())?(function (){var attrs10098 = mario.activatable_video_view.get_img_attrs(self__.video_src,self__.width,self__.height);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.img,((cljs.core.map_QMARK_(attrs10098))?sablono.interpreter.attributes(attrs10098):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10098))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10098)], null))));
})():(function (){var attrs10099 = mario.activatable_video_view.get_video_attrs(self__.active,self__.video_src,self__.width,self__.height);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.video,((cljs.core.map_QMARK_(attrs10099))?sablono.interpreter.attributes(attrs10099):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10099))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(mario.activatable_video_view.get_video_sources(self__.video_src))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10099),sablono.interpreter.interpret(mario.activatable_video_view.get_video_sources(self__.video_src))], null))));
})()),sablono.interpreter.interpret((cljs.core.truth_(played_once)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,((function (___$1,map__10097,map__10097__$1,state,played_once,map__10092,map__10092__$1,height,width,active,video_src){
return (function (){return mario.activatable_video_view.play_video.cljs$core$IFn$_invoke$arity$2(self__.owner,true);
});})(___$1,map__10097,map__10097__$1,state,played_once,map__10092,map__10092__$1,height,width,active,video_src))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$105], null)], null):null))));
});})(map__10092,map__10092__$1,height,width,active,video_src))
;
mario.activatable_video_view.t10093.prototype.om$core$IWillUpdate$ = true;
mario.activatable_video_view.t10093.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__10092,map__10092__$1,height,width,active,video_src){
return (function (_,p__10100,___$1){var self__ = this;
var map__10101 = p__10100;var map__10101__$1 = ((cljs.core.seq_QMARK_(map__10101))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10101):map__10101);var active__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10101__$1,cljs.core.constant$keyword$101);var video_src__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10101__$1,cljs.core.constant$keyword$102);var ___$2 = this;var prev_active = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(om.core.get_props(self__.owner));var prev_src = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(om.core.get_props(self__.owner));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_src,video_src__$2))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$100,false);
window.setTimeout(((function (prev_active,prev_src,___$2,map__10101,map__10101__$1,active__$2,video_src__$2,map__10092,map__10092__$1,height,width,active,video_src){
return (function (){return mario.activatable_video_view.hook(self__.owner);
});})(prev_active,prev_src,___$2,map__10101,map__10101__$1,active__$2,video_src__$2,map__10092,map__10092__$1,height,width,active,video_src))
,5);
} else
{}
if(cljs.core.truth_((function (){var and__3469__auto__ = cljs.core.not(prev_active);if(and__3469__auto__)
{return active__$2;
} else
{return and__3469__auto__;
}
})()))
{return mario.activatable_video_view.play_video.cljs$core$IFn$_invoke$arity$1(self__.owner);
} else
{return null;
}
});})(map__10092,map__10092__$1,height,width,active,video_src))
;
mario.activatable_video_view.t10093.prototype.om$core$IDidMount$ = true;
mario.activatable_video_view.t10093.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__10092,map__10092__$1,height,width,active,video_src){
return (function (_){var self__ = this;
var ___$1 = this;return mario.activatable_video_view.hook(self__.owner);
});})(map__10092,map__10092__$1,height,width,active,video_src))
;
mario.activatable_video_view.t10093.prototype.om$core$IInitState$ = true;
mario.activatable_video_view.t10093.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10092,map__10092__$1,height,width,active,video_src){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$100,false], null);
});})(map__10092,map__10092__$1,height,width,active,video_src))
;
mario.activatable_video_view.t10093.prototype.om$core$IDisplayName$ = true;
mario.activatable_video_view.t10093.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__10092,map__10092__$1,height,width,active,video_src){
return (function (_){var self__ = this;
var ___$1 = this;return "activatable-video-view::cmp";
});})(map__10092,map__10092__$1,height,width,active,video_src))
;
mario.activatable_video_view.t10093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10092,map__10092__$1,height,width,active,video_src){
return (function (_10095){var self__ = this;
var _10095__$1 = this;return self__.meta10094;
});})(map__10092,map__10092__$1,height,width,active,video_src))
;
mario.activatable_video_view.t10093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10092,map__10092__$1,height,width,active,video_src){
return (function (_10095,meta10094__$1){var self__ = this;
var _10095__$1 = this;return (new mario.activatable_video_view.t10093(self__.video_src,self__.active,self__.width,self__.height,self__.map__10092,self__.owner,self__.p__10081,self__.cmp,meta10094__$1));
});})(map__10092,map__10092__$1,height,width,active,video_src))
;
mario.activatable_video_view.__GT_t10093 = ((function (map__10092,map__10092__$1,height,width,active,video_src){
return (function __GT_t10093(video_src__$1,active__$1,width__$1,height__$1,map__10092__$2,owner__$1,p__10081__$1,cmp__$1,meta10094){return (new mario.activatable_video_view.t10093(video_src__$1,active__$1,width__$1,height__$1,map__10092__$2,owner__$1,p__10081__$1,cmp__$1,meta10094));
});})(map__10092,map__10092__$1,height,width,active,video_src))
;
}
return (new mario.activatable_video_view.t10093(video_src,active,width,height,map__10092__$1,owner,p__10081,cmp,null));
});
mario.activatable_video_view.root = (mario.scroll_activate_root.get_root.cljs$core$IFn$_invoke$arity$1 ? mario.scroll_activate_root.get_root.cljs$core$IFn$_invoke$arity$1(mario.activatable_video_view.cmp) : mario.scroll_activate_root.get_root.call(null,mario.activatable_video_view.cmp));
