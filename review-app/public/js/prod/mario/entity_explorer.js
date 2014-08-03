// Compiled by ClojureScript 0.0-2202
goog.provide('mario.entity_explorer');
goog.require('cljs.core');
goog.require('mario.activatable_video_view');
goog.require('mario.activatable_video_view');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
mario.entity_explorer.entity_img_attrs = (function entity_img_attrs(thumb,hover_thumb){var a = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,thumb], null);if(cljs.core.truth_(hover_thumb))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(a,cljs.core.constant$keyword$106,((function (a){
return (function (p1__10102_SHARP_){return p1__10102_SHARP_.target.src = hover_thumb;
});})(a))
,cljs.core.array_seq([cljs.core.constant$keyword$107,((function (a){
return (function (p1__10103_SHARP_){return p1__10103_SHARP_.target.src = thumb;
});})(a))
], 0));
} else
{return a;
}
});
mario.entity_explorer.entity_div = (function entity_div(owner,active_index,entity_index,p__10104){var map__10106 = p__10104;var map__10106__$1 = ((cljs.core.seq_QMARK_(map__10106))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10106):map__10106);var entity = map__10106__$1;var flipped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10106__$1,cljs.core.constant$keyword$108);var hover_thumb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10106__$1,cljs.core.constant$keyword$109);var thumb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10106__$1,cljs.core.constant$keyword$110);var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_index,entity_index);var click_fn = ((function (active,map__10106,map__10106__$1,entity,flipped,hover_thumb,thumb){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$111,entity_index);
});})(active,map__10106,map__10106__$1,entity,flipped,hover_thumb,thumb))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$112,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$31,[cljs.core.str(""),cljs.core.str(((active)?" active-entity":null)),cljs.core.str((cljs.core.truth_(flipped)?" flipped":null))].join(''),cljs.core.constant$keyword$104,click_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,mario.entity_explorer.entity_img_attrs(thumb,hover_thumb)], null)], null);
});
mario.entity_explorer.build_entities = (function() {
var build_entities = null;
var build_entities__3 = (function (owner,entities,active){return build_entities.cljs$core$IFn$_invoke$arity$4(owner,entities,active,0);
});
var build_entities__4 = (function (owner,entities,active,offset){return cljs.core.map_indexed((function (p1__10107_SHARP_,p2__10108_SHARP_){return mario.entity_explorer.entity_div(owner,active,(offset + p1__10107_SHARP_),p2__10108_SHARP_);
}),entities);
});
build_entities = function(owner,entities,active,offset){
switch(arguments.length){
case 3:
return build_entities__3.call(this,owner,entities,active);
case 4:
return build_entities__4.call(this,owner,entities,active,offset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_entities.cljs$core$IFn$_invoke$arity$3 = build_entities__3;
build_entities.cljs$core$IFn$_invoke$arity$4 = build_entities__4;
return build_entities;
})()
;
mario.entity_explorer.build_main = (function build_main(entity){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113,om.core.build.cljs$core$IFn$_invoke$arity$2(mario.activatable_video_view.cmp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.constant$keyword$101,true)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$114,cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$115,cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(entity)], null)], null);
});
mario.entity_explorer.build_instructions = (function build_instructions(type_name){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$117,[cljs.core.str("Click on an "),cljs.core.str(type_name),cljs.core.str(" to learn more about them")].join('')], null);
});
mario.entity_explorer.build_open_header = (function build_open_header(owner,entities,plural_type_name){var click_fn = (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$118,true);
});return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$119,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,click_fn], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (click_fn){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(e)], null)], null);
});})(click_fn))
,cljs.core.take(4,entities)),[cljs.core.str(" click to explore more "),cljs.core.str(plural_type_name)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122], null)], null)], null);
});
mario.entity_explorer.build_body = (function build_body(owner,entities,active_index,type_name,plural_type_name){var total_entities = cljs.core.count(entities);var half = (total_entities / 2);var active_entity = (cljs.core.truth_(active_index)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(entities,active_index):null);var left_entities = cljs.core.take(half,entities);var right_entities = cljs.core.drop(half,entities);var offset = Math.ceil(half);var click_fn = ((function (total_entities,half,active_entity,left_entities,right_entities,offset){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$118,false);
});})(total_entities,half,active_entity,left_entities,right_entities,offset))
;return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,mario.entity_explorer.build_entities.cljs$core$IFn$_invoke$arity$3(owner,left_entities,active_index)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,(cljs.core.truth_(active_entity)?mario.entity_explorer.build_main(active_entity):mario.entity_explorer.build_instructions(type_name))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,mario.entity_explorer.build_entities.cljs$core$IFn$_invoke$arity$4(owner,right_entities,active_index,offset)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,[cljs.core.str("rotate your phone to see more "),cljs.core.str(plural_type_name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,click_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129], null)], null)], null);
});
mario.entity_explorer.cmp = (function cmp(p__10109,owner){var map__10116 = p__10109;var map__10116__$1 = ((cljs.core.seq_QMARK_(map__10116))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10116):map__10116);var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10116__$1,cljs.core.constant$keyword$130);var type_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10116__$1,cljs.core.constant$keyword$131);var entities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10116__$1,cljs.core.constant$keyword$132);if(typeof mario.entity_explorer.t10117 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.entity_explorer.t10117 = (function (entities,type_name,plural,map__10116,owner,p__10109,cmp,meta10118){
this.entities = entities;
this.type_name = type_name;
this.plural = plural;
this.map__10116 = map__10116;
this.owner = owner;
this.p__10109 = p__10109;
this.cmp = cmp;
this.meta10118 = meta10118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.entity_explorer.t10117.cljs$lang$type = true;
mario.entity_explorer.t10117.cljs$lang$ctorStr = "mario.entity-explorer/t10117";
mario.entity_explorer.t10117.cljs$lang$ctorPrWriter = ((function (map__10116,map__10116__$1,plural,type_name,entities){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.entity-explorer/t10117");
});})(map__10116,map__10116__$1,plural,type_name,entities))
;
mario.entity_explorer.t10117.prototype.om$core$IRenderState$ = true;
mario.entity_explorer.t10117.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10116,map__10116__$1,plural,type_name,entities){
return (function (_,p__10120){var self__ = this;
var map__10121 = p__10120;var map__10121__$1 = ((cljs.core.seq_QMARK_(map__10121))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10121):map__10121);var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10121__$1,cljs.core.constant$keyword$118);var active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10121__$1,cljs.core.constant$keyword$111);var ___$1 = this;if(cljs.core.truth_(open))
{return sablono.interpreter.interpret(mario.entity_explorer.build_body(self__.owner,self__.entities,active_index,self__.type_name,self__.plural));
} else
{return sablono.interpreter.interpret(mario.entity_explorer.build_open_header(self__.owner,self__.entities,self__.plural));
}
});})(map__10116,map__10116__$1,plural,type_name,entities))
;
mario.entity_explorer.t10117.prototype.om$core$IInitState$ = true;
mario.entity_explorer.t10117.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10116,map__10116__$1,plural,type_name,entities){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$111,0,cljs.core.constant$keyword$118,false], null);
});})(map__10116,map__10116__$1,plural,type_name,entities))
;
mario.entity_explorer.t10117.prototype.om$core$IDisplayName$ = true;
mario.entity_explorer.t10117.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__10116,map__10116__$1,plural,type_name,entities){
return (function (_){var self__ = this;
var ___$1 = this;return "entity-explorer::cmp";
});})(map__10116,map__10116__$1,plural,type_name,entities))
;
mario.entity_explorer.t10117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10116,map__10116__$1,plural,type_name,entities){
return (function (_10119){var self__ = this;
var _10119__$1 = this;return self__.meta10118;
});})(map__10116,map__10116__$1,plural,type_name,entities))
;
mario.entity_explorer.t10117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10116,map__10116__$1,plural,type_name,entities){
return (function (_10119,meta10118__$1){var self__ = this;
var _10119__$1 = this;return (new mario.entity_explorer.t10117(self__.entities,self__.type_name,self__.plural,self__.map__10116,self__.owner,self__.p__10109,self__.cmp,meta10118__$1));
});})(map__10116,map__10116__$1,plural,type_name,entities))
;
mario.entity_explorer.__GT_t10117 = ((function (map__10116,map__10116__$1,plural,type_name,entities){
return (function __GT_t10117(entities__$1,type_name__$1,plural__$1,map__10116__$2,owner__$1,p__10109__$1,cmp__$1,meta10118){return (new mario.entity_explorer.t10117(entities__$1,type_name__$1,plural__$1,map__10116__$2,owner__$1,p__10109__$1,cmp__$1,meta10118));
});})(map__10116,map__10116__$1,plural,type_name,entities))
;
}
return (new mario.entity_explorer.t10117(entities,type_name,plural,map__10116__$1,owner,p__10109,cmp,null));
});
