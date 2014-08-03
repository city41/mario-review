// Compiled by ClojureScript 0.0-2202
goog.provide('mario.music_player');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
mario.music_player.build_song_entry = (function build_song_entry(owner,index,active_index,p__10211){var map__10213 = p__10211;var map__10213__$1 = ((cljs.core.seq_QMARK_(map__10213))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10213):map__10213);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10213__$1,cljs.core.constant$keyword$51);var thumb_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10213__$1,cljs.core.constant$keyword$146);var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,active_index);var click_fn = ((function (active,map__10213,map__10213__$1,name,thumb_src){
return (function (){var a = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"audio");var first_play = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$162);if(cljs.core.truth_(first_play))
{a.play();
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$162,false);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$111,((active)?null:index));
});})(active,map__10213,map__10213__$1,name,thumb_src))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$163,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$31,[cljs.core.str("clickable"),cljs.core.str(((active)?" active-song":null))].join(''),cljs.core.constant$keyword$104,((function (active,click_fn,map__10213,map__10213__$1,name,thumb_src){
return (function (){if(cljs.core.truth_(window.mustUseGifs()))
{return null;
} else
{return click_fn();
}
});})(active,click_fn,map__10213,map__10213__$1,name,thumb_src))
,cljs.core.constant$keyword$143,click_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,thumb_src,cljs.core.constant$keyword$164,name], null)], null)], null);
});
mario.music_player.build_controls = (function build_controls(owner,songs,active_index,name,minimized){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$31,[cljs.core.str(""),cljs.core.str((cljs.core.truth_(minimized)?"clickable":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,(function (){return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$167,cljs.core.not);
})], null),(cljs.core.truth_(minimized)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122], null))], null),(cljs.core.truth_(minimized)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,(cljs.core.truth_(active_index)?name:"music player, click to open")], null):cljs.core.map_indexed((function (p1__10214_SHARP_,p2__10215_SHARP_){return mario.music_player.build_song_entry(owner,p1__10214_SHARP_,active_index,p2__10215_SHARP_);
}),songs)),(cljs.core.truth_(minimized)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$169,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$170,{"marginLeft": "23px"}], null),(function (){var or__3481__auto__ = name;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return "Click icon to play, click again to stop";
}
})()], null))], null);
});
mario.music_player.set_next_song_active = (function set_next_song_active(owner,i,total){var next = cljs.core.mod((i + 1),total);return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$111,next);
});
mario.music_player.cmp = (function cmp(p__10216,owner){var map__10225 = p__10216;var map__10225__$1 = ((cljs.core.seq_QMARK_(map__10225))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10225):map__10225);var app = map__10225__$1;var songs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10225__$1,cljs.core.constant$keyword$160);if(typeof mario.music_player.t10226 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.music_player.t10226 = (function (songs,app,map__10225,owner,p__10216,cmp,meta10227){
this.songs = songs;
this.app = app;
this.map__10225 = map__10225;
this.owner = owner;
this.p__10216 = p__10216;
this.cmp = cmp;
this.meta10227 = meta10227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.music_player.t10226.cljs$lang$type = true;
mario.music_player.t10226.cljs$lang$ctorStr = "mario.music-player/t10226";
mario.music_player.t10226.cljs$lang$ctorPrWriter = ((function (map__10225,map__10225__$1,app,songs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.music-player/t10226");
});})(map__10225,map__10225__$1,app,songs))
;
mario.music_player.t10226.prototype.om$core$IRenderState$ = true;
mario.music_player.t10226.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10225,map__10225__$1,app,songs){
return (function (_,p__10229){var self__ = this;
var map__10230 = p__10229;var map__10230__$1 = ((cljs.core.seq_QMARK_(map__10230))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10230):map__10230);var minimized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10230__$1,cljs.core.constant$keyword$167);var active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10230__$1,cljs.core.constant$keyword$111);var ___$1 = this;var active_song = (cljs.core.truth_(active_index)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.songs,active_index):null);return React.DOM.div({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["music-player",[cljs.core.str(""),cljs.core.str((cljs.core.truth_(minimized)?" clickable":null))].join('')], null)), "onClick": ((function (active_song,___$1,map__10230,map__10230__$1,minimized,active_index,map__10225,map__10225__$1,app,songs){
return (function (){if(cljs.core.truth_(minimized))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$167,false);
} else
{return null;
}
});})(active_song,___$1,map__10230,map__10230__$1,minimized,active_index,map__10225,map__10225__$1,app,songs))
},React.DOM.audio({"ref": "audio", "src": cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(active_song)}),sablono.interpreter.interpret(mario.music_player.build_controls(self__.owner,self__.songs,active_index,(cljs.core.truth_(active_song)?cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(active_song):null),minimized)));
});})(map__10225,map__10225__$1,app,songs))
;
mario.music_player.t10226.prototype.om$core$IDidMount$ = true;
mario.music_player.t10226.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__10225,map__10225__$1,app,songs){
return (function (_){var self__ = this;
var ___$1 = this;var a = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"audio");return a.addEventListener("ended",((function (a,___$1,map__10225,map__10225__$1,app,songs){
return (function (){var active_index = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$111);var total = cljs.core.count(cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.app)));a.currentTime = 0;
return mario.music_player.set_next_song_active(self__.owner,active_index,total);
});})(a,___$1,map__10225,map__10225__$1,app,songs))
);
});})(map__10225,map__10225__$1,app,songs))
;
mario.music_player.t10226.prototype.om$core$IWillUpdate$ = true;
mario.music_player.t10226.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__10225,map__10225__$1,app,songs){
return (function (_,next_props,p__10231){var self__ = this;
var map__10232 = p__10231;var map__10232__$1 = ((cljs.core.seq_QMARK_(map__10232))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10232):map__10232);var active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10232__$1,cljs.core.constant$keyword$111);var ___$1 = this;var a = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"audio");var first_play = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$162);if(cljs.core.truth_((function (){var and__3469__auto__ = active_index;if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.not(first_play);
} else
{return and__3469__auto__;
}
})()))
{return a.play();
} else
{return a.pause();
}
});})(map__10225,map__10225__$1,app,songs))
;
mario.music_player.t10226.prototype.om$core$IInitState$ = true;
mario.music_player.t10226.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10225,map__10225__$1,app,songs){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$167,true,cljs.core.constant$keyword$111,null,cljs.core.constant$keyword$162,true], null);
});})(map__10225,map__10225__$1,app,songs))
;
mario.music_player.t10226.prototype.om$core$IDisplayName$ = true;
mario.music_player.t10226.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__10225,map__10225__$1,app,songs){
return (function (_){var self__ = this;
var ___$1 = this;return "music-player::cmp";
});})(map__10225,map__10225__$1,app,songs))
;
mario.music_player.t10226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10225,map__10225__$1,app,songs){
return (function (_10228){var self__ = this;
var _10228__$1 = this;return self__.meta10227;
});})(map__10225,map__10225__$1,app,songs))
;
mario.music_player.t10226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10225,map__10225__$1,app,songs){
return (function (_10228,meta10227__$1){var self__ = this;
var _10228__$1 = this;return (new mario.music_player.t10226(self__.songs,self__.app,self__.map__10225,self__.owner,self__.p__10216,self__.cmp,meta10227__$1));
});})(map__10225,map__10225__$1,app,songs))
;
mario.music_player.__GT_t10226 = ((function (map__10225,map__10225__$1,app,songs){
return (function __GT_t10226(songs__$1,app__$1,map__10225__$2,owner__$1,p__10216__$1,cmp__$1,meta10227){return (new mario.music_player.t10226(songs__$1,app__$1,map__10225__$2,owner__$1,p__10216__$1,cmp__$1,meta10227));
});})(map__10225,map__10225__$1,app,songs))
;
}
return (new mario.music_player.t10226(songs,app,map__10225__$1,owner,p__10216,cmp,null));
});
