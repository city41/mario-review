// Compiled by ClojureScript 0.0-2202
goog.provide('mario.video_to_image');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('mario.activatable_video_view');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('mario.activatable_video_view');
goog.require('goog.events');
mario.video_to_image.img_cmp = (function img_cmp(p__10308,owner){var map__10313 = p__10308;var map__10313__$1 = ((cljs.core.seq_QMARK_(map__10313))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10313):map__10313);var img_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10313__$1,cljs.core.constant$keyword$157);if(typeof mario.video_to_image.t10314 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.video_to_image.t10314 = (function (img_src,map__10313,owner,p__10308,img_cmp,meta10315){
this.img_src = img_src;
this.map__10313 = map__10313;
this.owner = owner;
this.p__10308 = p__10308;
this.img_cmp = img_cmp;
this.meta10315 = meta10315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.video_to_image.t10314.cljs$lang$type = true;
mario.video_to_image.t10314.cljs$lang$ctorStr = "mario.video-to-image/t10314";
mario.video_to_image.t10314.cljs$lang$ctorPrWriter = ((function (map__10313,map__10313__$1,img_src){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.video-to-image/t10314");
});})(map__10313,map__10313__$1,img_src))
;
mario.video_to_image.t10314.prototype.om$core$IRender$ = true;
mario.video_to_image.t10314.prototype.om$core$IRender$render$arity$1 = ((function (map__10313,map__10313__$1,img_src){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "video-to-image-container"},React.DOM.img({"src": self__.img_src}));
});})(map__10313,map__10313__$1,img_src))
;
mario.video_to_image.t10314.prototype.om$core$IDisplayName$ = true;
mario.video_to_image.t10314.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__10313,map__10313__$1,img_src){
return (function (_){var self__ = this;
var ___$1 = this;return "video_to_image::img-cmp";
});})(map__10313,map__10313__$1,img_src))
;
mario.video_to_image.t10314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10313,map__10313__$1,img_src){
return (function (_10316){var self__ = this;
var _10316__$1 = this;return self__.meta10315;
});})(map__10313,map__10313__$1,img_src))
;
mario.video_to_image.t10314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10313,map__10313__$1,img_src){
return (function (_10316,meta10315__$1){var self__ = this;
var _10316__$1 = this;return (new mario.video_to_image.t10314(self__.img_src,self__.map__10313,self__.owner,self__.p__10308,self__.img_cmp,meta10315__$1));
});})(map__10313,map__10313__$1,img_src))
;
mario.video_to_image.__GT_t10314 = ((function (map__10313,map__10313__$1,img_src){
return (function __GT_t10314(img_src__$1,map__10313__$2,owner__$1,p__10308__$1,img_cmp__$1,meta10315){return (new mario.video_to_image.t10314(img_src__$1,map__10313__$2,owner__$1,p__10308__$1,img_cmp__$1,meta10315));
});})(map__10313,map__10313__$1,img_src))
;
}
return (new mario.video_to_image.t10314(img_src,map__10313__$1,owner,p__10308,img_cmp,null));
});
mario.video_to_image.video_cmp = (function video_cmp(p__10317,owner){var map__10324 = p__10317;var map__10324__$1 = ((cljs.core.seq_QMARK_(map__10324))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10324):map__10324);var post_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10324__$1,cljs.core.constant$keyword$159);var pre_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10324__$1,cljs.core.constant$keyword$158);var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10324__$1,cljs.core.constant$keyword$172);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10324__$1,cljs.core.constant$keyword$98);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10324__$1,cljs.core.constant$keyword$97);var img_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10324__$1,cljs.core.constant$keyword$157);var video_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10324__$1,cljs.core.constant$keyword$102);if(typeof mario.video_to_image.t10325 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.video_to_image.t10325 = (function (p__10317,owner,height,transition,video_src,map__10324,post_delay,width,video_cmp,img_src,pre_delay,meta10326){
this.p__10317 = p__10317;
this.owner = owner;
this.height = height;
this.transition = transition;
this.video_src = video_src;
this.map__10324 = map__10324;
this.post_delay = post_delay;
this.width = width;
this.video_cmp = video_cmp;
this.img_src = img_src;
this.pre_delay = pre_delay;
this.meta10326 = meta10326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.video_to_image.t10325.cljs$lang$type = true;
mario.video_to_image.t10325.cljs$lang$ctorStr = "mario.video-to-image/t10325";
mario.video_to_image.t10325.cljs$lang$ctorPrWriter = ((function (map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.video-to-image/t10325");
});})(map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
;
mario.video_to_image.t10325.prototype.om$core$IRenderState$ = true;
mario.video_to_image.t10325.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (_,p__10328){var self__ = this;
var map__10329 = p__10328;var map__10329__$1 = ((cljs.core.seq_QMARK_(map__10329))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10329):map__10329);var transition__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10329__$1,cljs.core.constant$keyword$172);var ___$1 = this;return React.DOM.div({"className": "video-to-image-container"},React.DOM.div({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["video-to-image-video",[cljs.core.str(""),cljs.core.str((cljs.core.truth_(transition__$2)?" fade-out":null))].join('')], null))},React.DOM.video({"key": self__.video_src, "width": self__.width, "height": self__.height, "ref": "video"},sablono.interpreter.interpret(mario.activatable_video_view.get_video_sources(self__.video_src)))),React.DOM.div({"className": "video-to-image-img"},React.DOM.img({"src": self__.img_src, "width": self__.width, "height": self__.height})));
});})(map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
;
mario.video_to_image.t10325.prototype.om$core$IDidMount$ = true;
mario.video_to_image.t10325.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (_){var self__ = this;
var ___$1 = this;var v = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"video");v.addEventListener("ended",((function (v,___$1,map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (){return setTimeout(((function (v,___$1,map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$172,true);
});})(v,___$1,map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
,self__.post_delay);
});})(v,___$1,map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
);
return setTimeout(((function (v,___$1,map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (){return v.play();
});})(v,___$1,map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
,self__.pre_delay);
});})(map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
;
mario.video_to_image.t10325.prototype.om$core$IInitState$ = true;
mario.video_to_image.t10325.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$172,false], null);
});})(map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
;
mario.video_to_image.t10325.prototype.om$core$IDisplayName$ = true;
mario.video_to_image.t10325.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (_){var self__ = this;
var ___$1 = this;return "video-to-image::video-cmp";
});})(map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
;
mario.video_to_image.t10325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (_10327){var self__ = this;
var _10327__$1 = this;return self__.meta10326;
});})(map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
;
mario.video_to_image.t10325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function (_10327,meta10326__$1){var self__ = this;
var _10327__$1 = this;return (new mario.video_to_image.t10325(self__.p__10317,self__.owner,self__.height,self__.transition,self__.video_src,self__.map__10324,self__.post_delay,self__.width,self__.video_cmp,self__.img_src,self__.pre_delay,meta10326__$1));
});})(map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
;
mario.video_to_image.__GT_t10325 = ((function (map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src){
return (function __GT_t10325(p__10317__$1,owner__$1,height__$1,transition__$1,video_src__$1,map__10324__$2,post_delay__$1,width__$1,video_cmp__$1,img_src__$1,pre_delay__$1,meta10326){return (new mario.video_to_image.t10325(p__10317__$1,owner__$1,height__$1,transition__$1,video_src__$1,map__10324__$2,post_delay__$1,width__$1,video_cmp__$1,img_src__$1,pre_delay__$1,meta10326));
});})(map__10324,map__10324__$1,post_delay,pre_delay,transition,height,width,img_src,video_src))
;
}
return (new mario.video_to_image.t10325(p__10317,owner,height,transition,video_src,map__10324__$1,post_delay,width,video_cmp,img_src,pre_delay,null));
});
mario.video_to_image.root = (function root(app,owner){if(typeof mario.video_to_image.t10333 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.video_to_image.t10333 = (function (owner,app,root,meta10334){
this.owner = owner;
this.app = app;
this.root = root;
this.meta10334 = meta10334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.video_to_image.t10333.cljs$lang$type = true;
mario.video_to_image.t10333.cljs$lang$ctorStr = "mario.video-to-image/t10333";
mario.video_to_image.t10333.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.video-to-image/t10333");
});
mario.video_to_image.t10333.prototype.om$core$IRender$ = true;
mario.video_to_image.t10333.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var cmp = (cljs.core.truth_(window.mustUseGifs())?mario.video_to_image.img_cmp:mario.video_to_image.video_cmp);return om.core.build.cljs$core$IFn$_invoke$arity$2(cmp,self__.app);
});
mario.video_to_image.t10333.prototype.om$core$IDisplayName$ = true;
mario.video_to_image.t10333.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "video_to_image::root";
});
mario.video_to_image.t10333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10335){var self__ = this;
var _10335__$1 = this;return self__.meta10334;
});
mario.video_to_image.t10333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10335,meta10334__$1){var self__ = this;
var _10335__$1 = this;return (new mario.video_to_image.t10333(self__.owner,self__.app,self__.root,meta10334__$1));
});
mario.video_to_image.__GT_t10333 = (function __GT_t10333(owner__$1,app__$1,root__$1,meta10334){return (new mario.video_to_image.t10333(owner__$1,app__$1,root__$1,meta10334));
});
}
return (new mario.video_to_image.t10333(owner,app,root,null));
});
