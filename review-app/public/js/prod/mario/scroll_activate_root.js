// Compiled by ClojureScript 0.0-2202
goog.provide('mario.scroll_activate_root');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events.EventType');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
mario.scroll_activate_root.listen = (function listen(el,type){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();goog.events.listen(el,type,((function (out){
return (function (p1__10233_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__10233_SHARP_);
});})(out))
);
return out;
});
mario.scroll_activate_root.should_activate = (function should_activate(node){var top = node.getBoundingClientRect().top;return ((top > -117)) && ((top < 200));
});
mario.scroll_activate_root.get_root = (function get_root(cmp){return (function (app,owner){if(typeof mario.scroll_activate_root.t10267 !== 'undefined')
{} else
{
/**
* @constructor
*/
mario.scroll_activate_root.t10267 = (function (owner,app,cmp,get_root,meta10268){
this.owner = owner;
this.app = app;
this.cmp = cmp;
this.get_root = get_root;
this.meta10268 = meta10268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mario.scroll_activate_root.t10267.cljs$lang$type = true;
mario.scroll_activate_root.t10267.cljs$lang$ctorStr = "mario.scroll-activate-root/t10267";
mario.scroll_activate_root.t10267.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"mario.scroll-activate-root/t10267");
});
mario.scroll_activate_root.t10267.prototype.om$core$IRender$ = true;
mario.scroll_activate_root.t10267.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "root"},sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(self__.cmp,self__.app)));
});
mario.scroll_activate_root.t10267.prototype.om$core$IWillUpdate$ = true;
mario.scroll_activate_root.t10267.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,p__10270,___$1){var self__ = this;
var map__10271 = p__10270;var map__10271__$1 = ((cljs.core.seq_QMARK_(map__10271))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10271):map__10271);var next_props = map__10271__$1;var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10271__$1,cljs.core.constant$keyword$101);var ___$2 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"root");if(cljs.core.truth_(active))
{return null;
} else
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$101,mario.scroll_activate_root.should_activate(node));
}
});
mario.scroll_activate_root.t10267.prototype.om$core$IWillMount$ = true;
mario.scroll_activate_root.t10267.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_chan = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (){return window.pageYOffset;
});})(___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mario.scroll_activate_root.listen(window,goog.events.EventType.SCROLL)], null));var c__6772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__6772__auto__,mouse_chan,___$1){
return (function (){var f__6773__auto__ = (function (){var switch__6708__auto__ = ((function (c__6772__auto__,mouse_chan,___$1){
return (function (state_10284){var state_val_10285 = (state_10284[1]);if((state_val_10285 === 7))
{var inst_10275 = (state_10284[2]);var inst_10276 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$171,inst_10275);var state_10284__$1 = (function (){var statearr_10286 = state_10284;(statearr_10286[7] = inst_10276);
return statearr_10286;
})();var statearr_10287_10300 = state_10284__$1;(statearr_10287_10300[2] = null);
(statearr_10287_10300[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_10285 === 6))
{var inst_10280 = (state_10284[2]);var state_10284__$1 = state_10284;var statearr_10288_10301 = state_10284__$1;(statearr_10288_10301[2] = inst_10280);
(statearr_10288_10301[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_10285 === 5))
{var state_10284__$1 = state_10284;var statearr_10289_10302 = state_10284__$1;(statearr_10289_10302[2] = null);
(statearr_10289_10302[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_10285 === 4))
{var state_10284__$1 = state_10284;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10284__$1,7,mouse_chan);
} else
{if((state_val_10285 === 3))
{var inst_10282 = (state_10284[2]);var state_10284__$1 = state_10284;return cljs.core.async.impl.ioc_helpers.return_chan(state_10284__$1,inst_10282);
} else
{if((state_val_10285 === 2))
{var state_10284__$1 = state_10284;if(true)
{var statearr_10290_10303 = state_10284__$1;(statearr_10290_10303[1] = 4);
} else
{var statearr_10291_10304 = state_10284__$1;(statearr_10291_10304[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_10285 === 1))
{var state_10284__$1 = state_10284;var statearr_10292_10305 = state_10284__$1;(statearr_10292_10305[2] = null);
(statearr_10292_10305[1] = 2);
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
});})(c__6772__auto__,mouse_chan,___$1))
;return ((function (switch__6708__auto__,c__6772__auto__,mouse_chan,___$1){
return (function() {
var state_machine__6709__auto__ = null;
var state_machine__6709__auto____0 = (function (){var statearr_10296 = [null,null,null,null,null,null,null,null];(statearr_10296[0] = state_machine__6709__auto__);
(statearr_10296[1] = 1);
return statearr_10296;
});
var state_machine__6709__auto____1 = (function (state_10284){while(true){
var ret_value__6710__auto__ = (function (){try{while(true){
var result__6711__auto__ = switch__6708__auto__(state_10284);if(cljs.core.keyword_identical_QMARK_(result__6711__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__6711__auto__;
}
break;
}
}catch (e10297){if((e10297 instanceof Object))
{var ex__6712__auto__ = e10297;var statearr_10298_10306 = state_10284;(statearr_10298_10306[5] = ex__6712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10284);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e10297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6710__auto__,cljs.core.constant$keyword$17))
{{
var G__10307 = state_10284;
state_10284 = G__10307;
continue;
}
} else
{return ret_value__6710__auto__;
}
break;
}
});
state_machine__6709__auto__ = function(state_10284){
switch(arguments.length){
case 0:
return state_machine__6709__auto____0.call(this);
case 1:
return state_machine__6709__auto____1.call(this,state_10284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6709__auto____0;
state_machine__6709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6709__auto____1;
return state_machine__6709__auto__;
})()
;})(switch__6708__auto__,c__6772__auto__,mouse_chan,___$1))
})();var state__6774__auto__ = (function (){var statearr_10299 = (f__6773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6773__auto__.cljs$core$IFn$_invoke$arity$0() : f__6773__auto__.call(null));(statearr_10299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6772__auto__);
return statearr_10299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6774__auto__);
});})(c__6772__auto__,mouse_chan,___$1))
);
return c__6772__auto__;
});
mario.scroll_activate_root.t10267.prototype.om$core$IDisplayName$ = true;
mario.scroll_activate_root.t10267.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "scroll-activate-root";
});
mario.scroll_activate_root.t10267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10269){var self__ = this;
var _10269__$1 = this;return self__.meta10268;
});
mario.scroll_activate_root.t10267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10269,meta10268__$1){var self__ = this;
var _10269__$1 = this;return (new mario.scroll_activate_root.t10267(self__.owner,self__.app,self__.cmp,self__.get_root,meta10268__$1));
});
mario.scroll_activate_root.__GT_t10267 = (function __GT_t10267(owner__$1,app__$1,cmp__$1,get_root__$1,meta10268){return (new mario.scroll_activate_root.t10267(owner__$1,app__$1,cmp__$1,get_root__$1,meta10268));
});
}
return (new mario.scroll_activate_root.t10267(owner,app,cmp,get_root,null));
});
});
