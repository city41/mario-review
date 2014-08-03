// Compiled by ClojureScript 0.0-2202
goog.provide('mario.gif_warning');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.dom.classes');
goog.require('goog.dom.classes');
mario.gif_warning.user_should_see_warning = (function user_should_see_warning(){return window.mustUseGifs();
});
mario.gif_warning.reveal = (function reveal(owner){var target = document.getElementById("main-content");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$133,false);
return goog.dom.classes.add(target,"fade-in");
});
mario.gif_warning.get_display = (function get_display(show_warning){if(cljs.core.truth_(show_warning))
{return "";
} else
{return "none";
}
});
mario.gif_warning.cmp = (function cmp(app,owner){if(typeof mario.gif_warning.t10129 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.gif_warning.t10129 = (function (owner,app,cmp,meta10130){
this.owner = owner;
this.app = app;
this.cmp = cmp;
this.meta10130 = meta10130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.gif_warning.t10129.cljs$lang$type = true;
mario.gif_warning.t10129.cljs$lang$ctorStr = "mario.gif-warning/t10129";
mario.gif_warning.t10129.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.gif-warning/t10129");
});
mario.gif_warning.t10129.prototype.om$core$IRenderState$ = true;
mario.gif_warning.t10129.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10132){var self__ = this;
var map__10133 = p__10132;var map__10133__$1 = ((cljs.core.seq_QMARK_(map__10133))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10133):map__10133);var show_warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10133__$1,cljs.core.constant$keyword$133);var ___$1 = this;return React.DOM.div({"className": "gif-warning", "style": cljs.core.clj__GT_js({"display": mario.gif_warning.get_display(show_warning)})},React.DOM.div({"className": "gif-warning-text"},React.DOM.h2(null,"Hey!!"),React.DOM.p(null,"This review uses a ton of bandwidth on phones and tablets. It has 53 animated gifs!"),React.DOM.p(null,"It's been known to crash some mobile browsers too ..."),React.DOM.p(null,"You're better off using a desktop machine if you can")),React.DOM.div({"className": "gif-warning-button-container"},React.DOM.button({"onClick": ((function (___$1,map__10133,map__10133__$1,show_warning){
return (function (){return mario.gif_warning.reveal(self__.owner);
});})(___$1,map__10133,map__10133__$1,show_warning))
},"I'm Going In!")));
});
mario.gif_warning.t10129.prototype.om$core$IDidMount$ = true;
mario.gif_warning.t10129.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(mario.gif_warning.user_should_see_warning()))
{return null;
} else
{return mario.gif_warning.reveal(self__.owner);
}
});
mario.gif_warning.t10129.prototype.om$core$IInitState$ = true;
mario.gif_warning.t10129.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$133,mario.gif_warning.user_should_see_warning()], null);
});
mario.gif_warning.t10129.prototype.om$core$IDisplayName$ = true;
mario.gif_warning.t10129.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "gif-warning::cmp";
});
mario.gif_warning.t10129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10131){var self__ = this;
var _10131__$1 = this;return self__.meta10130;
});
mario.gif_warning.t10129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10131,meta10130__$1){var self__ = this;
var _10131__$1 = this;return (new mario.gif_warning.t10129(self__.owner,self__.app,self__.cmp,meta10130__$1));
});
mario.gif_warning.__GT_t10129 = (function __GT_t10129(owner__$1,app__$1,cmp__$1,meta10130){return (new mario.gif_warning.t10129(owner__$1,app__$1,cmp__$1,meta10130));
});
}
return (new mario.gif_warning.t10129(owner,app,cmp,null));
});
