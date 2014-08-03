// Compiled by ClojureScript 0.0-2202
goog.provide('mario.level_explorer');
goog.require('cljs.core');
goog.require('mario.activatable_video_view');
goog.require('mario.activatable_video_view');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
mario.level_explorer.build_open_header = (function build_open_header(owner,levels){var click_fn = (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$118,true);
});return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,click_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (click_fn){
return (function (l){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,cljs.core.constant$keyword$146.cljs$core$IFn$_invoke$arity$1(l)], null)], null);
});})(click_fn))
,cljs.core.take(4,levels)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113," ... click to explore more levels"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122], null)], null)], null);
});
mario.level_explorer.build_row = (function build_row(index,p__10190,owner){var map__10192 = p__10190;var map__10192__$1 = ((cljs.core.seq_QMARK_(map__10192))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10192):map__10192);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10192__$1,cljs.core.constant$keyword$116);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10192__$1,cljs.core.constant$keyword$51);var thumb_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10192__$1,cljs.core.constant$keyword$146);var click_fn = ((function (map__10192,map__10192__$1,description,name,thumb_src){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$111,index);
});})(map__10192,map__10192__$1,description,name,thumb_src))
;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,click_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,thumb_src], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113,description], null)], null)], null);
});
mario.level_explorer.build_rows = (function() {
var build_rows = null;
var build_rows__2 = (function (levels,owner){return build_rows.cljs$core$IFn$_invoke$arity$3(levels,owner,0);
});
var build_rows__3 = (function (levels,owner,offset){return cljs.core.map_indexed((function (p1__10193_SHARP_,p2__10194_SHARP_){return mario.level_explorer.build_row((offset + p1__10193_SHARP_),p2__10194_SHARP_,owner);
}),levels);
});
build_rows = function(levels,owner,offset){
switch(arguments.length){
case 2:
return build_rows__2.call(this,levels,owner);
case 3:
return build_rows__3.call(this,levels,owner,offset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_rows.cljs$core$IFn$_invoke$arity$2 = build_rows__2;
build_rows.cljs$core$IFn$_invoke$arity$3 = build_rows__3;
return build_rows;
})()
;
mario.level_explorer.build_active_level = (function build_active_level(owner,p__10195){var map__10197 = p__10195;var map__10197__$1 = ((cljs.core.seq_QMARK_(map__10197))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10197):map__10197);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10197__$1,cljs.core.constant$keyword$116);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10197__$1,cljs.core.constant$keyword$51);var video_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10197__$1,cljs.core.constant$keyword$102);var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10197__$1,cljs.core.constant$keyword$150);var click_fn = ((function (map__10197,map__10197__$1,description,name,video_src,level){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$111,null);
});})(map__10197,map__10197__$1,description,name,video_src,level))
;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,click_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,om.core.build.cljs$core$IFn$_invoke$arity$2(mario.activatable_video_view.cmp,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$102,video_src,cljs.core.constant$keyword$101,true,cljs.core.constant$keyword$97,256,cljs.core.constant$keyword$98,224], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113,description], null)], null)], null);
});
mario.level_explorer.build_instruction_header = (function build_instruction_header(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,"Click on a level to see it in action"], null);
});
mario.level_explorer.build_body = (function build_body(owner,active_index,levels){var upper_levels = cljs.core.take(active_index,levels);var active_level = (cljs.core.truth_(active_index)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(levels,active_index):null);var lower_levels = (cljs.core.truth_(active_index)?cljs.core.drop((active_index + 1),levels):levels);var click_fn = ((function (upper_levels,active_level,lower_levels){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$118,false);
});})(upper_levels,active_level,lower_levels))
;return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,mario.level_explorer.build_instruction_header(),mario.level_explorer.build_rows.cljs$core$IFn$_invoke$arity$2(upper_levels,owner),(cljs.core.truth_(active_level)?mario.level_explorer.build_active_level(owner,active_level):null),mario.level_explorer.build_rows.cljs$core$IFn$_invoke$arity$3(lower_levels,owner,((function (){var or__3481__auto__ = active_index;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return -1;
}
})() + 1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,click_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129], null)], null)], null);
});
mario.level_explorer.cmp = (function cmp(p__10198,owner){var map__10205 = p__10198;var map__10205__$1 = ((cljs.core.seq_QMARK_(map__10205))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10205):map__10205);var levels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10205__$1,cljs.core.constant$keyword$156);if(typeof mario.level_explorer.t10206 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.level_explorer.t10206 = (function (levels,map__10205,owner,p__10198,cmp,meta10207){
this.levels = levels;
this.map__10205 = map__10205;
this.owner = owner;
this.p__10198 = p__10198;
this.cmp = cmp;
this.meta10207 = meta10207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.level_explorer.t10206.cljs$lang$type = true;
mario.level_explorer.t10206.cljs$lang$ctorStr = "mario.level-explorer/t10206";
mario.level_explorer.t10206.cljs$lang$ctorPrWriter = ((function (map__10205,map__10205__$1,levels){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.level-explorer/t10206");
});})(map__10205,map__10205__$1,levels))
;
mario.level_explorer.t10206.prototype.om$core$IRenderState$ = true;
mario.level_explorer.t10206.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10205,map__10205__$1,levels){
return (function (_,p__10209){var self__ = this;
var map__10210 = p__10209;var map__10210__$1 = ((cljs.core.seq_QMARK_(map__10210))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10210):map__10210);var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10210__$1,cljs.core.constant$keyword$118);var active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10210__$1,cljs.core.constant$keyword$111);var ___$1 = this;if(cljs.core.truth_(open))
{return sablono.interpreter.interpret(mario.level_explorer.build_body(self__.owner,active_index,self__.levels));
} else
{return sablono.interpreter.interpret(mario.level_explorer.build_open_header(self__.owner,self__.levels));
}
});})(map__10205,map__10205__$1,levels))
;
mario.level_explorer.t10206.prototype.om$core$IInitState$ = true;
mario.level_explorer.t10206.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10205,map__10205__$1,levels){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$111,null,cljs.core.constant$keyword$118,false], null);
});})(map__10205,map__10205__$1,levels))
;
mario.level_explorer.t10206.prototype.om$core$IDisplayName$ = true;
mario.level_explorer.t10206.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__10205,map__10205__$1,levels){
return (function (_){var self__ = this;
var ___$1 = this;return "level-explorer::cmp";
});})(map__10205,map__10205__$1,levels))
;
mario.level_explorer.t10206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10205,map__10205__$1,levels){
return (function (_10208){var self__ = this;
var _10208__$1 = this;return self__.meta10207;
});})(map__10205,map__10205__$1,levels))
;
mario.level_explorer.t10206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10205,map__10205__$1,levels){
return (function (_10208,meta10207__$1){var self__ = this;
var _10208__$1 = this;return (new mario.level_explorer.t10206(self__.levels,self__.map__10205,self__.owner,self__.p__10198,self__.cmp,meta10207__$1));
});})(map__10205,map__10205__$1,levels))
;
mario.level_explorer.__GT_t10206 = ((function (map__10205,map__10205__$1,levels){
return (function __GT_t10206(levels__$1,map__10205__$2,owner__$1,p__10198__$1,cmp__$1,meta10207){return (new mario.level_explorer.t10206(levels__$1,map__10205__$2,owner__$1,p__10198__$1,cmp__$1,meta10207));
});})(map__10205,map__10205__$1,levels))
;
}
return (new mario.level_explorer.t10206(levels,map__10205__$1,owner,p__10198,cmp,null));
});
