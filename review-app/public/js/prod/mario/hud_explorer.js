// Compiled by ClojureScript 0.0-2202
goog.provide('mario.hud_explorer');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
mario.hud_explorer.hud_items = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,"Lives",cljs.core.constant$keyword$116,"How many extra lives Mario has",cljs.core.constant$keyword$134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,25,cljs.core.constant$keyword$136,20,cljs.core.constant$keyword$137,95,cljs.core.constant$keyword$138,50], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,"Dragon Coins",cljs.core.constant$keyword$116,"Collect 5 Dragon Coins in one level for a 1-up",cljs.core.constant$keyword$134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,122,cljs.core.constant$keyword$136,25,cljs.core.constant$keyword$137,64,cljs.core.constant$keyword$138,25], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,"Star Count",cljs.core.constant$keyword$116,"Earn 100 stars at ends of levels for a bonus game",cljs.core.constant$keyword$134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,186,cljs.core.constant$keyword$136,25,cljs.core.constant$keyword$137,41,cljs.core.constant$keyword$138,41], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,138,cljs.core.constant$keyword$136,45,cljs.core.constant$keyword$137,55,cljs.core.constant$keyword$138,21], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,"Extra Item",cljs.core.constant$keyword$116,"Storage for an extra item Mario can use",cljs.core.constant$keyword$134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,226,cljs.core.constant$keyword$136,15,cljs.core.constant$keyword$137,62,cljs.core.constant$keyword$138,62], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,"Timer",cljs.core.constant$keyword$116,"How much time remaining to finish the level",cljs.core.constant$keyword$134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,298,cljs.core.constant$keyword$136,25,cljs.core.constant$keyword$137,63,cljs.core.constant$keyword$138,43], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,"Coins",cljs.core.constant$keyword$116,"How many coins Mario has collected, 100 yields a 1-up",cljs.core.constant$keyword$134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,390,cljs.core.constant$keyword$136,25,cljs.core.constant$keyword$137,95,cljs.core.constant$keyword$138,23], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,"Score",cljs.core.constant$keyword$116,"The all important score of the game!",cljs.core.constant$keyword$134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,381,cljs.core.constant$keyword$136,46,cljs.core.constant$keyword$137,104,cljs.core.constant$keyword$138,20], null)], null)], null)], null);
mario.hud_explorer.get_ctx = (function get_ctx(owner){return om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"canvas").getContext("2d");
});
mario.hud_explorer.highlight = (function highlight(owner,rects){var ctx = mario.hud_explorer.get_ctx(owner);var canvas = ctx.canvas;var cw = canvas.width;var ch = canvas.height;ctx.fillStyle = "rgb(255, 255, 255";
ctx.clearRect(0,0,cw,ch);
ctx.globalAlpha = 0.5;
ctx.fillRect(0,0,cw,ch);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ctx,canvas,cw,ch){
return (function (p1__10136_SHARP_){return ctx.clearRect(cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(p1__10136_SHARP_),cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$1(p1__10136_SHARP_),cljs.core.constant$keyword$137.cljs$core$IFn$_invoke$arity$1(p1__10136_SHARP_),cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(p1__10136_SHARP_));
});})(ctx,canvas,cw,ch))
,rects));
});
mario.hud_explorer.clear_highlight = (function clear_highlight(e,owner){var target = e.target;var container = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"container");if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,container))
{return mario.hud_explorer.highlight(owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,0,cljs.core.constant$keyword$136,0,cljs.core.constant$keyword$137,512,cljs.core.constant$keyword$138,94], null)], null));
} else
{return null;
}
});
mario.hud_explorer.build_item = (function build_item(p__10137,owner){var map__10139 = p__10137;var map__10139__$1 = ((cljs.core.seq_QMARK_(map__10139))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10139):map__10139);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10139__$1,cljs.core.constant$keyword$116);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10139__$1,cljs.core.constant$keyword$51);var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10139__$1,cljs.core.constant$keyword$134);var over_fn = ((function (map__10139,map__10139__$1,description,name,rect){
return (function (){return mario.hud_explorer.highlight(owner,rect);
});})(map__10139,map__10139__$1,description,name,rect))
;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$139,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,over_fn,cljs.core.constant$keyword$140,over_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$142,description], null)], null);
});
mario.hud_explorer.build_items = (function build_items(items,owner){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10140_SHARP_){return mario.hud_explorer.build_item(p1__10140_SHARP_,owner);
}),items);
});
mario.hud_explorer.cmp = (function cmp(app,owner){if(typeof mario.hud_explorer.t10166 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.hud_explorer.t10166 = (function (owner,app,cmp,meta10167){
this.owner = owner;
this.app = app;
this.cmp = cmp;
this.meta10167 = meta10167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.hud_explorer.t10166.cljs$lang$type = true;
mario.hud_explorer.t10166.cljs$lang$ctorStr = "mario.hud-explorer/t10166";
mario.hud_explorer.t10166.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.hud-explorer/t10166");
});
mario.hud_explorer.t10166.prototype.om$core$IRenderState$ = true;
mario.hud_explorer.t10166.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10169){var self__ = this;
var map__10170 = p__10169;var map__10170__$1 = ((cljs.core.seq_QMARK_(map__10170))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10170):map__10170);var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10170__$1,cljs.core.constant$keyword$118);var ___$1 = this;var click_fn = ((function (___$1,map__10170,map__10170__$1,open){
return (function (){return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$118,cljs.core.not);
});})(___$1,map__10170,map__10170__$1,open))
;var attrs10171 = (cljs.core.truth_(open)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$94,"container",cljs.core.constant$keyword$107,((function (click_fn,___$1,map__10170,map__10170__$1,open){
return (function (p1__10141_SHARP_){return mario.hud_explorer.clear_highlight(p1__10141_SHARP_,self__.owner);
});})(click_fn,___$1,map__10170,map__10170__$1,open))
], null):new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$31,"clickable",cljs.core.constant$keyword$104,click_fn,cljs.core.constant$keyword$143,click_fn], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs10171))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$31,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hud-explorer"], null)], null),attrs10171], 0))):{"className": "hud-explorer"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10171))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "hud-explorer-img-container"},React.DOM.img({"src": "img/hud.png"}),React.DOM.canvas({"width": 512, "height": 94, "ref": "canvas"})),(cljs.core.truth_(open)?(function (){var attrs10176 = mario.hud_explorer.build_items(mario.hud_explorer.hud_items,self__.owner);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs10176))?sablono.interpreter.attributes(attrs10176):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10176))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10176)], null))));
})():React.DOM.div({"className": "hud-explorer-closed"},"click to explore the heads up display")),(cljs.core.truth_(open)?React.DOM.div({"className": "clickable hud-explorer-toggle-tray", "onClick": click_fn, "onTouchEnd": click_fn},React.DOM.i({"className": "fa fa-caret-up"})):React.DOM.div({"className": "clickable hud-explorer-toggle-tray"},React.DOM.i({"className": "fa fa-caret-down"})))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10171),React.DOM.div({"className": "hud-explorer-img-container"},React.DOM.img({"src": "img/hud.png"}),React.DOM.canvas({"width": 512, "height": 94, "ref": "canvas"})),(cljs.core.truth_(open)?(function (){var attrs10183 = mario.hud_explorer.build_items(mario.hud_explorer.hud_items,self__.owner);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs10183))?sablono.interpreter.attributes(attrs10183):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10183))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10183)], null))));
})():React.DOM.div({"className": "hud-explorer-closed"},"click to explore the heads up display")),(cljs.core.truth_(open)?React.DOM.div({"className": "clickable hud-explorer-toggle-tray", "onClick": click_fn, "onTouchEnd": click_fn},React.DOM.i({"className": "fa fa-caret-up"})):React.DOM.div({"className": "clickable hud-explorer-toggle-tray"},React.DOM.i({"className": "fa fa-caret-down"})))], null))));
});
mario.hud_explorer.t10166.prototype.om$core$IInitState$ = true;
mario.hud_explorer.t10166.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$118,false,cljs.core.constant$keyword$111,0], null);
});
mario.hud_explorer.t10166.prototype.om$core$IDisplayName$ = true;
mario.hud_explorer.t10166.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "hud-explorer::cmp";
});
mario.hud_explorer.t10166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10168){var self__ = this;
var _10168__$1 = this;return self__.meta10167;
});
mario.hud_explorer.t10166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10168,meta10167__$1){var self__ = this;
var _10168__$1 = this;return (new mario.hud_explorer.t10166(self__.owner,self__.app,self__.cmp,meta10167__$1));
});
mario.hud_explorer.__GT_t10166 = (function __GT_t10166(owner__$1,app__$1,cmp__$1,meta10167){return (new mario.hud_explorer.t10166(owner__$1,app__$1,cmp__$1,meta10167));
});
}
return (new mario.hud_explorer.t10166(owner,app,cmp,null));
});
